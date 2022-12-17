/*! For license information please see main.6d765608c7d3316b6b65.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/components/Canvas/Detail/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var i=t("./node_modules/gsap/index.js"),h=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),r=t("./app/shaders/plane-fragment.glsl"),o=t("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:a}){this.element=e,this.geometry=s,this.gl=t,this.index=i,this.scene=h,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const e=this.element.querySelector(".detail__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:r,vertex:o,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),console.log(this.mesh)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateY(),this.updateX()}show(){i.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){i.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,s){this.extra={x:0,y:0},this.firstMesh=this.createBounds(e),this.updateX(s&&s.x),this.updateY(s&&s.y)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=-(-this.sizes.height/2+this.mesh.scale.y/2+this.y*this.sizes.height+this.extra.y)}update(e){-.2850724052430351!==this.mesh.position.y&&this.updateY(e)}}}},(function(e){e.h=()=>"6cba1c4c3c740a49e363"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtvQixNQUFNdkMsRUFBSSxFQUFNSCxLQUFLRyxFQUFLSCxLQUFLRCxNQUFNdUMsT0FBVXRDLEtBQUtDLE1BQU1FLEVBQzNILENBRUEyQyxPQUFPVixJQUN5QixvQkFBMUJwQyxLQUFLc0IsS0FBS3NCLFNBQVN6QyxHQUNyQkgsS0FBSzhCLFFBQVFNLEVBRWpCLGtCQzVIRlcsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb192Mi8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9EZXRhaWwvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR1NBUCBmcm9tICdnc2FwJztcbmltcG9ydCB7IE1lc2gsIFByb2dyYW0gfSBmcm9tICdvZ2wnO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSAnc2hhZGVycy9wbGFuZS1mcmFnbWVudC5nbHNsJztcbmltcG9ydCB2ZXJ0ZXggZnJvbSAnc2hhZGVycy9wbGFuZS12ZXJ0ZXguZ2xzbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBnZW9tZXRyeSwgZ2wsIGluZGV4LCBzY2VuZSwgc2l6ZXMgfSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgIHRoaXMuZ2wgPSBnbDtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcblxuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5jcmVhdGVUZXh0dXJlKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9ncmFtKCk7XG4gICAgdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgdGhpcy5jcmVhdGVCb3VuZHMoe1xuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlKCkge1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICcuZGV0YWlsX19tZWRpYV9faW1hZ2UnIClcbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXVxuICB9XG5cbiAgY3JlYXRlUHJvZ3JhbSgpIHtcbiAgICB0aGlzLnByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICBmcmFnbWVudCxcbiAgICAgIHZlcnRleCxcbiAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgIHVBbHBoYTogeyB2YWx1ZTogMCB9LFxuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLm1lc2gpO1xuICB9XG5cbiAgY3JlYXRlQm91bmRzKHsgc2l6ZXMgfSkge1xuICAgIHRoaXMuc2l6ZXMgPSBzaXplcztcblxuICAgIHRoaXMuYm91bmRzID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdGhpcy51cGRhdGVTY2FsZSgpO1xuICAgIHRoaXMudXBkYXRlWSgpO1xuICAgIHRoaXMudXBkYXRlWCgpXG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0aW9ucy5cbiAgICovXG4gIHNob3coKSB7XG4gICAgR1NBUC5mcm9tVG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDAsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnRzLlxuICAgKi9cbiAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuXG4gICAgdGhpcy5maXJzdE1lc2ggPSBcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKTtcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KTtcbiAgICB0aGlzLnVwZGF0ZVkoc2Nyb2xsICYmIHNjcm9sbC55KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wLlxuICAgKi9cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoO1xuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAgKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmEueDtcbiAgfVxuXG4gIHVwZGF0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAtKCgtdGhpcy5zaXplcy5oZWlnaHQgLyAyKSArICh0aGlzLm1lc2guc2NhbGUueSAvIDIpICsgKHRoaXMueSAgKiB0aGlzLnNpemVzLmhlaWdodCkgKyB0aGlzLmV4dHJhLnkpO1xuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIGlmICh0aGlzLm1lc2gucG9zaXRpb24ueSAhPT0gLTAuMjg1MDcyNDA1MjQzMDM1MSkge1xuICAgICAgdGhpcy51cGRhdGVZKHNjcm9sbCk7XG4gICAgfVxuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2Y2JhMWM0YzNjNzQwYTQ5ZTM2M1wiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJnZW9tZXRyeSIsImdsIiwiaW5kZXgiLCJzY2VuZSIsInNpemVzIiwidGhpcyIsImV4dHJhIiwieCIsInkiLCJjcmVhdGVUZXh0dXJlIiwiY3JlYXRlUHJvZ3JhbSIsImNyZWF0ZU1lc2giLCJjcmVhdGVCb3VuZHMiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0dXJlIiwid2luZG93IiwiVEVYVFVSRVMiLCJnZXRBdHRyaWJ1dGUiLCJwcm9ncmFtIiwiUHJvZ3JhbSIsImZyYWdtZW50IiwidmVydGV4IiwidW5pZm9ybXMiLCJ1QWxwaGEiLCJ2YWx1ZSIsInRNYXAiLCJtZXNoIiwiTWVzaCIsInNldFBhcmVudCIsImNvbnNvbGUiLCJsb2ciLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVkiLCJ1cGRhdGVYIiwic2hvdyIsIkdTQVAiLCJoaWRlIiwib25SZXNpemUiLCJzY3JvbGwiLCJmaXJzdE1lc2giLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9