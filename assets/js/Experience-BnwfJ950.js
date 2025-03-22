import{r as e,j as t}from"./react-core-CfA8X-60.js";import{y as i,E as s}from"./vendor-CxeVQ-S0.js";import{p as a}from"./headshot-SQ1nVooo.js";import{m as n}from"./animations-02S46tEa.js";import{B as o,c as r}from"./icons-8KSuJtcM.js";const l=()=>{const[l,c]=i({triggerOnce:!1,threshold:.1}),d=e.useRef(null),m=[{title:"Founder & Lead Developer",company:"DC Made Media",period:"2019 - Present",description:"Founded a solo development agency specializing in custom websites and mobile applications. Managed the entire development lifecycle from client consultation to deployment and maintenance. Delivered responsive React-based solutions for small businesses and individuals."},{title:"Freelance Web Developer",company:"Self-employed",period:"2015 - 2019",description:"Developed custom websites and web applications for clients across various industries, including NGOs, associations, and political campaign organizations. Specialized in creating responsive, user-friendly interfaces using modern JavaScript frameworks. Collaborated directly with clients to translate business requirements into technical solutions."},{title:"Web Development Projects",company:"Personal & Academic",period:"2011 - 2015",description:"Built several personal and academic projects to strengthen development skills. Focused on PHP, JavaScript, and modern frontend technologies. Participated in coding challenges and hackathons to solve real-world problems through code."}],p={hidden:{y:30,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5}}};return t.jsxs("section",{id:"experience",className:"py-20 relative overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 grid-background z-0"}),t.jsx(n.div,{className:"absolute right-0 top-1/3 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl",animate:{x:[0,-40,0],y:[0,30,0]},transition:{duration:18,repeat:1/0,repeatType:"reverse"}}),t.jsx("div",{className:"container mx-auto px-4 md:px-6 relative z-10",children:t.jsxs(n.div,{ref:l,initial:"hidden",animate:c?"visible":"hidden",variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},className:"max-w-4xl mx-auto",children:[t.jsxs(n.div,{variants:p,className:"text-center mb-16",children:[t.jsxs("p",{className:"text-primary-400 font-medium mb-4 flex items-center justify-center",children:[t.jsx("span",{className:"inline-block w-10 h-[2px] bg-primary-500 mr-3"}),"My Journey",t.jsx("span",{className:"inline-block w-10 h-[2px] bg-primary-500 ml-3"})]}),t.jsxs("h2",{className:"text-3xl md:text-4xl font-bold mb-6",children:["Professional Experience",t.jsx("span",{className:"text-primary-500",children:"."})]}),t.jsx("p",{className:"text-gray-400 max-w-2xl mx-auto",children:"My entrepreneurial journey and development experience building solutions for real clients."})]}),t.jsx("div",{ref:d,className:"relative pl-0 md:pl-8",children:m.map(((e,i)=>t.jsx(n.div,{variants:p,className:"timeline-item",children:t.jsxs("div",{className:"card hover:border-primary-500/50 transition-all duration-300 md:ml-8",children:[t.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-4",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-xl font-bold text-white",children:e.title}),t.jsxs("div",{className:"flex items-center text-primary-400 mt-1",children:[t.jsx(o,{className:"w-4 h-4 mr-2"}),t.jsx("span",{children:e.company})]})]}),t.jsxs("div",{className:"flex items-center text-gray-400 mt-2 md:mt-0",children:[t.jsx(r,{className:"w-4 h-4 mr-2"}),t.jsx("span",{children:e.period})]})]}),t.jsx("p",{className:"text-gray-300",children:e.description})]})},e.title)))}),t.jsx(n.div,{variants:p,className:"text-center mt-16",children:t.jsx("button",{onClick:async()=>{const e=new s,t=new Image;t.src=a,await new Promise((e=>{t.onload=e}));const i=document.createElement("canvas");i.width=t.width,i.height=t.height;const n=i.getContext("2d");null==n||n.drawImage(t,0,0);const o=i.toDataURL("image/jpeg");e.addImage(o,"JPEG",150,15,40,40),e.setFontSize(24),e.setFont("helvetica","bold"),e.text("Robert Baer",20,20),e.setFontSize(14),e.setFont("helvetica","normal"),e.text("Full Stack Developer",20,30),e.setFontSize(10),e.text("Email: robert@dcmademedia.com",20,40),e.text("Phone: +1 (202) 642-9753",20,45),e.text("Location: Washington, DC",20,50),e.text("Website: dcmademedia.com",20,55),e.text("GitHub: github.com/robertsbaer",20,60),e.setDrawColor(66,133,244),e.setLineWidth(.5),e.line(20,65,190,65),e.setFontSize(16),e.setFont("helvetica","bold"),e.text("Professional Experience",20,75);let r=85;m.forEach((t=>{e.setFontSize(12),e.setFont("helvetica","bold"),e.text(t.title,20,r),e.setFontSize(10),e.setFont("helvetica","italic"),e.text(`${t.company} | ${t.period}`,20,r+5),e.setFont("helvetica","normal");const i=e.splitTextToSize(t.description,170);e.text(i,20,r+12),r+=12+5*i.length+10})),r+=5,e.setFontSize(16),e.setFont("helvetica","bold"),e.text("Skills",20,r),r+=10,e.setFontSize(10),e.setFont("helvetica","normal");const l=["React","React Native","JavaScript","TypeScript","HTML/CSS","Node.js","Express","MongoDB","Git","Responsive Design"].join(" • "),c=e.splitTextToSize(l,170);e.text(c,20,r),e.save("Robert_Baer_Resume.pdf")},className:"btn btn-primary inline-block hover-element",children:"Download Resume"})})]})})]})};export{l as default};
