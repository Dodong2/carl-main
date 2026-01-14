import{j as e}from"./index-CCjy6rJs.js";const t=({children:r,size:s="md",variant:a="default",className:n=""})=>{const x={sm:"w-32 h-32 p-3",md:"w-48 h-48 p-4",lg:"w-64 h-64 p-6",xl:"w-80 h-80 p-8"},i={default:`
      bg-gradient-to-br from-gray-800 to-gray-900 
      border-white 
      shadow-[8px_8px_0px_rgba(0,0,0,0.8)]
    `,nes:`
      bg-gradient-to-b from-blue-900 to-blue-950
      border-gray-300
      shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.5),inset_4px_4px_0px_rgba(255,255,255,0.3),8px_8px_0px_rgba(0,0,0,0.5)]
    `,gameboy:`
      bg-gradient-to-br from-green-100 to-green-200
      border-green-800
      shadow-[8px_8px_0px_rgba(0,0,0,0.4)]
    `,neon:`
      bg-black
      border-cyan-400
      shadow-[0_0_20px_rgba(34,211,238,0.6),0_0_40px_rgba(34,211,238,0.3),8px_8px_0px_rgba(0,0,0,0.8)]
    `};return e.jsxs("div",{className:`
      ${i[a]} 
      ${x[s]} 
      ${n}
      relative
      flex flex-col items-center justify-center
      transition-transform duration-300
      hover:scale-105
    `,style:{clipPath:`polygon(
        0% 15%, 5% 15%, 5% 10%, 10% 10%, 10% 5%, 15% 5%, 15% 0%,
        85% 0%, 85% 5%, 90% 5%, 90% 10%, 95% 10%, 95% 15%, 100% 15%,
        100% 85%, 95% 85%, 95% 90%, 90% 90%, 90% 95%, 85% 95%, 85% 100%,
        15% 100%, 15% 95%, 10% 95%, 10% 90%, 5% 90%, 5% 85%, 0% 85%
      )`},children:[e.jsx("div",{className:"absolute inset-0 opacity-10 pointer-events-none",style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
          `}}),e.jsx("div",{className:"relative z-10 text-center flex flex-col items-center justify-center gap-2",children:r})]})},o=()=>e.jsx("section",{id:"projects",className:"min-h-screen p-10 border-2 border-orange-600",children:e.jsx("div",{className:"min-h-screen p-10",children:e.jsxs("div",{className:"grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3",children:[e.jsx("h1",{className:"text-white",children:"Circle Retro"}),e.jsxs(t,{size:"lg",variant:"default",children:[e.jsx("h3",{className:"text-white font-['Press_Start_2P'] text-xs mb-3",children:"PLAYER 1"}),e.jsx("button",{className:"bg-red-500 text-white px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-red-600 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.5)]",children:"START"}),e.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-blue-600 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mt-2",children:"OPTIONS"})]}),e.jsxs(t,{size:"lg",variant:"nes",children:[e.jsx("div",{className:"text-white font-['Press_Start_2P'] text-xs mb-2",children:"SCORE"}),e.jsx("div",{className:"text-yellow-300 font-['Press_Start_2P'] text-2xl",children:"9999"}),e.jsx("div",{className:"text-gray-300 font-['Press_Start_2P'] text-[8px] mt-2",children:"HIGH SCORE"})]}),e.jsxs(t,{size:"lg",variant:"gameboy",children:[e.jsx("div",{className:"text-green-900 font-['Press_Start_2P'] text-xs mb-3",children:"LEVEL UP!"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"w-8 h-8 text-xs text-green-100 transition-colors bg-green-700 rounded-full hover:bg-green-600",children:"A"}),e.jsx("button",{className:"w-8 h-8 text-xs text-green-100 transition-colors bg-green-700 rounded-full hover:bg-green-600",children:"B"})]})]}),e.jsxs(t,{size:"lg",variant:"neon",children:[e.jsx("div",{className:"text-cyan-400 font-['Press_Start_2P'] text-xs mb-3 animate-pulse",children:"ARCADE"}),e.jsx("button",{className:"bg-cyan-400 text-black px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-cyan-300 transition-colors",children:"INSERT COIN"})]}),e.jsx("h1",{className:"text-white",children:"Image Circle Retro"})]})})});export{o as default};
