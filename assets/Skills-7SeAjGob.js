import{r as i,j as e}from"./index-sAygOqi0.js";import{P as n}from"./PageTitle-9l0zkC3K.js";const o=[{id:"1",cardTitle:"Programming Languages",programs:["• Javascript","• Typescript","• PHP","• Python"],programStats:[{label:"Javascript",value:80},{label:"Typescript",value:60},{label:"PHP",value:50},{label:"Python",value:30}]},{id:"2",cardTitle:"Frontend",programs:["• HTML","• CSS","• Tailwind","• React.js/ts","• React Native","• Next.ts"],programStats:[{label:"HTML",value:91},{label:"CSS",value:93},{label:"Tailwind",value:82},{label:"React.JS/TS",value:73},{label:"React Native",value:68},{label:"Next.ts",value:65}]},{id:"3",cardTitle:"Backend",programs:["• Node.js","• MongoDB","• Firebase","• MySQL","• Prisma ORM","• Postgresql"],programStats:[{label:"Node.js",value:58},{label:"MongoDB",value:44},{label:"Firebase",value:54},{label:"MySQL",value:61},{label:"Prisma ORM",value:66},{label:"Postgresql",value:73}]},{id:"4",cardTitle:"Tools",programs:["• VS Code","• Postman","• MongoDBCompass","• Docker","• Vite"],programStats:[{label:"VS Code",value:90},{label:"Postman",value:85},{label:"MongoDBCompass",value:74},{label:"Docker",value:67},{label:"Vite",value:97}]}],c=({data:a})=>{const[t,r]=i.useState(!1);return e.jsxs("div",{className:`
        relative bg-[#1a1a2e] border-4 border-white rounded-sm overflow-hidden
        cursor-pointer transition-all duration-300 
        shadow-[8px_8px_0px_rgba(0,0,0,0.3)]
        hover:shadow-[12px_12px_0px_rgba(0,0,0,0.4)]
        hover:-translate-y-2
      `,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none z-2 opacity-30",style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px),
            repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)
          `}}),e.jsx("div",{className:"absolute top-1 right-1 bg-[#e9ff6b] text-[#1a1a2e] text-[8px] px-1.5 py-0.5 z-4 font-['Press_Start_2P']",children:a.cardTitle}),e.jsx("div",{className:"relative p-4 z-1 min-h-60",children:e.jsx("div",{className:`\r
          grid grid-cols-2 gap-2 mt-3\r
          text-[10px]\r
        `,children:a.programs.map((s,l)=>e.jsx("div",{className:`\r
                border border-white/30 px-2 py-1\r
                text-[#4ecdc4] bg-black/20\r
                hover:bg-black/40 transition-colors\r
              `,children:s},l))})}),e.jsx("div",{className:`
        absolute inset-0 bg-[rgba(26,26,46,0.95)] 
        flex flex-col justify-center items-center p-5
        border-4 border-[#4ecdc4] z-3
        transition-all duration-300
        backdrop-blur-sm
        ${t?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"}
      `,children:a.programStats.map((s,l)=>e.jsxs("div",{className:"w-full mb-2",children:[e.jsxs("div",{className:"flex justify-between text-[8px] mb-1",children:[e.jsx("span",{className:"text-[#92f29c]",children:s.label}),e.jsxs("span",{className:"text-white",children:[s.value,"/100"]})]}),e.jsx("div",{className:"relative h-2 overflow-hidden bg-white/10",children:e.jsx("div",{className:"h-full bg-[#e9ff6b] absolute top-0 left-0 transition-all duration-500",style:{width:t?`${s.value}%`:"0%"}})})]},l))})]})},d="/carl-main/assets/weapon-slot-BmNEzBcg.png",x="/carl-main/assets/sword-Ca0GX1r1.png",b=()=>e.jsx("section",{id:"skills",className:"min-h-screen border-2 border-amber-400",children:e.jsxs("div",{className:"p-3",children:[e.jsx(n,{image1:d,image2:x,title:"Skills"}),e.jsxs("div",{className:"grid gap-6 mb-8 grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3",children:[o.map(a=>e.jsx(c,{data:a},a.id)),e.jsx("div",{className:"flex items-center justify-center text-center",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl tracking-wider text-[#e0ffe3] mb-2.5 animate-pulse",style:{textShadow:"4px 4px 0 rgba(0,0,0,0.6)"},children:"Coming Soon"}),e.jsx("i",{className:"nes-pokeball"})]})}),e.jsx("div",{className:"flex items-center justify-center text-center",children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("h1",{className:"text-2xl sm:text-3xl tracking-wider text-[#e0ffe3] mb-2.5 animate-pulse",style:{textShadow:"4px 4px 0 rgba(0,0,0,0.6)"},children:"Coming Soon"}),e.jsx("i",{className:"nes-ash"})]})})]})]})});export{b as default};
