import{j as a,r as i}from"./index-Cm7E4sxQ.js";const u=({children:s,title:e,variant:n="default",size:t="md",className:l=""})=>{const o={sm:"max-w-sm p-2 text-xs",md:"max-w-md p-4 text-sm",lg:"max-w-lg p-5 text-base",xl:"max-w-xl p-8 text-lg"},r={default:`
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
    `};return a.jsxs("div",{className:`${r[n]} ${o[t]} ${l} w-full`,children:[e&&a.jsx("div",{className:"absolute px-2 bg-gray-800 border-2 border-white -top-3 left-4",children:a.jsx("span",{className:"text-white font-['Press_Start_2P'] text-[10px] sm:text-xs",children:e})}),a.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-10",style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)
          `}}),a.jsx("div",{className:"relative z-10 leading-relaxed text-white",children:s})]})},w=()=>{const[s,e]=i.useState(!1),[n,t]=i.useState(!1),[l,o]=i.useState(!1),r=window.matchMedia("(hover: none)").matches;return{active:s,read:n,animate:l,isMobile:r,openModal:()=>{e(!0),t(!0),requestAnimationFrame(()=>{o(!0)})},closeModal:()=>{o(!1),setTimeout(()=>{t(!1)},200)},handleMouseEnter:()=>{r||e(!0)},handleMouseLeave:()=>{r||e(!1)},handleCardClick:()=>{r&&e(x=>!x)}}},f=({children:s,onClose:e,animate:n,size:t="md"})=>{const l={sm:"max-w-md",md:"max-w-lg sm:max-w-xl",lg:"max-w-2xl lg:max-w-4xl",xl:"max-w-5xl lg:max-w-6xl",full:"max-w-[95vw]"};return a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[a.jsx("div",{className:"absolute inset-0 z-40 bg-black/70 backdrop-blur-sm",onClick:e,style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px),
            repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)
          `}}),a.jsx("div",{className:`
          relative z-50 w-[90%] ${l[t]}
          transition-all duration-200
          origin-center
          ${n?"opacity-100 scale-100":"opacity-0 scale-90"}
        `,style:{imageRendering:"pixelated"},children:s})]})};export{u as R,f as a,w as u};
