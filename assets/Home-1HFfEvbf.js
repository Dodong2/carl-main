import{j as e,r as c}from"./index-7ZJpFNx-.js";const h="/carl-main/assets/Me-GSQfVFah.png",u=[{id:"1",image:h,dialogue:["Greetings! My name is Carl Stephen Arocha. I'm currently a fourth-year BSIT student and a vibe coder full stack developer.","As a web developer, I'm still at the beginner level, but I'm constantly learning and building projects to level up my skills.","I'm eager to expand my portfolio and open to collaborating on projects that match my skill set. Check out my skills and experience below!","Please click continue to view my resume and see what this warrior can bring to the table!","Thank you for taking the time to learn more about me. Let's build something awesome together!"],buttonLabels:[{label:"Resume/Stats"},{label:"continue"}]}],f=({children:l,title:s,variant:a="default",size:n="md",className:t=""})=>{const o={sm:"max-w-sm p-2 text-xs",md:"max-w-md p-4 text-sm",lg:"max-w-lg p-5 text-base",xl:"max-w-xl p-8 text-lg"},r={default:`
      bg-gradient-to-br from-gray-800 to-gray-900 
      border-4 border-white 
      shadow-[8px_8px_0px_0px_rgba(0,0,0,0.8)]
      relative
    `,nes:`
      bg-gradient-to-b from-blue-900 to-blue-950
      border-4 border-gray-300
      shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.5),inset_4px_4px_0px_rgba(255,255,255,0.3)]
      relative
    `,gameboy:`
      bg-gradient-to-br from-green-100 to-green-200
      border-4 border-green-800
      shadow-[8px_8px_0px_0px_rgba(0,0,0,0.4)]
      relative
    `,terminal:`
      bg-black
      border-2 border-green-500
      shadow-[0_0_20px_rgba(34,197,94,0.3)]
      relative
      font-mono
    `};return e.jsxs("div",{className:`${r[a]} ${o[n]} ${t} w-full`,children:[s&&e.jsx("div",{className:"absolute px-2 bg-gray-800 border-2 border-white -top-3 left-4",children:e.jsx("span",{className:"text-white font-['Press_Start_2P'] text-[10px] sm:text-xs",children:s})}),e.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-10",style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
          `}}),e.jsx("div",{className:"relative z-10 leading-relaxed text-white",children:l})]})},y=({src:l,alt:s,size:a="md",variant:n="default",badge:t,className:o=""})=>{const[r,x]=c.useState(!1),d={sm:"w-24 h-24",md:"w-40 h-40",lg:"w-56 h-56",xl:"w-72 h-72"},i={default:`
      shadow-[8px_8px_0px_rgba(0,0,0,0.8)]
    `,nes:`
      shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.5),inset_4px_4px_0px_rgba(255,255,255,0.3),8px_8px_0px_rgba(0,0,0,0.5)]
    `,arcade:`
      shadow-[0_0_20px_rgba(250,204,21,0.5),8px_8px_0px_rgba(0,0,0,0.6)]
    `,neon:`
      shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.4),inset_0_0_20px_rgba(34,211,238,0.2)]
    `,glitch:`
      shadow-[4px_0_0_rgba(0,255,255,0.5),-4px_0_0_rgba(255,0,255,0.5),8px_8px_0px_rgba(0,0,0,0.8)]
    `},g={default:"#ffffff",nes:"#d1d5db",arcade:"#facc15",neon:"#22d3ee",glitch:"#ef4444"};return e.jsxs("div",{className:`
        ${i[n]} 
        ${d[a]} 
        ${o}
        relative
        overflow-hidden
        transition-all duration-300
        cursor-pointer
        ${r?"scale-110":"scale-100"}
      `,style:{clipPath:`polygon(
          0% 15%, 5% 15%, 5% 10%, 10% 10%, 10% 5%, 15% 5%, 15% 0%,
          85% 0%, 85% 5%, 90% 5%, 90% 10%, 95% 10%, 95% 15%, 100% 15%,
          100% 85%, 95% 85%, 95% 90%, 90% 90%, 90% 95%, 85% 95%, 85% 100%,
          15% 100%, 15% 95%, 10% 95%, 10% 90%, 5% 90%, 5% 85%, 0% 85%
        )`},onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[e.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{zIndex:2},children:[e.jsx("defs",{children:e.jsx("clipPath",{id:`pixelCircle-${s}`,children:e.jsx("polygon",{points:`\r
              0,15 5,15 5,10 10,10 10,5 15,5 15,0\r
              85,0 85,5 90,5 90,10 95,10 95,15 100,15\r
              100,85 95,85 95,90 90,90 90,95 85,95 85,100\r
              15,100 15,95 10,95 10,90 5,90 5,85 0,85\r
            `,vectorEffect:"non-scaling-stroke",transform:"scale(0.01)",style:{transformOrigin:"center"}})})}),e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"none",stroke:g[n],strokeWidth:"4",clipPath:`url(#pixelCircle-${s})`})]}),e.jsx("img",{src:l,alt:s,loading:"lazy",decoding:"async",className:`
          w-full h-full object-cover
          transition-transform duration-500
          ${r?"scale-110 rotate-3":"scale-100 rotate-0"}
        `,style:{imageRendering:"pixelated"}}),e.jsx("div",{className:`
          absolute inset-0 pointer-events-none
          transition-opacity duration-300
          ${r?"opacity-20":"opacity-10"}
        `,style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)
          `}}),r&&n==="neon"&&e.jsx("div",{className:"absolute inset-0 bg-cyan-400/10 animate-pulse"}),t&&e.jsx("div",{className:"absolute top-2 right-8 bg-red-500 text-white text-[8px] px-2 py-1 font-['Press_Start_2P'] shadow-lg z-10",style:{clipPath:"polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)"},children:t}),r&&n==="glitch"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 mix-blend-screen animate-pulse",style:{animationDuration:"0.1s"}}),e.jsx("div",{className:"absolute inset-0 bg-magenta-500/20 mix-blend-screen animate-pulse",style:{animationDuration:"0.15s",animationDelay:"0.05s"}})]})]})},_=({children:l,color:s})=>{const a={red:"bg-red-500",yellow:"bg-amber-500",blue:"bg-blue-500"};return e.jsxs("button",{className:"relative w-56 h-10 transition-transform duration-200 hover:-translate-y-1.25 active:translate-y-0 group",children:[e.jsx("div",{className:"absolute inset-0 bg-pink-950 blur-sm opacity-50 translate-y-2.5 -z-10",style:{clipPath:"polygon(0% 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0%, calc(100% - 8px) 0%, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px, 100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0% calc(100% - 8px))"}}),e.jsxs("div",{className:`absolute inset-0 flex items-center justify-center ${a[s]} border-4 border-white`,style:{clipPath:"polygon(0% 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0%, calc(100% - 8px) 0%, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px, 100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0% calc(100% - 8px))"},children:[e.jsx("span",{className:"z-10 text-base font-bold tracking-wider text-white uppercase",style:{textShadow:"2px 2px 0 #000"},children:l}),e.jsx("div",{className:"absolute inset-0 transition-opacity duration-300 opacity-0 bg-linear-to-br from-transparent to-pink-400 group-hover:opacity-20",style:{clipPath:"polygon(0% 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0%, calc(100% - 8px) 0%, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px, 100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0% calc(100% - 8px))"}})]})]})},w=()=>{const[l,s]=c.useState(!1),[a,n]=c.useState(0),[t,o]=c.useState(""),[r,x]=c.useState(!0),[d,i]=c.useState(!1),p=u[0].dialogue;return c.useEffect(()=>{if(a>=p.length)return;const m=p[a];if(t.length<m.length){x(!0),i(!1);const b=setTimeout(()=>{o(m.slice(0,t.length+1))},30);return()=>clearTimeout(b)}else x(!1),i(!0)},[t,a,p]),{showResume:l,displayedText:t,isTyping:r,showContinue:d,handleContinue:()=>{a<p.length-1?(n(a+1),o(""),i(!1)):s(!0)},isLastDialogue:a===p.length-1}},N=()=>{const{showResume:l,displayedText:s,showContinue:a,handleContinue:n}=w();return e.jsx(e.Fragment,{children:e.jsx("section",{id:"home",className:"min-h-screen",children:u.map(t=>e.jsxs("div",{className:"flex flex-col items-center justify-center p-5 mt-40 lg:gap-4 lg:flex-row",children:[e.jsxs("div",{className:"grid md:gap-0 sm:gap-0 lg:gap-1",children:[e.jsx(y,{size:"lg",variant:"glitch",src:t.image,alt:"Ryu",badge:"WARRIOR"}),l&&e.jsx(_,{color:"red",children:t.buttonLabels[0].label})]}),e.jsx("div",{children:e.jsxs(f,{size:"lg",title:"Carl",children:[e.jsxs("div",{className:"text-xs leading-relaxed sm:text-sm md:text-base",children:[s,!a&&e.jsx("span",{className:"animate-pulse",children:"▌"})]}),e.jsx("div",{className:"flex justify-end mt-1",children:a&&!l&&e.jsxs("button",{className:"relative animate-pulse",onClick:n,children:[e.jsx("span",{className:"absolute -top-1/14 -left-5",children:"▶"}),e.jsx("span",{className:"text-center",children:t.buttonLabels[1].label})]})})]})})]},t.id))})})};export{N as default};
