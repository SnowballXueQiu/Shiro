const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core-ulRPEgNU.js","./index-UpcQ8XUw.js","./index-DqP9DfEQ.css","./owner-BLrbmOWj.js","./StyledButton-CQBvDIfc.js","./proxy-Cw92-JY2.js","./isEmpty-DVc1NNx0.js","./line-DXtxjsEH.js","./array-BKyUJesY.js","./path-CbwjOpE9.js"])))=>i.map(i=>d[i]);
import{r as t,_ as g,j as s}from"./index-UpcQ8XUw.js";import{u as b}from"./use-is-dark-bRKRPuyu.js";import{u as w,F as y}from"./Gallery-avrlHER2.js";import{B as L}from"./alert-DX_0_rbg.js";import"./StyledButton-CQBvDIfc.js";import"./proxy-Cw92-JY2.js";import"./image--YzH6uQe.js";import"./use-ref-value-DoMDU-GG.js";import"./owner-BLrbmOWj.js";import"./index-j98Lt_QU.js";import"./viewport-BFSY3irf.js";import"./use-is-unmounted-DIErHh7q.js";import"./index-wBLfGvki.js";import"./dom-BowoBODo.js";import"./Shiki-BsepA5Vz.js";import"./spring-C80N1tKa.js";import"./use-event-callback-BoXR1gav.js";import"./index-DZzsMnT1.js";import"./FloatPopover-Bm_mzp8A.js";import"./index-BdLpNPKg.js";import"./visual-element-NWqMkEeT.js";import"./provider-zKG6gw0X.js";import"./use-drag-controls-BmdwdB98.js";import"./SocialSourceLink-29C7hxVu.js";import"./LinkCard-CCd2STRF.js";import"./use-motion-template-B8jh-LQA.js";import"./Collapse-BZIfda49.js";import"./useQuery-DODRvJtO.js";const it=m=>{const[h,d]=t.useState(!0),[E,n]=t.useState(""),[c,p]=t.useState(""),[x,u]=t.useState(),[v,l]=t.useState(),f=b();t.useEffect(()=>{g(()=>import("./mermaid.core-ulRPEgNU.js").then(r=>r.af),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async r=>{r.default.initialize({theme:f?"dark":"default"})})},[f]);const a=t.useId().split(":").join("");t.useEffect(()=>{if(!m.content)return;n(""),d(!0);let r=!1;g(()=>import("./mermaid.core-ulRPEgNU.js").then(o=>o.af),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url).then(async o=>{const I=o.default;let i;try{i=await I.render(`mermaid-${a}`,m.content)}catch(e){document.getElementById(`dmermaid-${a}`)?.remove(),e instanceof Error&&n(e.message),p(""),u(void 0),l(void 0)}if(!r){if(i){p(i.svg);const e=i.svg.match(/viewBox="[^"]*\s([\d.]+)\s([\d.]+)"/);e?.[1]&&e?.[2]&&(u(Number.parseInt(e?.[1])),l(Number.parseInt(e?.[2]))),n("")}return d(!1),()=>{r=!0}}})},[a,m.content]);const{w:_}=w(),S=new TextEncoder().encode(c),j=`data:image/svg+xml;base64,${btoa(String.fromCharCode(...new Uint8Array(S)))}`;return h?s.jsx(L,{children:"Mermaid Loading..."}):c?s.jsx("div",{children:s.jsx(y,{containerWidth:_,src:j,width:x,height:v})}):s.jsx("div",{className:"flex min-h-[50px] items-center justify-center rounded-lg bg-red-100 text-sm",children:E||"Error"})};export{it as Mermaid};