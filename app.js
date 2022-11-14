require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const errorHandler = require('errorhandler')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
const path = require('path')
const port = 3000

const prismic = require('@prismicio/client')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const prismicH =  require('@prismicio/helpers')

const endpoint = prismic.getEndpoint("floema-rouxmathias");
const client = prismic.createClient(endpoint, { fetch });


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())
app.use(express.static(path.join(__dirname, 'public')))

const handleLinkResolver = (doc) => {
  if (doc.type === 'product') {
    return `/detail/${doc.slug}`
  }
  if (doc.type === 'collections') {
    return '/collections'
  }
  if (doc.type === 'about') {
    return '/about'
  }

  return null
}

const prismicAutoPreviewsMiddleware = (req, _res, next) => {
  client.enableAutoPreviewsFromReq(req)
  next()
}

app.use((req, res, next) => {
  res.locals.ctx = { prismicH }
  prismicAutoPreviewsMiddleware
  res.locals.Link = handleLinkResolver
  res.locals.Numbers = index => {
    return index == 0 ? 'One' : index == 1 ? 'Two' : index == 2 ? 'Three' : index == 3 ? 'Four' : ''
  }

  next()
})


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const handleRequest = async () => {
  const meta = await client.getSingle('meta')
  let assets = []
  const navigation = await client.getSingle('navigation')
  const preloader = await client.getSingle('preloader')
  const home = await client.getSingle('home')
  const about = await client.getSingle('about')
  const collections = await client.getAllByType('collection', {
    fetchLinks: 'product.image'
  })

  home.data.gallery.forEach(item => {
    assets.push(item.image.url)
  })

  about.data.gallery.forEach(item => {
    assets.push(item.image.url)
  })

  about.data.body.forEach(section => {
    if (section.slice_type === 'gallery') {
      section.items.forEach(item => {
        assets.push(item.image.url)
      })
    }
  })

  collections.forEach(collection => {
    collection.data.products.forEach(item => {
      assets.push(item.products_product.data.image.url)
    })
  })


  return {
    meta,
    assets,
    navigation,
    preloader,
    home,
    about,
    collections
  }
}

app.get('/', async (req, res) => {
  const defaults = await handleRequest()

  res.render('pages/home', {
    ...defaults
  })
})

app.get('/about', async (req, res) => {
  const defaults = await handleRequest()

  res.render('pages/about', {
    ...defaults
  })
})

app.get('/collections', async (req, res) => {
  const defaults = await handleRequest()

  res.render('pages/collections', {
    ...defaults
  })
})

app.get('/detail/:uid', async (req, res) => {
  const defaults = await handleRequest()

  const product = await client.getByUID('product', req.params.uid, {
    fetchLinks: 'collection.title'
  })

  res.render('pages/detail', {
    ...defaults,
    product
  })
})


app.listen(port, () => {
  console.log(`server at http://localhost:${port}`)
})
