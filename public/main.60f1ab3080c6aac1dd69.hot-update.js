/*! For license information please see main.60f1ab3080c6aac1dd69.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var i=s("./node_modules/gsap/index.js"),l=s("./node_modules/prefix/index.js"),r=s.n(l),n=s("./node_modules/lodash/each.js"),o=s.n(n),a=s("./node_modules/lodash/map.js"),h=s.n(a),c=s("./app/classes/AsyncLoad.js"),d=s("./app/classes/Detection.js");class u{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,preloaders:"[data-src]"},this.id=s,this.alert=document.querySelector(".alert"),this.transformPrefix=r()("transform")}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},this.y={start:0,end:0},o()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),!d.default.isDesktop()&&this.createPreloader()}createPreloader(){this.preloaders=h()(this.elements.preloaders,(e=>new c.default({element:e})))}show(e){return new Promise((t=>{this.animationIn=i.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0,y:`${e}`},{autoAlpha:1,y:0}),this.animationIn.call((e=>{this.addEventListeners(),t()}))}))}hide(e){return new Promise((t=>{this.removeEventListeners(),this.animationOut=i.default.timeline(),this.animationOut.to(this.element,{y:`-${e}`,autoAlpha:0,onComplete:t})}))}onResize(){this.scroll.last=this.scroll.target=0,this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),d.default.isDesktop()||(window.innerHeight<window.innerWidth?this.alert.style.opacity=1:this.alert.style.opacity=0)}onTouchDown(e){this.isDown=!0,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.scroll.last=this.scroll.current}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientY:e.clientY;this.y.end=t;const s=this.y.start-this.y.end;this.scroll.target=this.scroll.last+s}onTouchUp(e){this.isDown=!1}onWheel({pixelY:e}){this.scroll.target+=e}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&d.default.isDesktop()&&(this.elements.wrapper.style[this.transformPrefix]=`translate3d(0, -${this.scroll.current}px, 0)`)}addEventListeners(){}removeEventListeners(){}}}},(function(e){e.h=()=>"c3faf6ef4b8cd7fedd9d"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42MGYxYWIzMDgwYzZhYWMxZGQ2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7NldBU2UsTUFBTUEsRUFDbkJDLGFBQVksUUFDVkMsRUFBTyxTQUNQQyxFQUFRLEdBQ1JDLElBRUFDLEtBQUtDLFNBQVdKLEVBQ2hCRyxLQUFLRSxpQkFBbUIsSUFDbkJKLEVBRUhLLFdBQVksY0FHZEgsS0FBS0QsR0FBS0EsRUFFVkMsS0FBS0ksTUFBUUMsU0FBU0MsY0FBYyxVQUVwQ04sS0FBS08sZ0JBQWtCQyxJQUFPLFlBQ2hDLENBRUFDLFNBQ0VULEtBQUtILFFBQVVRLFNBQVNDLGNBQWNOLEtBQUtDLFVBQzNDRCxLQUFLRixTQUFXLENBQUMsRUFFakJFLEtBQUtVLE9BQVMsQ0FDWkMsUUFBUyxFQUNUQyxPQUFRLEVBQ1JDLEtBQU0sRUFDTkMsTUFBTyxHQUdUZCxLQUFLZSxFQUFJLENBQ1BDLE1BQU8sRUFDUEMsSUFBSyxHQUdQQyxJQUFLbEIsS0FBS0Usa0JBQWtCLENBQUNpQixFQUFPQyxLQUVoQ0QsYUFBaUJFLE9BQU9DLGFBQ3hCSCxhQUFpQkUsT0FBT0UsVUFDeEJDLE1BQU1DLFFBQVFOLEdBRWRuQixLQUFLRixTQUFTc0IsR0FBT0QsR0FFckJuQixLQUFLRixTQUFTc0IsR0FBT2YsU0FBU3FCLGlCQUFpQlAsR0FFYixJQUE5Qm5CLEtBQUtGLFNBQVNzQixHQUFLTyxPQUNyQjNCLEtBQUtGLFNBQVNzQixHQUFPLEtBQ2tCLElBQTlCcEIsS0FBS0YsU0FBU3NCLEdBQUtPLFNBQzVCM0IsS0FBS0YsU0FBU3NCLEdBQU9mLFNBQVNDLGNBQWNhLElBRWhELEtBR0ZTLEVBQUFBLFFBQUFBLGFBQStCNUIsS0FBSzZCLGlCQUN0QyxDQUVBQSxrQkFDRTdCLEtBQUtHLFdBQWEyQixJQUFJOUIsS0FBS0YsU0FBU0ssWUFBYU4sR0FDeEMsSUFBSWtDLEVBQUFBLFFBQVUsQ0FBRWxDLGFBRTNCLENBRUFtQyxLQUFLQyxHQUNILE9BQU8sSUFBSUMsU0FBUUMsSUFDakJuQyxLQUFLb0MsWUFBY0MsRUFBQUEsUUFBQUEsV0FDbkJyQyxLQUFLb0MsWUFBWUUsT0FBT3RDLEtBQUtILFFBQVEsQ0FDbkMwQyxVQUFXLEVBQ1h4QixFQUFJLEdBQUVrQixLQUNOLENBQ0FNLFVBQVcsRUFDWHhCLEVBQUcsSUFHTGYsS0FBS29DLFlBQVlJLE1BQUtDLElBQ3BCekMsS0FBSzBDLG9CQUVMUCxHQUFTLEdBQ1QsR0FFTixDQUVBUSxLQUFLVixHQUNILE9BQU8sSUFBSUMsU0FBUUMsSUFDakJuQyxLQUFLNEMsdUJBRUw1QyxLQUFLNkMsYUFBZVIsRUFBQUEsUUFBQUEsV0FFcEJyQyxLQUFLNkMsYUFBYUMsR0FBRzlDLEtBQUtILFFBQVMsQ0FDakNrQixFQUFJLElBQUdrQixJQUNQTSxVQUFXLEVBQ1hRLFdBQVlaLEdBQ1osR0FFTixDQUVBYSxXQUNFaEQsS0FBS1UsT0FBT0csS0FBT2IsS0FBS1UsT0FBT0UsT0FBUyxFQUVwQ1osS0FBS0YsU0FBU21ELFVBQ2hCakQsS0FBS1UsT0FBT0ksTUFBUWQsS0FBS0YsU0FBU21ELFFBQVFDLGFBQWU3QixPQUFPOEIsYUFHN0R2QixFQUFBQSxRQUFBQSxjQUNDUCxPQUFPOEIsWUFBYzlCLE9BQU8rQixXQUM5QnBELEtBQUtJLE1BQU1pRCxNQUFNQyxRQUFVLEVBRTNCdEQsS0FBS0ksTUFBTWlELE1BQU1DLFFBQVUsRUFJakMsQ0FFQUMsWUFBYUMsR0FDWHhELEtBQUt5RCxRQUFTLEVBRWR6RCxLQUFLZSxFQUFFQyxNQUFRd0MsRUFBRUUsUUFBVUYsRUFBRUUsUUFBUSxHQUFHQyxRQUFVSCxFQUFFRyxRQUVwRDNELEtBQUtVLE9BQU9HLEtBQU9iLEtBQUtVLE9BQU9DLE9BQ2pDLENBRUFpRCxZQUFhSixHQUNYLElBQUt4RCxLQUFLeUQsT0FBUSxPQUVsQixNQUFNMUMsRUFBSXlDLEVBQUVFLFFBQVVGLEVBQUVFLFFBQVEsR0FBR0MsUUFBVUgsRUFBRUcsUUFFL0MzRCxLQUFLZSxFQUFFRSxJQUFNRixFQUViLE1BQU04QyxFQUFXN0QsS0FBS2UsRUFBRUMsTUFBUWhCLEtBQUtlLEVBQUVFLElBRXZDakIsS0FBS1UsT0FBT0UsT0FBU1osS0FBS1UsT0FBT0csS0FBT2dELENBQzFDLENBRUFDLFVBQVdDLEdBQ1QvRCxLQUFLeUQsUUFBUyxDQUNoQixDQUVBTyxTQUFRLE9BQUVDLElBQ1JqRSxLQUFLVSxPQUFPRSxRQUFVcUQsQ0FDeEIsQ0FFQUMsU0FDRWxFLEtBQUtVLE9BQU9FLE9BQVN5QixFQUFBQSxRQUFBQSxNQUFBQSxNQUFpQixFQUFHckMsS0FBS1UsT0FBT0ksTUFBT2QsS0FBS1UsT0FBT0UsUUFFeEVaLEtBQUtVLE9BQU9DLFFBQVUwQixFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QnJDLEtBQUtVLE9BQU9DLFFBQVNYLEtBQUtVLE9BQU9FLE9BQVEsSUFFbEZaLEtBQUtVLE9BQU9DLFFBQVUsTUFDeEJYLEtBQUtVLE9BQU9DLFFBQVUsR0FHcEJYLEtBQUtGLFNBQVNtRCxTQUFXckIsRUFBQUEsUUFBQUEsY0FDM0I1QixLQUFLRixTQUFTbUQsUUFBUUksTUFBTXJELEtBQUtPLGlCQUFvQixtQkFBa0JQLEtBQUtVLE9BQU9DLGdCQUd2RixDQUVBK0Isb0JBQW9CLENBRXBCRSx1QkFBdUIsa0JDdkt6QnVCLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL3BvcnRmb2xpb192Mi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSAnZ3NhcCdcbmltcG9ydCBQcmVmaXggZnJvbSAncHJlZml4J1xuXG5pbXBvcnQgZWFjaCBmcm9tICdsb2Rhc2gvZWFjaCdcbmltcG9ydCBtYXAgZnJvbSAnbG9kYXNoL21hcCdcblxuaW1wb3J0IEFzeW5jTG9hZCBmcm9tICdjbGFzc2VzL0FzeW5jTG9hZCc7XG5pbXBvcnQgRGV0ZWN0aW9uIGZyb20gJ2NsYXNzZXMvRGV0ZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIHtcbiAgY29uc3RydWN0b3Ioe1xuICAgIGVsZW1lbnQsXG4gICAgZWxlbWVudHMsXG4gICAgaWRcbiAgfSkge1xuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50XG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xuICAgICAgLi4uZWxlbWVudHMsXG5cbiAgICAgIHByZWxvYWRlcnM6ICdbZGF0YS1zcmNdJyxcbiAgICB9XG5cbiAgICB0aGlzLmlkID0gaWRcblxuICAgIHRoaXMuYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKVxuXG4gICAgdGhpcy50cmFuc2Zvcm1QcmVmaXggPSBQcmVmaXgoJ3RyYW5zZm9ybScpXG4gIH1cblxuICBjcmVhdGUoKXtcbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpXG4gICAgdGhpcy5lbGVtZW50cyA9IHt9XG5cbiAgICB0aGlzLnNjcm9sbCA9IHtcbiAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICB0YXJnZXQ6IDAsXG4gICAgICBsYXN0OiAwLFxuICAgICAgbGltaXQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLnkgPSB7XG4gICAgICBzdGFydDogMCxcbiAgICAgIGVuZDogMFxuICAgIH1cblxuICAgIGVhY2godGhpcy5zZWxlY3RvckNoaWxkcmVuLCAoZW50cnksIGtleSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlTGlzdCB8fFxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSlcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIERldGVjdGlvbi5pc0Rlc2t0b3AoKSA/IG51bGwgOiB0aGlzLmNyZWF0ZVByZWxvYWRlcigpXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXJzID0gbWFwKHRoaXMuZWxlbWVudHMucHJlbG9hZGVycywgKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBuZXcgQXN5bmNMb2FkKHsgZWxlbWVudCB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3coeVZhbHVlKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xuICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8odGhpcy5lbGVtZW50LHtcbiAgICAgICAgYXV0b0FscGhhOiAwLFxuICAgICAgICB5OiBgJHt5VmFsdWV9YFxuICAgICAgfSx7XG4gICAgICAgIGF1dG9BbHBoYTogMSxcbiAgICAgICAgeTogMFxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbChfID0+IHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpXG5cbiAgICAgICAgcmVzb2x2ZSgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBoaWRlKHlWYWx1ZSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpXG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0ID0gR1NBUC50aW1lbGluZSgpXG5cbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICB5OiBgLSR7eVZhbHVlfWAsXG4gICAgICAgIGF1dG9BbHBoYTogMCxcbiAgICAgICAgb25Db21wbGV0ZTogcmVzb2x2ZVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgb25SZXNpemUoKXtcbiAgICB0aGlzLnNjcm9sbC5sYXN0ID0gdGhpcy5zY3JvbGwudGFyZ2V0ID0gMFxuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPSB0aGlzLmVsZW1lbnRzLndyYXBwZXIuY2xpZW50SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICghRGV0ZWN0aW9uLmlzRGVza3RvcCgpKXtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgPCB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICB0aGlzLmFsZXJ0LnN0eWxlLm9wYWNpdHkgPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFsZXJ0LnN0eWxlLm9wYWNpdHkgPSAwXG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbiAgb25Ub3VjaERvd24gKGUpIHtcbiAgICB0aGlzLmlzRG93biA9IHRydWU7XG5cbiAgICB0aGlzLnkuc3RhcnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WTtcblxuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC5jdXJyZW50O1xuICB9XG5cbiAgb25Ub3VjaE1vdmUgKGUpIHtcbiAgICBpZiAoIXRoaXMuaXNEb3duKSByZXR1cm47XG5cbiAgICBjb25zdCB5ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFk7XG5cbiAgICB0aGlzLnkuZW5kID0geTtcblxuICAgIGNvbnN0IGRpc3RhbmNlID0gdGhpcy55LnN0YXJ0IC0gdGhpcy55LmVuZDtcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgKyBkaXN0YW5jZTtcbiAgfVxuXG4gIG9uVG91Y2hVcCAoZXZlbnQpIHtcbiAgICB0aGlzLmlzRG93biA9IGZhbHNlO1xuICB9XG5cbiAgb25XaGVlbCh7IHBpeGVsWSB9KXtcbiAgICB0aGlzLnNjcm9sbC50YXJnZXQgKz0gcGl4ZWxZO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIgJiYgRGV0ZWN0aW9uLmlzRGVza3RvcCgpKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLndyYXBwZXIuc3R5bGVbdGhpcy50cmFuc2Zvcm1QcmVmaXhdID0gYHRyYW5zbGF0ZTNkKDAsIC0ke3RoaXMuc2Nyb2xsLmN1cnJlbnR9cHgsIDApYDtcbiAgICB9XG5cbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCl7fVxuXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCl7fVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzNmYWY2ZWY0YjhjZDdmZWRkOWRcIikiXSwibmFtZXMiOlsiUGFnZSIsImNvbnN0cnVjdG9yIiwiZWxlbWVudCIsImVsZW1lbnRzIiwiaWQiLCJ0aGlzIiwic2VsZWN0b3IiLCJzZWxlY3RvckNoaWxkcmVuIiwicHJlbG9hZGVycyIsImFsZXJ0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidHJhbnNmb3JtUHJlZml4IiwiUHJlZml4IiwiY3JlYXRlIiwic2Nyb2xsIiwiY3VycmVudCIsInRhcmdldCIsImxhc3QiLCJsaW1pdCIsInkiLCJzdGFydCIsImVuZCIsImVhY2giLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiRGV0ZWN0aW9uIiwiY3JlYXRlUHJlbG9hZGVyIiwibWFwIiwiQXN5bmNMb2FkIiwic2hvdyIsInlWYWx1ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJHU0FQIiwiZnJvbVRvIiwiYXV0b0FscGhhIiwiY2FsbCIsIl8iLCJhZGRFdmVudExpc3RlbmVycyIsImhpZGUiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFuaW1hdGlvbk91dCIsInRvIiwib25Db21wbGV0ZSIsIm9uUmVzaXplIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiaW5uZXJXaWR0aCIsInN0eWxlIiwib3BhY2l0eSIsIm9uVG91Y2hEb3duIiwiZSIsImlzRG93biIsInRvdWNoZXMiLCJjbGllbnRZIiwib25Ub3VjaE1vdmUiLCJkaXN0YW5jZSIsIm9uVG91Y2hVcCIsImV2ZW50Iiwib25XaGVlbCIsInBpeGVsWSIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==