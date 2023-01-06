/*! For license information please see main.bd18d75b429fd537c242.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),r=s.n(l),n=s("./node_modules/lodash/each.js"),a=s.n(n),o=s("./node_modules/lodash/map.js"),h=s.n(o),c=s("./app/classes/AsyncLoad.js"),m=s("./app/classes/Detection.js");class d{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,preloaders:"[data-src]"},this.id=s,this.transformPrefix=r()("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},a()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createPreloader()}createPreloader(){this.preloaders=h()(this.elements.preloaders,(e=>new c.default({element:e})))}show(e){return new Promise((t=>{e?this.animationIn=e:(this.animationIn=i.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1})),this.animationIn.call((e=>{this.addEventListeners(),t()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight)}onWheel({pixelY:e}){this.scroll.target+=e}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&m.default.isDesktop()&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){}removeEventListeners(){}}}},(function(e){e.h=()=>"dfe2cc989077a5138b49"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZDE4ZDc1YjQyOWZkNTM3YzI0Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NldBU2UsTUFBTUEsRUFDbkJDLGFBQVksUUFDVkMsRUFBTyxTQUNQQyxFQUFRLEdBQ1JDLElBRUFDLEtBQUtDLFNBQVdKLEVBQ2hCRyxLQUFLRSxpQkFBbUIsSUFDbkJKLEVBRUhLLFdBQVksY0FHZEgsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0ksZ0JBQWtCQyxJQUFPLFlBQ2hDLENBRUFDLFNBQ0VOLEtBQUtILFFBQVVVLFNBQVNDLGNBQWNSLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJFLEtBQUtTLE9BQVMsQ0FDWkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsTUFBTyxHQUdUQyxJQUFLZCxLQUFLRSxrQkFBa0IsQ0FBQ2EsRUFBT0MsS0FFaENELGFBQWlCRSxPQUFPQyxhQUN4QkgsYUFBaUJFLE9BQU9FLFVBQ3hCQyxNQUFNQyxRQUFRTixHQUVkZixLQUFLRixTQUFTa0IsR0FBT0QsR0FFckJmLEtBQUtGLFNBQVNrQixHQUFPVCxTQUFTZSxpQkFBaUJQLEdBRWIsSUFBOUJmLEtBQUtGLFNBQVNrQixHQUFLTyxPQUNyQnZCLEtBQUtGLFNBQVNrQixHQUFPLEtBQ2tCLElBQTlCaEIsS0FBS0YsU0FBU2tCLEdBQUtPLFNBQzVCdkIsS0FBS0YsU0FBU2tCLEdBQU9ULFNBQVNDLGNBQWNPLElBRWhELElBR0ZmLEtBQUt3QixpQkFDUCxDQUVBQSxrQkFDRXhCLEtBQUtHLFdBQWFzQixJQUFJekIsS0FBS0YsU0FBU0ssWUFBYU4sR0FDeEMsSUFBSTZCLEVBQUFBLFFBQVUsQ0FBRTdCLGFBRTNCLENBRUE4QixLQUFLQyxHQUNILE9BQU8sSUFBSUMsU0FBUUMsSUFDYkYsRUFDRjVCLEtBQUsrQixZQUFjSCxHQUVuQjVCLEtBQUsrQixZQUFjQyxFQUFBQSxRQUFBQSxXQUNuQmhDLEtBQUsrQixZQUFZRSxPQUFPakMsS0FBS0gsUUFBUSxDQUNuQ3FDLFVBQVcsR0FDWCxDQUNBQSxVQUFXLEtBSWZsQyxLQUFLK0IsWUFBWUksTUFBS0MsSUFDcEJwQyxLQUFLcUMsb0JBRUxQLEdBQVMsR0FDVCxHQUVOLENBRUFRLE9BQ0UsT0FBTyxJQUFJVCxTQUFRQyxJQUNqQjlCLEtBQUt1Qyx1QkFFTHZDLEtBQUt3QyxhQUFlUixFQUFBQSxRQUFBQSxXQUVwQmhDLEtBQUt3QyxhQUFhQyxHQUFHekMsS0FBS0gsUUFBUyxDQUNqQ3FDLFVBQVcsRUFDWFEsV0FBWVosR0FDWixHQUVOLENBRUFhLFdBQ00zQyxLQUFLRixTQUFTOEMsVUFDaEI1QyxLQUFLUyxPQUFPSSxNQUFRYixLQUFLRixTQUFTOEMsUUFBUUMsYUFBZTVCLE9BQU82QixZQUVwRSxDQUVBQyxTQUFRLE9BQUVDLElBQ1JoRCxLQUFLUyxPQUFPRSxRQUFVcUMsQ0FDeEIsQ0FFQUMsU0FDRWpELEtBQUtTLE9BQU9FLE9BQVNxQixFQUFBQSxRQUFBQSxNQUFBQSxNQUFpQixFQUFHaEMsS0FBS1MsT0FBT0ksTUFBT2IsS0FBS1MsT0FBT0UsUUFFeEVYLEtBQUtTLE9BQU9DLFFBQVVzQixFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QmhDLEtBQUtTLE9BQU9DLFFBQVNWLEtBQUtTLE9BQU9FLE9BQVEsSUFFbEZYLEtBQUtTLE9BQU9DLFFBQVUsTUFDeEJWLEtBQUtTLE9BQU9DLFFBQVUsR0FHcEJWLEtBQUtGLFNBQVM4QyxTQUFXTSxFQUFBQSxRQUFBQSxjQUMzQmxELEtBQUtGLFNBQVM4QyxRQUFRTyxNQUFNbkQsS0FBS0ksaUJBQW9CLGVBQWNKLEtBQUtTLE9BQU9DLGFBR25GLENBRUEyQixvQkFBb0IsQ0FFcEJFLHVCQUF1QixrQkM5SHpCYSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5pbXBvcnQgUHJlZml4IGZyb20gJ3ByZWZpeCdcblxuaW1wb3J0IGVhY2ggZnJvbSAnbG9kYXNoL2VhY2gnXG5pbXBvcnQgbWFwIGZyb20gJ2xvZGFzaC9tYXAnXG5cbmltcG9ydCBBc3luY0xvYWQgZnJvbSAnY2xhc3Nlcy9Bc3luY0xvYWQnO1xuaW1wb3J0IERldGVjdGlvbiBmcm9tICdjbGFzc2VzL0RldGVjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBlbGVtZW50LFxuICAgIGVsZW1lbnRzLFxuICAgIGlkXG4gIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzLFxuXG4gICAgICBwcmVsb2FkZXJzOiAnW2RhdGEtc3JjXScsXG4gICAgfVxuXG4gICAgdGhpcy5pZCA9IGlkXG5cbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeCgndHJhbnNmb3JtJylcbiAgfVxuXG4gIGNyZWF0ZSgpe1xuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3RvcilcbiAgICB0aGlzLmVsZW1lbnRzID0ge31cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcbiAgICB0aGlzLnByZWxvYWRlcnMgPSBtYXAodGhpcy5lbGVtZW50cy5wcmVsb2FkZXJzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBBc3luY0xvYWQoeyBlbGVtZW50IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc2hvdyhhbmltYXRpb24pe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmIChhbmltYXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25JbiA9IGFuaW1hdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKHRoaXMuZWxlbWVudCx7XG4gICAgICAgICAgYXV0b0FscGhhOiAwXG4gICAgICAgIH0se1xuICAgICAgICAgIGF1dG9BbHBoYTogMVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKF8gPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGhpZGUoKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQudG8odGhpcy5lbGVtZW50LCB7XG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUoKXtcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuICB9XG5cbiAgb25XaGVlbCh7IHBpeGVsWSB9KXtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIgJiYgRGV0ZWN0aW9uLmlzRGVza3RvcCgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xuICAgIH1cblxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKXt9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKXt9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZmUyY2M5ODkwNzdhNTEzOGI0OVwiKSJdLCJuYW1lcyI6WyJQYWdlIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZWxlbWVudHMiLCJpZCIsInRoaXMiLCJzZWxlY3RvciIsInNlbGVjdG9yQ2hpbGRyZW4iLCJwcmVsb2FkZXJzIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiY3JlYXRlUHJlbG9hZGVyIiwibWFwIiwiQXN5bmNMb2FkIiwic2hvdyIsImFuaW1hdGlvbiIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJHU0FQIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0Iiwib25XaGVlbCIsInBpeGVsWSIsInVwZGF0ZSIsIkRldGVjdGlvbiIsInN0eWxlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9