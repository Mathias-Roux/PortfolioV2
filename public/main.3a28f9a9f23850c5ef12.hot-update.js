/*! For license information please see main.3a28f9a9f23850c5ef12.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/index.js":(e,t,n)=>{n.r(t);n("./node_modules/lodash/each.js");var s=n("./node_modules/normalize-wheel/index.js"),a=n.n(s),i=n("./app/components/Canvas/index.js"),o=n("./app/components/Preloader.js"),h=n("./app/components/Navigation.js"),d=n("./app/pages/Home/index.js"),p=n("./app/pages/Detail/index.js"),c=n("./app/pages/About/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.onResize(),this.update()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createCanvas(){this.canvas=new i.default({template:this.template})}createPreloader(){this.preloader=new o.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createNavigation(){this.navigation=new h.default({template:this.template})}createPages(){this.pages={home:new d.default,detail:new p.default,about:new c.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.page.show()}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:e,push:t=!0}){this.canvas.onChangeStart(this.template,e),await this.page.hide();const n=await window.fetch(e);if(200===n.status){const s=await n.text(),a=document.createElement("div");t&&window.history.pushState({},"",e),a.innerHTML=s;const i=a.querySelector(".content");this.template=i.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=i.innerHTML,this.canvas.onChangeEnd(this.template),this.createPages(),this.onResize(),this.page.show()}else console.error(`response status: ${n.status}`)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onTouchDown(e){}onTouchMove(e){}onTouchUp(e){}onWheel(e){const t=a()(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("mousedown",this.onTouchDown.bind(this)),window.addEventListener("mousemove",this.onTouchMove.bind(this)),window.addEventListener("mouseup",this.onTouchUp.bind(this)),window.addEventListener("touchdown",this.onTouchDown.bind(this)),window.addEventListener("touchmove",this.onTouchMove.bind(this)),window.addEventListener("touchend",this.onTouchUp.bind(this)),window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"f7ea35e469d3cf0066e1"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdUUixLQUFLYyxRQUFVZCxLQUFLYyxPQUFPTixRQUM1QlIsS0FBS2MsT0FBT04sT0FBT1IsS0FBSzhCLEtBQUtxQyxRQUcvQi9CLE9BQU9zQixzQkFBc0IxRCxLQUFLUSxPQUFPWSxLQUFLcEIsTUFDaEQsQ0FFQU0sb0JBQ0U4QixPQUFPZ0MsaUJBQWlCLGFBQWNwRSxLQUFLZ0UsUUFBUTVDLEtBQUtwQixPQUV4RG9DLE9BQU9nQyxpQkFBaUIsWUFBYXBFLEtBQUs0RCxZQUFZeEMsS0FBS3BCLE9BQzNEb0MsT0FBT2dDLGlCQUFpQixZQUFhcEUsS0FBSzhELFlBQVkxQyxLQUFLcEIsT0FDM0RvQyxPQUFPZ0MsaUJBQWlCLFVBQVdwRSxLQUFLK0QsVUFBVTNDLEtBQUtwQixPQUV2RG9DLE9BQU9nQyxpQkFBaUIsWUFBYXBFLEtBQUs0RCxZQUFZeEMsS0FBS3BCLE9BQzNEb0MsT0FBT2dDLGlCQUFpQixZQUFhcEUsS0FBSzhELFlBQVkxQyxLQUFLcEIsT0FDM0RvQyxPQUFPZ0MsaUJBQWlCLFdBQVlwRSxLQUFLK0QsVUFBVTNDLEtBQUtwQixPQUV4RG9DLE9BQU9nQyxpQkFBaUIsV0FBWXBFLEtBQUtpQyxXQUFXYixLQUFLcEIsT0FFekRvQyxPQUFPZ0MsaUJBQWlCLFNBQVVwRSxLQUFLTyxTQUFTYSxLQUFLcEIsTUFDdkQsa0JDaExGcUUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb192Mi8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IE5vcm1hbGl6ZVdoZWVsIGZyb20gJ25vcm1hbGl6ZS13aGVlbCdcblxuaW1wb3J0IENhbnZhcyBmcm9tICdjb21wb25lbnRzL0NhbnZhcydcbmltcG9ydCBQcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL1ByZWxvYWRlcidcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xuXG5pbXBvcnQgSG9tZSBmcm9tICcuL3BhZ2VzL0hvbWUnXG5pbXBvcnQgRGV0YWlsIGZyb20gJy4vcGFnZXMvRGV0YWlsJ1xuaW1wb3J0IEFib3V0IGZyb20gJy4vcGFnZXMvQWJvdXQnXG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5jcmVhdGVDb250ZW50KClcblxuICAgIHRoaXMuY3JlYXRlQ2FudmFzKClcblxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcbiAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKVxuXG4gICAgdGhpcy5jcmVhdGVQYWdlcygpXG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy51cGRhdGUoKVxuICB9XG5cbiAgY3JlYXRlQ29udGVudCgpe1xuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcbiAgICB0aGlzLnRlbXBsYXRlID0gdGhpcy5jb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG4gIH1cblxuICBjcmVhdGVDYW52YXMoKXtcbiAgICB0aGlzLmNhbnZhcyA9IG5ldyBDYW52YXMoeyB0ZW1wbGF0ZTogdGhpcy50ZW1wbGF0ZSB9KVxuICB9XG5cbiAgY3JlYXRlUHJlbG9hZGVyKCl7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKHtcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcbiAgICB9KVxuICAgIHRoaXMucHJlbG9hZGVyLm9uY2UoJ2NvbXBsZXRlZCcsIHRoaXMub25QcmVsb2FkZWQuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGNyZWF0ZU5hdmlnYXRpb24oKXtcbiAgICB0aGlzLm5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbih7IHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlIH0pXG4gIH1cblxuICBjcmVhdGVQYWdlcygpe1xuICAgIHRoaXMucGFnZXMgPSB7XG4gICAgICBob21lOiBuZXcgSG9tZSgpLFxuICAgICAgZGV0YWlsOiBuZXcgRGV0YWlsKCksXG4gICAgICBhYm91dDogbmV3IEFib3V0KClcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpXG4gIH1cblxuICBvblByZWxvYWRlZCgpe1xuICAgIHRoaXMub25SZXNpemUoKVxuXG4gICAgdGhpcy5jYW52YXMub25QcmVsb2FkZWQoKVxuXG4gICAgdGhpcy5wYWdlLnNob3coKVxuICB9XG5cbiAgb25Qb3BTdGF0ZSgpIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHtcbiAgICAgIHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgcHVzaDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBvbkNoYW5nZSh7IHVybCwgcHVzaCA9IHRydWUgfSl7XG4gICAgdGhpcy5jYW52YXMub25DaGFuZ2VTdGFydCh0aGlzLnRlbXBsYXRlLCB1cmwpXG5cbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpXG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCB3aW5kb3cuZmV0Y2godXJsKVxuXG4gICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKVxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgaWYgKHB1c2gpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcbiAgICAgIH1cblxuICAgICAgZGl2LmlubmVySFRNTCA9IGh0bWxcblxuICAgICAgY29uc3QgZGl2Q29udGVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpXG5cbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10ZW1wbGF0ZScpXG5cbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLmNvbnRlbnQuc2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJywgdGhpcy50ZW1wbGF0ZSlcbiAgICAgIHRoaXMuY29udGVudC5pbm5lckhUTUwgPSBkaXZDb250ZW50LmlubmVySFRNTFxuXG4gICAgICB0aGlzLmNhbnZhcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuXG4gICAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgICAgdGhpcy5vblJlc2l6ZSgpXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpXG5cblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGByZXNwb25zZSBzdGF0dXM6ICR7cmVzLnN0YXR1c31gKVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCl7XG4gICAgaWYodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSl7XG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKVxuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG4gICAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSl7XG4gICAgICAgIHRoaXMuY2FudmFzLm9uUmVzaXplKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25Ub3VjaERvd24oZXZlbnQpe1xuXG4gIH1cblxuICBvblRvdWNoTW92ZShldmVudCl7XG5cbiAgfVxuXG4gIG9uVG91Y2hVcChldmVudCl7XG5cbiAgfVxuXG4gIG9uV2hlZWwoZXZlbnQpe1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRXaGVlbCA9IE5vcm1hbGl6ZVdoZWVsKGV2ZW50KVxuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMub25XaGVlbCl7XG4gICAgICB0aGlzLmNhbnZhcy5vbldoZWVsKG5vcm1hbGl6ZWRXaGVlbClcbiAgICB9XG5cbiAgICBpZih0aGlzLnBhZ2UgJiYgdGhpcy5wYWdlLm9uV2hlZWwpe1xuICAgICAgdGhpcy5wYWdlLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIGlmKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2UudXBkYXRlKXtcbiAgICAgIHRoaXMucGFnZS51cGRhdGUoKVxuICAgIH1cblxuICAgIGlmKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnVwZGF0ZSl7XG4gICAgICB0aGlzLmNhbnZhcy51cGRhdGUodGhpcy5wYWdlLnNjcm9sbClcbiAgICB9XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpe1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgdGhpcy5vbldoZWVsLmJpbmQodGhpcykpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5vblRvdWNoRG93bi5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcykpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uVG91Y2hVcC5iaW5kKHRoaXMpKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZG93bicsIHRoaXMub25Ub3VjaERvd24uYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25Ub3VjaFVwLmJpbmQodGhpcykpXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLmJpbmQodGhpcykpXG4gIH1cbn1cblxubmV3IEFwcCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmN2VhMzVlNDY5ZDNjZjAwNjZlMVwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlQ2FudmFzIiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvblJlc2l6ZSIsInVwZGF0ZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsImdldEF0dHJpYnV0ZSIsImNhbnZhcyIsIkNhbnZhcyIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJuYXZpZ2F0aW9uIiwiTmF2aWdhdGlvbiIsInBhZ2VzIiwiaG9tZSIsIkhvbWUiLCJkZXRhaWwiLCJEZXRhaWwiLCJhYm91dCIsIkFib3V0IiwicGFnZSIsImNyZWF0ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsImFzeW5jIiwib25DaGFuZ2VTdGFydCIsImhpZGUiLCJyZXMiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwib25DaGFuZ2VFbmQiLCJjb25zb2xlIiwiZXJyb3IiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfIiwib25Ub3VjaERvd24iLCJldmVudCIsIm9uVG91Y2hNb3ZlIiwib25Ub3VjaFVwIiwib25XaGVlbCIsIm5vcm1hbGl6ZWRXaGVlbCIsIk5vcm1hbGl6ZVdoZWVsIiwic2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==