import { Camera, Renderer, Transform } from 'ogl';

// import Home from './Home'
import Detail from './Detail'

export default class Canvas {
  constructor({ template }) {
    this.template = template

    this.y = {
      start: 0,
      distance: 0,
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
      antialias: true
    });

    this.gl = this.renderer.gl;

    document.body.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);

    this.camera.position.z = 50;
  }

  createScene() {
    this.scene = new Transform()
  }

  /**
   * HOME
   */
  // createHome() {
  //   this.home = new Home({
  //     gl: this.gl,
  //     scene: this.scene,
  //     sizes: this.sizes
  //   })
  // }

  // destroyHome(){
  //   if (!this.home) return
  //   this.home.destroy()
  //   this.home = null
  // }

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
    // if(this.home){
    //   this.home.hide()
    // }

    if(this.detail){
      this.detail.hide()
    }

  }

  onChangeEnd(template){
    // if (template === 'home') {
    //   this.createHome()
    // } else if (this.home){
    //   this.destroyHome()
    // }

    if (template === 'detail') {
      this.createDetail()
    } else if (this.detail){
      this.destroyDetail()
    }

    this.template = template
  }

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight,
    });

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

    // if(this.home){
    //   this.home.onResize(values)
    // }

    if(this.detail){
      this.detail.onResize(values)
    }
  }

  onTouchDown(event){}

  onTouchMove(event){}

  onTouchUp(event){}

  onWheel(event){
    // if(this.home){
    //   this.home.onWheel(event)
    // }

    if(this.detail){
      this.detail.onWheel(event)
    }
  }

  update(scroll) {
    // if(this.home){
    //   this.home.update(scroll)
    // }

    if (this.detail) {
      this.detail.update(scroll);
    }

    this.renderer.render({
      camera: this.camera,
      scene: this.scene,
    });
  }
}
