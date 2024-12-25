import{r as t}from"./index-UpcQ8XUw.js";var N=(e,a,s,u,m,c,d,h)=>{let l=document.documentElement,b=["light","dark"];function y(o){(Array.isArray(e)?e:[e]).forEach(f=>{let S=f==="class",C=S&&c?m.map(v=>c[v]||v):m;S?(l.classList.remove(...C),l.classList.add(o)):l.setAttribute(f,o)}),E(o)}function E(o){h&&b.includes(o)&&(l.style.colorScheme=o)}function i(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)y(u);else try{let o=localStorage.getItem(a)||s,f=d&&o==="system"?i():o;y(f)}catch{}},I=["light","dark"],O="(prefers-color-scheme: dark)",V=typeof window>"u",L=t.createContext(void 0),W={setTheme:e=>{},themes:[]},_=()=>{var e;return(e=t.useContext(L))!=null?e:W},F=e=>t.useContext(L)?t.createElement(t.Fragment,null,e.children):t.createElement(D,{...e}),z=["light","dark"],D=({forcedTheme:e,disableTransitionOnChange:a=!1,enableSystem:s=!0,enableColorScheme:u=!0,storageKey:m="theme",themes:c=z,defaultTheme:d=s?"system":"light",attribute:h="data-theme",value:l,children:b,nonce:y,scriptProps:E})=>{let[i,o]=t.useState(()=>M(m,d)),[f,S]=t.useState(()=>M(m)),C=l?Object.values(l):c,v=t.useCallback(r=>{let n=r;if(!n)return;r==="system"&&s&&(n=P());let g=l?l[n]:n,A=a?$(y):null,w=document.documentElement,x=p=>{p==="class"?(w.classList.remove(...C),g&&w.classList.add(g)):p.startsWith("data-")&&(g?w.setAttribute(p,g):w.removeAttribute(p))};if(Array.isArray(h)?h.forEach(x):x(h),u){let p=I.includes(d)?d:null,K=I.includes(n)?n:p;w.style.colorScheme=K}A?.()},[y]),T=t.useCallback(r=>{let n=typeof r=="function"?r(i):r;o(n);try{localStorage.setItem(m,n)}catch{}},[i]),k=t.useCallback(r=>{let n=P(r);S(n),i==="system"&&s&&!e&&v("system")},[i,e]);t.useEffect(()=>{let r=window.matchMedia(O);return r.addListener(k),k(r),()=>r.removeListener(k)},[k]),t.useEffect(()=>{let r=n=>{n.key===m&&(n.newValue?o(n.newValue):T(d))};return window.addEventListener("storage",r),()=>window.removeEventListener("storage",r)},[T]),t.useEffect(()=>{v(e??i)},[e,i]);let H=t.useMemo(()=>({theme:i,setTheme:T,forcedTheme:e,resolvedTheme:i==="system"?f:i,themes:s?[...c,"system"]:c,systemTheme:s?f:void 0}),[i,T,e,f,s,c]);return t.createElement(L.Provider,{value:H},t.createElement(J,{forcedTheme:e,storageKey:m,attribute:h,enableSystem:s,enableColorScheme:u,defaultTheme:d,value:l,themes:c,nonce:y,scriptProps:E}),b)},J=t.memo(({forcedTheme:e,storageKey:a,attribute:s,enableSystem:u,enableColorScheme:m,defaultTheme:c,value:d,themes:h,nonce:l,scriptProps:b})=>{let y=JSON.stringify([s,a,c,e,h,d,u,m]).slice(1,-1);return t.createElement("script",{...b,suppressHydrationWarning:!0,nonce:typeof window>"u"?l:"",dangerouslySetInnerHTML:{__html:`(${N.toString()})(${y})`}})}),M=(e,a)=>{if(V)return;let s;try{s=localStorage.getItem(e)||void 0}catch{}return s||a},$=e=>{let a=document.createElement("style");return e&&a.setAttribute("nonce",e),a.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(a),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(a)},1)}},P=e=>(e||(e=window.matchMedia(O)),e.matches?"dark":"light");const Q=()=>{const{theme:e,systemTheme:a}=_();return e==="dark"||e==="system"&&a==="dark"};export{F as J,Q as u};