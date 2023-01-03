/*! For license information please see main.fc351b08f1c630629cc6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/components/Canvas/Detail/Media.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>n});var i=s("./node_modules/ogl/src/core/Program.js"),h=s("./node_modules/ogl/src/core/Mesh.js"),a=s("./node_modules/gsap/index.js"),r=s("./app/shaders/plane-fragment.glsl"),o=s("./app/shaders/plane-vertex.glsl");class n{constructor({element:e,geometry:t,gl:s,index:i,scene:h,sizes:a}){this.element=e,this.gl=s,this.geometry=t,this.scene=h,this.index=i,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const e=this.element.querySelector(".detail__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new i.Program(this.gl,{fragment:r,vertex:o,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),console.log(this.bounds,"img"),this.updateScale(),this.updateX(),this.updateY()}show(){a.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){a.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,t){this.extra={x:0,y:0},this.createBounds(e),this.updateX(t&&t.x),this.updateY(t&&t.y)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left-e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}update(e){this.updateScale(),this.updateX(),this.updateY(e)}}}},(function(e){e.h=()=>"156f7a7db8d425280f29"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUttQixNQUFNdEMsRUFBSSxFQUFNSCxLQUFLRyxFQUFLSCxLQUFLRCxNQUFNc0MsT0FBVXJDLEtBQUtDLE1BQU1FLENBQ3hILENBRUEwQyxPQUFPVCxHQUNMcEMsS0FBSzZCLGNBQ0w3QixLQUFLOEIsVUFDTDlCLEtBQUsrQixRQUFRSyxFQUNmLGtCQzlHRlUsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb192Mi8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9EZXRhaWwvTWVkaWEuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNoLCBQcm9ncmFtIH0gZnJvbSAnb2dsJztcbmltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuXG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdsID0gZ2w7XG4gICAgdGhpcy5nZW9tZXRyeSA9IGdlb21ldHJ5O1xuICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuXG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyh7XG4gICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbF9fbWVkaWFfX2ltYWdlJylcbiAgICB0aGlzLnRleHR1cmUgPSB3aW5kb3cuVEVYVFVSRVNbaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpXTtcbiAgfVxuXG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB1QWxwaGE6IHsgdmFsdWU6IDAgfSxcbiAgICAgICAgdE1hcDogeyB2YWx1ZTogdGhpcy50ZXh0dXJlIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG4gICAgfSk7XG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc29sZS5sb2codGhpcy5ib3VuZHMsICdpbWcnKTtcbiAgICB0aGlzLnVwZGF0ZVNjYWxlKCk7XG4gICAgdGhpcy51cGRhdGVYKCk7XG4gICAgdGhpcy51cGRhdGVZKCk7XG4gIH1cblxuICAvLyBBbmltYXRpb25zXG4gIHNob3coKSB7XG4gICAgR1NBUC5mcm9tVG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDAsXG4gICAgfSwge1xuICAgICAgdmFsdWU6IDEsXG4gICAgfSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIEdTQVAudG8odGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVBbHBoYSwge1xuICAgICAgdmFsdWU6IDAsXG4gICAgfSk7XG4gIH1cblxuICAvLyBFdmVudHNcbiAgb25SZXNpemUoc2l6ZXMsIHNjcm9sbCkge1xuICAgIHRoaXMuZXh0cmEgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICB9O1xuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKTtcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KTtcbiAgICB0aGlzLnVwZGF0ZVkoc2Nyb2xsICYmIHNjcm9sbC55KTtcbiAgfVxuXG4gIC8vIExvb3AuXG4gIHVwZGF0ZVNjYWxlKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5ib3VuZHMuaGVpZ2h0IC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kcy53aWR0aCAvIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gdGhpcy5zaXplcy53aWR0aCAqIHRoaXMud2lkdGg7XG4gICAgdGhpcy5tZXNoLnNjYWxlLnkgPSB0aGlzLnNpemVzLmhlaWdodCAqIHRoaXMuaGVpZ2h0O1xuICB9XG5cbiAgdXBkYXRlWCh4ID0gMCkge1xuICAgIHRoaXMueCA9ICh0aGlzLmJvdW5kcy5sZWZ0IC0geCkgLyB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9IC0odGhpcy5zaXplcy53aWR0aCAvIDIpICsgKHRoaXMubWVzaC5zY2FsZS54IC8gMikgKyAodGhpcy54ICAqIHRoaXMuc2l6ZXMud2lkdGgpICsgdGhpcy5leHRyYS54O1xuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9ICh0aGlzLnNpemVzLmhlaWdodCAvIDIpIC0gKHRoaXMubWVzaC5zY2FsZS55IC8gMikgLSAodGhpcy55ICAqIHRoaXMuc2l6ZXMuaGVpZ2h0KSArIHRoaXMuZXh0cmEueTtcbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICB0aGlzLnVwZGF0ZVNjYWxlKClcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICAgIHRoaXMudXBkYXRlWShzY3JvbGwpO1xuICB9XG5cbn1cbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE1NmY3YTdkYjhkNDI1MjgwZjI5XCIpIl0sIm5hbWVzIjpbIk1lZGlhIiwiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInVwZGF0ZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==