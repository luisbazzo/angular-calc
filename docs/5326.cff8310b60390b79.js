"use strict";(self.webpackChunkcalc=self.webpackChunkcalc||[]).push([[5326],{5326:(Z,P,_)=>{_.r(P),_.d(P,{startInputShims:()=>$});var I=_(5861),y=_(8416),v=_(5730);const D=new WeakMap,A=(e,n,t,o=0,s=!1)=>{D.has(e)!==t&&(t?N(e,n,o,s):O(e,n))},C=e=>e===e.getRootNode().activeElement,N=(e,n,t,o=!1)=>{const s=n.parentNode,r=n.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),s.appendChild(r),D.set(e,r);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",n.style.transform=`translate3d(${a}px,${t}px,0) scale(0)`},O=(e,n)=>{const t=D.get(e);t&&(D.delete(e),t.remove()),e.style.pointerEvents="",n.style.transform=""},w="input, textarea, [no-blur], [contenteditable]",k=function(){var e=(0,I.Z)(function*(n,t,o,s,r,c=!1){if(!o&&!s)return;const a=((e,n,t)=>{var o;return((e,n,t,o)=>{const s=e.top,r=e.bottom,c=n.top,d=c+15,S=.75*Math.min(n.bottom,o-t)-r,l=d-s,h=Math.round(S<0?-S:l>0?-l:0),m=Math.min(h,s-c),u=Math.abs(m)/.3;return{scrollAmount:m,scrollDuration:Math.min(400,Math.max(150,u)),scrollPadding:t,inputSafeY:4-(s-d)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),n.getBoundingClientRect(),t,e.ownerDocument.defaultView.innerHeight)})(n,o||s,r);if(o&&Math.abs(a.scrollAmount)<4)t.focus();else if(A(n,t,!0,a.inputSafeY,c),t.focus(),(0,v.r)(()=>n.click()),typeof window<"u"){let d;const f=function(){var l=(0,I.Z)(function*(){void 0!==d&&clearTimeout(d),window.removeEventListener("ionKeyboardDidShow",S),window.removeEventListener("ionKeyboardDidShow",f),o&&(yield(0,y.c)(o,0,a.scrollAmount,a.scrollDuration)),A(n,t,!1,a.inputSafeY),t.focus()});return function(){return l.apply(this,arguments)}}(),S=()=>{window.removeEventListener("ionKeyboardDidShow",S),window.addEventListener("ionKeyboardDidShow",f)};if(o){const l=yield(0,y.g)(o);if(a.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===t.type?(a.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",S)):window.addEventListener("ionKeyboardDidShow",f),void(d=setTimeout(f,1e3))}f()}});return function(t,o,s,r,c){return e.apply(this,arguments)}}(),p="$ionPaddingTimer",B=(e,n)=>{var t,o;if("INPUT"!==e.tagName||e.parentElement&&"ION-INPUT"===e.parentElement.tagName||"ION-SEARCHBAR"===(null===(o=null===(t=e.parentElement)||void 0===t?void 0:t.parentElement)||void 0===o?void 0:o.tagName))return;const s=(0,y.f)(e);if(null===s)return;const r=s[p];r&&clearTimeout(r),n>0?s.style.setProperty("--keyboard-offset",`${n}px`):s[p]=setTimeout(()=>{s.style.setProperty("--keyboard-offset","0px")},120)},$=(e,n)=>{const t=document,o="ios"===n,s="android"===n,r=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),a=e.getBoolean("hideCaretOnScroll",o),d=e.getBoolean("inputBlurring",o),f=e.getBoolean("scrollPadding",!0),S=Array.from(t.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,h=new WeakMap,m=function(){var u=(0,I.Z)(function*(i){yield new Promise(b=>(0,v.c)(i,b));const T=i.shadowRoot||i,g=T.querySelector("input")||T.querySelector("textarea"),L=(0,y.f)(i),x=L?null:i.closest("ion-footer");if(g){if(L&&a&&!l.has(i)){const b=((e,n,t)=>{if(!t||!n)return()=>{};const o=a=>{C(n)&&A(e,n,a)},s=()=>A(e,n,!1),r=()=>o(!0),c=()=>o(!1);return(0,v.a)(t,"ionScrollStart",r),(0,v.a)(t,"ionScrollEnd",c),n.addEventListener("blur",s),()=>{(0,v.b)(t,"ionScrollStart",r),(0,v.b)(t,"ionScrollEnd",c),n.removeEventListener("blur",s)}})(i,g,L);l.set(i,b)}if("date"!==g.type&&"datetime-local"!==g.type&&(L||x)&&c&&!h.has(i)){const b=((e,n,t,o,s,r=!1)=>{let c;const a=f=>{c=(0,v.p)(f)},d=f=>{if(!c)return;const S=(0,v.p)(f);!((e,n,t)=>{if(n&&t){const o=n.x-t.x,s=n.y-t.y;return o*o+s*s>e*e}return!1})(6,c,S)&&!C(n)&&k(e,n,t,o,s,r)};return e.addEventListener("touchstart",a,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",a,!0),e.removeEventListener("touchend",d,!0)}})(i,g,L,x,r,s);h.set(i,b)}}});return function(T){return u.apply(this,arguments)}}();d&&(()=>{let e=!0,n=!1;const t=document;(0,v.a)(t,"ionScrollStart",()=>{n=!0}),t.addEventListener("focusin",()=>{e=!0},!0),t.addEventListener("touchend",c=>{if(n)return void(n=!1);const a=t.activeElement;if(!a||a.matches(w))return;const d=c.target;d!==a&&(d.matches(w)||d.closest(w)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})(),f&&(e=>{const n=document;n.addEventListener("focusin",s=>{B(s.target,e)}),n.addEventListener("focusout",s=>{B(s.target,0)})})(r);for(const u of S)m(u);t.addEventListener("ionInputDidLoad",u=>{m(u.detail)}),t.addEventListener("ionInputDidUnload",u=>{(u=>{if(a){const i=l.get(u);i&&i(),l.delete(u)}if(c){const i=h.get(u);i&&i(),h.delete(u)}})(u.detail)})}}}]);