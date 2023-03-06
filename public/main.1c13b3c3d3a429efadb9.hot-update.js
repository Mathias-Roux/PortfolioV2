/*! For license information please see main.1c13b3c3d3a429efadb9.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var l=s("./node_modules/gsap/index.js"),i=s("./node_modules/lodash/each.js"),n=s.n(i),o=s("./node_modules/lodash/map.js"),r=s.n(o),a=s("./app/classes/AsyncLoad.js"),c=s("./app/classes/Detection.js");class h{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,preloaders:"[data-src]"},this.id=s,this.alert=document.querySelector(".alert")}create(){this.element=document.querySelector(this.selector),this.elements={},c.default.isDesktop()||(window.pageYOffset=0,document.documentElement.scrollTop=0,document.body.scrollTop=0),this.scroll={current:0,target:0,last:0,limit:0},this.y={start:0,end:0},n()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),!c.default.isDesktop()&&this.createPreloader()}createPreloader(){this.preloaders=r()(this.elements.preloaders,(e=>new a.default({element:e})))}show(){return new Promise((e=>{this.animationIn=l.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationOut=l.default.timeline(),this.animationOut.to(this.element,{autoAlpha:0,onComplete:e})}))}onResize(){this.scroll.last=this.scroll.target=0,this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),c.default.isDesktop()||(window.innerHeight<window.innerWidth?this.alert.style.opacity=1:this.alert.style.opacity=0)}onTouchDown(e){this.isDown=!0,this.y.start=e.touches?e.touches[0].clientY:e.clientY,this.scroll.last=this.scroll.current}onTouchMove(e){if(!this.isDown)return;const t=e.touches?e.touches[0].clientY:e.clientY;this.y.end=t;const s=this.y.start-this.y.end;this.scroll.target=this.scroll.last+s}onTouchUp(e){this.isDown=!1}onWheel({pixelY:e}){this.scroll.target+=e}update(){if(this.scroll.target=l.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=l.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&c.default.isDesktop()){this.elements.wrapper.style.transform=`translate3d(0, -${this.scroll.current}px, 0)`;const e=this.element.querySelectorAll(".item"),t=window.innerHeight/2;n()(e,(e=>{const s=e.getBoundingClientRect();s.top<t&&s.bottom>t?e.style.color="green":e.style.color="red"}))}}addEventListeners(){}removeEventListeners(){}}}},(function(e){e.h=()=>"9a021ce85a9638c70ffd"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFLbUIsRUFBRUMsTUFBUXBCLEtBQUttQixFQUFFRSxJQUV2Q3JCLEtBQUtjLE9BQU9FLE9BQVNoQixLQUFLYyxPQUFPRyxLQUFPNkMsQ0FDMUMsQ0FFQUMsVUFBV0MsR0FDVGhFLEtBQUswRCxRQUFTLENBQ2hCLENBRUFPLFNBQVEsT0FBRUMsSUFDUmxFLEtBQUtjLE9BQU9FLFFBQVVrRCxDQUN4QixDQUVBQyxTQVNFLEdBUkFuRSxLQUFLYyxPQUFPRSxPQUFTc0IsRUFBQUEsUUFBQUEsTUFBQUEsTUFBaUIsRUFBR3RDLEtBQUtjLE9BQU9JLE1BQU9sQixLQUFLYyxPQUFPRSxRQUV4RWhCLEtBQUtjLE9BQU9DLFFBQVV1QixFQUFBQSxRQUFBQSxNQUFBQSxZQUF1QnRDLEtBQUtjLE9BQU9DLFFBQVNmLEtBQUtjLE9BQU9FLE9BQVEsSUFFbEZoQixLQUFLYyxPQUFPQyxRQUFVLE1BQ3hCZixLQUFLYyxPQUFPQyxRQUFVLEdBR3BCZixLQUFLRixTQUFTb0QsU0FBVzFDLEVBQUFBLFFBQUFBLFlBQXVCLENBQ2xEUixLQUFLRixTQUFTb0QsUUFBUUksTUFBTWMsVUFBYSxtQkFBa0JwRSxLQUFLYyxPQUFPQyxnQkFFdkUsTUFBTWpCLEVBQVdFLEtBQUtILFFBQVFnQyxpQkFBaUIsU0FDekN3QyxFQUFlNUQsT0FBTzJDLFlBQWMsRUFFMUM5QixJQUFLeEIsR0FBVUQsSUFDYixNQUFNeUUsRUFBY3pFLEVBQVEwRSx3QkFLekJELEVBQVlFLElBQU1ILEdBQWdCQyxFQUFZRyxPQUFTSixFQUN4RHhFLEVBQVF5RCxNQUFNb0IsTUFBUSxRQUV0QjdFLEVBQVF5RCxNQUFNb0IsTUFBUSxLQUN4QixHQUtKLENBQ0YsQ0FFQS9CLG9CQUFvQixDQUVwQkUsdUJBQXVCLGtCQzFMekI4QixFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnXG5cbmltcG9ydCBlYWNoIGZyb20gJ2xvZGFzaC9lYWNoJ1xuaW1wb3J0IG1hcCBmcm9tICdsb2Rhc2gvbWFwJ1xuXG5pbXBvcnQgQXN5bmNMb2FkIGZyb20gJ2NsYXNzZXMvQXN5bmNMb2FkJ1xuaW1wb3J0IERldGVjdGlvbiBmcm9tICdjbGFzc2VzL0RldGVjdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBlbGVtZW50LFxuICAgIGVsZW1lbnRzLFxuICAgIGlkXG4gIH0pIHtcbiAgICB0aGlzLnNlbGVjdG9yID0gZWxlbWVudFxuICAgIHRoaXMuc2VsZWN0b3JDaGlsZHJlbiA9IHtcbiAgICAgIC4uLmVsZW1lbnRzLFxuXG4gICAgICBwcmVsb2FkZXJzOiAnW2RhdGEtc3JjXSdcbiAgICB9XG5cbiAgICB0aGlzLmlkID0gaWRcblxuICAgIHRoaXMuYWxlcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxlcnQnKVxuICB9XG5cbiAgY3JlYXRlKCl7XG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKVxuICAgIHRoaXMuZWxlbWVudHMgPSB7fVxuXG4gICAgaWYoIURldGVjdGlvbi5pc0Rlc2t0b3AoKSl7XG4gICAgICB3aW5kb3cucGFnZVlPZmZzZXQgPSAwXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gMCBcbiAgICAgIGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gMFxuICAgIH1cblxuICAgIHRoaXMuc2Nyb2xsID0ge1xuICAgICAgY3VycmVudDogMCxcbiAgICAgIHRhcmdldDogMCxcbiAgICAgIGxhc3Q6IDAsXG4gICAgICBsaW1pdDogMFxuICAgIH1cblxuICAgIHRoaXMueSA9IHtcbiAgICAgIHN0YXJ0OiAwLFxuICAgICAgZW5kOiAwXG4gICAgfVxuXG4gICAgZWFjaCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XG4gICAgICAgIEFycmF5LmlzQXJyYXkoZW50cnkpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZW50cnkpXG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZW50cnkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgRGV0ZWN0aW9uLmlzRGVza3RvcCgpID8gbnVsbCA6IHRoaXMuY3JlYXRlUHJlbG9hZGVyKClcbiAgfVxuXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcbiAgICB0aGlzLnByZWxvYWRlcnMgPSBtYXAodGhpcy5lbGVtZW50cy5wcmVsb2FkZXJzLCAoZWxlbWVudCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBBc3luY0xvYWQoeyBlbGVtZW50IH0pXG4gICAgfSlcbiAgfVxuXG4gIHNob3coKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKClcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKHRoaXMuZWxlbWVudCx7XG4gICAgICAgIGF1dG9BbHBoYTogMFxuICAgICAgfSx7XG4gICAgICAgIGF1dG9BbHBoYTogMVxuICAgICAgfSlcbiAgICBcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uY2FsbCgoXykgPT4ge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBcblxuICBoaWRlKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKClcblxuICAgICAgdGhpcy5hbmltYXRpb25PdXQgPSBHU0FQLnRpbWVsaW5lKClcbiAgICAgIHRoaXMuYW5pbWF0aW9uT3V0LnRvKHRoaXMuZWxlbWVudCwge1xuICAgICAgICBhdXRvQWxwaGE6IDAsXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmVcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuICBcblxuICBvblJlc2l6ZSgpe1xuICAgIHRoaXMuc2Nyb2xsLmxhc3QgPSB0aGlzLnNjcm9sbC50YXJnZXQgPSAwXG5cbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9IHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB9XG5cbiAgICBpZiAoIURldGVjdGlvbi5pc0Rlc2t0b3AoKSl7XG4gICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IDwgd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgdGhpcy5hbGVydC5zdHlsZS5vcGFjaXR5ID0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hbGVydC5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgfVxuICAgIH1cbiAgICBcbiAgfVxuXG4gIG9uVG91Y2hEb3duIChlKSB7XG4gICAgdGhpcy5pc0Rvd24gPSB0cnVlXG5cbiAgICB0aGlzLnkuc3RhcnQgPSBlLnRvdWNoZXMgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUuY2xpZW50WVxuXG4gICAgdGhpcy5zY3JvbGwubGFzdCA9IHRoaXMuc2Nyb2xsLmN1cnJlbnRcbiAgfVxuXG4gIG9uVG91Y2hNb3ZlIChlKSB7XG4gICAgaWYgKCF0aGlzLmlzRG93bikgcmV0dXJuXG5cbiAgICBjb25zdCB5ID0gZS50b3VjaGVzID8gZS50b3VjaGVzWzBdLmNsaWVudFkgOiBlLmNsaWVudFlcblxuICAgIHRoaXMueS5lbmQgPSB5XG5cbiAgICBjb25zdCBkaXN0YW5jZSA9IHRoaXMueS5zdGFydCAtIHRoaXMueS5lbmRcblxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IHRoaXMuc2Nyb2xsLmxhc3QgKyBkaXN0YW5jZVxuICB9XG5cbiAgb25Ub3VjaFVwIChldmVudCkge1xuICAgIHRoaXMuaXNEb3duID0gZmFsc2VcbiAgfVxuXG4gIG9uV2hlZWwoeyBwaXhlbFkgfSl7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWVxuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcCgwLCB0aGlzLnNjcm9sbC5saW1pdCwgdGhpcy5zY3JvbGwudGFyZ2V0KVxuXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUodGhpcy5zY3JvbGwuY3VycmVudCwgdGhpcy5zY3JvbGwudGFyZ2V0LCAwLjEpXG5cbiAgICBpZiAodGhpcy5zY3JvbGwuY3VycmVudCA8IDAuMDEpIHtcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlciAmJiBEZXRlY3Rpb24uaXNEZXNrdG9wKCkpIHtcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMCwgLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weCwgMClgXG5cbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJylcbiAgICAgIGNvbnN0IG1pZGRsZVNjcmVlbiA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDJcblxuICAgICAgZWFjaChlbGVtZW50cywgZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgLy8gY29uc3QgbWlkZGxlRWxlbWVudCA9IGVsZW1lbnRSZWN0LnRvcCArIChlbGVtZW50UmVjdC5oZWlnaHQgLyAyKVxuICAgICAgIFxuICAgICAgICAvLyBjb25zdCBlbGVtZW50SW5NaWRkbGUgPSAobWlkZGxlRWxlbWVudCA+IG1pZGRsZVNjcmVlbiAvIDIpICYmIChtaWRkbGVFbGVtZW50IDwgKG1pZGRsZVNjcmVlbiAqIDIpIC8gMilcblxuICAgICAgICBpZihlbGVtZW50UmVjdC50b3AgPCBtaWRkbGVTY3JlZW4gJiYgZWxlbWVudFJlY3QuYm90dG9tID4gbWlkZGxlU2NyZWVuKXtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gXCJncmVlblwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IFwicmVkXCJcbiAgICAgICAgfVxuICAgICAgfSlcblxuICAgICAgXG5cbiAgICB9XG4gIH1cblxuICBhZGRFdmVudExpc3RlbmVycygpe31cblxuICByZW1vdmVFdmVudExpc3RlbmVycygpe31cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjlhMDIxY2U4NWE5NjM4YzcwZmZkXCIpIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsImlkIiwidGhpcyIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsInByZWxvYWRlcnMiLCJhbGVydCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZSIsIkRldGVjdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiYm9keSIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJ5Iiwic3RhcnQiLCJlbmQiLCJlYWNoIiwiZW50cnkiLCJrZXkiLCJIVE1MRWxlbWVudCIsIk5vZGVMaXN0IiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImNyZWF0ZVByZWxvYWRlciIsIm1hcCIsIkFzeW5jTG9hZCIsInNob3ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkluIiwiR1NBUCIsImZyb21UbyIsImF1dG9BbHBoYSIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJhbmltYXRpb25PdXQiLCJ0byIsIm9uQ29tcGxldGUiLCJvblJlc2l6ZSIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJzdHlsZSIsIm9wYWNpdHkiLCJvblRvdWNoRG93biIsImUiLCJpc0Rvd24iLCJ0b3VjaGVzIiwiY2xpZW50WSIsIm9uVG91Y2hNb3ZlIiwiZGlzdGFuY2UiLCJvblRvdWNoVXAiLCJldmVudCIsIm9uV2hlZWwiLCJwaXhlbFkiLCJ1cGRhdGUiLCJ0cmFuc2Zvcm0iLCJtaWRkbGVTY3JlZW4iLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImJvdHRvbSIsImNvbG9yIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9