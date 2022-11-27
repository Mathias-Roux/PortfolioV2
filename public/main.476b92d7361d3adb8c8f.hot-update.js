/*! For license information please see main.476b92d7361d3adb8c8f.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/components/Canvas/Home/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),r=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");class n{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.gl=s,this.geometry=t,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const e=this.element.querySelector(".home__gallery__card__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:r,vertex:o,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.updateX(t&&t.x),this.updateY(t&&t.y)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top-e)/window.innerHeight,this.mesh.position.y=-(-this.sizes.height/2+this.mesh.scale.y/2+this.y*this.sizes.height+this.extra.y)}update(e){this.updateY(e)}}}},(function(e){e.h=()=>"a02bd36f14ec985f946e"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxLQUFLRCxNQUFNb0MsT0FBVW5DLEtBQUtDLE1BQU1FLEVBQzNILENBR0F3QyxPQUFPVCxHQUNMbEMsS0FBSzZCLFFBQVFLLEVBQ2Ysa0JDNUdGVSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0hvbWUvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJztcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuXG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyh7XG4gICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfX2dhbGxlcnlfX2NhcmRfX21lZGlhX19pbWFnZScpXG4gICAgdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV07XG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAwIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG4gICAgfSk7XG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy51cGRhdGVTY2FsZSgpO1xuICAgIHRoaXMudXBkYXRlWCgpO1xuICAgIHRoaXMudXBkYXRlWSgpO1xuICB9XG5cbiAgLy8gQW5pbWF0aW9uc1xuICBzaG93KCkge1xuICAgIEdTQVAuZnJvbVRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgIH0sIHtcbiAgICAgIHZhbHVlOiAxLFxuICAgIH0pO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRXZlbnRzXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyhzaXplcyk7XG4gICAgdGhpcy51cGRhdGVYKHNjcm9sbCAmJiBzY3JvbGwueCk7XG4gICAgdGhpcy51cGRhdGVZKHNjcm9sbCAmJiBzY3JvbGwueSk7XG4gIH1cblxuICAvLyBMb29wLlxuICB1cGRhdGVTY2FsZSgpIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoO1xuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAgKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmEueDtcbiAgfVxuXG4gIHVwZGF0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wIC0geSkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSAtKCgtdGhpcy5zaXplcy5oZWlnaHQgLyAyKSArICh0aGlzLm1lc2guc2NhbGUueSAvIDIpICsgKHRoaXMueSAgKiB0aGlzLnNpemVzLmhlaWdodCkgKyB0aGlzLmV4dHJhLnkpO1xuICB9XG5cblxuICB1cGRhdGUoc2Nyb2xsKSB7XG4gICAgdGhpcy51cGRhdGVZKHNjcm9sbCk7XG4gIH1cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImEwMmJkMzZmMTRlYzk4NWY5NDZlXCIpIl0sIm5hbWVzIjpbIk1lZGlhIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1cGRhdGVTY2FsZSIsInVwZGF0ZVgiLCJ1cGRhdGVZIiwic2hvdyIsIkdTQVAiLCJoaWRlIiwib25SZXNpemUiLCJzY3JvbGwiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInNjYWxlIiwibGVmdCIsInBvc2l0aW9uIiwidG9wIiwidXBkYXRlIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImgiXSwic291cmNlUm9vdCI6IiJ9