import{r as d,j as e}from"./index-fBHsTPNt.js";import{u as h,R as b,a as f}from"./RetroModal-Bin7KdrP.js";import{R as _}from"./RetroButton-CD7le5gA.js";const y="/carl-main/assets/Me-GSQfVFah.png",j="/carl-main/assets/Carl_Stephen_Arocha_Resume-Bje5DMiH.pdf",x=[{id:"1",image:y,resume:j,dialogue:["Greetings! My name is Carl Stephen Arocha. I'm currently a fourth-year BSIT student and a vibe coder full stack developer.","As a web developer, I'm still at the beginner level, but I'm constantly learning and building projects to level up my skills.","I'm eager to expand my portfolio and open to collaborating on projects that match my skill set. Check out my skills and experience below!","Please click continue to view my resume and see what this warrior can bring to the table!","Thank you for taking the time to learn more about me. Let's build something awesome together!"],buttonLabels:[{label:"Resume/Stats"},{label:"continue"}]}],v=({src:r,alt:i,size:a="md",variant:n="default",badge:t,className:c=""})=>{const[l,o]=d.useState(!1),s={sm:"w-24 h-24",md:"w-40 h-40",lg:"w-56 h-56",xl:"w-72 h-72"},u={default:`
      shadow-[8px_8px_0px_rgba(0,0,0,0.8)]
    `,nes:`
      shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.5),inset_4px_4px_0px_rgba(255,255,255,0.3),8px_8px_0px_rgba(0,0,0,0.5)]
    `,arcade:`
      shadow-[0_0_20px_rgba(250,204,21,0.5),8px_8px_0px_rgba(0,0,0,0.6)]
    `,neon:`
      shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.4),inset_0_0_20px_rgba(34,211,238,0.2)]
    `,glitch:`
      shadow-[4px_0_0_rgba(0,255,255,0.5),-4px_0_0_rgba(255,0,255,0.5),8px_8px_0px_rgba(0,0,0,0.8)]
    `},m={default:"#ffffff",nes:"#d1d5db",arcade:"#facc15",neon:"#22d3ee",glitch:"#ef4444"},p=`polygon(
    0% 15%, 5% 15%, 5% 10%, 10% 10%, 10% 5%, 15% 5%, 15% 0%,
    85% 0%, 85% 5%, 90% 5%, 90% 10%, 95% 10%, 95% 15%, 100% 15%,
    100% 85%, 95% 85%, 95% 90%, 90% 90%, 90% 95%, 85% 95%, 85% 100%,
    15% 100%, 15% 95%, 10% 95%, 10% 90%, 5% 90%, 5% 85%, 0% 85%
  )`;return e.jsxs("div",{className:"relative inline-block",children:[e.jsx("div",{className:`
          ${s[a]}
          absolute top-2 left-2
          bg-black/40
          pointer-events-none
        `,style:{clipPath:p}}),e.jsxs("div",{className:`
          ${u[n]} 
          ${s[a]} 
          ${c}
          relative
          overflow-hidden
          transition-all duration-300
          cursor-pointer
          ${l?"scale-110":"scale-100"}
        `,style:{clipPath:p},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[e.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{zIndex:2},children:[e.jsx("defs",{children:e.jsx("clipPath",{id:`pixelCircle-${i}`,children:e.jsx("polygon",{points:`\r
                0,15 5,15 5,10 10,10 10,5 15,5 15,0\r
                85,0 85,5 90,5 90,10 95,10 95,15 100,15\r
                100,85 95,85 95,90 90,90 90,95 85,95 85,100\r
                15,100 15,95 10,95 10,90 5,90 5,85 0,85\r
              `,vectorEffect:"non-scaling-stroke",transform:"scale(0.01)",style:{transformOrigin:"center"}})})}),e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"none",stroke:m[n],strokeWidth:"4",clipPath:`url(#pixelCircle-${i})`})]}),e.jsx("img",{src:r,alt:i,loading:"lazy",decoding:"async",className:`
            w-full h-full object-cover
            transition-transform duration-500
            ${l?"scale-110 rotate-3":"scale-100 rotate-0"}
          `,style:{imageRendering:"pixelated"}}),e.jsx("div",{className:`
            absolute inset-0 pointer-events-none
            transition-opacity duration-300
            ${l?"opacity-20":"opacity-10"}
          `,style:{backgroundImage:`
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)
            `}}),l&&n==="neon"&&e.jsx("div",{className:"absolute inset-0 bg-cyan-400/10 animate-pulse"}),t&&e.jsx("div",{className:"absolute top-2 right-8 bg-red-500 text-white text-[8px] px-2 py-1 font-['Press_Start_2P'] shadow-lg z-10",style:{clipPath:"polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)"},children:t}),l&&n==="glitch"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 mix-blend-screen animate-pulse",style:{animationDuration:"0.1s"}}),e.jsx("div",{className:"absolute inset-0 bg-magenta-500/20 mix-blend-screen animate-pulse",style:{animationDuration:"0.15s",animationDelay:"0.05s"}})]})]})]})},w=()=>{const[r,i]=d.useState(!1),[a,n]=d.useState(0),[t,c]=d.useState(""),o=x[0].dialogue,s=o[a]??"";d.useEffect(()=>{if(s&&t.length<s.length){const g=setTimeout(()=>{c(s.slice(0,t.length+1))},30);return()=>clearTimeout(g)}},[t,s]);const u=()=>{a<o.length-1?(n(a+1),c("")):i(!0)},m=t.length<s.length,p=!m&&t.length>0;return{showResume:r,displayedText:t,isTyping:m,showContinue:p,handleContinue:u,isLastDialogue:a===o.length-1}},C=()=>{const{showResume:r,displayedText:i,showContinue:a,handleContinue:n}=w(),{read:t,openModal:c,closeModal:l,animate:o}=h();return e.jsx("section",{id:"home",className:"min-h-screen",children:x.map(s=>e.jsxs("div",{className:"flex flex-col items-center justify-center p-5 mt-40 lg:gap-4 lg:flex-row",children:[e.jsxs("div",{className:"grid md:gap-0 sm:gap-0 lg:gap-1",children:[e.jsx(v,{size:"lg",variant:"glitch",src:s.image,alt:"Ryu",badge:"WARRIOR"}),r&&e.jsx(_,{color:"red",onClick:()=>{/Android|iPhone|iPad/i.test(navigator.userAgent)?window.open(s.resume,"_blank","noopener,noreferrer"):c()},children:s.buttonLabels[0].label})]}),e.jsx("div",{children:e.jsxs(b,{size:"lg",title:"Carl",children:[e.jsxs("div",{className:"text-xs leading-relaxed sm:text-sm md:text-base",children:[i,!a&&e.jsx("span",{className:"animate-pulse",children:"▌"})]}),e.jsx("div",{className:"flex justify-end mt-1",children:a&&!r&&e.jsxs("button",{className:"relative animate-pulse",onClick:n,children:[e.jsx("span",{className:"absolute -top-1/14 -left-5",children:"▶"}),e.jsx("span",{className:"text-center",children:s.buttonLabels[1].label})]})})]})}),t&&e.jsx(f,{onClose:l,animate:o,children:e.jsx("div",{className:"w-full h-[80vh] overflow-auto",children:e.jsx("iframe",{src:s.resume,title:"Resume",className:"w-full h-full min-h-[600px]"})})})]},s.id))})};export{C as default};
