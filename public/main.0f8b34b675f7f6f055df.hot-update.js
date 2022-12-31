/*! For license information please see main.0f8b34b675f7f6f055df.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/normalize-wheel/index.js"),n=a.n(s),i=a("./app/components/Canvas/index.js"),o=a("./app/components/Preloader.js"),h=a("./app/components/Navigation.js"),p=a("./app/pages/Home/index.js"),d=a("./app/pages/Detail/index.js"),r=a("./app/pages/About/index.js");new class{constructor(){this.createContent(),this.createCanvas(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.onResize(),this.update()}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createCanvas(){this.canvas=new i.default({template:this.template})}createPreloader(){this.preloader=new o.default({canvas:this.canvas}),this.preloader.once("completed",this.onPreloaded.bind(this))}createNavigation(){this.navigation=new h.default({template:this.template})}createPages(){this.pages={home:new p.default,detail:new d.default,about:new r.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.onResize(),this.canvas.onPreloaded(),this.page.show()}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:e,push:t=!0}){this.canvas.onChangeStart(this.template,e),await this.page.hide();const a=await window.fetch(e);if(200===a.status){const s=await a.text(),n=document.createElement("div");t&&window.history.pushState({},"",e),n.innerHTML=s;const i=n.querySelector(".content");this.template=i.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.content.innerHTML=i.innerHTML,this.canvas.onChangeEnd(this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show()}else console.error(`response status: ${a.status}`)}onResize(){this.page&&this.page.onResize&&this.page.onResize(),window.requestAnimationFrame((e=>{this.canvas&&this.canvas.onResize&&this.canvas.onResize()}))}onWheel(e){const t=n()(e);this.canvas&&this.canvas.onWheel&&this.canvas.onWheel(t),this.page&&this.page.onWheel&&this.page.onWheel(t)}update(){this.page&&this.page.update&&this.page.update(),this.canvas&&this.canvas.update&&this.canvas.update(this.page.scroll),window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("mousewheel",this.onWheel.bind(this)),window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}}}},(function(e){e.h=()=>"b05d144ebab02cc6040b"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VFIsS0FBS2MsUUFBVWQsS0FBS2MsT0FBT04sUUFDNUJSLEtBQUtjLE9BQU9OLE9BQU9SLEtBQUs4QixLQUFLa0MsUUFHL0I1QixPQUFPc0Isc0JBQXNCMUQsS0FBS1EsT0FBT1ksS0FBS3BCLE1BQ2hELENBRUFNLG9CQUNFOEIsT0FBTzZCLGlCQUFpQixhQUFjakUsS0FBSzRELFFBQVF4QyxLQUFLcEIsT0FDeERvQyxPQUFPNkIsaUJBQWlCLFdBQVlqRSxLQUFLaUMsV0FBV2IsS0FBS3BCLE9BQ3pEb0MsT0FBTzZCLGlCQUFpQixTQUFVakUsS0FBS08sU0FBU2EsS0FBS3BCLE1BQ3ZELGtCQ3pKRmtFLEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJ1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gJ2NvbXBvbmVudHMvQ2FudmFzJ1xuaW1wb3J0IFByZWxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJlbG9hZGVyJ1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb24nXG5cbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSdcbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9wYWdlcy9EZXRhaWwnXG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9wYWdlcy9BYm91dCdcblxuY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQoKVxuXG4gICAgdGhpcy5jcmVhdGVDYW52YXMoKVxuXG4gICAgdGhpcy5jcmVhdGVQcmVsb2FkZXIoKVxuICAgIHRoaXMuY3JlYXRlTmF2aWdhdGlvbigpXG5cbiAgICB0aGlzLmNyZWF0ZVBhZ2VzKClcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICB0aGlzLnVwZGF0ZSgpXG4gIH1cblxuICBjcmVhdGVDb250ZW50KCl7XG4gICAgdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKVxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcbiAgfVxuXG4gIGNyZWF0ZUNhbnZhcygpe1xuICAgIHRoaXMuY2FudmFzID0gbmV3IENhbnZhcyh7IHRlbXBsYXRlOiB0aGlzLnRlbXBsYXRlIH0pXG4gIH1cblxuICBjcmVhdGVQcmVsb2FkZXIoKXtcbiAgICB0aGlzLnByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoe1xuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuICAgIH0pXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZSgnY29tcGxldGVkJywgdGhpcy5vblByZWxvYWRlZC5iaW5kKHRoaXMpKVxuICB9XG5cbiAgY3JlYXRlTmF2aWdhdGlvbigpe1xuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHsgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUgfSlcbiAgfVxuXG4gIGNyZWF0ZVBhZ2VzKCl7XG4gICAgdGhpcy5wYWdlcyA9IHtcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXG4gICAgICBkZXRhaWw6IG5ldyBEZXRhaWwoKSxcbiAgICAgIGFib3V0OiBuZXcgQWJvdXQoKVxuICAgIH1cblxuICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICB0aGlzLnBhZ2UuY3JlYXRlKClcbiAgfVxuXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5vblJlc2l6ZSgpXG5cbiAgICB0aGlzLmNhbnZhcy5vblByZWxvYWRlZCgpXG5cbiAgICB0aGlzLnBhZ2Uuc2hvdygpXG4gIH1cblxuICBvblBvcFN0YXRlKCkge1xuICAgIHRoaXMub25DaGFuZ2Uoe1xuICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICBwdXNoOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2hhbmdlKHsgdXJsLCBwdXNoID0gdHJ1ZSB9KXtcbiAgICB0aGlzLmNhbnZhcy5vbkNoYW5nZVN0YXJ0KHRoaXMudGVtcGxhdGUsIHVybClcblxuICAgIGF3YWl0IHRoaXMucGFnZS5oaWRlKClcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpXG5cbiAgICBpZihyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IGh0bWwgPSBhd2FpdCByZXMudGV4dCgpXG4gICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICBpZiAocHVzaCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCB1cmwpO1xuICAgICAgfVxuXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbFxuXG4gICAgICBjb25zdCBkaXZDb250ZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JylcblxuICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRpdkNvbnRlbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRlbXBsYXRlJylcblxuICAgICAgdGhpcy5uYXZpZ2F0aW9uLm9uQ2hhbmdlKHRoaXMudGVtcGxhdGUpXG5cbiAgICAgIHRoaXMuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGVtcGxhdGUnLCB0aGlzLnRlbXBsYXRlKVxuICAgICAgdGhpcy5jb250ZW50LmlubmVySFRNTCA9IGRpdkNvbnRlbnQuaW5uZXJIVE1MXG5cbiAgICAgIHRoaXMuY2FudmFzLm9uQ2hhbmdlRW5kKHRoaXMudGVtcGxhdGUpXG5cbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV1cbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKVxuXG4gICAgICB0aGlzLm9uUmVzaXplKClcblxuICAgICAgdGhpcy5wYWdlLnNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGByZXNwb25zZSBzdGF0dXM6ICR7cmVzLnN0YXR1c31gKVxuICAgIH1cbiAgfVxuXG4gIG9uUmVzaXplKCl7XG4gICAgaWYodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSl7XG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKVxuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXyA9PiB7XG4gICAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vblJlc2l6ZSl7XG4gICAgICAgIHRoaXMuY2FudmFzLm9uUmVzaXplKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgb25XaGVlbChldmVudCl7XG4gICAgY29uc3Qgbm9ybWFsaXplZFdoZWVsID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpXG5cbiAgICBpZih0aGlzLmNhbnZhcyAmJiB0aGlzLmNhbnZhcy5vbldoZWVsKXtcbiAgICAgIHRoaXMuY2FudmFzLm9uV2hlZWwobm9ybWFsaXplZFdoZWVsKVxuICAgIH1cblxuICAgIGlmKHRoaXMucGFnZSAmJiB0aGlzLnBhZ2Uub25XaGVlbCl7XG4gICAgICB0aGlzLnBhZ2Uub25XaGVlbChub3JtYWxpemVkV2hlZWwpXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgaWYodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpe1xuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpXG4gICAgfVxuXG4gICAgaWYodGhpcy5jYW52YXMgJiYgdGhpcy5jYW52YXMudXBkYXRlKXtcbiAgICAgIHRoaXMuY2FudmFzLnVwZGF0ZSh0aGlzLnBhZ2Uuc2Nyb2xsKVxuICAgIH1cblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCl7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNld2hlZWwnLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUuYmluZCh0aGlzKSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKVxuICB9XG59XG5cbm5ldyBBcHAoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjA1ZDE0NGViYWIwMmNjNjA0MGJcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJ0aGlzIiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZUNhbnZhcyIsImNyZWF0ZVByZWxvYWRlciIsImNyZWF0ZU5hdmlnYXRpb24iLCJjcmVhdGVQYWdlcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwib25SZXNpemUiLCJ1cGRhdGUiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJnZXRBdHRyaWJ1dGUiLCJjYW52YXMiLCJDYW52YXMiLCJwcmVsb2FkZXIiLCJQcmVsb2FkZXIiLCJvbmNlIiwib25QcmVsb2FkZWQiLCJiaW5kIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJwYWdlcyIsImhvbWUiLCJIb21lIiwiZGV0YWlsIiwiRGV0YWlsIiwiYWJvdXQiLCJBYm91dCIsInBhZ2UiLCJjcmVhdGUiLCJzaG93Iiwib25Qb3BTdGF0ZSIsIm9uQ2hhbmdlIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInB1c2giLCJhc3luYyIsIm9uQ2hhbmdlU3RhcnQiLCJoaWRlIiwicmVzIiwiZmV0Y2giLCJzdGF0dXMiLCJodG1sIiwidGV4dCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiaW5uZXJIVE1MIiwiZGl2Q29udGVudCIsInNldEF0dHJpYnV0ZSIsIm9uQ2hhbmdlRW5kIiwiY29uc29sZSIsImVycm9yIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiXyIsIm9uV2hlZWwiLCJldmVudCIsIm5vcm1hbGl6ZWRXaGVlbCIsIk5vcm1hbGl6ZVdoZWVsIiwic2Nyb2xsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==