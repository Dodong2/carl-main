import{r as i,j as e}from"./index-SXw1HhQz.js";const n=({data:a,viewMode:A})=>{const[t,l]=i.useState(!1);return e.jsxs("div",{className:`
        relative bg-[#1a1a2e] border-4 border-white rounded-sm overflow-hidden
        cursor-pointer transition-all duration-300 
        shadow-[8px_8px_0px_rgba(0,0,0,0.3)]
        hover:shadow-[12px_12px_0px_rgba(0,0,0,0.4)]
        hover:-translate-y-2
        ${A==="list"?"w-full":""}
      `,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[e.jsx("div",{className:"absolute inset-0 pointer-events-none z-2 opacity-30",style:{backgroundImage:`
            repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px),
            repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.05) 4px, rgba(255,255,255,0.05) 8px)
          `}}),e.jsx("div",{className:"absolute top-1 right-1 bg-[#ff6b6b] text-[#1a1a2e] text-[8px] px-1.5 py-0.5 z-4 font-['Press_Start_2P']",children:a.badge}),e.jsxs("div",{className:`
        p-4 flex z-1 relative
        ${A==="list"?"flex-row items-center min-h-0":"flex-col items-center min-h-50"}
      `,children:[e.jsx("img",{src:a.image,className:`
            w-20 h-20 transition-transform duration-300
            ${t?"animate-bounce":""}
            ${A==="list"?"mr-5":"my-2.5"}
          `,style:{imageRendering:"pixelated"},alt:`${a.name} character`}),e.jsxs("div",{className:`
          flex flex-col
          ${A==="list"?"items-start":"items-center"}
        `,children:[e.jsx("h2",{className:`
            text-xs my-2.5 text-[#ff6b6b] font-['Press_Start_2P']
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]
            ${A==="list"?"text-left":"text-center"}
          `,children:a.name}),e.jsx("p",{className:`
            text-[8px] text-[#4ecdc4] mb-2.5 font-['Press_Start_2P']
            ${A==="list"?"text-left":"text-center"}
          `,children:a.game})]})]}),e.jsxs("div",{className:`
        absolute inset-0 bg-[rgba(26,26,46,0.95)] 
        flex flex-col justify-center items-center p-5
        border-4 border-[#4ecdc4] z-3
        transition-all duration-300
        backdrop-blur-sm
        ${t?"opacity-100 scale-100":"opacity-0 scale-95 pointer-events-none"}
      `,children:[a.stats.map((s,r)=>e.jsxs("div",{className:"w-full mb-2",children:[e.jsxs("div",{className:"flex justify-between text-[8px] mb-1",children:[e.jsx("span",{className:"text-[#92f29c]",children:s.label}),e.jsxs("span",{className:"text-white",children:[s.value,"/100"]})]}),e.jsx("div",{className:"h-2 bg-white/10 relative overflow-hidden",children:e.jsx("div",{className:"h-full bg-[#ff6b6b] absolute top-0 left-0 transition-all duration-500",style:{width:t?`${s.value}%`:"0%"}})})]},r)),e.jsxs("div",{className:"text-[#ff6b6b] text-[10px] mt-2.5 text-center font-['Press_Start_2P'] drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]",children:["SPECIAL: ",a.specialMove]})]})]})},o=[{id:"1",name:"SUPER MARIO",game:"SUPER MARIO BROS. (1985)",badge:"HERO",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR42mNgGAU4gCbQAWJOIs3QBOJnQPwciPOJMUATiJ8C8X8o/YxYA56CNAD5z4g1QBeqGYaBeriaYYCmQPwBiwnvgTgPXQzZdkwvwGsAulegyTpf0NVhugtZM8w7cO/AXDNqAD4AAMz/HK7/r8LnAAAAAElFTkSuQmCC",stats:[{label:"JUMP",value:92},{label:"SPEED",value:75},{label:"POWER",value:80}],specialMove:"FIREBALL"},{id:"2",name:"PAC-MAN",game:"PAC-MAN (1980)",badge:"CLASSIC",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAY0lEQVR42mNgGAWDCmgC8TMgfo7GfwbEuiSaAVL7H4p/ArEuMQZoAvFPqKJnUPo5MQY8BeLnaPxnxBqgC8TPoPgZVA03YADVDNOMKeCFaobxcQE8GkG2Y3oBvwHoXhkFVAIAFw8crsW7hn4AAAAASUVORK5CYII=",stats:[{label:"SPEED",value:85},{label:"APPETITE",value:100},{label:"EVASION",value:88}],specialMove:"GHOST CHOMPER"},{id:"3",name:"SONIC",game:"SONIC THE HEDGEHOG (1991)",badge:"SPEEDSTER",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVR42mNgGAWDEmgC8XMgfg7Ez6D0cyDWJcYATSB+CsT/ofQzIA4kxoD/UPoZED8l1gBdIH4GxT+JNUATiD9ADfkAxHnEGqAJNQSGdYk1QBNqCIzWJdYAmFeew7xCrAF6QGwAxfoD75VRAAAjyx2u6hRrQAAAAABJRU5ErkJggg==",stats:[{label:"SPEED",value:99},{label:"JUMP",value:82},{label:"ATTITUDE",value:95}],specialMove:"SPIN DASH"},{id:"4",name:"LINK",game:"THE LEGEND OF ZELDA (1986)",badge:"LEGEND",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaklEQVR42mNgGAU4gCYQPwPi52j0MyDWJdIcTSB+CsT/gfgnEOcTYwC6QaS4QBdqyDMofk6sAZpA/AGIPwBxHrEGaALxczQXEm2AJhA/g2LiDYBphroKeAPQDXqGphmuGWYIcYaNAqoBABCfHK78kSlpAAAAAElFTkSuQmCC",stats:[{label:"COURAGE",value:97},{label:"WISDOM",value:80},{label:"POWER",value:85}],specialMove:"MASTER SWORD"},{id:"5",name:"SAMUS ARAN",game:"METROID (1986)",badge:"HUNTER",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVR42mNgGAU4gCYQPwPi51A6j0hz9IH4JxD/h+JnQKxLjAEw8AmIdYkxQBOIn8IMAeJ8Yg3QBOIPUEc8J9YAXah3YIboEmsAzPZnQJxHrAF6UO88I9YATajtz9BsJ84FWDS/GDUAFQAANV8cruoUa0AAAAAASUVORK5CYII=",stats:[{label:"FIREPOWER",value:95},{label:"DEFENSE",value:90},{label:"AGILITY",value:83}],specialMove:"MORPH BALL"},{id:"6",name:"RYU",game:"STREET FIGHTER II (1991)",badge:"FIGHTER",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAZklEQVR42mNgGAU4gCYQPwPi50CcR6Q5mkD8FIj/Q/EzINYlxgBNIH4KM4RYAzSB+AMQPwfiPGINgLkC5h1dYg2AeeMZEOcRa4AeVPMzYg3QhGp+RqwBmlDNz9BsJ84FWDS/GDUAFQAA5uEcrsUoZuIAAAAASUVORK5CYII=",stats:[{label:"STRENGTH",value:88},{label:"TECHNIQUE",value:95},{label:"SPEED",value:78}],specialMove:"HADOUKEN"}],g=()=>{const[a]=i.useState("grid"),[A,t]=i.useState(o),l=()=>{t(A.map(s=>({...s,stats:s.stats.map(r=>({...r,value:Math.floor(Math.random()*51)+50}))})))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"grid gap-6 mb-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",children:A.map(s=>e.jsx(n,{data:s,viewMode:a},s.id))}),e.jsx("button",{className:`\r
            block mx-auto bg-[#ff6b6b] text-[#1a1a2e] border-none \r
            px-5 py-2.5 text-sm cursor-pointer transition-all duration-200\r
            shadow-[4px_4px_0px_rgba(0,0,0,0.5)]\r
            hover:shadow-[6px_6px_0px_rgba(0,0,0,0.5)]\r
            hover:-translate-x-0.5 hover:-translate-y-0.5\r
            active:shadow-[2px_2px_0px_rgba(0,0,0,0.5)]\r
            active:translate-x-0.5 active:translate-y-0.5\r
          `,onClick:l,children:"RANDOMIZE STATS"})]})},c=()=>e.jsx("section",{id:"skills",className:"min-h-screen p-10 border-2 border-amber-400",children:e.jsx(g,{})});export{c as default};
