const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/main-COToSDHz.js","assets/main-DYgeXra2.css"])))=>i.map(i=>d[i]);
(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&d(t)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const p="modulepreload",y=function(i){return"/"+i},a={},g=function(c,l,d){let e=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.allSettled(l.map(o=>{if(o=y(o),o in a)return;a[o]=!0;const u=o.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${f}`))return;const s=document.createElement("link");if(s.rel=u?"stylesheet":p,u||(s.as="script"),s.crossOrigin="",s.href=o,n&&s.setAttribute("nonce",n),document.head.appendChild(s),u)return new Promise((m,h)=>{s.addEventListener("load",m),s.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})}))}function r(t){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t}return e.then(t=>{for(const n of t||[])n.status==="rejected"&&r(n.reason);return c().catch(r)})};g(()=>import("./main-COToSDHz.js").then(i=>i.m),__vite__mapDeps([0,1])).then(i=>{window.addEventListener("DOMContentLoaded",()=>{i.default()})});export{g as _};
