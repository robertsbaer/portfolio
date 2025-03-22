import{r as e,j as a}from"./react-core-CfA8X-60.js";import{y as s,z as r}from"./vendor-CxeVQ-S0.js";import{m as t}from"./animations-02S46tEa.js";import{d as l,e as i,P as n,f as o}from"./icons-8KSuJtcM.js";const c=()=>{const[c,m]=s({triggerOnce:!1,threshold:.1}),d=e.useRef(null),[u,x]=e.useState({name:"",email:"",subject:"",message:""}),[b,h]=e.useState(!1),[g,p]=e.useState(!1),[j,y]=e.useState(""),f=e=>{const{name:a,value:s}=e.target;x((e=>({...e,[a]:s})))},v=[{icon:a.jsx(i,{className:"w-6 h-6"}),title:"Email",value:"robert@dcmademedia.com",link:"mailto:robert@dcmademedia.com"},{icon:a.jsx(n,{className:"w-6 h-6"}),title:"Phone",value:"+1 (202) 642-9753",link:"tel:+12026429753"},{icon:a.jsx(o,{className:"w-6 h-6"}),title:"Location",value:"Washington, D.C.",link:"https://maps.google.com/?q=Washington+DC"}],N={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return a.jsxs("section",{id:"contact",className:"py-20 bg-gray-950 relative overflow-hidden",role:"region","aria-label":"contact",children:[a.jsx("div",{className:"absolute inset-0 grid-background z-0"}),a.jsx(t.div,{className:"absolute left-1/4 bottom-0 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl",animate:{x:[0,50,0],y:[0,-30,0]},transition:{duration:20,repeat:1/0,repeatType:"reverse"}}),a.jsx("div",{className:"container mx-auto px-4 md:px-6 relative z-10",children:a.jsxs(t.div,{ref:c,initial:"hidden",animate:m?"visible":"hidden",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},className:"max-w-6xl mx-auto",children:[a.jsxs(t.div,{variants:N,className:"text-center mb-16",children:[a.jsxs("p",{className:"text-primary-400 font-medium mb-4 flex items-center justify-center",children:[a.jsx("span",{className:"inline-block w-10 h-[2px] bg-primary-500 mr-3"}),"Get In Touch",a.jsx("span",{className:"inline-block w-10 h-[2px] bg-primary-500 ml-3"})]}),a.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["Contact Me",a.jsx("span",{className:"text-primary-500",children:"."})]}),a.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto",children:"Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!"})]}),a.jsx("div",{className:"grid md:grid-cols-3 gap-8 mb-12",children:v.map(((e,s)=>a.jsxs(t.a,{href:e.link,target:"Location"===e.title?"_blank":void 0,rel:"Location"===e.title?"noopener noreferrer":void 0,variants:N,className:"card hover:border-primary-500/50 transition-all duration-300 text-center hover-element",whileHover:{y:-5,boxShadow:"0 10px 25px -5px rgba(14, 165, 233, 0.1)"},children:[a.jsx("div",{className:"flex justify-center mb-4",children:a.jsx("div",{className:"w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400",children:e.icon})}),a.jsx("h3",{className:"text-lg font-semibold mb-2",children:e.title}),a.jsx("p",{className:"text-gray-400",children:e.value})]},e.title)))}),a.jsxs(t.div,{variants:N,className:"card",children:[a.jsx("h3",{className:"text-2xl font-bold mb-6",children:"Send Me a Message"}),g?a.jsx("div",{className:"bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg p-4 mb-6",children:"Thank you for your message! I'll get back to you as soon as possible."}):null,j?a.jsx("div",{className:"bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg p-4 mb-6",children:j}):null,a.jsxs("form",{ref:d,onSubmit:e=>{e.preventDefault(),h(!0),y("");const a={from_name:u.name,from_email:u.email,subject:u.subject,message:u.message,to_email:"robert@dcmademedia.com"};r.send("service_aepgqsj","template_clnlt9f",a,"0ay0JaUpW_SnUCGGR").then((e=>{h(!1),p(!0),x({name:"",email:"",subject:"",message:""}),setTimeout((()=>{p(!1)}),5e3)})).catch((e=>{h(!1),y("Failed to send message. Please try again later.")}))},children:[a.jsxs("div",{className:"grid md:grid-cols-2 gap-6 mb-6",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"name",className:"block text-gray-400 mb-2",children:"Your Name"}),a.jsx("input",{type:"text",id:"name",name:"name",value:u.name,onChange:f,required:!0,className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300",placeholder:"John Doe"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-gray-400 mb-2",children:"Your Email"}),a.jsx("input",{type:"email",id:"email",name:"email",value:u.email,onChange:f,required:!0,className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300",placeholder:"john@example.com"})]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("label",{htmlFor:"subject",className:"block text-gray-400 mb-2",children:"Subject"}),a.jsx("input",{type:"text",id:"subject",name:"subject",value:u.subject,onChange:f,required:!0,className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300",placeholder:"Project Inquiry"})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("label",{htmlFor:"message",className:"block text-gray-400 mb-2",children:"Your Message"}),a.jsx("textarea",{id:"message",name:"message",value:u.message,onChange:f,required:!0,rows:5,className:"w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300",placeholder:"Hello, I'd like to talk about..."})]}),a.jsx("button",{type:"submit",disabled:b,className:"btn btn-primary w-full flex items-center justify-center hover-element",children:b?a.jsxs("span",{className:"flex items-center",children:[a.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[a.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),a.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Sending..."]}):a.jsxs("span",{className:"flex items-center",children:["Send Message",a.jsx(l,{className:"ml-2 w-4 h-4"})]})})]})]})]})})]})};export{c as default};
