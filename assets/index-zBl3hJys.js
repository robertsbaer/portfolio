const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Hero-1YuzHxpU.js","assets/framer-BemiKadd.js","assets/react-kpEgZk0L.js","assets/lucide-BgoBbDee.js","assets/About-H1R43DyR.js","assets/vendor-De9oFnri.js","assets/headshot-CRrsfRTX.js","assets/Projects-UhR0E_JK.js","assets/Experience-CqGJI7j5.js","assets/Contact-BJptCFbo.js","assets/Blog-Br0Te8jt.js","assets/blogPosts-GQX6EKWQ.js","assets/router-C651326S.js","assets/BlogPost-SsJzJUgR.js"])))=>i.map(i=>d[i]);
import{_ as e}from"./vendor-De9oFnri.js";import{j as t,A as r,m as s}from"./framer-BemiKadd.js";import{a,r as o}from"./react-kpEgZk0L.js";import{u as n,a as l,B as i,R as c,b as m}from"./router-C651326S.js";import{X as d,M as x,G as h,L as u,T as p,H as f,F as b}from"./lucide-BgoBbDee.js";var j;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}(),e((()=>Promise.resolve().then((()=>C))),void 0).then((e=>{window.addEventListener("DOMContentLoaded",(()=>{e.default()}))}));var y=a;j=y.createRoot,y.hydrateRoot;const v=()=>{const[e,a]=o.useState(!1),[i,c]=o.useState(!1),m=n(),f=l(),b="/"===m.pathname||""===m.pathname;o.useEffect((()=>{const e=()=>{window.scrollY>50?c(!0):c(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const j=(t,r)=>{if(t.preventDefault(),b){const e=document.querySelector(r);e&&e.scrollIntoView({behavior:"smooth"})}else f("/"),setTimeout((()=>{const e=document.querySelector(r);e&&e.scrollIntoView({behavior:"smooth"})}),100);e&&a(!1)},y=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Projects",href:"#projects"},{name:"Experience",href:"#experience"},{name:"Contact",href:"#contact"}],v=[{icon:t.jsx(h,{className:"w-5 h-5"}),href:"https://github.com/robertsbaer",label:"GitHub"},{icon:t.jsx(u,{className:"w-5 h-5"}),href:"https://linkedin.com/in/robert-baer",label:"LinkedIn"},{icon:t.jsx(p,{className:"w-5 h-5"}),href:"https://twitter.com/robertsbaer",label:"Twitter"}];return t.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 "+(i?"bg-dark/80 backdrop-blur-md py-3 shadow-lg":"bg-transparent py-5"),children:[t.jsx("div",{className:"container mx-auto px-4 md:px-6",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("a",{href:"/",className:"text-2xl font-bold gradient-text hover-element",onClick:e=>{"/"!==m.pathname&&(e.preventDefault(),f("/"))},children:["Robert",t.jsx("span",{className:"text-white",children:"."})]}),t.jsxs("nav",{className:"hidden md:flex items-center space-x-8",children:[t.jsx("ul",{className:"flex space-x-8",children:y.map((e=>t.jsx("li",{children:t.jsxs("a",{href:e.href,className:"text-gray-300 hover:text-white hover-element relative group",onClick:t=>j(t,e.href),children:[e.name,t.jsx("span",{className:"absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"})]})},e.name)))}),t.jsx("div",{className:"flex items-center space-x-4",children:v.map((e=>t.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-500 transition-colors duration-300 hover-element","aria-label":e.label,children:e.icon},e.label)))})]}),t.jsx("button",{className:"md:hidden text-gray-300 hover:text-white hover-element",onClick:()=>a(!e),"aria-label":e?"Close menu":"Open menu",children:e?t.jsx(d,{className:"w-6 h-6"}):t.jsx(x,{className:"w-6 h-6"})})]})}),t.jsx(r,{children:e&&t.jsx(s.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},className:"md:hidden bg-gray-900/95 backdrop-blur-md",children:t.jsxs("div",{className:"container mx-auto px-4 py-6",children:[t.jsx("ul",{className:"flex flex-col space-y-4",children:y.map((e=>t.jsx("li",{children:t.jsx("a",{href:e.href,className:"text-gray-300 hover:text-white block py-2 hover-element",onClick:t=>j(t,e.href),children:e.name})},e.name)))}),t.jsx("div",{className:"flex items-center space-x-6 mt-6 pt-6 border-t border-gray-800",children:v.map((e=>t.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-500 transition-colors duration-300 hover-element","aria-label":e.label,children:e.icon},e.label)))})]})})})]})},g=()=>{const e=(new Date).getFullYear(),r=n(),s=l(),a="/"===r.pathname||""===r.pathname,o=(e,t)=>{if(e.preventDefault(),"/blog"!==t)if(a){const e=document.querySelector(t);e&&e.scrollIntoView({behavior:"smooth"})}else s("/"),setTimeout((()=>{const e=document.querySelector(t);e&&e.scrollIntoView({behavior:"smooth"})}),100);else s(t)},i=[{icon:t.jsx(h,{className:"w-5 h-5"}),href:"https://github.com/robertsbaer",label:"GitHub"},{icon:t.jsx(u,{className:"w-5 h-5"}),href:"https://linkedin.com/in/robert-baer",label:"LinkedIn"},{icon:t.jsx(p,{className:"w-5 h-5"}),href:"https://twitter.com/robertsbaer",label:"Twitter"},{icon:t.jsx(b,{className:"w-5 h-5"}),href:"https://facebook.com/dcmademedia",label:"Facebook"}];return t.jsx("footer",{className:"py-10 bg-gray-950 border-t border-gray-800 relative",children:t.jsxs("div",{className:"container mx-auto px-4 md:px-6",children:[t.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[t.jsxs("div",{className:"mb-6 md:mb-0",children:[t.jsxs("a",{href:"#home",className:"text-2xl font-bold gradient-text hover-element",onClick:e=>o(e,"#home"),children:["Robert",t.jsx("span",{className:"text-white",children:"."})]}),t.jsx("p",{className:"text-gray-400 mt-2",children:"Building exceptional digital experiences."})]}),t.jsx("div",{className:"flex space-x-6 mb-6 md:mb-0",children:i.map((e=>t.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"text-gray-400 hover:text-primary-500 transition-colors duration-300 hover-element","aria-label":e.label,children:e.icon},e.label)))})]}),t.jsxs("div",{className:"flex flex-wrap justify-center mt-6 gap-4 md:gap-8",children:[t.jsx("a",{href:"#about",className:"text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2",onClick:e=>o(e,"#about"),children:"About"}),t.jsx("a",{href:"#projects",className:"text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2",onClick:e=>o(e,"#projects"),children:"Projects"}),t.jsx("a",{href:"#experience",className:"text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2",onClick:e=>o(e,"#experience"),children:"Experience"}),t.jsx("a",{href:"#contact",className:"text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2",onClick:e=>o(e,"#contact"),children:"Contact"}),t.jsx("a",{href:"/blog",className:"text-gray-400 hover:text-primary-500 transition-colors duration-300 px-3 py-2",onClick:e=>o(e,"/blog"),"aria-label":"Read our web development blog",children:"Blog"})]}),t.jsxs("div",{className:"border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center",children:[t.jsxs("p",{className:"text-gray-400 text-sm mb-4 md:mb-0",children:["© ",e," Robert Baer. All rights reserved."]}),t.jsxs("p",{className:"text-gray-400 text-sm flex items-center",children:["Made with ",t.jsx(f,{className:"w-4 h-4 text-red-500 mx-1"})," using React"]})]})]})})},N=()=>{const[e,r]=o.useState({x:0,y:0}),[s,a]=o.useState(!0),[n,l]=o.useState(!1),[i,c]=o.useState(!1);return o.useEffect((()=>{const e=e=>{r({x:e.clientX,y:e.clientY})},t=()=>{a(!1)},s=()=>{a(!0)},o=()=>{l(!0)},n=()=>{l(!1)};return document.addEventListener("mousemove",e),document.addEventListener("mouseenter",t),document.addEventListener("mouseleave",s),document.addEventListener("mousedown",o),document.addEventListener("mouseup",n),document.querySelectorAll("a, button, .hover-element").forEach((e=>{e.addEventListener("mouseenter",(()=>c(!0))),e.addEventListener("mouseleave",(()=>c(!1)))})),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseenter",t),document.removeEventListener("mouseleave",s),document.removeEventListener("mousedown",o),document.removeEventListener("mouseup",n)}}),[]),"undefined"!=typeof navigator&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?null:t.jsxs(t.Fragment,{children:[t.jsx("div",{className:`cursor-dot ${s?"opacity-0":"opacity-100"} ${n?"scale-50":"scale-100"}`,style:{left:`${e.x}px`,top:`${e.y}px`}}),t.jsx("div",{className:`cursor-outline ${s?"opacity-0":"opacity-100"} ${n?"scale-90":"scale-100"} ${i?"scale-150 bg-primary-500/10":""}`,style:{left:`${e.x}px`,top:`${e.y}px`}})]})},w=o.lazy((()=>e((()=>import("./Hero-1YuzHxpU.js")),__vite__mapDeps([0,1,2,3])))),_=o.lazy((()=>e((()=>import("./About-H1R43DyR.js")),__vite__mapDeps([4,1,2,5,6,3])))),E=o.lazy((()=>e((()=>import("./Projects-UhR0E_JK.js")),__vite__mapDeps([7,1,2,5,3])))),L=o.lazy((()=>e((()=>import("./Experience-CqGJI7j5.js")),__vite__mapDeps([8,1,2,5,6,3])))),k=o.lazy((()=>e((()=>import("./Contact-BJptCFbo.js")),__vite__mapDeps([9,1,2,5,3])))),P=o.lazy((()=>e((()=>import("./Blog-Br0Te8jt.js")),__vite__mapDeps([10,1,2,11,12,5,3])))),S=o.lazy((()=>e((()=>import("./BlogPost-SsJzJUgR.js")),__vite__mapDeps([13,1,2,11,12,5,3])))),A=()=>t.jsx("div",{className:"flex items-center justify-center min-h-screen",children:t.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"})});function I(){return o.useEffect((()=>{document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href");if(t){const e=document.querySelector(t);e&&e.scrollIntoView({behavior:"smooth"})}}))}))}),[]),useInView({triggerOnce:!0,rootMargin:"200px 0px"}),t.jsxs("div",{className:"relative",children:[t.jsx("div",{className:"noise-overlay"}),t.jsx(N,{}),t.jsx(v,{}),t.jsx("main",{children:t.jsxs(o.Suspense,{fallback:t.jsx(A,{}),children:[t.jsx(w,{}),t.jsx(_,{}),t.jsx(E,{}),t.jsx(L,{}),t.jsx(k,{})]})}),t.jsx(g,{})]})}function O(){return t.jsx(i,{children:t.jsx(o.Suspense,{fallback:t.jsx(A,{}),children:t.jsxs(c,{children:[t.jsx(m,{path:"",element:t.jsx(I,{})}),t.jsx(m,{path:"blog",element:t.jsx(P,{})}),t.jsx(m,{path:"blog/:slug",element:t.jsx(S,{})})]})})})}j(document.getElementById("root")).render(t.jsx(o.StrictMode,{children:t.jsx(O,{})}));const C=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{N as C,g as F,v as N};
