import { Camera, Renderer, Transform } from 'ogl'

import Detail from './Detail'

export default class Canvas {
  constructor({ template }) {
    this.template = template

    this.y = {
      start: 0,
      end: 0
    }

    this.createRenderer()
    this.createScene()
    this.createCamera()

    this.onResize()
  }

  createRenderer() {
    this.renderer = new Renderer({
      alpha: true,
      antialias: true,
      dpr: 1.5
    })

    this.gl = this.renderer.gl

    document.body.appendChild(this.gl.canvas)
  }

  createCamera() {
    this.camera = new Camera(this.gl)

    this.camera.position.z = 5
  }

  createScene() {
    this.scene = new Transform()
  }


  /**
   * DETAIL
   */
   createDetail() {
    this.detail = new Detail({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes
    })
  }

  destroyDetail(){
    if (!this.detail) return
    this.detail.destroy()
    this.detail = null
  }


  onPreloaded(){
    this.onChangeEnd(this.template)
  }

  onChangeStart(url){
    if(this.detail){
      this.detail.hide()
    }
  }

  onChangeEnd(template){
    if (template === 'detail') {
      this.createDetail()
    } else if (this.detail){
      this.destroyDetail()
    }

    this.template = template
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight)

    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight
    })

    const fov = this.camera.fov * (Math.PI / 180)
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z
    const width = height * this.camera.aspect

    this.sizes = {
      height,
      width
    }

    const values = {
      sizes: this.sizes
    }

    if(this.detail){
      this.detail.onResize(values)
    }
  }

  onTouchDown(e) {
    this.isDown = true

    this.y.start = e.touches ? e.touches[0].clientY : e.clientY

    const values = {
      y: this.y,
    }

    if (this.detail) {
      this.detail.onTouchDown(values)
    }
  }

  onTouchMove(e) {
    if (!this.isDown) return

    const y = e.touches ? e.touches[0].clientY : e.clientY

    this.y.end = y

    const values = {
      y: this.y,
    }

    if (this.detail) {
      this.detail.onTouchMove(values)
    }
  }

  onTouchUp(e) {
    this.isDown = false

    const y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY

    this.y.end = y

    const values = {
      y: this.y,
    }

    if (this.detail) {
      this.detail.onTouchUp(values)
    }
  }

  onWheel(event){
    if(this.detail){
      this.detail.onWheel(event)
    }
  }

  update(scroll) {
    if (this.detail) {
      this.detail.update(scroll)
    }

    this.renderer.render({
      camera: this.camera,
      scene: this.scene,
    })
  }
}
