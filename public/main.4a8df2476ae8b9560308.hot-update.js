/*! For license information please see main.4a8df2476ae8b9560308.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./app/components/Canvas/index.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var i=s("./node_modules/ogl/src/core/Renderer.js"),a=s("./node_modules/ogl/src/core/Camera.js"),n=s("./node_modules/ogl/src/core/Transform.js"),r=s("./app/components/Canvas/Detail/index.js");class h{constructor({template:e}){this.template=e,this.y={start:0,end:0},this.createRenderer(),this.createScene(),this.createCamera(),this.onResize()}createRenderer(){this.renderer=new i.Renderer({alpha:!0,antialias:!0}),this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}createCamera(){this.camera=new a.Camera(this.gl),this.camera.position.z=5}createScene(){this.scene=new n.Transform}createDetail(){this.detail=new r.default({gl:this.gl,scene:this.scene,sizes:this.sizes})}destroyDetail(){this.detail&&(this.detail.destroy(),this.detail=null)}onPreloaded(){this.onChangeEnd(this.template)}onChangeStart(e){this.detail&&this.detail.hide()}onChangeEnd(e){"detail"===e?this.createDetail():this.detail&&this.destroyDetail(),this.template=e}onResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:this.gl.canvas.width/this.gl.canvas.height});const e=this.camera.fov*(Math.PI/180),t=2*Math.tan(e/2)*this.camera.position.z,s=t*this.camera.aspect;this.sizes={height:t,width:s};const i={sizes:this.sizes};this.detail&&this.detail.onResize(i)}onWheel(e){this.detail&&this.detail.onWheel(e)}update(e){this.detail&&this.detail.update(e),this.renderer.render({camera:this.camera,scene:this.scene})}}}},(function(e){e.h=()=>"25d34befde643f10e841"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40YThkZjI0NzZhZThiOTU2MDMwOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7aVVBSWUsTUFBTUEsRUFDbkJDLGFBQVksU0FBRUMsSUFDWkMsS0FBS0QsU0FBV0EsRUFFaEJDLEtBQUtDLEVBQUksQ0FDUEMsTUFBTyxFQUNQQyxJQUFLLEdBR1BILEtBQUtJLGlCQUNMSixLQUFLSyxjQUNMTCxLQUFLTSxlQUVMTixLQUFLTyxVQUNQLENBRUFILGlCQUNFSixLQUFLUSxTQUFXLElBQUlDLEVBQUFBLFNBQVMsQ0FDM0JDLE9BQU8sRUFDUEMsV0FBVyxJQUdiWCxLQUFLWSxHQUFLWixLQUFLUSxTQUFTSSxHQUV4QkMsU0FBU0MsS0FBS0MsWUFBWWYsS0FBS1ksR0FBR0ksT0FDcEMsQ0FFQVYsZUFDRU4sS0FBS2lCLE9BQVMsSUFBSUMsRUFBQUEsT0FBT2xCLEtBQUtZLElBRTlCWixLQUFLaUIsT0FBT0UsU0FBU0MsRUFBSSxDQUMzQixDQUVBZixjQUNFTCxLQUFLcUIsTUFBUSxJQUFJQyxFQUFBQSxTQUNuQixDQU1DQyxlQUNDdkIsS0FBS3dCLE9BQVMsSUFBSUMsRUFBQUEsUUFBTyxDQUN2QmIsR0FBSVosS0FBS1ksR0FDVFMsTUFBT3JCLEtBQUtxQixNQUNaSyxNQUFPMUIsS0FBSzBCLE9BRWhCLENBRUFDLGdCQUNPM0IsS0FBS3dCLFNBQ1Z4QixLQUFLd0IsT0FBT0ksVUFDWjVCLEtBQUt3QixPQUFTLEtBQ2hCLENBR0FLLGNBQ0U3QixLQUFLOEIsWUFBWTlCLEtBQUtELFNBQ3hCLENBRUFnQyxjQUFjQyxHQUNUaEMsS0FBS3dCLFFBQ054QixLQUFLd0IsT0FBT1MsTUFFaEIsQ0FFQUgsWUFBWS9CLEdBQ08sV0FBYkEsRUFDRkMsS0FBS3VCLGVBQ0l2QixLQUFLd0IsUUFDZHhCLEtBQUsyQixnQkFHUDNCLEtBQUtELFNBQVdBLENBQ2xCLENBRUFRLFdBQ0VQLEtBQUtRLFNBQVMwQixRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRHJDLEtBQUtpQixPQUFPcUIsWUFBWSxDQUN0QkMsT0FBUXZDLEtBQUtZLEdBQUdJLE9BQU93QixNQUFReEMsS0FBS1ksR0FBR0ksT0FBT3lCLFNBR2hELE1BQU1DLEVBQU0xQyxLQUFLaUIsT0FBT3lCLEtBQU9DLEtBQUtDLEdBQUssS0FDbkNILEVBQVMsRUFBSUUsS0FBS0UsSUFBSUgsRUFBTSxHQUFLMUMsS0FBS2lCLE9BQU9FLFNBQVNDLEVBQ3REb0IsRUFBUUMsRUFBU3pDLEtBQUtpQixPQUFPc0IsT0FFbkN2QyxLQUFLMEIsTUFBUSxDQUNYZSxTQUNBRCxTQUdGLE1BQU1NLEVBQVMsQ0FDYnBCLE1BQU8xQixLQUFLMEIsT0FHWDFCLEtBQUt3QixRQUNOeEIsS0FBS3dCLE9BQU9qQixTQUFTdUMsRUFFekIsQ0FFQUMsUUFBUUMsR0FDSGhELEtBQUt3QixRQUNOeEIsS0FBS3dCLE9BQU91QixRQUFRQyxFQUV4QixDQUVBQyxPQUFPQyxHQUNEbEQsS0FBS3dCLFFBQ1B4QixLQUFLd0IsT0FBT3lCLE9BQU9DLEdBR3JCbEQsS0FBS1EsU0FBUzJDLE9BQU8sQ0FDbkJsQyxPQUFRakIsS0FBS2lCLE9BQ2JJLE1BQU9yQixLQUFLcUIsT0FFaEIsa0JDeEhGK0IsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb192Mi8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhbWVyYSwgUmVuZGVyZXIsIFRyYW5zZm9ybSB9IGZyb20gJ29nbCc7XG5cbmltcG9ydCBEZXRhaWwgZnJvbSAnLi9EZXRhaWwnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHsgdGVtcGxhdGUgfSkge1xuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuXG4gICAgdGhpcy55ID0ge1xuICAgICAgc3RhcnQ6IDAsXG4gICAgICBlbmQ6IDBcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKClcbiAgICB0aGlzLmNyZWF0ZVNjZW5lKClcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpXG5cbiAgICB0aGlzLm9uUmVzaXplKClcbiAgfVxuXG4gIGNyZWF0ZVJlbmRlcmVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoe1xuICAgICAgYWxwaGE6IHRydWUsXG4gICAgICBhbnRpYWxpYXM6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmdsLmNhbnZhcyk7XG4gIH1cblxuICBjcmVhdGVDYW1lcmEoKSB7XG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuZ2wpO1xuXG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDU7XG4gIH1cblxuICBjcmVhdGVTY2VuZSgpIHtcbiAgICB0aGlzLnNjZW5lID0gbmV3IFRyYW5zZm9ybSgpXG4gIH1cblxuXG4gIC8qKlxuICAgKiBERVRBSUxcbiAgICovXG4gICBjcmVhdGVEZXRhaWwoKSB7XG4gICAgdGhpcy5kZXRhaWwgPSBuZXcgRGV0YWlsKHtcbiAgICAgIGdsOiB0aGlzLmdsLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH0pXG4gIH1cblxuICBkZXN0cm95RGV0YWlsKCl7XG4gICAgaWYgKCF0aGlzLmRldGFpbCkgcmV0dXJuXG4gICAgdGhpcy5kZXRhaWwuZGVzdHJveSgpXG4gICAgdGhpcy5kZXRhaWwgPSBudWxsXG4gIH1cblxuXG4gIG9uUHJlbG9hZGVkKCl7XG4gICAgdGhpcy5vbkNoYW5nZUVuZCh0aGlzLnRlbXBsYXRlKVxuICB9XG5cbiAgb25DaGFuZ2VTdGFydCh1cmwpe1xuICAgIGlmKHRoaXMuZGV0YWlsKXtcbiAgICAgIHRoaXMuZGV0YWlsLmhpZGUoKVxuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlRW5kKHRlbXBsYXRlKXtcbiAgICBpZiAodGVtcGxhdGUgPT09ICdkZXRhaWwnKSB7XG4gICAgICB0aGlzLmNyZWF0ZURldGFpbCgpXG4gICAgfSBlbHNlIGlmICh0aGlzLmRldGFpbCl7XG4gICAgICB0aGlzLmRlc3Ryb3lEZXRhaWwoKVxuICAgIH1cblxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgdGhpcy5jYW1lcmEucGVyc3BlY3RpdmUoe1xuICAgICAgYXNwZWN0OiB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2wuY2FudmFzLmhlaWdodFxuICAgIH0pO1xuXG4gICAgY29uc3QgZm92ID0gdGhpcy5jYW1lcmEuZm92ICogKE1hdGguUEkgLyAxODApXG4gICAgY29uc3QgaGVpZ2h0ID0gMiAqIE1hdGgudGFuKGZvdiAvIDIpICogdGhpcy5jYW1lcmEucG9zaXRpb24uelxuICAgIGNvbnN0IHdpZHRoID0gaGVpZ2h0ICogdGhpcy5jYW1lcmEuYXNwZWN0XG5cbiAgICB0aGlzLnNpemVzID0ge1xuICAgICAgaGVpZ2h0LFxuICAgICAgd2lkdGhcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB7XG4gICAgICBzaXplczogdGhpcy5zaXplc1xuICAgIH1cblxuICAgIGlmKHRoaXMuZGV0YWlsKXtcbiAgICAgIHRoaXMuZGV0YWlsLm9uUmVzaXplKHZhbHVlcylcbiAgICB9XG4gIH1cblxuICBvbldoZWVsKGV2ZW50KXtcbiAgICBpZih0aGlzLmRldGFpbCl7XG4gICAgICB0aGlzLmRldGFpbC5vbldoZWVsKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShzY3JvbGwpIHtcbiAgICBpZiAodGhpcy5kZXRhaWwpIHtcbiAgICAgIHRoaXMuZGV0YWlsLnVwZGF0ZShzY3JvbGwpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHtcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMjVkMzRiZWZkZTY0M2YxMGU4NDFcIikiXSwibmFtZXMiOlsiQ2FudmFzIiwiY29uc3RydWN0b3IiLCJ0ZW1wbGF0ZSIsInRoaXMiLCJ5Iiwic3RhcnQiLCJlbmQiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ2FtZXJhIiwib25SZXNpemUiLCJyZW5kZXJlciIsIlJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJnbCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6Iiwic2NlbmUiLCJUcmFuc2Zvcm0iLCJjcmVhdGVEZXRhaWwiLCJkZXRhaWwiLCJEZXRhaWwiLCJzaXplcyIsImRlc3Ryb3lEZXRhaWwiLCJkZXN0cm95Iiwib25QcmVsb2FkZWQiLCJvbkNoYW5nZUVuZCIsIm9uQ2hhbmdlU3RhcnQiLCJ1cmwiLCJoaWRlIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBlcnNwZWN0aXZlIiwiYXNwZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3YiLCJNYXRoIiwiUEkiLCJ0YW4iLCJ2YWx1ZXMiLCJvbldoZWVsIiwiZXZlbnQiLCJ1cGRhdGUiLCJzY3JvbGwiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=