import{r as ge,c as ke,s as M,n as V,d as G,e as U,u as X,g as Y,f as Z,o as $e,b as we,h as Ie}from"../chunks/scheduler.d91956ec.js";import{t as d,d as m,S as H,i as A,g as E,h as O,j,f as g,k,l as b,a as v,e as P,p as S,b as N,r as $,s as x,u as D,c as ee,v as w,x as te,w as I,q as R,m as pe,n as be,o as ve,y as le,z as W,A as ae}from"../chunks/index.e1009542.js";import{u as De,t as fe,s as Ee,e as Oe,a as je,p as ye}from"../chunks/Toaster.svelte_svelte_type_style_lang.78b4efff.js";function ce(r){return(r==null?void 0:r.length)!==void 0?r:Array.from(r)}function Ce(r,e){d(r,1,1,()=>{e.delete(r.key)})}function Te(r,e,t,n,o,s,i,a,l,c,f,u){let _=r.length,p=s.length,h=_;const B={};for(;h--;)B[r[h].key]=h;const L=[],q=new Map,z=new Map,ie=[];for(h=p;h--;){const y=u(o,s,h),C=t(y);let T=i.get(C);T?n&&ie.push(()=>T.p(y,e)):(T=c(C,y),T.c()),q.set(C,L[h]=T),C in B&&z.set(C,Math.abs(h-B[C]))}const oe=new Set,re=new Set;function Q(y){m(y,1),y.m(a,f),i.set(y.key,y),f=y.first,p--}for(;_&&p;){const y=L[p-1],C=r[_-1],T=y.key,F=C.key;y===C?(f=y.first,_--,p--):q.has(F)?!i.has(T)||oe.has(T)?Q(y):re.has(F)?_--:z.get(T)>z.get(F)?(re.add(T),Q(y)):(oe.add(F),_--):(l(C,i),_--)}for(;_--;){const y=r[_];q.has(y.key)||l(y,i)}for(;p;)Q(L[p-1]);return ge(ie),L}function J(r,e){const t={},n={},o={$$scope:1};let s=r.length;for(;s--;){const i=r[s],a=e[s];if(a){for(const l in i)l in a||(n[l]=1);for(const l in a)o[l]||(t[l]=a[l],o[l]=1);r[s]=a}else for(const l in i)o[l]=1}for(const i in n)i in t||(t[i]=void 0);return t}function ne(r){return typeof r=="object"&&r!==null?r:{}}const Ve=!0,Dt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ve},Symbol.toStringTag,{value:"Module"}));function Pe(r,e,t){const{reverseOrder:n,gutter:o=8,defaultPosition:s}=t||{},i=e.filter(f=>(f.position||s)===(r.position||s)&&f.height),a=i.findIndex(f=>f.id===r.id),l=i.filter((f,u)=>u<a&&f.visible).length;return i.filter(f=>f.visible).slice(...n?[l+1]:[0,l]).reduce((f,u)=>f+(u.height||0)+o,0)}const Se={startPause(){Ee(Date.now())},endPause(){Oe(Date.now())},updateHeight:(r,e)=>{je({id:r,height:e})},calculateOffset:Pe};function Ne(r){const{toasts:e,pausedAt:t}=De(r),n=new Map;let o;const s=[t.subscribe(i=>{if(i){for(const[,a]of n)clearTimeout(a);n.clear()}o=i}),e.subscribe(i=>{if(o)return;const a=Date.now();for(const l of i){if(n.has(l.id)||l.duration===1/0)continue;const c=(l.duration||0)+l.pauseDuration-(a-l.createdAt);if(c<0)return l.visible&&fe.dismiss(l.id),null;n.set(l.id,setTimeout(()=>fe.dismiss(l.id),c))}})];return ke(()=>{for(const i of s)i()}),{toasts:e,handlers:Se}}function Me(r){let e;return{c(){e=E("div"),this.h()},l(t){e=O(t,"DIV",{class:!0}),j(e).forEach(g),this.h()},h(){k(e,"class","svelte-11kvm4p"),b(e,"--primary",r[0]),b(e,"--secondary",r[1])},m(t,n){v(t,e,n)},p(t,[n]){n&1&&b(e,"--primary",t[0]),n&2&&b(e,"--secondary",t[1])},i:V,o:V,d(t){t&&g(e)}}}function He(r,e,t){let{primary:n="#61d345"}=e,{secondary:o="#fff"}=e;return r.$$set=s=>{"primary"in s&&t(0,n=s.primary),"secondary"in s&&t(1,o=s.secondary)},[n,o]}class Ae extends H{constructor(e){super(),A(this,e,He,Me,M,{primary:0,secondary:1})}}function Be(r){let e;return{c(){e=E("div"),this.h()},l(t){e=O(t,"DIV",{class:!0}),j(e).forEach(g),this.h()},h(){k(e,"class","svelte-1ee93ns"),b(e,"--primary",r[0]),b(e,"--secondary",r[1])},m(t,n){v(t,e,n)},p(t,[n]){n&1&&b(e,"--primary",t[0]),n&2&&b(e,"--secondary",t[1])},i:V,o:V,d(t){t&&g(e)}}}function Le(r,e,t){let{primary:n="#ff4b4b"}=e,{secondary:o="#fff"}=e;return r.$$set=s=>{"primary"in s&&t(0,n=s.primary),"secondary"in s&&t(1,o=s.secondary)},[n,o]}class qe extends H{constructor(e){super(),A(this,e,Le,Be,M,{primary:0,secondary:1})}}function ze(r){let e;return{c(){e=E("div"),this.h()},l(t){e=O(t,"DIV",{class:!0}),j(e).forEach(g),this.h()},h(){k(e,"class","svelte-1j7dflg"),b(e,"--primary",r[0]),b(e,"--secondary",r[1])},m(t,n){v(t,e,n)},p(t,[n]){n&1&&b(e,"--primary",t[0]),n&2&&b(e,"--secondary",t[1])},i:V,o:V,d(t){t&&g(e)}}}function Re(r,e,t){let{primary:n="#616161"}=e,{secondary:o="#e0e0e0"}=e;return r.$$set=s=>{"primary"in s&&t(0,n=s.primary),"secondary"in s&&t(1,o=s.secondary)},[n,o]}class We extends H{constructor(e){super(),A(this,e,Re,ze,M,{primary:0,secondary:1})}}function Fe(r){let e,t,n,o;const s=[r[0]];let i={};for(let l=0;l<s.length;l+=1)i=G(i,s[l]);t=new We({props:i});let a=r[2]!=="loading"&&ue(r);return{c(){e=E("div"),$(t.$$.fragment),n=x(),a&&a.c(),this.h()},l(l){e=O(l,"DIV",{class:!0});var c=j(e);D(t.$$.fragment,c),n=ee(c),a&&a.l(c),c.forEach(g),this.h()},h(){k(e,"class","indicator svelte-1kgeier")},m(l,c){v(l,e,c),w(t,e,null),te(e,n),a&&a.m(e,null),o=!0},p(l,c){const f=c&1?J(s,[ne(l[0])]):{};t.$set(f),l[2]!=="loading"?a?(a.p(l,c),c&4&&m(a,1)):(a=ue(l),a.c(),m(a,1),a.m(e,null)):a&&(S(),d(a,1,1,()=>{a=null}),N())},i(l){o||(m(t.$$.fragment,l),m(a),o=!0)},o(l){d(t.$$.fragment,l),d(a),o=!1},d(l){l&&g(e),I(t),a&&a.d()}}}function Ge(r){let e,t,n;var o=r[1];function s(i,a){return{}}return o&&(e=R(o,s())),{c(){e&&$(e.$$.fragment),t=P()},l(i){e&&D(e.$$.fragment,i),t=P()},m(i,a){e&&w(e,i,a),v(i,t,a),n=!0},p(i,a){if(a&2&&o!==(o=i[1])){if(e){S();const l=e;d(l.$$.fragment,1,0,()=>{I(l,1)}),N()}o?(e=R(o,s()),$(e.$$.fragment),m(e.$$.fragment,1),w(e,t.parentNode,t)):e=null}},i(i){n||(e&&m(e.$$.fragment,i),n=!0)},o(i){e&&d(e.$$.fragment,i),n=!1},d(i){i&&g(t),e&&I(e,i)}}}function Je(r){let e,t;return{c(){e=E("div"),t=pe(r[1]),this.h()},l(n){e=O(n,"DIV",{class:!0});var o=j(e);t=be(o,r[1]),o.forEach(g),this.h()},h(){k(e,"class","animated svelte-1kgeier")},m(n,o){v(n,e,o),te(e,t)},p(n,o){o&2&&ve(t,n[1])},i:V,o:V,d(n){n&&g(e)}}}function ue(r){let e,t,n,o;const s=[Qe,Ke],i=[];function a(l,c){return l[2]==="error"?0:1}return t=a(r),n=i[t]=s[t](r),{c(){e=E("div"),n.c(),this.h()},l(l){e=O(l,"DIV",{class:!0});var c=j(e);n.l(c),c.forEach(g),this.h()},h(){k(e,"class","status svelte-1kgeier")},m(l,c){v(l,e,c),i[t].m(e,null),o=!0},p(l,c){let f=t;t=a(l),t===f?i[t].p(l,c):(S(),d(i[f],1,1,()=>{i[f]=null}),N(),n=i[t],n?n.p(l,c):(n=i[t]=s[t](l),n.c()),m(n,1),n.m(e,null))},i(l){o||(m(n),o=!0)},o(l){d(n),o=!1},d(l){l&&g(e),i[t].d()}}}function Ke(r){let e,t;const n=[r[0]];let o={};for(let s=0;s<n.length;s+=1)o=G(o,n[s]);return e=new Ae({props:o}),{c(){$(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){w(e,s,i),t=!0},p(s,i){const a=i&1?J(n,[ne(s[0])]):{};e.$set(a)},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){d(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function Qe(r){let e,t;const n=[r[0]];let o={};for(let s=0;s<n.length;s+=1)o=G(o,n[s]);return e=new qe({props:o}),{c(){$(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){w(e,s,i),t=!0},p(s,i){const a=i&1?J(n,[ne(s[0])]):{};e.$set(a)},i(s){t||(m(e.$$.fragment,s),t=!0)},o(s){d(e.$$.fragment,s),t=!1},d(s){I(e,s)}}}function Ue(r){let e,t,n,o;const s=[Je,Ge,Fe],i=[];function a(l,c){return typeof l[1]=="string"?0:typeof l[1]<"u"?1:l[2]!=="blank"?2:-1}return~(e=a(r))&&(t=i[e]=s[e](r)),{c(){t&&t.c(),n=P()},l(l){t&&t.l(l),n=P()},m(l,c){~e&&i[e].m(l,c),v(l,n,c),o=!0},p(l,[c]){let f=e;e=a(l),e===f?~e&&i[e].p(l,c):(t&&(S(),d(i[f],1,1,()=>{i[f]=null}),N()),~e?(t=i[e],t?t.p(l,c):(t=i[e]=s[e](l),t.c()),m(t,1),t.m(n.parentNode,n)):t=null)},i(l){o||(m(t),o=!0)},o(l){d(t),o=!1},d(l){l&&g(n),~e&&i[e].d(l)}}}function Xe(r,e,t){let n,o,s,{toast:i}=e;return r.$$set=a=>{"toast"in a&&t(3,i=a.toast)},r.$$.update=()=>{r.$$.dirty&8&&t(2,{type:n,icon:o,iconTheme:s}=i,n,(t(1,o),t(3,i)),(t(0,s),t(3,i)))},[s,o,n,i]}class se extends H{constructor(e){super(),A(this,e,Xe,Ue,M,{toast:3})}}function Ye(r){let e,t,n;var o=r[0].message;function s(i,a){return{props:{toast:i[0]}}}return o&&(e=R(o,s(r))),{c(){e&&$(e.$$.fragment),t=P()},l(i){e&&D(e.$$.fragment,i),t=P()},m(i,a){e&&w(e,i,a),v(i,t,a),n=!0},p(i,a){if(a&1&&o!==(o=i[0].message)){if(e){S();const l=e;d(l.$$.fragment,1,0,()=>{I(l,1)}),N()}o?(e=R(o,s(i)),$(e.$$.fragment),m(e.$$.fragment,1),w(e,t.parentNode,t)):e=null}else if(o){const l={};a&1&&(l.toast=i[0]),e.$set(l)}},i(i){n||(e&&m(e.$$.fragment,i),n=!0)},o(i){e&&d(e.$$.fragment,i),n=!1},d(i){i&&g(t),e&&I(e,i)}}}function Ze(r){let e=r[0].message+"",t;return{c(){t=pe(e)},l(n){t=be(n,e)},m(n,o){v(n,t,o)},p(n,o){o&1&&e!==(e=n[0].message+"")&&ve(t,e)},i:V,o:V,d(n){n&&g(t)}}}function xe(r){let e,t,n,o;const s=[Ze,Ye],i=[];function a(f,u){return typeof f[0].message=="string"?0:1}t=a(r),n=i[t]=s[t](r);let l=[{class:"message"},r[0].ariaProps],c={};for(let f=0;f<l.length;f+=1)c=G(c,l[f]);return{c(){e=E("div"),n.c(),this.h()},l(f){e=O(f,"DIV",{class:!0});var u=j(e);n.l(u),u.forEach(g),this.h()},h(){le(e,c),W(e,"svelte-1nauejd",!0)},m(f,u){v(f,e,u),i[t].m(e,null),o=!0},p(f,[u]){let _=t;t=a(f),t===_?i[t].p(f,u):(S(),d(i[_],1,1,()=>{i[_]=null}),N(),n=i[t],n?n.p(f,u):(n=i[t]=s[t](f),n.c()),m(n,1),n.m(e,null)),le(e,c=J(l,[{class:"message"},u&1&&f[0].ariaProps])),W(e,"svelte-1nauejd",!0)},i(f){o||(m(n),o=!0)},o(f){d(n),o=!1},d(f){f&&g(e),i[t].d()}}}function et(r,e,t){let{toast:n}=e;return r.$$set=o=>{"toast"in o&&t(0,n=o.toast)},[n]}class K extends H{constructor(e){super(),A(this,e,et,xe,M,{toast:0})}}const tt=r=>({toast:r&1}),_e=r=>({ToastIcon:se,ToastMessage:K,toast:r[0]});function nt(r){let e;const t=r[6].default,n=U(t,r,r[7],_e),o=n||it(r);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,i){o&&o.m(s,i),e=!0},p(s,i){n?n.p&&(!e||i&129)&&X(n,t,s,s[7],e?Z(t,s[7],i,tt):Y(s[7]),_e):o&&o.p&&(!e||i&1)&&o.p(s,e?i:-1)},i(s){e||(m(o,s),e=!0)},o(s){d(o,s),e=!1},d(s){o&&o.d(s)}}}function st(r){let e,t,n;var o=r[2];function s(i,a){return{props:{$$slots:{message:[rt],icon:[ot]},$$scope:{ctx:i}}}}return o&&(e=R(o,s(r))),{c(){e&&$(e.$$.fragment),t=P()},l(i){e&&D(e.$$.fragment,i),t=P()},m(i,a){e&&w(e,i,a),v(i,t,a),n=!0},p(i,a){if(a&4&&o!==(o=i[2])){if(e){S();const l=e;d(l.$$.fragment,1,0,()=>{I(l,1)}),N()}o?(e=R(o,s(i)),$(e.$$.fragment),m(e.$$.fragment,1),w(e,t.parentNode,t)):e=null}else if(o){const l={};a&129&&(l.$$scope={dirty:a,ctx:i}),e.$set(l)}},i(i){n||(e&&m(e.$$.fragment,i),n=!0)},o(i){e&&d(e.$$.fragment,i),n=!1},d(i){i&&g(t),e&&I(e,i)}}}function it(r){let e,t,n,o;return e=new se({props:{toast:r[0]}}),n=new K({props:{toast:r[0]}}),{c(){$(e.$$.fragment),t=x(),$(n.$$.fragment)},l(s){D(e.$$.fragment,s),t=ee(s),D(n.$$.fragment,s)},m(s,i){w(e,s,i),v(s,t,i),w(n,s,i),o=!0},p(s,i){const a={};i&1&&(a.toast=s[0]),e.$set(a);const l={};i&1&&(l.toast=s[0]),n.$set(l)},i(s){o||(m(e.$$.fragment,s),m(n.$$.fragment,s),o=!0)},o(s){d(e.$$.fragment,s),d(n.$$.fragment,s),o=!1},d(s){s&&g(t),I(e,s),I(n,s)}}}function ot(r){let e,t;return e=new se({props:{toast:r[0],slot:"icon"}}),{c(){$(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){w(e,n,o),t=!0},p(n,o){const s={};o&1&&(s.toast=n[0]),e.$set(s)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function rt(r){let e,t;return e=new K({props:{toast:r[0],slot:"message"}}),{c(){$(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){w(e,n,o),t=!0},p(n,o){const s={};o&1&&(s.toast=n[0]),e.$set(s)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function lt(r){let e,t,n,o,s,i;const a=[st,nt],l=[];function c(f,u){return f[2]?0:1}return t=c(r),n=l[t]=a[t](r),{c(){e=E("div"),n.c(),this.h()},l(f){e=O(f,"DIV",{class:!0,style:!0});var u=j(e);n.l(u),u.forEach(g),this.h()},h(){k(e,"class",o="base "+(r[0].height?r[4]:"transparent")+" "+(r[0].className||"")+" svelte-ug60r4"),k(e,"style",s=r[1]+"; "+r[0].style),b(e,"--factor",r[3])},m(f,u){v(f,e,u),l[t].m(e,null),i=!0},p(f,[u]){let _=t;t=c(f),t===_?l[t].p(f,u):(S(),d(l[_],1,1,()=>{l[_]=null}),N(),n=l[t],n?n.p(f,u):(n=l[t]=a[t](f),n.c()),m(n,1),n.m(e,null)),(!i||u&17&&o!==(o="base "+(f[0].height?f[4]:"transparent")+" "+(f[0].className||"")+" svelte-ug60r4"))&&k(e,"class",o),(!i||u&3&&s!==(s=f[1]+"; "+f[0].style))&&k(e,"style",s),(u&3||u&11)&&b(e,"--factor",f[3])},i(f){i||(m(n),i=!0)},o(f){d(n),i=!1},d(f){f&&g(e),l[t].d()}}}function at(r,e,t){let{$$slots:n={},$$scope:o}=e,{toast:s}=e,{position:i=void 0}=e,{style:a=""}=e,{Component:l=void 0}=e,c,f;return r.$$set=u=>{"toast"in u&&t(0,s=u.toast),"position"in u&&t(5,i=u.position),"style"in u&&t(1,a=u.style),"Component"in u&&t(2,l=u.Component),"$$scope"in u&&t(7,o=u.$$scope)},r.$$.update=()=>{if(r.$$.dirty&33){const u=(s.position||i||"top-center").includes("top");t(3,c=u?1:-1);const[_,p]=ye()?["fadeIn","fadeOut"]:["enter","exit"];t(4,f=s.visible?_:p)}},[s,a,l,c,f,i,n,o]}class ft extends H{constructor(e){super(),A(this,e,at,lt,M,{toast:0,position:5,style:1,Component:2})}}const ct=r=>({toast:r&1}),me=r=>({toast:r[0]});function ut(r){let e;const t=r[8].default,n=U(t,r,r[7],me),o=n||mt(r);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,i){o&&o.m(s,i),e=!0},p(s,i){n?n.p&&(!e||i&129)&&X(n,t,s,s[7],e?Z(t,s[7],i,ct):Y(s[7]),me):o&&o.p&&(!e||i&1)&&o.p(s,e?i:-1)},i(s){e||(m(o,s),e=!0)},o(s){d(o,s),e=!1},d(s){o&&o.d(s)}}}function _t(r){let e,t;return e=new K({props:{toast:r[0]}}),{c(){$(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){w(e,n,o),t=!0},p(n,o){const s={};o&1&&(s.toast=n[0]),e.$set(s)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function mt(r){let e,t;return e=new ft({props:{toast:r[0],position:r[0].position}}),{c(){$(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,o){w(e,n,o),t=!0},p(n,o){const s={};o&1&&(s.toast=n[0]),o&1&&(s.position=n[0].position),e.$set(s)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){d(e.$$.fragment,n),t=!1},d(n){I(e,n)}}}function dt(r){let e,t,n,o;const s=[_t,ut],i=[];function a(l,c){return l[0].type==="custom"?0:1}return t=a(r),n=i[t]=s[t](r),{c(){e=E("div"),n.c(),this.h()},l(l){e=O(l,"DIV",{class:!0});var c=j(e);n.l(c),c.forEach(g),this.h()},h(){k(e,"class","wrapper svelte-v01oml"),W(e,"active",r[0].visible),W(e,"transition",!ye()),b(e,"--factor",r[3]),b(e,"--offset",r[0].offset),b(e,"top",r[5]),b(e,"bottom",r[4]),b(e,"justify-content",r[2])},m(l,c){v(l,e,c),i[t].m(e,null),r[9](e),o=!0},p(l,[c]){let f=t;t=a(l),t===f?i[t].p(l,c):(S(),d(i[f],1,1,()=>{i[f]=null}),N(),n=i[t],n?n.p(l,c):(n=i[t]=s[t](l),n.c()),m(n,1),n.m(e,null)),(!o||c&1)&&W(e,"active",l[0].visible),c&8&&b(e,"--factor",l[3]),c&1&&b(e,"--offset",l[0].offset),c&32&&b(e,"top",l[5]),c&16&&b(e,"bottom",l[4]),c&4&&b(e,"justify-content",l[2])},i(l){o||(m(n),o=!0)},o(l){d(n),o=!1},d(l){l&&g(e),i[t].d(),r[9](null)}}}function ht(r,e,t){let n,o,s,i,{$$slots:a={},$$scope:l}=e,{toast:c}=e,{setHeight:f}=e,u;$e(()=>{f(u.getBoundingClientRect().height)});function _(p){we[p?"unshift":"push"](()=>{u=p,t(1,u)})}return r.$$set=p=>{"toast"in p&&t(0,c=p.toast),"setHeight"in p&&t(6,f=p.setHeight),"$$scope"in p&&t(7,l=p.$$scope)},r.$$.update=()=>{var p,h,B,L,q,z;r.$$.dirty&1&&t(5,n=(p=c.position)!=null&&p.includes("top")?0:null),r.$$.dirty&1&&t(4,o=(h=c.position)!=null&&h.includes("bottom")?0:null),r.$$.dirty&1&&t(3,s=(B=c.position)!=null&&B.includes("top")?1:-1),r.$$.dirty&1&&t(2,i=((L=c.position)==null?void 0:L.includes("center"))&&"center"||(((q=c.position)==null?void 0:q.includes("right"))||((z=c.position)==null?void 0:z.includes("end")))&&"flex-end"||null)},[c,u,i,s,o,n,f,l,a,_]}class gt extends H{constructor(e){super(),A(this,e,ht,dt,M,{toast:0,setHeight:6})}}function de(r,e,t){const n=r.slice();return n[11]=e[t],n}function he(r,e){let t,n,o;function s(...i){return e[10](e[11],...i)}return n=new gt({props:{toast:e[11],setHeight:s}}),{key:r,first:null,c(){t=P(),$(n.$$.fragment),this.h()},l(i){t=P(),D(n.$$.fragment,i),this.h()},h(){this.first=t},m(i,a){v(i,t,a),w(n,i,a),o=!0},p(i,a){e=i;const l={};a&4&&(l.toast=e[11]),a&4&&(l.setHeight=s),n.$set(l)},i(i){o||(m(n.$$.fragment,i),o=!0)},o(i){d(n.$$.fragment,i),o=!1},d(i){i&&g(t),I(n,i)}}}function pt(r){let e,t=[],n=new Map,o,s,i,a,l=ce(r[2]);const c=f=>f[11].id;for(let f=0;f<l.length;f+=1){let u=de(r,l,f),_=c(u);n.set(_,t[f]=he(_,u))}return{c(){e=E("div");for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){e=O(f,"DIV",{class:!0,style:!0,role:!0});var u=j(e);for(let _=0;_<t.length;_+=1)t[_].l(u);u.forEach(g),this.h()},h(){k(e,"class",o="toaster "+(r[1]||"")+" svelte-1phplh9"),k(e,"style",r[0]),k(e,"role","alert")},m(f,u){v(f,e,u);for(let _=0;_<t.length;_+=1)t[_]&&t[_].m(e,null);s=!0,i||(a=[ae(e,"mouseenter",r[4].startPause),ae(e,"mouseleave",r[4].endPause)],i=!0)},p(f,[u]){u&20&&(l=ce(f[2]),S(),t=Te(t,u,c,1,f,l,n,e,Ce,he,null,de),N()),(!s||u&2&&o!==(o="toaster "+(f[1]||"")+" svelte-1phplh9"))&&k(e,"class",o),(!s||u&1)&&k(e,"style",f[0])},i(f){if(!s){for(let u=0;u<l.length;u+=1)m(t[u]);s=!0}},o(f){for(let u=0;u<t.length;u+=1)d(t[u]);s=!1},d(f){f&&g(e);for(let u=0;u<t.length;u+=1)t[u].d();i=!1,ge(a)}}}function bt(r,e,t){let n,{reverseOrder:o=!1}=e,{position:s="top-center"}=e,{toastOptions:i=void 0}=e,{gutter:a=8}=e,{containerStyle:l=void 0}=e,{containerClassName:c=void 0}=e;const{toasts:f,handlers:u}=Ne(i);Ie(r,f,h=>t(9,n=h));let _;const p=(h,B)=>u.updateHeight(h.id,B);return r.$$set=h=>{"reverseOrder"in h&&t(5,o=h.reverseOrder),"position"in h&&t(6,s=h.position),"toastOptions"in h&&t(7,i=h.toastOptions),"gutter"in h&&t(8,a=h.gutter),"containerStyle"in h&&t(0,l=h.containerStyle),"containerClassName"in h&&t(1,c=h.containerClassName)},r.$$.update=()=>{r.$$.dirty&864&&t(2,_=n.map(h=>({...h,position:h.position||s,offset:u.calculateOffset(h,n,{reverseOrder:o,gutter:a,defaultPosition:s})})))},[l,c,_,f,u,o,s,i,a,n,p]}class vt extends H{constructor(e){super(),A(this,e,bt,pt,M,{reverseOrder:5,position:6,toastOptions:7,gutter:8,containerStyle:0,containerClassName:1})}}function yt(r){let e,t,n,o,s;const i=r[1].default,a=U(i,r,r[0],null);return o=new vt({}),{c(){e=E("div"),t=E("div"),a&&a.c(),n=x(),$(o.$$.fragment),this.h()},l(l){e=O(l,"DIV",{class:!0});var c=j(e);t=O(c,"DIV",{class:!0});var f=j(t);a&&a.l(f),f.forEach(g),c.forEach(g),n=ee(l),D(o.$$.fragment,l),this.h()},h(){k(t,"class","min-h-screen w-screen max-w-lg"),k(e,"class","flex justify-center")},m(l,c){v(l,e,c),te(e,t),a&&a.m(t,null),v(l,n,c),w(o,l,c),s=!0},p(l,[c]){a&&a.p&&(!s||c&1)&&X(a,i,l,l[0],s?Z(i,l[0],c,null):Y(l[0]),null)},i(l){s||(m(a,l),m(o.$$.fragment,l),s=!0)},o(l){d(a,l),d(o.$$.fragment,l),s=!1},d(l){l&&(g(e),g(n)),a&&a.d(l),I(o,l)}}}function kt(r,e,t){let{$$slots:n={},$$scope:o}=e;return r.$$set=s=>{"$$scope"in s&&t(0,o=s.$$scope)},[o,n]}class Et extends H{constructor(e){super(),A(this,e,kt,yt,M,{})}}export{Et as component,Dt as universal};
