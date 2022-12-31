import NormalizeWheel from 'normalize-wheel'

import Canvas from 'components/Canvas'
import Preloader from './components/Preloader'
import Navigation from './components/Navigation'

import Home from './pages/Home'
import Detail from './pages/Detail'
import About from './pages/About'

class App {
  constructor(){
    this.createContent()

    this.createCanvas()

    this.createPreloader()
    this.createNavigation()

    this.createPages()

    this.addEventListeners()

    this.onResize()

    this.update()
  }

  createContent(){
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createCanvas(){
    this.canvas = new Canvas({ template: this.template })
  }

  createPreloader(){
    this.preloader = new Preloader({
      canvas: this.canvas
    })
    this.preloader.once('completed', this.onPreloaded.bind(this))
  }

  createNavigation(){
    this.navigation = new Navigation({ template: this.template })
  }

  createPages(){
    this.pages = {
      home: new Home(),
      detail: new Detail(),
      about: new About()
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  onPreloaded(){
    this.onResize()

    this.canvas.onPreloaded()

    this.page.show()
  }

  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false,
    });
  }

  async onChange({ url, push = true }){
    this.canvas.onChangeStart(this.template, url)

    await this.page.hide()

    const res = await window.fetch(url)

    if(res.status === 200) {
      const html = await res.text()
      const div = document.createElement('div')

      if (push) {
        window.history.pushState({}, '', url);
      }

      div.innerHTML = html

      const divContent = div.querySelector('.content')

      this.template = divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.canvas.onChangeEnd(this.template)

      this.page = this.pages[this.template]
      this.page.create()

      this.onResize()

      this.page.show()
    } else {
      console.error(`response status: ${res.status}`)
    }
  }

  onResize(){
    if(this.page && this.page.onResize){
      this.page.onResize()
    }

    window.requestAnimationFrame(_ => {
      if(this.canvas && this.canvas.onResize){
        this.canvas.onResize()
      }
    })
  }

  onWheel(event){
    const normalizedWheel = NormalizeWheel(event)

    if(this.canvas && this.canvas.onWheel){
      this.canvas.onWheel(normalizedWheel)
    }

    if(this.page && this.page.onWheel){
      this.page.onWheel(normalizedWheel)
    }
  }

  update(){
    if(this.page && this.page.update){
      this.page.update()
    }

    if(this.canvas && this.canvas.update){
      this.canvas.update(this.page.scroll)
    }

    window.requestAnimationFrame(this.update.bind(this))
  }

  addEventListeners(){
    window.addEventListener('mousewheel', this.onWheel.bind(this))
    window.addEventListener('popstate', this.onPopState.bind(this))
    window.addEventListener('resize', this.onResize.bind(this))
  }
}

new App()
