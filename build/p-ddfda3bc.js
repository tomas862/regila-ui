let t,e,n,l=0,o=!1,s=!1,r=!1,i=!1,c=!1;const a=window,f=document,u={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},p=(()=>!!f.documentElement.attachShadow)(),m=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),d=new WeakMap,w=t=>d.get(t),$=(t,e)=>d.set(e.o=t,e),h=(t,e)=>e in t,y=t=>console.error(t),g=new Map,b=new Map,_=[],v=[],j=[],O=(t,e)=>n=>{t.push(n),o||(o=!0,e&&4&u.t?k(S):u.raf(S))},R=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){y(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},S=()=>{l++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){y(e)}t.length=0})(_);const t=2==(6&u.t)?performance.now()+10*Math.ceil(l*(1/22)):1/0;R(v,t),R(j,t),v.length>0&&(j.push(...v),v.length=0),(o=_.length+v.length+j.length>0)?u.raf(S):l=0},k=t=>Promise.resolve().then(t),M=O(v,!0),L={},U=t=>"object"==(t=typeof t)||"function"===t,x=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_regila_ui("./p-d8631f0b.js").then(()=>{u.s=a.__stencil_cssshim}),P=async()=>{u.s=a.__stencil_cssshim;const t=new RegExp("/regila-ui(\\.esm)?\\.js($|\\?|#)"),e=Array.from(f.querySelectorAll("script")).find(e=>t.test(e.src)||"regila-ui"===e.getAttribute("data-stencil-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,a.location.href));return C(t.href),window.customElements||await __sc_import_regila_ui("./p-d0882b30.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},C=t=>{const e=(()=>`__sc_import_${"regila-ui".replace(/\s|-/g,"_")}`)();try{a[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const l=new Map;a[e]=n=>{const o=new URL(n,t).href;let s=l.get(o);if(!s){const t=f.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${o}'; window.${e}.m = m;`],{type:"application/javascript"})),s=new Promise(n=>{t.onload=()=>{n(a[e].m),t.remove()}}),l.set(o,s),f.head.appendChild(t)}return s}}},E=new WeakMap,T=t=>"sc-"+t,A=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1,i=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!U(l))&&(l=String(l)),s&&r?i[i.length-1].i+=l:i.push(s?F(null,l):l),r=s)};if(c(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,i,N);const a=F(t,null);return a.u=e,i.length>0&&(a.p=i),a.$=o,a},F=(t,e)=>({t:0,h:t,i:e,g:null,p:null,u:null,$:null}),W={},N={forEach:(t,e)=>t.map(q).forEach(e),map:(t,e)=>t.map(q).map(e).map(B)},q=t=>({vattrs:t.u,vchildren:t.p,vkey:t._,vname:t.$,vtag:t.h,vtext:t.i}),B=t=>{const e=F(t.vtag,t.vtext);return e.u=t.vattrs,e.p=t.vchildren,e._=t.vkey,e.$=t.vname,e},D=(t,e,n,l,o,s)=>{if(n===l)return;let r=h(t,e),i=e.toLowerCase();if("class"===e){const e=t.classList,o=V(n),s=V(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else if("style"===e){for(const e in n)l&&null!=l[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in l)n&&l[e]===n[e]||(e.includes("-")?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("ref"===e)l&&l(t);else if(r||"o"!==e[0]||"n"!==e[1]){const i=U(l);if((r||i&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(c){}null==l||!1===l?t.removeAttribute(e):(!r||4&s||o)&&!i&&t.setAttribute(e,l=!0===l?"":l)}else e="-"===e[2]?e.slice(3):h(a,i)?i.slice(2):i[2]+e.slice(3),n&&u.rel(t,e,n,!1),l&&u.ael(t,e,l,!1)},H=/\s/,V=t=>t?t.split(H):[],z=(t,e,n,l)=>{const o=11===e.g.nodeType&&e.g.host?e.g.host:e.g,s=t&&t.u||L,r=e.u||L;for(l in s)l in r||D(o,l,s[l],void 0,n,e.t);for(l in r)D(o,l,s[l],r[l],n,e.t)},G=(l,o,r,a)=>{let u,p,m,d=o.p[r],w=0;if(s||(i=!0,"slot"===d.h&&(t&&a.classList.add(t+"-s"),d.t|=d.p?2:1)),null!==d.i)u=d.g=f.createTextNode(d.i);else if(1&d.t)u=d.g=f.createTextNode("");else{if(c||(c="svg"===d.h),u=d.g=f.createElementNS(c?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&d.t?"slot-fb":d.h),c&&"foreignObject"===d.h&&(c=!1),z(null,d,c),(t=>null!=t)(t)&&u["s-si"]!==t&&u.classList.add(u["s-si"]=t),d.p)for(w=0;w<d.p.length;++w)(p=G(l,d,w,u))&&u.appendChild(p);"svg"===d.h?c=!1:"foreignObject"===u.tagName&&(c=!0)}return u["s-hn"]=n,3&d.t&&(u["s-sr"]=!0,u["s-cr"]=e,u["s-sn"]=d.$||"",(m=l&&l.p&&l.p[r])&&m.h===d.h&&l.g&&I(l.g,!1)),u},I=(t,e)=>{u.t|=1;const l=t.childNodes;for(let o=l.length-1;o>=0;o--){const t=l[o];t["s-hn"]!==n&&t["s-ol"]&&(Y(t).insertBefore(t,X(t)),t["s-ol"].remove(),t["s-ol"]=void 0,i=!0),e&&I(t,e)}u.t&=-2},J=(t,e,l,o,s,r)=>{let i,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=r;++s)o[s]&&(i=G(null,l,s,t))&&(o[s].g=i,c.insertBefore(i,X(e)))},K=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(o=l.g,lt(l),r=!0,o["s-ol"]?o["s-ol"].remove():I(o,!0),o.remove())},Q=(t,e)=>t.h===e.h&&("slot"!==t.h||t.$===e.$),X=t=>t&&t["s-ol"]||t,Y=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,Z=(t,e)=>{const n=e.g=t.g,l=t.p,o=e.p;let s;c=n&&n.parentNode&&void 0!==n.ownerSVGElement,c="svg"===e.h||"foreignObject"!==e.h&&c,null===e.i?("slot"===e.h||z(t,e,c),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,i=e.length-1,c=e[0],a=e[i],f=l.length-1,u=l[0],p=l[f];for(;s<=i&&r<=f;)null==c?c=e[++s]:null==a?a=e[--i]:null==u?u=l[++r]:null==p?p=l[--f]:Q(c,u)?(Z(c,u),c=e[++s],u=l[++r]):Q(a,p)?(Z(a,p),a=e[--i],p=l[--f]):Q(c,p)?("slot"!==c.h&&"slot"!==p.h||I(c.g.parentNode,!1),Z(c,p),t.insertBefore(c.g,a.g.nextSibling),c=e[++s],p=l[--f]):Q(a,u)?("slot"!==c.h&&"slot"!==p.h||I(a.g.parentNode,!1),Z(a,u),t.insertBefore(a.g,c.g),a=e[--i],u=l[++r]):(o=G(e&&e[r],n,r,t),u=l[++r],o&&Y(c.g).insertBefore(o,X(c.g)));s>i?J(t,null==l[f+1]?null:l[f+1].g,n,l,r,f):r>f&&K(e,s,i)})(n,l,e,o):null!==o?(null!==t.i&&(n.textContent=""),J(n,null,e,o,0,o.length-1)):null!==l&&K(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=e.i:t.i!==e.i&&(n.data=e.i),c&&"svg"===e.h&&(c=!1)},tt=t=>{let e,n,l,o,s,r,i=t.childNodes;for(n=0,l=i.length;n<l;n++)if(1===(e=i[n]).nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==e["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){e.hidden=!0;break}tt(e)}},et=[],nt=t=>{let e,n,l,o,s=t.childNodes,i=s.length,c=0,a=0,f=0;for(i=s.length;c<i;c++){if((e=s[c])["s-sr"]&&(n=e["s-cr"]))for(o=e["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(et.some(t=>t.v===n)||(r=!0,n["s-sn"]=o,et.push({j:e,v:n})));1===e.nodeType&&nt(e)}},lt=t=>{t.u&&t.u.ref&&t.u.ref(null),t.p&&t.p.forEach(lt)},ot=(t,e)=>{e&&!t.O&&e["s-p"].push(new Promise(e=>t.O=e))},st=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>rt(t,e,n,o,l);let r;return ot(e,e.R),l&&(r=at(o,"componentWillLoad")),ft(r,()=>M(s))},rt=(l,o,c,a,m)=>{const d=l["s-rc"];m&&((t,e)=>{const n=((t,e)=>{let n=T(e.S),l=b.get(n);if(t=11===t.nodeType?t:f,l)if("string"==typeof l){let e,o=E.get(t=t.head||t);o||E.set(t,o=new Set),o.has(n)||((e=f.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(p&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(l,c);try{((l,o,c,a)=>{n=l.tagName;const m=o.k||F(null,null),d=(t=>t&&t.h===W)(a)?a:A(null,null,a);if(d.h=null,d.t|=4,o.k=d,d.g=m.g=l.shadowRoot||l,t=l["s-sc"],e=l["s-cr"],s=p&&0!=(1&c.t),i=r=!1,Z(m,d),i){nt(d.g);for(let t=0;t<et.length;t++){const e=et[t];if(!e.v["s-ol"]){const t=f.createTextNode("");t["s-nr"]=e.v,e.v.parentNode.insertBefore(e.v["s-ol"]=t,e.v)}}u.t|=1;for(let t=0;t<et.length;t++){const e=et[t],n=e.j.parentNode;let l=e.j.nextSibling,o=e.v["s-ol"];for(;o=o.previousSibling;){let t=o["s-nr"];if(t&&t["s-sn"]===e.v["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){l=t;break}}(!l&&n!==e.v.parentNode||e.v.nextSibling!==l)&&e.v!==l&&n.insertBefore(e.v,l)}u.t&=-2}r&&tt(d.g),et.length=0})(l,o,c,a.render())}catch(w){y(w)}o.t&=-17,o.t|=2,d&&(d.forEach(t=>t()),l["s-rc"]=void 0);{const t=l["s-p"],e=()=>it(l,o,c);0===t.length?e():(Promise.all(t).then(e),o.t|=4,t.length=0)}},it=(t,e,n)=>{const l=e.o,o=e.R;64&e.t||(e.t|=64,t.classList.add("hydrated"),at(l,"componentDidLoad"),e.M(t),o||ct()),e.O&&(e.O(),e.O=void 0),512&e.t&&k(()=>st(t,e,n,!1)),e.t&=-517},ct=()=>{f.documentElement.classList.add("hydrated"),u.t|=2},at=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){y(l)}},ft=(t,e)=>t&&t.then?t.then(e):e(),ut=(t,e,n)=>{if(e.L){const l=Object.entries(e.L),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>w(t).U.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=w(this),s=o.P,r=o.U.get(e),i=o.t,c=o.o;(n=((t,e)=>null==t||U(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?String(t):t)(n,l.L[e][0]))===r||8&i&&void 0!==r||(o.U.set(e,n),c&&2==(18&i)&&st(s,o,l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){u.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},pt=(t,e={})=>{const n=[],l=e.exclude||[],o=f.head,s=a.customElements,r=o.querySelector("meta[charset]"),i=f.createElement("style"),c=[];let $,h=!0;Object.assign(u,e),u.l=new URL(e.resourcesUrl||"./",f.baseURI).href,e.syncQueue&&(u.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],S:e[1],L:e[2],C:e[3]};o.L=e[2],!p&&1&o.t&&(o.t|=8);const r=o.S,i=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,P:t,U:new Map};e.T=new Promise(t=>e.M=t),t["s-p"]=[],t["s-rc"]=[],d.set(t,e)})(t=this),1&o.t&&(p?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){$&&(clearTimeout($),$=null),h?c.push(this):u.jmp(()=>((t,e)=>{if(0==(1&u.t)){const n=()=>{},l=w(t);if(!(1&l.t)){let n;l.t|=1,n||(4&e.t||8&e.t)&&(t=>{const e=t["s-cr"]=f.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){ot(l,l.R=e);break}}e.L&&Object.entries(e.L).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),k(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.S.replace(/-/g,"_"),n=t.A,l=g.get(n);return l?l[e]:__sc_import_regila_ui(`./${n}.entry.js`).then(t=>(g.set(n,t),t[e]),y)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(ut(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(i){y(i)}e.t&=-9,t()}const t=T(n.S);if(!b.has(t)&&o.style){const e=()=>{};let l=o.style;8&n.t&&(l=await __sc_import_regila_ui("./p-affe7c09.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=b.get(t);m&&n?(l=l||new CSSStyleSheet).replace(e):l=e,b.set(t,l)})(t,l,!!(1&n.t)),e()}}const s=e.R,r=()=>st(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){u.jmp(()=>void 0)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=w(t);2==(18&n.t)&&st(t,n,e,!1)}})(this,o)}componentOnReady(){return w(this).T}};o.A=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,ut(i,o,1)))})),i.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",i.setAttribute("data-styles",""),o.insertBefore(i,r?r.nextSibling:o.firstChild),h=!1,c.length>0?c.forEach(t=>t.connectedCallback()):u.jmp(()=>$=setTimeout(ct,30,"timeout"))},mt=t=>{const e=new URL(t,u.l);return e.origin!==a.location.origin?e.href:e.pathname},dt=t=>w(t).P;export{x as a,pt as b,mt as c,dt as g,A as h,P as p,$ as r};