import NormalizeWheel from 'normalize-wheel'
import each from 'lodash/each'

import Detection from './classes/Detection'

import Canvas from './components/Canvas'

import Preloader from './components/Preloader'
import Navigation from './components/Navigation'
import Grid from './components/Grid'

import Home from './pages/Home'
import Detail from './pages/Detail'
import About from './pages/About'

class App {
  constructor(){
    this.createContent()

    this.DetectDevice()
    
    this.createCanvas()
    
    this.createPreloader()
    this.createNavigation()
    this.createGrid()

    this.createPages()

    this.addEventListeners()
    this.addLinkListeners()

    this.onResize()

    this.update()
  }

  createContent(){
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  DetectDevice(){
    //Boolean
    this.isMobile = Detection.isMobile()
  }

  createCanvas(){
    if(!this.isMobile){
      this.canvas = new Canvas({ template: this.template })
    }
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

  createGrid(){
    this.grid = new Grid()
  }

  createPages(){
    this.pages = {
      home: new Home(this.isMobile),
      detail: new Detail(this.isMobile),
      about: new About(this.isMobile)
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  onPreloaded(){
    this.onResize()

    if (this.canvas) {
      this.canvas.onPreloaded()
    }

    // true = on preloaded
    this.page.show(true)
  }

  onPopState() {
    this.onChange({
      url: window.location.pathname,
      push: false,
    })
  }

  async onChange({ url, push = true }){
    this.page.hide()
    
    if (this.canvas) {
      this.canvas.onChangeStart()
    }

    const res = await window.fetch(url)

    if(res.status === 200) {
      const html = await res.text()
      const newDiv = document.createElement('div')

      if (push) {
        window.history.pushState({}, '', url)
      }

      newDiv.innerHTML = html

      const divContent = newDiv.querySelector('.content')
      const innerDivContent = divContent.querySelector('div')

      this.template = divContent.getAttribute('data-template')

      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.append(innerDivContent)

      this.page = this.pages[this.template]
      this.page.create()
      
      this.onResize()

      setTimeout(() => {
        if (this.canvas) {
          this.canvas.onChangeEnd(this.template)
        }  
      }, "700")

      this.page.show()

      this.addLinkListeners()
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

  onTouchDown (event) {
    if (this.canvas && this.canvas.onTouchDown) {
      this.canvas.onTouchDown(event)
    }

    if (this.page && this.page.onTouchDown) {
      this.page.onTouchDown(event)
    }
  }

  onMouseMove(event){
    if (this.canvas && this.canvas.onMouseMove) {
      this.canvas.onMouseMove(event)
    }
  }

  onTouchMove (event) {
    if (this.canvas && this.canvas.onTouchMove) {
      this.canvas.onTouchMove(event)
    }

    if (this.page && this.page.onTouchDown) {
      this.page.onTouchMove(event)
    }
  }

  onTouchUp (event) {
    if (this.canvas && this.canvas.onTouchUp) {
      this.canvas.onTouchUp(event)
    }

    if (this.page && this.page.onTouchDown) {
      this.page.onTouchUp(event)
    }
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

  onKeyDown(){
    this.grid.onChange()
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

    window.addEventListener('mousedown', this.onTouchDown.bind(this))
    window.addEventListener('mousemove', this.onTouchMove.bind(this))
    window.addEventListener('mousemove', this.onMouseMove.bind(this))
    window.addEventListener('mouseup', this.onTouchUp.bind(this))

    window.addEventListener('touchstart', this.onTouchDown.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))
    window.addEventListener('touchend', this.onTouchUp.bind(this))

    window.addEventListener('keydown', function(e){
      if(e.shiftKey && e.key === 'G'){
        this.onKeyDown()
      }
    }.bind(this))

    window.addEventListener('resize', this.onResize.bind(this))
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a')
    each(links, (link) => {
      
      const isExternal = link.href.indexOf(window.location.origin) === -1

      if (!isExternal){
        link.onclick = (event) => {
          event.preventDefault()
  
          const { href } = link
          this.onChange({ url: href })
        }
      }
    })
  }
}

new App()
