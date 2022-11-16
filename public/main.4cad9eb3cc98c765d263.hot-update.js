/*! For license information please see main.4cad9eb3cc98c765d263.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdateportfolio_v2("main",{"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":(e,n,t)=>{var o=t("./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js"),r=Object.create(null),i="undefined"==typeof document,c=Array.prototype.forEach;function s(){}function l(e,n){if(!n){if(!e.href)return;n=e.href.split("?")[0]}if(u(n)&&!1!==e.isLoaded&&n&&n.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(n,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function a(e){if(!e)return!1;var n=document.querySelectorAll("link"),t=!1;return c.call(n,(function(n){if(n.href){var r=function(e,n){var t;return e=o(e),n.some((function(o){e.indexOf(n)>-1&&(t=o)})),t}(n.href,e);u(r)&&!0!==n.visited&&r&&(l(n,r),t=!0)}})),t}function d(){var e=document.querySelectorAll("link");c.call(e,(function(e){!0!==e.visited&&l(e)}))}function u(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,n){if(i)return console.log("no window.document found, will not HMR CSS"),s;var t,c,l,u=function(e){var n=r[e];if(!n){if(document.currentScript)n=document.currentScript.src;else{var t=document.getElementsByTagName("script"),i=t[t.length-1];i&&(n=i.src)}r[e]=n}return function(e){if(!n)return null;var t=n.split(/([^\\/]+)\.js$/),r=t&&t[1];return r&&e?e.split(",").map((function(e){var t=new RegExp("".concat(r,"\\.js$"),"g");return o(n.replace(t,"".concat(e.replace(/{fileName}/g,r),".css")))})):[n.replace(".js",".css")]}}(e);return t=function(){var e=u(n.filename),t=a(e);if(n.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void d();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),d())},c=50,l=0,function(){var e=this,n=arguments,o=function(){return t.apply(e,n)};clearTimeout(l),l=setTimeout(o,c)}}},"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var n=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(n,"i"),"").split("/"),o=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",n+o+t.reduce((function(e,n){switch(n){case"..":e.pop();break;case".":break;default:e.push(n)}return e}),[]).join("/")}},"./styles/index.scss":(e,n,t)=>{t.r(n);var o=t("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{publicPath:"",locals:!1});e.hot.dispose(o),e.hot.accept(void 0,o)}},(function(e){e.h=()=>"d1f08e12fff46c2df958"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1osTUFFRixJQUFLLElBQ0gsTUFFRixRQUNFRixFQUFZRyxLQUFLRixHQUdyQixPQUFPRCxDQUNULEdBRUEsSUFBSWhCLEtBQUssSUFxQlgsMENDMUNNLElBQUlvQixFQUFZLEVBQVEsMEVBQVIsQ0FBb0Y5QyxFQUFPK0MsR0FBSSxDQUFDLFdBQWEsR0FBRyxRQUFTLElBQ3pJL0MsRUFBT2dELElBQUlDLFFBQVFILEdBQ25COUMsRUFBT2dELElBQUlFLFlBQU9DLEVBQVdMLGtCQ05uQ00sRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpb192Mi8uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvbm9ybWFsaXplLXVybC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fdjIvLi9zdHlsZXMvaW5kZXguc2Nzcz9mMGZmIiwid2VicGFjazovL3BvcnRmb2xpb192Mi93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKlxuICBlc2xpbnQtZGlzYWJsZVxuICBuby1jb25zb2xlLFxuICBmdW5jLW5hbWVzXG4qL1xuXG4vKiogQHR5cGVkZWYge2FueX0gVE9ETyAqL1xudmFyIG5vcm1hbGl6ZVVybCA9IHJlcXVpcmUoXCIuL25vcm1hbGl6ZS11cmxcIik7XG5cbnZhciBzcmNCeU1vZHVsZUlkID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbnZhciBub0RvY3VtZW50ID0gdHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiO1xudmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gKiBAcmV0dXJucyB7KGZ1bmN0aW9uKCk6IHZvaWQpfCp9XG4gKi9cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4sIHRpbWUpIHtcbiAgdmFyIHRpbWVvdXQgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB2YXIgc2VsZiA9IHRoaXM7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcblxuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgdmFyIGZ1bmN0aW9uQ2FsbCA9IGZ1bmN0aW9uIGZ1bmN0aW9uQ2FsbCgpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpOyAvLyBAdHMtaWdub3JlXG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbkNhbGwsIHRpbWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBtb2R1bGVJZFxuICogQHJldHVybnMge1RPRE99XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKSB7XG4gIHZhciBzcmMgPSBzcmNCeU1vZHVsZUlkW21vZHVsZUlkXTtcblxuICBpZiAoIXNyYykge1xuICAgIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgICBzcmMgPVxuICAgICAgLyoqIEB0eXBlIHtIVE1MU2NyaXB0RWxlbWVudH0gKi9cbiAgICAgIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuICAgICAgdmFyIGxhc3RTY3JpcHRUYWcgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0U2NyaXB0VGFnKSB7XG4gICAgICAgIHNyYyA9IGxhc3RTY3JpcHRUYWcuc3JjO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNyY0J5TW9kdWxlSWRbbW9kdWxlSWRdID0gc3JjO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1hcFxuICAgKiBAcmV0dXJucyB7bnVsbCB8IHN0cmluZ1tdfVxuICAgKi9cblxuXG4gIHJldHVybiBmdW5jdGlvbiAoZmlsZU1hcCkge1xuICAgIGlmICghc3JjKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc3BsaXRSZXN1bHQgPSBzcmMuc3BsaXQoLyhbXlxcXFwvXSspXFwuanMkLyk7XG4gICAgdmFyIGZpbGVuYW1lID0gc3BsaXRSZXN1bHQgJiYgc3BsaXRSZXN1bHRbMV07XG5cbiAgICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuXG4gICAgaWYgKCFmaWxlTWFwKSB7XG4gICAgICByZXR1cm4gW3NyYy5yZXBsYWNlKFwiLmpzXCIsIFwiLmNzc1wiKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVNYXAuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbiAobWFwUnVsZSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoXCJcIi5jb25jYXQoZmlsZW5hbWUsIFwiXFxcXC5qcyRcIiksIFwiZ1wiKTtcbiAgICAgIHJldHVybiBub3JtYWxpemVVcmwoc3JjLnJlcGxhY2UocmVnLCBcIlwiLmNvbmNhdChtYXBSdWxlLnJlcGxhY2UoL3tmaWxlTmFtZX0vZywgZmlsZW5hbWUpLCBcIi5jc3NcIikpKTtcbiAgICB9KTtcbiAgfTtcbn1cbi8qKlxuICogQHBhcmFtIHtUT0RPfSBlbFxuICogQHBhcmFtIHtzdHJpbmd9IFt1cmxdXG4gKi9cblxuXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWwsIHVybCkge1xuICBpZiAoIXVybCkge1xuICAgIGlmICghZWwuaHJlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cblxuICAgIHVybCA9IGVsLmhyZWYuc3BsaXQoXCI/XCIpWzBdO1xuICB9XG5cbiAgaWYgKCFpc1VybFJlcXVlc3QoXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICB1cmwpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsLmlzTG9hZGVkID09PSBmYWxzZSkge1xuICAgIC8vIFdlIHNlZW0gdG8gYmUgYWJvdXQgdG8gcmVwbGFjZSBhIGNzcyBsaW5rIHRoYXQgaGFzbid0IGxvYWRlZCB5ZXQuXG4gICAgLy8gV2UncmUgcHJvYmFibHkgY2hhbmdpbmcgdGhlIHNhbWUgZmlsZSBtb3JlIHRoYW4gb25jZS5cbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXVybCB8fCAhKHVybC5pbmRleE9mKFwiLmNzc1wiKSA+IC0xKSkge1xuICAgIHJldHVybjtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIGVsLnZpc2l0ZWQgPSB0cnVlO1xuICB2YXIgbmV3RWwgPSBlbC5jbG9uZU5vZGUoKTtcbiAgbmV3RWwuaXNMb2FkZWQgPSBmYWxzZTtcbiAgbmV3RWwuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXdFbC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ld0VsLmlzTG9hZGVkID0gdHJ1ZTtcbiAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgfSk7XG4gIG5ld0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5ld0VsLmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmV3RWwuaXNMb2FkZWQgPSB0cnVlO1xuICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICB9KTtcbiAgbmV3RWwuaHJlZiA9IFwiXCIuY29uY2F0KHVybCwgXCI/XCIpLmNvbmNhdChEYXRlLm5vdygpKTtcblxuICBpZiAoZWwubmV4dFNpYmxpbmcpIHtcbiAgICBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbCwgZWwubmV4dFNpYmxpbmcpO1xuICB9IGVsc2Uge1xuICAgIGVsLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RWwpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBocmVmXG4gKiBAcGFyYW0ge1RPRE99IHNyY1xuICogQHJldHVybnMge1RPRE99XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRSZWxvYWRVcmwoaHJlZiwgc3JjKSB7XG4gIHZhciByZXQ7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXG4gIGhyZWYgPSBub3JtYWxpemVVcmwoaHJlZik7XG4gIHNyYy5zb21lKFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICBmdW5jdGlvbiAodXJsKSB7XG4gICAgaWYgKGhyZWYuaW5kZXhPZihzcmMpID4gLTEpIHtcbiAgICAgIHJldCA9IHVybDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmV0O1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NyY11cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cblxuZnVuY3Rpb24gcmVsb2FkU3R5bGUoc3JjKSB7XG4gIGlmICghc3JjKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIHZhciBsb2FkZWQgPSBmYWxzZTtcbiAgZm9yRWFjaC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoIWVsLmhyZWYpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdXJsID0gZ2V0UmVsb2FkVXJsKGVsLmhyZWYsIHNyYyk7XG5cbiAgICBpZiAoIWlzVXJsUmVxdWVzdCh1cmwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodXJsKSB7XG4gICAgICB1cGRhdGVDc3MoZWwsIHVybCk7XG4gICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsb2FkZWQ7XG59XG5cbmZ1bmN0aW9uIHJlbG9hZEFsbCgpIHtcbiAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtcIik7XG4gIGZvckVhY2guY2FsbChlbGVtZW50cywgZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsLnZpc2l0ZWQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB1cGRhdGVDc3MoZWwpO1xuICB9KTtcbn1cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuXG5mdW5jdGlvbiBpc1VybFJlcXVlc3QodXJsKSB7XG4gIC8vIEFuIFVSTCBpcyBub3QgYW4gcmVxdWVzdCBpZlxuICAvLyBJdCBpcyBub3QgaHR0cCBvciBodHRwc1xuICBpZiAoIS9eW2EtekEtWl1bYS16QS1aXFxkK1xcLS5dKjovLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiBAcGFyYW0ge1RPRE99IG1vZHVsZUlkXG4gKiBAcGFyYW0ge1RPRE99IG9wdGlvbnNcbiAqIEByZXR1cm5zIHtUT0RPfVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobW9kdWxlSWQsIG9wdGlvbnMpIHtcbiAgaWYgKG5vRG9jdW1lbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5vIHdpbmRvdy5kb2N1bWVudCBmb3VuZCwgd2lsbCBub3QgSE1SIENTU1wiKTtcbiAgICByZXR1cm4gbm9vcDtcbiAgfVxuXG4gIHZhciBnZXRTY3JpcHRTcmMgPSBnZXRDdXJyZW50U2NyaXB0VXJsKG1vZHVsZUlkKTtcblxuICBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIHNyYyA9IGdldFNjcmlwdFNyYyhvcHRpb25zLmZpbGVuYW1lKTtcbiAgICB2YXIgcmVsb2FkZWQgPSByZWxvYWRTdHlsZShzcmMpO1xuXG4gICAgaWYgKG9wdGlvbnMubG9jYWxzKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIltITVJdIERldGVjdGVkIGxvY2FsIGNzcyBtb2R1bGVzLiBSZWxvYWQgYWxsIGNzc1wiKTtcbiAgICAgIHJlbG9hZEFsbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChyZWxvYWRlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJbSE1SXSBjc3MgcmVsb2FkICVzXCIsIHNyYy5qb2luKFwiIFwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0hNUl0gUmVsb2FkIGFsbCBjc3NcIik7XG4gICAgICByZWxvYWRBbGwoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVib3VuY2UodXBkYXRlLCA1MCk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhDb21wb25lbnRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBub3JtYWxpemVVcmwocGF0aENvbXBvbmVudHMpIHtcbiAgcmV0dXJuIHBhdGhDb21wb25lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjdW11bGF0b3IsIGl0ZW0pIHtcbiAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgIGNhc2UgXCIuLlwiOlxuICAgICAgICBhY2N1bXVsYXRvci5wb3AoKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCIuXCI6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhY2N1bXVsYXRvci5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgfSxcbiAgLyoqIEB0eXBlIHtzdHJpbmdbXX0gKi9cbiAgW10pLmpvaW4oXCIvXCIpO1xufVxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsU3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsU3RyaW5nKSB7XG4gIHVybFN0cmluZyA9IHVybFN0cmluZy50cmltKCk7XG5cbiAgaWYgKC9eZGF0YTovaS50ZXN0KHVybFN0cmluZykpIHtcbiAgICByZXR1cm4gdXJsU3RyaW5nO1xuICB9XG5cbiAgdmFyIHByb3RvY29sID0gdXJsU3RyaW5nLmluZGV4T2YoXCIvL1wiKSAhPT0gLTEgPyB1cmxTdHJpbmcuc3BsaXQoXCIvL1wiKVswXSArIFwiLy9cIiA6IFwiXCI7XG4gIHZhciBjb21wb25lbnRzID0gdXJsU3RyaW5nLnJlcGxhY2UobmV3IFJlZ0V4cChwcm90b2NvbCwgXCJpXCIpLCBcIlwiKS5zcGxpdChcIi9cIik7XG4gIHZhciBob3N0ID0gY29tcG9uZW50c1swXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLiQvLCBcIlwiKTtcbiAgY29tcG9uZW50c1swXSA9IFwiXCI7XG4gIHZhciBwYXRoID0gbm9ybWFsaXplVXJsKGNvbXBvbmVudHMpO1xuICByZXR1cm4gcHJvdG9jb2wgKyBob3N0ICsgcGF0aDtcbn07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY2ODYxNzk3NDk2NFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJwdWJsaWNQYXRoXCI6XCJcIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImQxZjA4ZTEyZmZmNDZjMmRmOTU4XCIpIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVVybCIsInJlcXVpcmUiLCJzcmNCeU1vZHVsZUlkIiwiT2JqZWN0IiwiY3JlYXRlIiwibm9Eb2N1bWVudCIsImRvY3VtZW50IiwiZm9yRWFjaCIsIkFycmF5IiwicHJvdG90eXBlIiwibm9vcCIsInVwZGF0ZUNzcyIsImVsIiwidXJsIiwiaHJlZiIsInNwbGl0IiwiaXNVcmxSZXF1ZXN0IiwiaXNMb2FkZWQiLCJpbmRleE9mIiwidmlzaXRlZCIsIm5ld0VsIiwiY2xvbmVOb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNvbmNhdCIsIkRhdGUiLCJub3ciLCJuZXh0U2libGluZyIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwicmVsb2FkU3R5bGUiLCJzcmMiLCJlbGVtZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsb2FkZWQiLCJjYWxsIiwicmV0Iiwic29tZSIsImdldFJlbG9hZFVybCIsInJlbG9hZEFsbCIsInRlc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kdWxlSWQiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsImZuIiwidGltZSIsInRpbWVvdXQiLCJnZXRTY3JpcHRTcmMiLCJjdXJyZW50U2NyaXB0Iiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGFzdFNjcmlwdFRhZyIsImxlbmd0aCIsImZpbGVNYXAiLCJzcGxpdFJlc3VsdCIsImZpbGVuYW1lIiwibWFwIiwibWFwUnVsZSIsInJlZyIsIlJlZ0V4cCIsInJlcGxhY2UiLCJnZXRDdXJyZW50U2NyaXB0VXJsIiwicmVsb2FkZWQiLCJsb2NhbHMiLCJqb2luIiwic2VsZiIsInRoaXMiLCJhcmdzIiwiYXJndW1lbnRzIiwiZnVuY3Rpb25DYWxsIiwiYXBwbHkiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidXJsU3RyaW5nIiwidHJpbSIsInByb3RvY29sIiwiY29tcG9uZW50cyIsImhvc3QiLCJ0b0xvd2VyQ2FzZSIsInJlZHVjZSIsImFjY3VtdWxhdG9yIiwiaXRlbSIsInBvcCIsInB1c2giLCJjc3NSZWxvYWQiLCJpZCIsImhvdCIsImRpc3Bvc2UiLCJhY2NlcHQiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=