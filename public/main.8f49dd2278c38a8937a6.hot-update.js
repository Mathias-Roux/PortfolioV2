/*! For license information please see main.8f49dd2278c38a8937a6.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/components/Canvas/Detail/Media.js":(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});var i=t("./node_modules/gsap/index.js"),h=t("./node_modules/ogl/src/core/Program.js"),a=t("./node_modules/ogl/src/core/Mesh.js"),o=t("./app/shaders/plane-fragment.glsl"),r=t("./app/shaders/plane-vertex.glsl");const n=class{constructor({element:e,geometry:s,gl:t,index:i,scene:h,sizes:a}){this.element=e,this.geometry=s,this.gl=t,this.index=i,this.scene=h,this.sizes=a,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}createTexture(){const e=this.element.querySelector(".detail__media__image");this.texture=window.TEXTURES[e.getAttribute("data-src")]}createProgram(){this.program=new h.Program(this.gl,{fragment:o,vertex:r,uniforms:{uAlpha:{value:0},tMap:{value:this.texture}}})}createMesh(){this.mesh=new a.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),0===this.mesh.id&&(this.firstMeshPositionY=this.mesh.position.y)}createBounds({sizes:e}){this.sizes=e,this.bounds=this.element.getBoundingClientRect(),this.updateScale(),this.updateY(),this.updateX()}show(){i.default.fromTo(this.program.uniforms.uAlpha,{value:0},{value:1})}hide(){i.default.to(this.program.uniforms.uAlpha,{value:0})}onResize(e,s){this.extra={x:0,y:0},this.createBounds(e),this.updateX(s&&s.x),this.updateY(s&&s.y)}updateScale(){this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=this.sizes.width*this.width,this.mesh.scale.y=this.sizes.height*this.height}updateX(e=0){this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}updateY(e=0){this.y=(this.bounds.top+e)/window.innerHeight,console.log(this.y),this.mesh.position.y=-(-this.sizes.height/2+this.mesh.scale.y/2+this.y*this.sizes.height+this.extra.y)}update(e){this.updateY(e)}}},"./styles/index.scss":(e,s,t)=>{t.r(s);var i=t("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:"",locals:!1});e.hot.dispose(i),e.hot.accept(void 0,i)}},(function(e){e.h=()=>"4307133784c24b5f293a"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZjQ5ZGQyMjc4YzM4YTg5MzdhNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7MFZBTUEsY0FDRUEsYUFBWSxRQUFFQyxFQUFPLFNBQUVDLEVBQVEsR0FBRUMsRUFBRSxNQUFFQyxFQUFLLE1BQUVDLEVBQUssTUFBRUMsSUFDakRDLEtBQUtOLFFBQVVBLEVBQ2ZNLEtBQUtMLFNBQVdBLEVBQ2hCSyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxNQUFRQSxFQUNiRyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxNQUFRQSxFQUViQyxLQUFLQyxNQUFRLENBQ1hDLEVBQUcsRUFDSEMsRUFBRyxHQUdMSCxLQUFLSSxnQkFDTEosS0FBS0ssZ0JBQ0xMLEtBQUtNLGFBQ0xOLEtBQUtPLGFBQWEsQ0FDaEJSLE1BQU9DLEtBQUtELE9BRWhCLENBRUFLLGdCQUNFLE1BQU1JLEVBQVFSLEtBQUtOLFFBQVFlLGNBQWUseUJBQzFDVCxLQUFLVSxRQUFVQyxPQUFPQyxTQUFTSixFQUFNSyxhQUFhLFlBQ3BELENBRUFSLGdCQUNFTCxLQUFLYyxRQUFVLElBQUlDLEVBQUFBLFFBQVFmLEtBQUtKLEdBQUksQ0FDbENvQixTQUFRLEVBQ1JDLE9BQU0sRUFDTkMsU0FBVSxDQUNSQyxPQUFRLENBQUVDLE1BQU8sR0FDakJDLEtBQU0sQ0FBRUQsTUFBT3BCLEtBQUtVLFdBRzFCLENBRUFKLGFBQ0VOLEtBQUtzQixLQUFPLElBQUlDLEVBQUFBLEtBQUt2QixLQUFLSixHQUFJLENBQzVCRCxTQUFVSyxLQUFLTCxTQUNmbUIsUUFBU2QsS0FBS2MsVUFHaEJkLEtBQUtzQixLQUFLRSxVQUFVeEIsS0FBS0YsT0FFSixJQUFqQkUsS0FBS3NCLEtBQUtHLEtBQ1p6QixLQUFLMEIsbUJBQXFCMUIsS0FBS3NCLEtBQUtLLFNBQVN4QixFQUVqRCxDQUVBSSxjQUFhLE1BQUVSLElBQ2JDLEtBQUtELE1BQVFBLEVBRWJDLEtBQUs0QixPQUFTNUIsS0FBS04sUUFBUW1DLHdCQUUzQjdCLEtBQUs4QixjQUNMOUIsS0FBSytCLFVBQ0wvQixLQUFLZ0MsU0FDUCxDQUtBQyxPQUNFQyxFQUFBQSxRQUFBQSxPQUFZbEMsS0FBS2MsUUFBUUksU0FBU0MsT0FBUSxDQUN0Q0MsTUFBTyxHQUVULENBQ0VBLE1BQU8sR0FHYixDQUVBZSxPQUNFRCxFQUFBQSxRQUFBQSxHQUFRbEMsS0FBS2MsUUFBUUksU0FBU0MsT0FBUSxDQUNwQ0MsTUFBTyxHQUVYLENBS0FnQixTQUFTckMsRUFBT3NDLEdBQ2RyQyxLQUFLQyxNQUFRLENBQ1hDLEVBQUcsRUFDSEMsRUFBRyxHQUdMSCxLQUFLTyxhQUFhUixHQUNsQkMsS0FBS2dDLFFBQVFLLEdBQVVBLEVBQU9uQyxHQUM5QkYsS0FBSytCLFFBQVFNLEdBQVVBLEVBQU9sQyxFQUNoQyxDQUtBMkIsY0FDRTlCLEtBQUtzQyxPQUFTdEMsS0FBSzRCLE9BQU9VLE9BQVMzQixPQUFPNEIsWUFDMUN2QyxLQUFLd0MsTUFBUXhDLEtBQUs0QixPQUFPWSxNQUFRN0IsT0FBTzhCLFdBRXhDekMsS0FBS3NCLEtBQUtvQixNQUFNeEMsRUFBSUYsS0FBS0QsTUFBTXlDLE1BQVF4QyxLQUFLd0MsTUFDNUN4QyxLQUFLc0IsS0FBS29CLE1BQU12QyxFQUFJSCxLQUFLRCxNQUFNdUMsT0FBU3RDLEtBQUtzQyxNQUMvQyxDQUVBTixRQUFROUIsRUFBSSxHQUNWRixLQUFLRSxHQUFLRixLQUFLNEIsT0FBT2UsS0FBT3pDLEdBQUtTLE9BQU84QixXQUN6Q3pDLEtBQUtzQixLQUFLSyxTQUFTekIsR0FBTUYsS0FBS0QsTUFBTXlDLE1BQVEsRUFBTXhDLEtBQUtzQixLQUFLb0IsTUFBTXhDLEVBQUksRUFBTUYsS0FBS0UsRUFBS0YsS0FBS0QsTUFBTXlDLE1BQVN4QyxLQUFLQyxNQUFNQyxDQUN2SCxDQUVBNkIsUUFBUTVCLEVBQUksR0FDVkgsS0FBS0csR0FBS0gsS0FBSzRCLE9BQU9nQixJQUFNekMsR0FBS1EsT0FBTzRCLFlBQ3hDTSxRQUFRQyxJQUFJOUMsS0FBS0csR0FDakJILEtBQUtzQixLQUFLSyxTQUFTeEIsS0FBUUgsS0FBS0QsTUFBTXVDLE9BQVMsRUFBTXRDLEtBQUtzQixLQUFLb0IsTUFBTXZDLEVBQUksRUFBTUgsS0FBS0csRUFBSUgsS0FBS0QsTUFBTXVDLE9BQVV0QyxLQUFLQyxNQUFNRSxFQUMxSCxDQUVBNEMsT0FBT1YsR0FDTHJDLEtBQUsrQixRQUFRTSxFQUNmLDJDQ3hISSxJQUFJVyxFQUFZLEVBQVEsMEVBQVIsQ0FBb0ZDLEVBQU94QixHQUFJLENBQUMsV0FBYSxHQUFHLFFBQVMsSUFDekl3QixFQUFPQyxJQUFJQyxRQUFRSCxHQUNuQkMsRUFBT0MsSUFBSUUsWUFBT0MsRUFBV0wsa0JDTm5DTSxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvX3YyLy4vYXBwL2NvbXBvbmVudHMvQ2FudmFzL0RldGFpbC9NZWRpYS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9zdHlsZXMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gJ2dzYXAnO1xuaW1wb3J0IHsgTWVzaCwgUHJvZ3JhbSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBmcmFnbWVudCBmcm9tICdzaGFkZXJzL3BsYW5lLWZyYWdtZW50Lmdsc2wnO1xuaW1wb3J0IHZlcnRleCBmcm9tICdzaGFkZXJzL3BsYW5lLXZlcnRleC5nbHNsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuXG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyh7XG4gICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvciggJy5kZXRhaWxfX21lZGlhX19pbWFnZScgKVxuICAgIHRoaXMudGV4dHVyZSA9IHdpbmRvdy5URVhUVVJFU1tpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyldXG4gIH1cblxuICBjcmVhdGVQcm9ncmFtKCkge1xuICAgIHRoaXMucHJvZ3JhbSA9IG5ldyBQcm9ncmFtKHRoaXMuZ2wsIHtcbiAgICAgIGZyYWdtZW50LFxuICAgICAgdmVydGV4LFxuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgdUFscGhhOiB7IHZhbHVlOiAwIH0sXG4gICAgICAgIHRNYXA6IHsgdmFsdWU6IHRoaXMudGV4dHVyZSB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU1lc2goKSB7XG4gICAgdGhpcy5tZXNoID0gbmV3IE1lc2godGhpcy5nbCwge1xuICAgICAgZ2VvbWV0cnk6IHRoaXMuZ2VvbWV0cnksXG4gICAgICBwcm9ncmFtOiB0aGlzLnByb2dyYW0sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuXG4gICAgaWYgKHRoaXMubWVzaC5pZCA9PT0gMCkge1xuICAgICAgdGhpcy5maXJzdE1lc2hQb3NpdGlvblkgPSB0aGlzLm1lc2gucG9zaXRpb24ueVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJvdW5kcyh7IHNpemVzIH0pIHtcbiAgICB0aGlzLnNpemVzID0gc2l6ZXM7XG5cbiAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRoaXMudXBkYXRlU2NhbGUoKTtcbiAgICB0aGlzLnVwZGF0ZVkoKTtcbiAgICB0aGlzLnVwZGF0ZVgoKVxuICB9XG5cbiAgLyoqXG4gICAqIEFuaW1hdGlvbnMuXG4gICAqL1xuICBzaG93KCkge1xuICAgIEdTQVAuZnJvbVRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBHU0FQLnRvKHRoaXMucHJvZ3JhbS51bmlmb3Jtcy51QWxwaGEsIHtcbiAgICAgIHZhbHVlOiAwLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50cy5cbiAgICovXG4gIG9uUmVzaXplKHNpemVzLCBzY3JvbGwpIHtcbiAgICB0aGlzLmV4dHJhID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgfTtcblxuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKTtcbiAgICB0aGlzLnVwZGF0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KTtcbiAgICB0aGlzLnVwZGF0ZVkoc2Nyb2xsICYmIHNjcm9sbC55KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wLlxuICAgKi9cbiAgdXBkYXRlU2NhbGUoKSB7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kcy5oZWlnaHQgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuYm91bmRzLndpZHRoIC8gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IHRoaXMuc2l6ZXMud2lkdGggKiB0aGlzLndpZHRoO1xuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gdGhpcy5zaXplcy5oZWlnaHQgKiB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggPSAoLXRoaXMuc2l6ZXMud2lkdGggLyAyKSArICh0aGlzLm1lc2guc2NhbGUueCAvIDIpICsgKHRoaXMueCAgKiB0aGlzLnNpemVzLndpZHRoKSArIHRoaXMuZXh0cmEueDtcbiAgfVxuXG4gIHVwZGF0ZVkoeSA9IDApIHtcbiAgICB0aGlzLnkgPSAodGhpcy5ib3VuZHMudG9wICsgeSkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc29sZS5sb2codGhpcy55KTtcbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueSA9IC0oKC10aGlzLnNpemVzLmhlaWdodCAvIDIpICsgKHRoaXMubWVzaC5zY2FsZS55IC8gMikgKyAodGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQpICsgdGhpcy5leHRyYS55KVxuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCkge1xuICAgIHRoaXMudXBkYXRlWShzY3JvbGwpO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjcxMjk0NjE2MTM1XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcInB1YmxpY1BhdGhcIjpcIlwiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDMwNzEzMzc4NGMyNGI1ZjI5M2FcIikiXSwibmFtZXMiOlsiY29uc3RydWN0b3IiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwiaW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwidGV4dHVyZSIsIndpbmRvdyIsIlRFWFRVUkVTIiwiZ2V0QXR0cmlidXRlIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidUFscGhhIiwidmFsdWUiLCJ0TWFwIiwibWVzaCIsIk1lc2giLCJzZXRQYXJlbnQiLCJpZCIsImZpcnN0TWVzaFBvc2l0aW9uWSIsInBvc2l0aW9uIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVZIiwidXBkYXRlWCIsInNob3ciLCJHU0FQIiwiaGlkZSIsIm9uUmVzaXplIiwic2Nyb2xsIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJ3aWR0aCIsImlubmVyV2lkdGgiLCJzY2FsZSIsImxlZnQiLCJ0b3AiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlIiwiY3NzUmVsb2FkIiwibW9kdWxlIiwiaG90IiwiZGlzcG9zZSIsImFjY2VwdCIsInVuZGVmaW5lZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==