import{r as h,b as $t,j as k}from"./index-UpcQ8XUw.js";import{u as zt}from"./viewport-BFSY3irf.js";import"./owner-BLrbmOWj.js";import{m as Ht}from"./spring-C80N1tKa.js";import{u as It}from"./use-event-callback-BoXR1gav.js";import{c as dt}from"./StyledButton-CQBvDIfc.js";import{P as Yt,b as Xt}from"./index-BdLpNPKg.js";import{A as qt}from"./index-DZzsMnT1.js";import{m as bt}from"./proxy-Cw92-JY2.js";const ot=Math.min,Y=Math.max,it=Math.round,et=Math.floor,H=t=>({x:t,y:t}),Ut={left:"right",right:"left",bottom:"top",top:"bottom"},Kt={start:"end",end:"start"};function Rt(t,e,n){return Y(t,ot(e,n))}function lt(t,e){return typeof t=="function"?t(e):t}function X(t){return t.split("-")[0]}function ft(t){return t.split("-")[1]}function Pt(t){return t==="x"?"y":"x"}function St(t){return t==="y"?"height":"width"}function at(t){return["top","bottom"].includes(X(t))?"y":"x"}function kt(t){return Pt(at(t))}function Gt(t,e,n){n===void 0&&(n=!1);const o=ft(t),i=kt(t),s=St(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=rt(r)),[r,rt(r)]}function Jt(t){const e=rt(t);return[gt(t),e,gt(e)]}function gt(t){return t.replace(/start|end/g,e=>Kt[e])}function Qt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Zt(t,e,n,o){const i=ft(t);let s=Qt(X(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(gt)))),s}function rt(t){return t.replace(/left|right|bottom|top/g,e=>Ut[e])}function te(t){return{top:0,right:0,bottom:0,left:0,...t}}function ee(t){return typeof t!="number"?te(t):{top:t,right:t,bottom:t,left:t}}function st(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Et(t,e,n){let{reference:o,floating:i}=t;const s=at(e),r=kt(e),c=St(r),l=X(e),f=s==="y",a=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let d;switch(l){case"top":d={x:a,y:o.y-i.height};break;case"bottom":d={x:a,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-i.width,y:u};break;default:d={x:o.x,y:o.y}}switch(ft(e)){case"start":d[r]-=m*(n&&f?-1:1);break;case"end":d[r]+=m*(n&&f?-1:1);break}return d}const ne=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:a,y:u}=Et(f,o,l),m=o,d={},p=0;for(let x=0;x<c.length;x++){const{name:w,fn:g}=c[x],{x:y,y:b,data:R,reset:v}=await g({x:a,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:d,rects:f,platform:r,elements:{reference:t,floating:e}});a=y??a,u=b??u,d={...d,[w]:{...d[w],...R}},v&&p<=50&&(p++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(f=v.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:a,y:u}=Et(f,m,l)),x=-1)}return{x:a,y:u,placement:m,strategy:i,middlewareData:d}};async function Tt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:a="viewport",elementContext:u="floating",altBoundary:m=!1,padding:d=0}=lt(e,t),p=ee(d),w=c[m?u==="floating"?"reference":"floating":u],g=st(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:f,rootBoundary:a,strategy:l})),y=u==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),R=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},v=st(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:b,strategy:l}):y);return{top:(g.top-v.top+p.top)/R.y,bottom:(v.bottom-g.bottom+p.bottom)/R.y,left:(g.left-v.left+p.left)/R.x,right:(v.right-g.right+p.right)/R.x}}const oe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:a=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:x=!0,...w}=lt(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const g=X(i),y=X(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(f.floating)),R=m||(y||!x?[rt(c)]:Jt(c));!m&&p!=="none"&&R.push(...Zt(c,x,p,b));const v=[c,...R],E=await Tt(e,w),O=[];let S=((o=s.flip)==null?void 0:o.overflows)||[];if(a&&O.push(E[g]),u){const D=Gt(i,r,b);O.push(E[D[0]],E[D[1]])}if(S=[...S,{placement:i,overflows:O}],!O.every(D=>D<=0)){var U,M;const D=(((U=s.flip)==null?void 0:U.index)||0)+1,L=v[D];if(L)return{data:{index:D,overflows:S},reset:{placement:L}};let F=(M=S.filter(N=>N.overflows[0]<=0).sort((N,C)=>N.overflows[1]-C.overflows[1])[0])==null?void 0:M.placement;if(!F)switch(d){case"bestFit":{var $;const N=($=S.map(C=>[C.placement,C.overflows.filter(P=>P>0).reduce((P,A)=>P+A,0)]).sort((C,P)=>C[1]-P[1])[0])==null?void 0:$[0];N&&(F=N);break}case"initialPlacement":F=c;break}if(i!==F)return{reset:{placement:F}}}return{}}}};async function ie(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=X(n),c=ft(n),l=at(n)==="y",f=["left","top"].includes(r)?-1:1,a=s&&l?-1:1,u=lt(e,t);let{mainAxis:m,crossAxis:d,alignmentAxis:p}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return c&&typeof p=="number"&&(d=c==="end"?p*-1:p),l?{x:d*a,y:m*f}:{x:m*f,y:d*a}}const re=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await ie(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},se=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:g,y}=w;return{x:g,y}}},...l}=lt(t,e),f={x:n,y:o},a=await Tt(e,l),u=at(X(i)),m=Pt(u);let d=f[m],p=f[u];if(s){const w=m==="y"?"top":"left",g=m==="y"?"bottom":"right",y=d+a[w],b=d-a[g];d=Rt(y,d,b)}if(r){const w=u==="y"?"top":"left",g=u==="y"?"bottom":"right",y=p+a[w],b=p-a[g];p=Rt(y,p,b)}const x=c.fn({...e,[m]:d,[u]:p});return{...x,data:{x:x.x-n,y:x.y-o}}}}};function J(t){return Mt(t)?(t.nodeName||"").toLowerCase():"#document"}function T(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function _(t){var e;return(e=(Mt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Mt(t){return t instanceof Node||t instanceof T(t).Node}function B(t){return t instanceof Element||t instanceof T(t).Element}function j(t){return t instanceof HTMLElement||t instanceof T(t).HTMLElement}function Ct(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof T(t).ShadowRoot}function Z(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=W(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ce(t){return["table","td","th"].includes(J(t))}function ht(t){const e=xt(),n=W(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function le(t){let e=I(t);for(;j(e)&&!G(e);){if(ht(e))return e;e=I(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(t){return["html","body","#document"].includes(J(t))}function W(t){return T(t).getComputedStyle(t)}function ut(t){return B(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if(J(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ct(t)&&t.host||_(t);return Ct(e)?e.host:e}function Dt(t){const e=I(t);return G(e)?t.ownerDocument?t.ownerDocument.body:t.body:j(e)&&Z(e)?e:Dt(e)}function Q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Dt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=T(i);return s?e.concat(r,r.visualViewport||[],Z(i)?i:[],r.frameElement&&n?Q(r.frameElement):[]):e.concat(i,Q(i,[],n))}function Ft(t){const e=W(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=j(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=it(n)!==s||it(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function wt(t){return B(t)?t:t.contextElement}function K(t){const e=wt(t);if(!j(e))return H(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ft(e);let r=(s?it(n.width):n.width)/o,c=(s?it(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const fe=H(0);function Nt(t){const e=T(t);return!xt()||!e.visualViewport?fe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ae(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==T(t)?!1:e}function q(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=wt(t);let r=H(1);e&&(o?B(o)&&(r=K(o)):r=K(t));const c=ae(s,n,o)?Nt(s):H(0);let l=(i.left+c.x)/r.x,f=(i.top+c.y)/r.y,a=i.width/r.x,u=i.height/r.y;if(s){const m=T(s),d=o&&B(o)?T(o):o;let p=m,x=p.frameElement;for(;x&&o&&d!==p;){const w=K(x),g=x.getBoundingClientRect(),y=W(x),b=g.left+(x.clientLeft+parseFloat(y.paddingLeft))*w.x,R=g.top+(x.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,f*=w.y,a*=w.x,u*=w.y,l+=b,f+=R,p=T(x),x=p.frameElement}}return st({width:a,height:u,x:l,y:f})}const ue=[":popover-open",":modal"];function yt(t){return ue.some(e=>{try{return t.matches(e)}catch{return!1}})}function de(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=_(o),c=e?yt(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},f=H(1);const a=H(0),u=j(o);if((u||!u&&!s)&&((J(o)!=="body"||Z(r))&&(l=ut(o)),j(o))){const m=q(o);f=K(o),a.x=m.x+o.clientLeft,a.y=m.y+o.clientTop}return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-l.scrollLeft*f.x+a.x,y:n.y*f.y-l.scrollTop*f.y+a.y}}function me(t){return Array.from(t.getClientRects())}function Vt(t){return q(_(t)).left+ut(t).scrollLeft}function pe(t){const e=_(t),n=ut(t),o=t.ownerDocument.body,i=Y(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=Y(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Vt(t);const c=-n.scrollTop;return W(o).direction==="rtl"&&(r+=Y(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function ge(t,e){const n=T(t),o=_(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const f=xt();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function he(t,e){const n=q(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=j(t)?K(t):H(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,f=o*s.y;return{width:r,height:c,x:l,y:f}}function At(t,e,n){let o;if(e==="viewport")o=ge(t,n);else if(e==="document")o=pe(_(t));else if(B(e))o=he(e,n);else{const i=Nt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return st(o)}function Wt(t,e){const n=I(t);return n===e||!B(n)||G(n)?!1:W(n).position==="fixed"||Wt(n,e)}function xe(t,e){const n=e.get(t);if(n)return n;let o=Q(t,[],!1).filter(c=>B(c)&&J(c)!=="body"),i=null;const s=W(t).position==="fixed";let r=s?I(t):t;for(;B(r)&&!G(r);){const c=W(r),l=ht(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Z(r)&&!l&&Wt(t,r))?o=o.filter(a=>a!==r):i=c,r=I(r)}return e.set(t,o),o}function we(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?yt(e)?[]:xe(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((f,a)=>{const u=At(e,a,i);return f.top=Y(u.top,f.top),f.right=ot(u.right,f.right),f.bottom=ot(u.bottom,f.bottom),f.left=Y(u.left,f.left),f},At(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ye(t){const{width:e,height:n}=Ft(t);return{width:e,height:n}}function ve(t,e,n){const o=j(e),i=_(e),s=n==="fixed",r=q(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=H(0);if(o||!o&&!s)if((J(e)!=="body"||Z(i))&&(c=ut(e)),o){const u=q(e,!0,s,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else i&&(l.x=Vt(i));const f=r.left+c.scrollLeft-l.x,a=r.top+c.scrollTop-l.y;return{x:f,y:a,width:r.width,height:r.height}}function mt(t){return W(t).position==="static"}function Ot(t,e){return!j(t)||W(t).position==="fixed"?null:e?e(t):t.offsetParent}function Bt(t,e){const n=T(t);if(yt(t))return n;if(!j(t)){let i=I(t);for(;i&&!G(i);){if(B(i)&&!mt(i))return i;i=I(i)}return n}let o=Ot(t,e);for(;o&&ce(o)&&mt(o);)o=Ot(o,e);return o&&G(o)&&mt(o)&&!ht(o)?n:o||le(t)||n}const be=async function(t){const e=this.getOffsetParent||Bt,n=this.getDimensions,o=await n(t.floating);return{reference:ve(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function Re(t){return W(t).direction==="rtl"}const Ee={convertOffsetParentRelativeRectToViewportRelativeRect:de,getDocumentElement:_,getClippingRect:we,getOffsetParent:Bt,getElementRects:be,getClientRects:me,getDimensions:ye,getScale:K,isElement:B,isRTL:Re};function Ce(t,e){let n=null,o;const i=_(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:f,top:a,width:u,height:m}=t.getBoundingClientRect();if(c||e(),!u||!m)return;const d=et(a),p=et(i.clientWidth-(f+u)),x=et(i.clientHeight-(a+m)),w=et(f),y={rootMargin:-d+"px "+-p+"px "+-x+"px "+-w+"px",threshold:Y(0,ot(1,l))||1};let b=!0;function R(v){const E=v[0].intersectionRatio;if(E!==l){if(!b)return r();E?r(!1,E):o=setTimeout(()=>{r(!1,1e-7)},1e3)}b=!1}try{n=new IntersectionObserver(R,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,y)}n.observe(t)}return r(!0),s}function Ae(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=wt(t),a=i||s?[...f?Q(f):[],...Q(e)]:[];a.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const u=f&&c?Ce(f,n):null;let m=-1,d=null;r&&(d=new ResizeObserver(g=>{let[y]=g;y&&y.target===f&&d&&(d.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=d)==null||b.observe(e)})),n()}),f&&!l&&d.observe(f),d.observe(e));let p,x=l?q(t):null;l&&w();function w(){const g=q(t);x&&(g.x!==x.x||g.y!==x.y||g.width!==x.width||g.height!==x.height)&&n(),x=g,p=requestAnimationFrame(w)}return n(),()=>{var g;a.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),u?.(),(g=d)==null||g.disconnect(),d=null,l&&cancelAnimationFrame(p)}}const Oe=re,Le=se,Pe=oe,Se=(t,e,n)=>{const o=new Map,i={platform:Ee,...n},s={...i.platform,_c:o};return ne(t,e,{...i,platform:s})};var nt=typeof document<"u"?h.useLayoutEffect:h.useEffect;function ct(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,o,i;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(o=n;o--!==0;)if(!ct(t[o],e[o]))return!1;return!0}if(i=Object.keys(t),n=i.length,n!==Object.keys(e).length)return!1;for(o=n;o--!==0;)if(!{}.hasOwnProperty.call(e,i[o]))return!1;for(o=n;o--!==0;){const s=i[o];if(!(s==="_owner"&&t.$$typeof)&&!ct(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function jt(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function Lt(t,e){const n=jt(t);return Math.round(e*n)/n}function pt(t){const e=h.useRef(t);return nt(()=>{e.current=t}),e}function ke(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:o=[],platform:i,elements:{reference:s,floating:r}={},transform:c=!0,whileElementsMounted:l,open:f}=t,[a,u]=h.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[m,d]=h.useState(o);ct(m,o)||d(o);const[p,x]=h.useState(null),[w,g]=h.useState(null),y=h.useCallback(A=>{A!==E.current&&(E.current=A,x(A))},[]),b=h.useCallback(A=>{A!==O.current&&(O.current=A,g(A))},[]),R=s||p,v=r||w,E=h.useRef(null),O=h.useRef(null),S=h.useRef(a),U=l!=null,M=pt(l),$=pt(i),D=pt(f),L=h.useCallback(()=>{if(!E.current||!O.current)return;const A={placement:e,strategy:n,middleware:m};$.current&&(A.platform=$.current),Se(E.current,O.current,A).then(z=>{const V={...z,isPositioned:D.current!==!1};F.current&&!ct(S.current,V)&&(S.current=V,$t.flushSync(()=>{u(V)}))})},[m,e,n,$,D]);nt(()=>{f===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,u(A=>({...A,isPositioned:!1})))},[f]);const F=h.useRef(!1);nt(()=>(F.current=!0,()=>{F.current=!1}),[]),nt(()=>{if(R&&(E.current=R),v&&(O.current=v),R&&v){if(M.current)return M.current(R,v,L);L()}},[R,v,L,M,U]);const N=h.useMemo(()=>({reference:E,floating:O,setReference:y,setFloating:b}),[y,b]),C=h.useMemo(()=>({reference:R,floating:v}),[R,v]),P=h.useMemo(()=>{const A={position:n,left:0,top:0};if(!C.floating)return A;const z=Lt(C.floating,a.x),V=Lt(C.floating,a.y);return c?{...A,transform:"translate("+z+"px, "+V+"px)",...jt(C.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:z,top:V}},[n,c,C.floating,a.x,a.y]);return h.useMemo(()=>({...a,update:L,refs:N,elements:C,floatingStyles:P}),[a,L,N,C,P])}const Te=(t,e)=>({...Oe(t),options:[t,e]}),Me=(t,e)=>({...Le(t),options:[t,e]}),De=(t,e)=>({...Pe(t),options:[t,e]});function Fe(t,...e){t&&t.addEventListener&&t.addEventListener(...e)}function Ne(t,...e){t&&t.removeEventListener&&t.removeEventListener(...e)}const Ve=["mousedown","touchstart"],We=(t,e,n=Ve)=>{const o=h.useRef(e);h.useEffect(()=>{o.current=e},[e]),h.useEffect(()=>{const i=s=>{const{current:r}=t;r&&!r.contains(s.target)&&o.current(s)};for(const s of n)Fe(document,s,i);return()=>{for(const s of n)Ne(document,s,i)}},[n,t])},Ke=function(t){if(zt()&&t.mobileAsSheet){const{triggerElement:n,TriggerComponent:o,triggerComponentProps:i}=t,s=n||(o?h.createElement(o,i):null);return k.jsx(Yt,{content:t.children,...t.sheet,children:s})}return k.jsx(je,{...t})},Be=h.createContext(null),je=function(e){const{headless:n=!1,wrapperClassName:o,TriggerComponent:i,triggerElement:s,trigger:r="hover",padding:c,offset:l,popoverWrapperClassNames:f,popoverClassNames:a,debug:u,animate:m=!0,as:d="div",type:p="popover",triggerComponentProps:x,isDisabled:w,onOpen:g,onClose:y,to:b,asChild:R,...v}=e,[E,O]=h.useState(!1),{x:S,y:U,refs:M,strategy:$,isPositioned:D,elements:L,update:F}=ke({middleware:v.middleware??[De({padding:c??20}),Te(l??10),Me()],strategy:v.strategy,placement:v.placement??"bottom-start",whileElementsMounted:v.whileElementsMounted});h.useEffect(()=>{if(E&&L.reference&&L.floating)return Ae(L.reference,L.floating,F)},[E,L,F]);const N=h.useRef(null);We(N,()=>{(r=="click"||r=="both")&&C()});const C=h.useCallback(()=>{u||O(!1)},[u]),P=It(()=>{w||O(!0)}),A=h.useCallback(()=>{C()},[C]),z=h.useMemo(()=>{const tt={};switch(r){case"click":return{...tt,onClick:P};case"hover":return{...tt,onMouseOver:P,onMouseOut:C};case"both":return{...tt,onClick:P,onMouseOver:P,onMouseOut:A}}},[C,P,A,r]),V=s||(i?h.cloneElement(h.createElement(i,x),{tabIndex:0}):k.jsx(k.Fragment,{})),vt=R?h.cloneElement(typeof V=="string"?k.jsx("span",{children:V}):V,{...z,ref:M.setReference}):k.jsx(d,{role:r==="both"||r==="click"?"button":"note",className:dt("inline-block",o),ref:M.setReference,...z,children:V});h.useEffect(()=>{M.floating.current&&E&&p==="popover"&&M.floating.current.focus()},[E]),h.useEffect(()=>{E?g?.():y?.()},[E]);const _t=h.useMemo(()=>({close:C}),[C]);return e.children?k.jsxs(k.Fragment,{children:[vt,k.jsx(qt,{children:E&&k.jsx(Xt,{to:b,children:k.jsx(bt.div,{className:dt("float-popover","relative z-[99]",f),...r==="hover"||r==="both"?z:{},ref:N,children:k.jsx(bt.div,{tabIndex:-1,role:p==="tooltip"?"tooltip":"dialog",className:dt(!n&&["rounded-xl border border-zinc-400/20 p-4 outline-none backdrop-blur-lg dark:border-zinc-500/30","bg-zinc-50/80 dark:bg-neutral-900/80"],"relative z-[2]",p==="tooltip"?"max-w-[25rem] break-all rounded-xl px-4 py-2 shadow-out-sm":"shadow-lg",a),ref:M.setFloating,initial:{translateY:"10px",opacity:0},animate:{translateY:"0px",opacity:1},exit:{translateY:"10px",opacity:0},transition:Ht,style:{position:$,top:U??"",left:S??"",visibility:D&&S!==null?"visible":"hidden"},children:k.jsx(Be.Provider,{value:_t,children:e.children})})})})})]}):vt};export{Ke as F};
