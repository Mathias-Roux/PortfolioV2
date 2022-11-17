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

const endpoint = prismic.getEndpoint("personal-portfoliov2");
const client = prismic.createClient(endpoint, { fetch });


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride())
app.use(errorHandler())
app.use(express.static(path.join(__dirname, 'public')))

const handleLinkResolver = (doc) => {
  // if (doc.type === 'project') {
  //   return `/detail/${doc.slug}`
  // }

  if (doc.type === 'home') {
    return '/home'
  }
  // if (doc.type === 'about') {
  //   return '/about'
  // }

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

  next()
})


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const handleRequest = async () => {
  const meta = await client.getSingle('meta')
  let assets = []
  const navigation = await client.getSingle('navigation')
  const preloader = await client.getSingle('preloader')
  // const about = await client.getSingle('about')
  const home = await client.getAllByType('item', {
    fetchLinks: 'product.image'
  })

  // console.log(home[0])

  // home.forEach(item => {
  //   console.log(item.data.image)
  // })


  // about.data.gallery.forEach(item => {
  //   assets.push(item.image.url)
  // })

  // about.data.body.forEach(section => {
  //   if (section.slice_type === 'gallery') {
  //     section.items.forEach(item => {
  //       assets.push(item.image.url)
  //     })
  //   }
  // })

  home.forEach(item => {
    assets.push(item.data.image.url)
  })


  return {
    meta,
    assets,
    navigation,
    preloader,
    home,
    // about
  }
}

app.get('/', async (req, res) => {
  const defaults = await handleRequest()

  res.render('pages/home', {
    ...defaults
  })
})

// app.get('/detail/:uid', async (req, res) => {
//   const defaults = await handleRequest()

//   const product = await client.getByUID('product', req.params.uid, {
//     fetchLinks: 'collection.title'
//   })

//   res.render('pages/detail', {
//     ...defaults,
//     product
//   })
// })

// app.get('/about', async (req, res) => {
//   const defaults = await handleRequest()

//   res.render('pages/about', {
//     ...defaults
//   })
// })


app.listen(port, () => {
  console.log(`server at http://localhost:${port}`)
})
