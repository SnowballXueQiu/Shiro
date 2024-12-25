import{r as a,j as u,R as w}from"./index-UpcQ8XUw.js";import{p as S,u as ue}from"./viewport-BFSY3irf.js";import{u as _,m as de,i as me}from"./use-ref-value-DoMDU-GG.js";import{e as K,u as R,f as V,s as Q,K as T,L as B,j as M}from"./owner-BLrbmOWj.js";import{A as pe}from"./Shiki-BsepA5Vz.js";import{c as g,a as E,M as fe,b as xe}from"./StyledButton-CQBvDIfc.js";import{d as be}from"./index-BdLpNPKg.js";import{u as H,a as ge}from"./use-motion-template-B8jh-LQA.js";import{m as ve}from"./proxy-Cw92-JY2.js";import{u as Ce}from"./use-event-callback-BoXR1gav.js";import"./provider-zKG6gw0X.js";let he=Object.freeze([]),we=e=>{let t=a.useRef(!1);!t.current&&(t.current=!0,e?.())},W=()=>{var e;let t=a.createContext(null),s=K(null),o=a.memo(r=>{var n;let{data:l,children:i}=r,c=(n=a.useContext(t))!==null&&n!==void 0?n:s,d=R(c);return we(()=>{d(l)}),a.useEffect(()=>{d(l)},[l]),a.useEffect(()=>(d(l),()=>{d(null)}),[]),i});return o.displayName="ModelDataProvider",{ModelDataAtomProvider:r=>{let{children:n,overrideAtom:l}=r;return u.jsx(t.Provider,{value:l??s,children:n})},ModelDataProvider:o,useModelDataSelector:(r,n)=>{var l;let i=(l=a.useContext(t))!==null&&l!==void 0?l:s,c=a.useCallback(d=>d?r(d):null,n||he);return V(Q(i,c))},useSetModelData:()=>R((e=a.useContext(t))!==null&&e!==void 0?e:s),useGetModelData:()=>{var r;let n=(r=a.useContext(t))!==null&&r!==void 0?r:s,l=T();return()=>l.get(n)},useModelData:()=>{var r;return V((r=a.useContext(t))!==null&&r!==void 0?r:s)},setGlobalModelData:r=>{let n=B();n.set(s,S(n.get(s),r))},getGlobalModelData:()=>B().get(s),ModelDataAtomContext:t}},U=B();U.get,U.set;K({});const X=a.createContext(null),Y=a.createContext(null),q=()=>a.useContext(X),Me=()=>a.useContext(Y),ye=a.forwardRef((e,t)=>{const{showErrorMessage:s=!0,...o}=e,r=_(()=>K({})),n=_(()=>({showErrorMessage:s,fields:r,getField:l=>M.get(r)[l],getCurrentValues:()=>Object.fromEntries(Object.entries(M.get(r)).map(([l,i])=>{const c=i.getEl()?.value;return[l,i.transform?i.transform?.(c):c]})),addField:(l,i)=>{M.set(r,c=>({...c,[l]:i}))},removeField:l=>{M.set(r,i=>{const c={...i};return delete c[l],c})}}));return a.useImperativeHandle(t,()=>n,[n]),u.jsx(X.Provider,{value:n,children:u.jsx(Y.Provider,{value:a.useMemo(()=>({showErrorMessage:s}),[s]),children:u.jsx(je,{...o})})})});ye.displayName="Form";const je=e=>{const{onSubmit:t,...s}=e,o=q().fields,r=a.useCallback(async n=>{n.preventDefault();const l=M.get(o);for await(const[i,c]of Object.entries(l)){const d=c.getEl();if(!d)continue;const{value:x}=d,{rules:f}=c;for(const[m,v]of f.entries())try{if(!await v.validator(x)){console.error(`Form validation failed, at field \`${i}\`, got value \`${x}\``),d.focus(),v.message&&M.set(o,y=>S(y,j=>{j[i].rules[m].status="error"}));return}}catch(C){console.error("validate function throw error",C);return}}t?.(n)},[t]);return u.jsx("form",{onSubmit:r,...s,children:e.children})};var Ne="Label",J=a.forwardRef((e,t)=>u.jsx(be.label,{...e,ref:t,onMouseDown:s=>{s.target.closest("button, input, select, textarea")||(e.onMouseDown?.(s),!s.defaultPrevented&&s.detail>1&&s.preventDefault())}}));J.displayName=Ne;var Z=J;const ke=a.createContext({}),Fe=()=>a.useContext(ke),G=a.forwardRef(({className:e,...t},s)=>{const o=Fe();return u.jsx(Z,{ref:s,className:g("text-foreground-600 text-[1em] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e,o.className),...t})});G.displayName=Z.displayName;const Pe=({errorMessage:e,id:t})=>u.jsx("div",{className:"mt-2",children:u.jsx(G,{className:"text-xs font-medium text-error",htmlFor:t,children:e})}),De=a.createContext({}),Ee=()=>a.useContext(De),Se=w.forwardRef((e,t)=>{const{className:s,type:o,label:r,isLoading:n,errorMessage:l,isInvalid:i,endContent:c,labelPlacement:d,inputClassName:x,bindValue:f,...m}=e,v=a.useId(),C=Ee(),{value:y,onChange:j,onBlur:I,onFocus:k,labelClassName:p,...z}=m,[F,N]=w.useState(!1),oe=w.useCallback(()=>{N(!0)},[]),re=w.useCallback(()=>{N(!1)},[]),[ae,O]=w.useState(m.value);a.useEffect(()=>{O(m.value)},[m.value]);const[P,ne]=w.useState(!1),le=de({},C,e),{labelPlacement:b="top"}=le,ie=g(C.inputClassName,e.labelClassName),ce=g(C.inputClassName,e.inputClassName);return u.jsxs("div",{className:"flex w-full flex-col",children:[u.jsxs("div",{className:g({"flex flex-col":b==="top","flex grow flex-row items-center":b==="left"},"peer relative",s),children:[r&&u.jsx(G,{className:E({"mr-4":b==="left","mb-2 flex":b==="top"},b==="inside"&&{"absolute left-3 top-2 z-[1] select-none duration-200":!0,"text-primary":F,"bottom-2 top-2 flex items-center text-lg":!y&&!F},ie),htmlFor:v,children:r}),u.jsxs("div",{className:"relative grow",children:[u.jsx("input",{id:v,value:me(f)?ae:f,onChange:h=>{O(h.target.value),j?.(h)},onBlur:h=>{re(),I?.(h)},onFocus:h=>{oe(),k?.(h)},type:o==="password"&&!P?"password":"text",className:g("flex h-10 w-full rounded-md border px-3 py-2 text-sm","focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50","border-zinc-200 bg-white placeholder:text-slate-500 focus-visible:border-primary dark:border-neutral-800 dark:bg-zinc-900",b==="inside"&&"h-auto pb-2 pt-8",o==="password"&&["pr-6",!P&&"font-mono"],n&&"pr-6",i&&"!border-red-400 !bg-red-600/50",ce),ref:t,...z}),o==="password"&&!n&&u.jsx(fe,{className:$({placement:b}),onClick:()=>{ne(!P)},children:u.jsx("i",{className:E("text-lg text-gray-500",P?"i-mingcute-eye-line":"i-mingcute-eye-close-line")})}),!n&&c&&u.jsx("div",{className:$({placement:b}),children:c}),n&&u.jsx("div",{className:$({placement:b}),children:u.jsx("i",{className:"loading loading-spinner size-5 text-primary/80"})})]})]}),i&&l&&u.jsx(Pe,{id:v,errorMessage:l})]})}),$=xe({base:"absolute right-2",variants:{placement:{inside:"bottom-2",left:"bottom-0 top-0 flex items-center",top:"bottom-0 top-0 flex items-center"}}});Se.displayName="Input";const ee=e=>{const{onKeyDown:t,onCompositionStart:s,onCompositionEnd:o}=e,r=a.useRef(!1),n=a.useCallback(c=>{r.current=!0,s?.(c)},[s]),l=a.useCallback(c=>{r.current=!1,o?.(c)},[o]),i=a.useCallback(c=>{if(r.current){c.stopPropagation();return}t?.(c)},[t]);return{onCompositionEnd:l,onCompositionStart:n,onKeyDown:i}},te=a.forwardRef(({className:e,...t},s)=>{const o=ee(t);return u.jsx("input",{ref:s,className:g("min-w-0 flex-auto appearance-none rounded-lg border ring-accent/20 duration-200 sm:text-sm lg:text-base","bg-base-100 px-3 py-[calc(theme(spacing.2)-1px)] placeholder:text-zinc-400 focus:outline-none focus:ring-2 dark:bg-zinc-700/[0.15]","border-border","focus:!border-accent/80 focus:!bg-accent/5 dark:text-zinc-200 dark:placeholder:text-zinc-500",t.type==="password"?"font-mono placeholder:font-sans":"font-sans",e),...t,...o})});te.displayName="Input";const D={sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl","3xl":"rounded-3xl",default:"rounded"},Ae=a.forwardRef((e,t)=>{const{className:s,wrapperClassName:o,children:r,rounded:n="xl",bordered:l=!0,onCmdEnter:i,onKeyDown:c,...d}=e,x=H(0),f=H(0),m=a.useCallback(({clientX:p,clientY:z,currentTarget:F})=>{const N=F.getBoundingClientRect();x.set(p-N.left),f.set(z-N.top)},[x,f]),v=a.useCallback(p=>{p.key==="Enter"&&(p.metaKey||p.ctrlKey)&&i?.(p),c?.(p)},[i,c]),C=ge`radial-gradient(320px circle at ${x}px ${f}px, var(--spotlight-color) 0%, transparent 85%)`,y=ue(),j=ee(Object.assign({},e,{onKeyDown:v})),[I,k]=a.useState(!1);return u.jsxs("div",{className:g("group relative h-full border ring-0 ring-accent/20 duration-200 [--spotlight-color:oklch(var(--a)_/_0.12)]",D[n],"border-transparent",I&&"border-accent/80 bg-accent/5 ring-2","dark:text-zinc-200 dark:placeholder:text-zinc-500",o),onMouseMove:m,children:[!y&&u.jsx(ve.div,{className:E("pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",D[n]),style:{background:C},"aria-hidden":"true"}),l&&u.jsx("div",{className:E("border-border pointer-events-none absolute inset-0 z-0 border",D[n]),"aria-hidden":"true"}),u.jsx("textarea",{ref:t,className:g("size-full resize-none bg-transparent","overflow-auto px-3 py-4","!outline-none","text-neutral-900/80 dark:text-slate-100/80",D[n],s),...d,onFocus:p=>{k(!0),d.onFocus?.(p)},onBlur:p=>{k(!1),d.onBlur?.(p)},...j}),r]})});Ae.displayName="TextArea";const A=()=>{const e=q();if(!e)throw new Error("FormInput must be used inside <FormContext />");return e},Ie=e=>{const t=A(),{fields:s}=t;return V(Q(s,a.useCallback(o=>{if(e)return o[e]?.rules.find(r=>r.status==="error")?.message},[e])))},ze=({rules:e,transform:t,getEl:s,name:o})=>{const r=A(),{addField:n,removeField:l}=r,i=Ce(s);a.useEffect(()=>{if(e&&o)return n(o,{rules:e,getEl:i,transform:t}),()=>{l(o)}},[n,i,o,l,e,t])},$e=e=>{const t=T(),s=A(),{fields:o}=s;return a.useCallback(()=>{t.set(o,r=>S(r,n=>{e&&n[e].rules.forEach(l=>{l.status==="error"&&(l.status="success")})}))},[o,t,e])},Le=e=>{const t=T(),s=A(),{fields:o}=s;return a.useCallback(()=>{t.set(o,r=>S(r,n=>{if(!e)return;const l=n[e].getEl()?.value;l&&n[e].rules.some(i=>{if(!i.validator(l))return i.status="error",!0})}))},[o,t,e])},Ve=a.memo(({className:e,rules:t,onKeyDown:s,transform:o,name:r,...n})=>{const{showErrorMessage:l}=Me(),i=a.useRef(null),c=Ie(r);ze({rules:t||[],transform:o,getEl:()=>i.current,name:r});const d=$e(r),x=a.useCallback(m=>{s&&s(m),d()},[s,d]),f=Le(r);return u.jsxs(u.Fragment,{children:[u.jsx(te,{name:r,ref:i,className:g(!!c&&"ring-2 ring-red-400 dark:ring-orange-700","w-full",e),type:"text",onKeyDown:x,onBlur:m=>{f(),n.onBlur?.(m)},...n}),l&&u.jsx(pe,{duration:.2,children:u.jsx("p",{className:"text-left text-sm text-red-400 dark:text-orange-700",children:c})})]})});Ve.displayName="FormInput";var Be=(e=>(e.Home="//",e.Posts="/posts",e.Post="/posts/",e.Notes="/notes",e.Note="/notes/",e.NoteTopics="/notes/topics",e.NoteTopic="/notes/topics/",e.Timelime="/timeline",e.Login="/login",e.Page="/",e.Categories="/categories",e.Category="/categories/",e.Projects="/projects",e.Project="/projects/",e.Says="/says",e.Friends="/friends",e.Thinking="/thinking",e.PageDeletd="/common/deleted",e))(Be||{});function Ye(e,t){let s=e;switch(e){case"/notes/":{s+=t.id,t.password&&(s+=`?password=${t.password}`);break}case"/posts/":{const o=t;s+=`${o.category}/${o.slug}`;break}case"/posts":{const o=t;s+=`?${new URLSearchParams(o).toString()}`;break}case"/timeline":{const o=t;s+=`?${new URLSearchParams(o).toString()}`;break}case"/notes/topics/":case"/categories/":case"/":{s+=t.slug;break}case"//":{s="/";break}case"/projects/":{s+=t.id;break}}return s}a.createContext(null);a.createContext({reset(e,t){}});const{ModelDataProvider:qe,ModelDataAtomProvider:Je,getGlobalModelData:Ze,setGlobalModelData:et,useModelDataSelector:tt,useSetModelData:st}=W(),{ModelDataProvider:ot,ModelDataAtomProvider:rt,getGlobalModelData:at,setGlobalModelData:nt,useModelDataSelector:lt}=W(),it=e=>["comments",e],L=e=>`ws_event:${e}`;class se extends Event{constructor(t,s){super(L(t)),this.data=s}static on(t,s){const o=r=>{s(r.data)};return document.addEventListener(L(t),o),()=>{document.removeEventListener(L(t),o)}}static emit(t,s){document.dispatchEvent(new se(t,s))}}export{ye as F,te as I,rt as M,Be as R,Ae as T,se as W,Ve as a,ot as b,tt as c,Je as d,qe as e,Me as f,Ie as g,ze as h,$e as i,Le as j,Ze as k,at as l,nt as m,it as n,W as p,Ye as r,et as s,lt as u};
