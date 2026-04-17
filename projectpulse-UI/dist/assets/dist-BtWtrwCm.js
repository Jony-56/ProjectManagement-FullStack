import{a as e,n as t}from"./jsx-runtime-DWSWI4JT.js";var n=e(t()),r=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),i=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),a=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),o=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},s={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},c=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},l=(0,n.createContext)({}),u=()=>(0,n.useContext)(l),d=(0,n.forwardRef)(({color:e,size:t,strokeWidth:i,absoluteStrokeWidth:a,className:o=``,children:l,iconNode:d,...f},p)=>{let{size:m=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,color:_=`currentColor`,className:v=``}=u()??{},y=a??g?Number(i??h)*24/Number(t??m):i??h;return(0,n.createElement)(`svg`,{ref:p,...s,width:t??m??s.width,height:t??m??s.height,stroke:e??_,strokeWidth:y,className:r(`lucide`,v,o),...!l&&!c(f)&&{"aria-hidden":`true`},...f},[...d.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(l)?l:[l]])}),f=(e,t)=>{let a=(0,n.forwardRef)(({className:a,...s},c)=>(0,n.createElement)(d,{ref:c,iconNode:t,className:r(`lucide-${i(o(e))}`,`lucide-${e}`,a),...s}));return a.displayName=o(e),a},p={data:``},m=e=>{if(typeof window==`object`){let t=(e?e.querySelector(`#_goober`):window._goober)||Object.assign(document.createElement(`style`),{innerHTML:` `,id:`_goober`});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||p},h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,g=/\/\*[^]*?\*\/|  +/g,_=/\n+/g,v=(e,t)=>{let n=``,r=``,i=``;for(let a in e){let o=e[a];a[0]==`@`?a[1]==`i`?n=a+` `+o+`;`:r+=a[1]==`f`?v(o,a):a+`{`+v(o,a[1]==`k`?``:t)+`}`:typeof o==`object`?r+=v(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+` `+t:t)):a):o!=null&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,`-$&`).toLowerCase(),i+=v.p?v.p(a,o):a+`:`+o+`;`)}return n+(t&&i?t+`{`+i+`}`:i)+r},y={},b=e=>{if(typeof e==`object`){let t=``;for(let n in e)t+=n+b(e[n]);return t}return e},ee=(e,t,n,r,i)=>{let a=b(e),o=y[a]||(y[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return`go`+n})(a));if(!y[o]){let t=a===e?(e=>{let t,n,r=[{}];for(;t=h.exec(e.replace(g,``));)t[4]?r.shift():t[3]?(n=t[3].replace(_,` `).trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(_,` `).trim();return r[0]})(e):e;y[o]=v(i?{[`@keyframes `+o]:t}:t,n?``:`.`+o)}let s=n&&y.g?y.g:null;return n&&(y.g=y[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):t.data.indexOf(e)===-1&&(t.data=n?e+t.data:t.data+e)})(y[o],t,r,s),o},x=(e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?`.`+t:e&&typeof e==`object`?e.props?``:v(e,``):!1===e?``:e}return e+r+(a??``)},``);function S(e){let t=this||{},n=e.call?e(t.p):e;return ee(n.unshift?n.raw?x(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,m(t.target),t.g,t.o,t.k)}var C,w,T;S.bind({g:1});var E=S.bind({k:1});function D(e,t,n,r){v.p=t,C=e,w=n,T=r}function O(e,t){let n=this||{};return function(){let r=arguments;function i(a,o){let s=Object.assign({},a),c=s.className||i.className;n.p=Object.assign({theme:w&&w()},s),n.o=/ *go\d+/.test(c),s.className=S.apply(n,r)+(c?` `+c:``),t&&(s.ref=o);let l=e;return e[0]&&(l=s.as||e,delete s.as),T&&l[0]&&T(s),C(l,s)}return t?t(i):i}}var k=e=>typeof e==`function`,A=(e,t)=>k(e)?e(t):e,j=(()=>{let e=0;return()=>(++e).toString()})(),M=(()=>{let e;return()=>{if(e===void 0&&typeof window<`u`){let t=matchMedia(`(prefers-reduced-motion: reduce)`);e=!t||t.matches}return e}})(),te=20,N=`default`,P=(e,t)=>{let{toastLimit:n}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,n)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return P(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||i===void 0?{...e,dismissed:!0,visible:!1}:e)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},F=[],I={toasts:[],pausedAt:void 0,settings:{toastLimit:te}},L={},R=(e,t=N)=>{L[t]=P(L[t]||I,e),F.forEach(([e,n])=>{e===t&&n(L[t])})},z=e=>Object.keys(L).forEach(t=>R(e,t)),B=e=>Object.keys(L).find(t=>L[t].toasts.some(t=>t.id===e)),V=(e=N)=>t=>{R(t,e)},H={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},U=(e={},t=N)=>{let[r,i]=(0,n.useState)(L[t]||I),a=(0,n.useRef)(L[t]);(0,n.useEffect)(()=>(a.current!==L[t]&&i(L[t]),F.push([t,i]),()=>{let e=F.findIndex(([e])=>e===t);e>-1&&F.splice(e,1)}),[t]);let o=r.toasts.map(t=>({...e,...e[t.type],...t,removeDelay:t.removeDelay||e[t.type]?.removeDelay||e?.removeDelay,duration:t.duration||e[t.type]?.duration||e?.duration||H[t.type],style:{...e.style,...e[t.type]?.style,...t.style}}));return{...r,toasts:o}},W=(e,t=`blank`,n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:`status`,"aria-live":`polite`},message:e,pauseDuration:0,...n,id:n?.id||j()}),G=e=>(t,n)=>{let r=W(t,e,n);return V(r.toasterId||B(r.id))({type:2,toast:r}),r.id},K=(e,t)=>G(`blank`)(e,t);K.error=G(`error`),K.success=G(`success`),K.loading=G(`loading`),K.custom=G(`custom`),K.dismiss=(e,t)=>{let n={type:3,toastId:e};t?V(t)(n):z(n)},K.dismissAll=e=>K.dismiss(void 0,e),K.remove=(e,t)=>{let n={type:4,toastId:e};t?V(t)(n):z(n)},K.removeAll=e=>K.remove(void 0,e),K.promise=(e,t,n)=>{let r=K.loading(t.loading,{...n,...n?.loading});return typeof e==`function`&&(e=e()),e.then(e=>{let i=t.success?A(t.success,e):void 0;return i?K.success(i,{id:r,...n,...n?.success}):K.dismiss(r),e}).catch(e=>{let i=t.error?A(t.error,e):void 0;i?K.error(i,{id:r,...n,...n?.error}):K.dismiss(r)}),e};var q=1e3,J=(e,t=`default`)=>{let{toasts:r,pausedAt:i}=U(e,t),a=(0,n.useRef)(new Map).current,o=(0,n.useCallback)((e,t=q)=>{if(a.has(e))return;let n=setTimeout(()=>{a.delete(e),s({type:4,toastId:e})},t);a.set(e,n)},[]);(0,n.useEffect)(()=>{if(i)return;let e=Date.now(),n=r.map(n=>{if(n.duration===1/0)return;let r=(n.duration||0)+n.pauseDuration-(e-n.createdAt);if(r<0){n.visible&&K.dismiss(n.id);return}return setTimeout(()=>K.dismiss(n.id,t),r)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[r,i,t]);let s=(0,n.useCallback)(V(t),[t]),c=(0,n.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),l=(0,n.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),u=(0,n.useCallback)(()=>{i&&s({type:6,time:Date.now()})},[i,s]),d=(0,n.useCallback)((e,t)=>{let{reverseOrder:n=!1,gutter:i=8,defaultPosition:a}=t||{},o=r.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=o.findIndex(t=>t.id===e.id),c=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...n?[c+1]:[0,c]).reduce((e,t)=>e+(t.height||0)+i,0)},[r]);return(0,n.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[r,o]),{toasts:r,handlers:{updateHeight:l,startPause:c,endPause:u,calculateOffset:d}}},Y=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,X=E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Q=O(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#ff4b4b`};
  position: relative;
  transform: rotate(45deg);

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${X} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||`#fff`};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ne=E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,re=O(`div`)`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||`#e0e0e0`};
  border-right-color: ${e=>e.primary||`#616161`};
  animation: ${ne} 1s linear infinite;
`,ie=E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ae=E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,oe=O(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||`#61d345`};
  position: relative;
  transform: rotate(45deg);

  animation: ${ie} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ae} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||`#fff`};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,se=O(`div`)`
  position: absolute;
`,ce=O(`div`)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,le=E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ue=O(`div`)`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${le} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,de=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t===void 0?r===`blank`?null:n.createElement(ce,null,n.createElement(re,{...i}),r!==`loading`&&n.createElement(se,null,r===`error`?n.createElement(Q,{...i}):n.createElement(oe,{...i}))):typeof t==`string`?n.createElement(ue,null,t):t},fe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,pe=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,me=`0%{opacity:0;} 100%{opacity:1;}`,he=`0%{opacity:1;} 100%{opacity:0;}`,ge=O(`div`)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,_e=O(`div`)`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ve=(e,t)=>{let n=e.includes(`top`)?1:-1,[r,i]=M()?[me,he]:[fe(n),pe(n)];return{animation:t?`${E(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ye=n.memo(({toast:e,position:t,style:r,children:i})=>{let a=e.height?ve(e.position||t||`top-center`,e.visible):{opacity:0},o=n.createElement(de,{toast:e}),s=n.createElement(_e,{...e.ariaProps},A(e.message,e));return n.createElement(ge,{className:e.className,style:{...a,...r,...e.style}},typeof i==`function`?i({icon:o,message:s}):n.createElement(n.Fragment,null,o,s))});D(n.createElement);var be=({id:e,className:t,style:r,onHeightUpdate:i,children:a})=>{let o=n.useCallback(t=>{if(t){let n=()=>{let n=t.getBoundingClientRect().height;i(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return n.createElement(`div`,{ref:o,className:t,style:r},a)},xe=(e,t)=>{let n=e.includes(`top`),r=n?{top:0}:{bottom:0},i=e.includes(`center`)?{justifyContent:`center`}:e.includes(`right`)?{justifyContent:`flex-end`}:{};return{left:0,right:0,display:`flex`,position:`absolute`,transition:M()?void 0:`all 230ms cubic-bezier(.21,1.02,.73,1)`,transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}},Se=S`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,Ce=({reverseOrder:e,position:t=`top-center`,toastOptions:r,gutter:i,children:a,toasterId:o,containerStyle:s,containerClassName:c})=>{let{toasts:l,handlers:u}=J(r,o);return n.createElement(`div`,{"data-rht-toaster":o||``,style:{position:`fixed`,zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:`none`,...s},className:c,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(r=>{let o=r.position||t,s=xe(o,u.calculateOffset(r,{reverseOrder:e,gutter:i,defaultPosition:t}));return n.createElement(be,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?Se:``,style:s},r.type===`custom`?A(r.message,r):a?a(r):n.createElement(ye,{toast:r,position:o}))}))},we=K;export{we as n,f as r,Ce as t};