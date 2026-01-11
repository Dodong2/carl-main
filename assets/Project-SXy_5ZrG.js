import{j as e,r as p}from"./index-C48eG9EC.js";const n=({children:A,size:a="md",variant:l="default",className:s=""})=>{const i={sm:"w-32 h-32 p-3",md:"w-48 h-48 p-4",lg:"w-64 h-64 p-6",xl:"w-80 h-80 p-8"},o={default:`
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
      ${o[l]} 
      ${i[a]} 
      ${s}
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
          `}}),e.jsx("div",{className:"relative z-10 text-center flex flex-col items-center justify-center gap-2",children:A})]})},t=({src:A,alt:a,size:l="md",variant:s="default",badge:i,className:o=""})=>{const[r,x]=p.useState(!1),g={sm:"w-24 h-24",md:"w-40 h-40",lg:"w-56 h-56",xl:"w-72 h-72"},c={default:`
      shadow-[8px_8px_0px_rgba(0,0,0,0.8)]
    `,nes:`
      shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.5),inset_4px_4px_0px_rgba(255,255,255,0.3),8px_8px_0px_rgba(0,0,0,0.5)]
    `,arcade:`
      shadow-[0_0_20px_rgba(250,204,21,0.5),8px_8px_0px_rgba(0,0,0,0.6)]
    `,neon:`
      shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(34,211,238,0.4),inset_0_0_20px_rgba(34,211,238,0.2)]
    `,glitch:`
      shadow-[4px_0_0_rgba(0,255,255,0.5),-4px_0_0_rgba(255,0,255,0.5),8px_8px_0px_rgba(0,0,0,0.8)]
    `},d={default:"#ffffff",nes:"#d1d5db",arcade:"#facc15",neon:"#22d3ee",glitch:"#ef4444"};return e.jsxs("div",{className:`
        ${c[s]} 
        ${g[l]} 
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
        )`},onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[e.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{zIndex:2},children:[e.jsx("defs",{children:e.jsx("clipPath",{id:`pixelCircle-${a}`,children:e.jsx("polygon",{points:`\r
              0,15 5,15 5,10 10,10 10,5 15,5 15,0\r
              85,0 85,5 90,5 90,10 95,10 95,15 100,15\r
              100,85 95,85 95,90 90,90 90,95 85,95 85,100\r
              15,100 15,95 10,95 10,90 5,90 5,85 0,85\r
            `,vectorEffect:"non-scaling-stroke",transform:"scale(0.01)",style:{transformOrigin:"center"}})})}),e.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"none",stroke:d[s],strokeWidth:"4",clipPath:`url(#pixelCircle-${a})`})]}),e.jsx("img",{src:A,alt:a,className:`
          w-full h-full object-cover
          transition-transform duration-500
          ${r?"scale-110 rotate-3":"scale-100 rotate-0"}
        `,style:{imageRendering:"pixelated"}}),e.jsx("div",{className:`
          absolute inset-0 pointer-events-none
          transition-opacity duration-300
          ${r?"opacity-20":"opacity-10"}
        `,style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)
          `}}),r&&s==="neon"&&e.jsx("div",{className:"absolute inset-0 bg-cyan-400/10 animate-pulse"}),i&&e.jsx("div",{className:"absolute top-2 right-2 bg-red-500 text-white text-[8px] px-2 py-1 font-['Press_Start_2P'] shadow-lg z-10",style:{clipPath:"polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)"},children:i}),r&&s==="glitch"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 mix-blend-screen animate-pulse",style:{animationDuration:"0.1s"}}),e.jsx("div",{className:"absolute inset-0 bg-magenta-500/20 mix-blend-screen animate-pulse",style:{animationDuration:"0.15s",animationDelay:"0.05s"}})]})]})},m=()=>e.jsx("section",{id:"projects",className:"min-h-screen p-10 border-2 border-orange-600",children:e.jsx("div",{className:"p-10 min-h-screen",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",children:[e.jsx("h1",{className:"text-white",children:"Circle Retro"}),e.jsxs(n,{size:"lg",variant:"default",children:[e.jsx("h3",{className:"text-white font-['Press_Start_2P'] text-xs mb-3",children:"PLAYER 1"}),e.jsx("button",{className:"bg-red-500 text-white px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-red-600 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.5)]",children:"START"}),e.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-blue-600 transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.5)] mt-2",children:"OPTIONS"})]}),e.jsxs(n,{size:"lg",variant:"nes",children:[e.jsx("div",{className:"text-white font-['Press_Start_2P'] text-xs mb-2",children:"SCORE"}),e.jsx("div",{className:"text-yellow-300 font-['Press_Start_2P'] text-2xl",children:"9999"}),e.jsx("div",{className:"text-gray-300 font-['Press_Start_2P'] text-[8px] mt-2",children:"HIGH SCORE"})]}),e.jsxs(n,{size:"lg",variant:"gameboy",children:[e.jsx("div",{className:"text-green-900 font-['Press_Start_2P'] text-xs mb-3",children:"LEVEL UP!"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"w-8 h-8 bg-green-700 text-green-100 rounded-full hover:bg-green-600 transition-colors text-xs",children:"A"}),e.jsx("button",{className:"w-8 h-8 bg-green-700 text-green-100 rounded-full hover:bg-green-600 transition-colors text-xs",children:"B"})]})]}),e.jsxs(n,{size:"lg",variant:"neon",children:[e.jsx("div",{className:"text-cyan-400 font-['Press_Start_2P'] text-xs mb-3 animate-pulse",children:"ARCADE"}),e.jsx("button",{className:"bg-cyan-400 text-black px-4 py-2 text-[10px] font-['Press_Start_2P'] hover:bg-cyan-300 transition-colors",children:"INSERT COIN"})]}),e.jsx("h1",{className:"text-white",children:"Image Circle Retro"}),e.jsx(t,{size:"lg",variant:"default",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR42mNgGAU4gCbQAWJOIs3QBOJnQPwciPOJMUATiJ8C8X8o/YxYA56CNAD5z4g1QBeqGYaBeriaYYCmQPwBiwnvgTgPXQzZdkwvwGsAulegyTpf0NVhugtZM8w7cO/AXDNqAD4AAMz/HK7/r8LnAAAAAElFTkSuQmCC",alt:"Mario",badge:"HERO"}),e.jsx(t,{size:"lg",variant:"nes",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR42mNgGAWDCmgC8TMgfo7GfwbEuiSaAVL7H4p/ArEuMQZoAvFPqKJnUPo5MQY8BeLnaPxnxBqgC8TPoPgZVA03YADVDNOMKeCFaobxcQE8GkG2Y3oBvwHoXhkFVAIAFw8crsW7hn4AAAAASUVORK5CYII=",alt:"Pac-Man"}),e.jsx(t,{size:"lg",variant:"arcade",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR42mNgGAWDEmgC8XMgfg7Ez6D0cyDWJcYATSB+CsT/ofQzIA4kxoD/UPoZED8l1gBdIH4GxT+JNUATiD9ADfkAxHnEGqAJNQSGdYk1QBNqCIzWJdYAmFeew7xCrAF6QGwAxfoD75VRAAAjyx2u6hRrQAAAAABJRU5ErkJggg==",alt:"Sonic",badge:"FAST"}),e.jsx(t,{size:"lg",variant:"neon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR42mNgGAU4gCYQPwPi52j0MyDWJdIcTSB+CsT/gfgnEOcTYwC6QaS4QBdqyDMofk6sAZpA/AGIPwBxHrEGaALxczQXEm2AJhA/g2LiDYBphroKeAPQDXqGphmuGWYIcYaNAqoBABCfHK78kSlpAAAAAElFTkSuQmCC",alt:"Link"}),e.jsx(t,{size:"lg",variant:"glitch",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR42mNgGAU4gCYQPwPi50CcR6Q5mkD8FIj/Q/EzINYlxgBNIH4KM4RYAzSB+AMQPwfiPGINgLkC5h1dYg2AeeMZEOcRa4AeVPMzYg3QhGp+RqwBmlDNz9BsJ84FWDS/GDUAFQAA5uEcrsUoZuIAAAAASUVORK5CYII=",alt:"Ryu",badge:"FIGHTER"}),e.jsxs(n,{size:"xl",variant:"nes",children:[e.jsx(t,{size:"sm",variant:"neon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR42mNgGAU4gCYQPwPi51A6j0hz9IH4JxD/h+JnQKxLjAEw8AmIdYkxQBOIn8IMAeJ8Yg3QBOIPUEc8J9YAXah3YIboEmsAzPZnQJxHrAF6UO88I9YATajtz9BsJ84FWDS/GDUAFQAANV8cruoUa0AAAAAASUVORK5CYII=",alt:"Samus"}),e.jsx("h3",{className:"text-white font-['Press_Start_2P'] text-xs mt-4 mb-2",children:"SAMUS"}),e.jsx("button",{className:"bg-yellow-400 text-gray-900 px-3 py-1 text-[8px] font-['Press_Start_2P'] hover:bg-yellow-300 transition-colors",children:"SELECT"})]})]})})});export{m as default};
