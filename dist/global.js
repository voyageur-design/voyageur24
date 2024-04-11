!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("global",[],e):"object"==typeof exports?exports.global=e():t.global=e()}(this,(()=>(()=>{var t={422:(t,e,n)=>{"use strict";n.r(e),n.d(e,{MotionValue:()=>r,ScrollOffset:()=>_t,animate:()=>Te,animateStyle:()=>_,createAnimate:()=>ut,createMotionState:()=>be,createStyleString:()=>Oe,createStyles:()=>we,getAnimationData:()=>a,getStyleName:()=>F,glide:()=>Wt,inView:()=>Pt,mountedStates:()=>ve,resize:()=>Ft,scroll:()=>re,spring:()=>jt,stagger:()=>ct,style:()=>H,timeline:()=>St,withControls:()=>K});var i=function(){};class r{setAnimation(t){this.animation=t,null==t||t.finished.then((()=>this.clearAnimation())).catch((()=>{}))}clearAnimation(){this.animation=this.generator=void 0}}const o=new WeakMap;function a(t){return o.has(t)||o.set(t,{transforms:[],values:new Map}),o.get(t)}const s=()=>{},c=t=>t;function l(t,e){-1===t.indexOf(e)&&t.push(e)}function u(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const f=["","X","Y","Z"],d={x:"translateX",y:"translateY",z:"translateZ"},h={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},p={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:h,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:c},skew:h},g=new Map,m=t=>`--motion-${t}`,y=["x","y","z"];["translate","scale","rotate","skew"].forEach((t=>{f.forEach((e=>{y.push(t+e),g.set(m(t+e),p[t])}))}));const v=(t,e)=>y.indexOf(t)-y.indexOf(e),b=new Set(y),w=t=>b.has(t),E=(t,e)=>{d[e]&&(e=d[e]);const{transforms:n}=a(t);l(n,e),t.style.transform=S(n)},S=t=>t.sort(v).reduce(O,"").trim(),O=(t,e)=>`${t} ${e}(var(${m(e)}))`,x=t=>t.startsWith("--"),M=new Set,T={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},A=t=>"object"==typeof t&&Boolean(t.createAnimation),L=t=>"function"==typeof t,k=t=>"number"==typeof t,D=t=>Array.isArray(t)&&!k(t[0]),j={ms:t=>1e3*t,s:t=>t/1e3},W=(t,e,n)=>e-t==0?1:(n-t)/(e-t),B=t=>Array.isArray(t)&&k(t[0]),P=(t,e)=>document.createElement("div").animate(t,e),R={cssRegisterProperty:()=>"undefined"!=typeof CSS&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{P({opacity:[1]})}catch(t){return!1}return!0},finished:()=>Boolean(P({opacity:[0,1]},{duration:.001}).finished),linearEasing:()=>{try{P({opacity:0},{easing:"linear(0, 1)"})}catch(t){return!1}return!0}},z={},q={};for(const t in R)q[t]=()=>(void 0===z[t]&&(z[t]=R[t]()),z[t]);const V=(t,e)=>L(t)?q.linearEasing()?`linear(${((t,e)=>{let n="";const i=Math.round(e/.015);for(let e=0;e<i;e++)n+=t(W(0,i-1,e))+", ";return n.substring(0,n.length-2)})(t,e)})`:T.easing:B(t)?$(t):t,$=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,C=t=>Array.isArray(t)?t:[t];function F(t){return d[t]&&(t=d[t]),w(t)?m(t):t}const H={get:(t,e)=>{e=F(e);let n=x(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&0!==n){const t=g.get(e);t&&(n=t.initialValue)}return n},set:(t,e,n)=>{e=F(e),x(e)?t.style.setProperty(e,n):t.style[e]=n}};function I(t,e=!0){if(t&&"finished"!==t.playState)try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch(t){}}const N=t=>"string"==typeof t;function U(t,e){var n;let i=(null==e?void 0:e.toDefaultUnit)||c;const r=t[t.length-1];if(N(r)){const t=(null===(n=r.match(/(-?[\d.]+)([a-z%]*)/))||void 0===n?void 0:n[2])||"";t&&(i=e=>e+t)}return i}function _(t,e,n,i={},o){const c=window.__MOTION_DEV_TOOLS_RECORD,l=!1!==i.record&&c;let u,{duration:f=T.duration,delay:d=T.delay,endDelay:h=T.endDelay,repeat:p=T.repeat,easing:m=T.easing,persist:y=!1,direction:v,offset:b,allowWebkitAcceleration:S=!1,autoplay:O=!0}=i;const W=a(t),B=w(e);let P=q.waapi();B&&E(t,e);const R=F(e),z=function(t,e){return t.has(e)||t.set(e,new r),t.get(e)}(W.values,R),$=g.get(R);return I(z.animation,!(A(m)&&z.generator)&&!1!==i.record),()=>{const r=()=>{var e,n;return null!==(n=null!==(e=H.get(t,R))&&void 0!==e?e:null==$?void 0:$.initialValue)&&void 0!==n?n:0};let a=function(t,e){for(let n=0;n<t.length;n++)null===t[n]&&(t[n]=n?t[n-1]:e());return t}(C(n),r);const w=U(a,$);if(A(m)){const t=m.createAnimation(a,"opacity"!==e,r,R,z);m=t.easing,a=t.keyframes||a,f=t.duration||f}if(x(R)&&(q.cssRegisterProperty()?function(t){if(!M.has(t)){M.add(t);try{const{syntax:e,initialValue:n}=g.has(t)?g.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch(t){}}}(R):P=!1),B&&!q.linearEasing()&&(L(m)||D(m)&&m.some(L))&&(P=!1),P){$&&(a=a.map((t=>k(t)?$.toDefaultUnit(t):t))),1!==a.length||q.partialKeyframes()&&!l||a.unshift(r());const e={delay:j.ms(d),duration:j.ms(f),endDelay:j.ms(h),easing:D(m)?void 0:V(m,f),direction:v,iterations:p+1,fill:"both"};u=t.animate({[R]:a,offset:b,easing:D(m)?m.map((t=>V(t,f))):void 0},e),u.finished||(u.finished=new Promise(((t,e)=>{u.onfinish=t,u.oncancel=e})));const n=a[a.length-1];u.finished.then((()=>{y||(H.set(t,R,n),u.cancel())})).catch(s),S||(u.playbackRate=1.000001)}else if(o&&B)a=a.map((t=>"string"==typeof t?parseFloat(t):t)),1===a.length&&a.unshift(parseFloat(r())),u=new o((e=>{H.set(t,R,w?w(e):e)}),a,Object.assign(Object.assign({},i),{duration:f,easing:m}));else{const e=a[a.length-1];H.set(t,R,$&&k(e)?$.toDefaultUnit(e):e)}return l&&c(t,e,a,{duration:f,delay:d,easing:m,repeat:p,offset:b},"motion-one"),z.setAnimation(u),u&&!O&&u.pause(),u}}const X=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function G(t,e){var n;return"string"==typeof t?e?(null!==(n=e[t])&&void 0!==n||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Z=t=>t(),K=(t,e,n=T.duration)=>new Proxy({animations:t.map(Z).filter(Boolean),duration:n,options:e},Y),Y={get:(t,e)=>{const n=t.animations[0];switch(e){case"duration":return t.duration;case"currentTime":return j.s((null==n?void 0:n[e])||0);case"playbackRate":case"playState":return null==n?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(J)).catch(s)),t.finished;case"stop":return()=>{t.animations.forEach((t=>I(t)))};case"forEachNative":return e=>{t.animations.forEach((n=>e(n,t)))};default:return void 0===(null==n?void 0:n[e])?void 0:()=>t.animations.forEach((t=>t[e]()))}},set:(t,e,n)=>{switch(e){case"currentTime":n=j.ms(n);case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},J=t=>t.finished,Q=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,tt=1e-7,et=12;function nt(t,e,n,i){if(t===e&&n===i)return c;return r=>0===r||1===r?r:Q(function(t,e,n,i,r){let o,a,s=0;do{a=e+(n-e)/2,o=Q(a,i,r)-t,o>0?n=a:e=a}while(Math.abs(o)>tt&&++s<et);return a}(r,0,1,t,n),e,i)}const it=(t,e,n)=>Math.min(Math.max(n,t),e),rt=(t,e="end")=>n=>{const i=(n="end"===e?Math.min(n,.999):Math.max(n,.001))*t,r="end"===e?Math.floor(i):Math.ceil(i);return it(0,1,r/t)},ot={ease:nt(.25,.1,.25,1),"ease-in":nt(.42,0,1,1),"ease-in-out":nt(.42,0,.58,1),"ease-out":nt(0,0,.58,1)},at=/\((.*?)\)/;function st(t){if(L(t))return t;if(B(t))return nt(...t);if(ot[t])return ot[t];if(t.startsWith("steps")){const e=at.exec(t);if(e){const t=e[1].split(",");return rt(parseFloat(t[0]),t[1].trim())}}return c}function ct(t=.1,{start:e=0,from:n=0,easing:i}={}){return(r,o)=>{const a=k(n)?n:function(t,e){if("first"===t)return 0;{const n=e-1;return"last"===t?n:n/2}}(n,o),s=Math.abs(a-r);let c=t*s;if(i){const e=o*t;c=st(i)(c/e)*e}return e+c}}function lt(t,e,n){return L(t)?t(e,n):t}function ut(t){return function(e,n,r={}){const o=(e=G(e)).length;i(Boolean(o),"No valid element provided."),i(Boolean(n),"No keyframes defined.");const a=[];for(let i=0;i<o;i++){const s=e[i];for(const e in n){const c=X(r,e);c.delay=lt(c.delay,i,o);const l=_(s,e,n[e],c,t);a.push(l)}}return K(a,r,r.duration)}}function ft(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;const dt=(t,e,n)=>-n*t+n*e+t;function ht(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=W(0,e,i);t.push(dt(n,1,r))}}function pt(t){const e=[0];return ht(e,t-1),e}function gt(t,e,n,i){var r;return k(e)?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):"<"===e?n:null!==(r=i.get(e))&&void 0!==r?r:t}const mt=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function yt(t,e){return D(t)?t[mt(0,t.length,e)]:t}function vt(t,e,n,i,r,o){!function(t,e,n){for(let i=0;i<t.length;i++){const r=t[i];r.at>e&&r.at<n&&(u(t,r),i--)}}(t,r,o);for(let a=0;a<e.length;a++)t.push({value:e[a],at:dt(r,o,i[a]),easing:yt(n,a)})}function bt(t,e){return t.at===e.at?null===t.value?1:-1:t.at-e.at}function wt(t,e=pt(t.length),n=c){const i=t.length,r=i-e.length;return r>0&&ht(e,r),r=>{let o=0;for(;o<i-2&&!(r<e[o+1]);o++);let a=it(0,1,W(e[o],e[o+1],r));return a=yt(n,o)(a),dt(t[o],t[o+1],a)}}class Et{constructor(t,e=[0,1],{easing:n,duration:i=T.duration,delay:r=T.delay,endDelay:o=T.endDelay,repeat:a=T.repeat,offset:s,direction:l="normal",autoplay:u=!0}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=c,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise(((t,e)=>{this.resolve=t,this.reject=e})),n=n||T.easing,A(n)){const t=n.createAnimation(e);n=t.easing,e=t.keyframes||e,i=t.duration||i}this.repeat=a,this.easing=D(n)?c:st(n),this.updateDuration(i);const f=wt(e,s,D(n)?n.map(st):c);this.tick=e=>{var n;let i=0;i=void 0!==this.pauseTime?this.pauseTime:(e-this.startTime)*this.rate,this.t=i,i/=1e3,i=Math.max(i-r,0),"finished"===this.playState&&void 0===this.pauseTime&&(i=this.totalDuration);const a=i/this.duration;let s=Math.floor(a),c=a%1;!c&&a>=1&&(c=1),1===c&&s--;const u=s%2;("reverse"===l||"alternate"===l&&u||"alternate-reverse"===l&&!u)&&(c=1-c);const d=i>=this.totalDuration?1:Math.min(c,1),h=f(this.easing(d));t(h),void 0===this.pauseTime&&("finished"===this.playState||i>=this.totalDuration+o)?(this.playState="finished",null===(n=this.resolve)||void 0===n||n.call(this,h)):"idle"!==this.playState&&(this.frameRequestId=requestAnimationFrame(this.tick))},u&&this.play()}play(){const t=performance.now();this.playState="running",void 0!==this.pauseTime?this.startTime=t-this.pauseTime:this.startTime||(this.startTime=t),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var t;this.playState="idle",void 0!==this.frameRequestId&&cancelAnimationFrame(this.frameRequestId),null===(t=this.reject)||void 0===t||t.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(t){this.duration=t,this.totalDuration=t*(this.repeat+1)}get currentTime(){return this.t}set currentTime(t){void 0!==this.pauseTime||0===this.rate?this.pauseTime=t:this.startTime=performance.now()-t/this.rate}get playbackRate(){return this.rate}set playbackRate(t){this.rate=t}}function St(t,e={}){var n;const r=function(t,e={}){var{defaultOptions:n={}}=e,r=ft(e,["defaultOptions"]);const o=[],a=new Map,s={},c=new Map;let l=0,u=0,f=0;for(let e=0;e<t.length;e++){const r=t[e];if(N(r)){c.set(r,u);continue}if(!Array.isArray(r)){c.set(r.name,gt(u,r.at,l,c));continue}const[o,p,g={}]=r;void 0!==g.at&&(u=gt(u,g.at,l,c));let m=0;const y=G(o,s),v=y.length;for(let t=0;t<v;t++){const e=(d=y[t],!(h=a).has(d)&&h.set(d,{}),h.get(d));for(const r in p){const o=Ot(r,e);let a=C(p[r]);const s=X(g,r);let{duration:c=n.duration||T.duration,easing:l=n.easing||T.easing}=s;if(A(l)){i("opacity"===r||a.length>1,"spring must be provided 2 keyframes within timeline()");const t=l.createAnimation(a,"opacity"!==r,(()=>0),r);l=t.easing,a=t.keyframes||a,c=t.duration||c}const d=lt(g.delay,t,v)||0,h=u+d,y=h+c;let{offset:b=pt(a.length)}=s;1===b.length&&0===b[0]&&(b[1]=1);const w=b.length-a.length;w>0&&ht(b,w),1===a.length&&a.unshift(null),vt(o,a,l,b,h,y),m=Math.max(d+c,m),f=Math.max(y,f)}}l=u,u+=m}var d,h;return a.forEach(((t,e)=>{for(const i in t){const a=t[i];a.sort(bt);const s=[],c=[],l=[];for(let t=0;t<a.length;t++){const{at:e,value:n,easing:i}=a[t];s.push(n),c.push(W(0,f,e)),l.push(i||T.easing)}0!==c[0]&&(c.unshift(0),s.unshift(s[0]),l.unshift("linear")),1!==c[c.length-1]&&(c.push(1),s.push(null)),o.push([e,i,s,Object.assign(Object.assign(Object.assign({},n),{duration:f,easing:l,offset:c}),r)])}})),o}(t,e),o=r.map((t=>_(...t,Et))).filter(Boolean);return K(o,e,null===(n=r[0])||void 0===n?void 0:n[3].duration)}function Ot(t,e){return e[t]||(e[t]=[]),e[t]}function xt(t,e){return e?t*(1e3/e):0}const Mt=5;function Tt(t,e,n){const i=Math.max(e-Mt,0);return xt(n-t(i),e-i)}const At=({stiffness:t=100,damping:e=10,mass:n=1,from:i=0,to:r=1,velocity:o=0,restSpeed:a,restDistance:s}={})=>{o=o?j.s(o):0;const c={done:!1,hasReachedTarget:!1,current:i,target:r},l=r-i,u=Math.sqrt(t/n)/1e3,f=((t=100,e=10,n=1)=>e/(2*Math.sqrt(t*n)))(t,e,n),d=Math.abs(l)<5;let h;if(a||(a=d?.01:2),s||(s=d?.005:.5),f<1){const t=u*Math.sqrt(1-f*f);h=e=>r-Math.exp(-f*u*e)*((f*u*l-o)/t*Math.sin(t*e)+l*Math.cos(t*e))}else h=t=>r-Math.exp(-u*t)*(l+(u*l-o)*t);return t=>{c.current=h(t);const e=0===t?o:Tt(h,t,c.current),n=Math.abs(e)<=a,l=Math.abs(r-c.current)<=s;var u,f,d;return c.done=n&&l,c.hasReachedTarget=(u=i,f=r,d=c.current,u<f&&d>=f||u>f&&d<=f),c}};function Lt(t){return k(t)&&!isNaN(t)}function kt(t){return N(t)?parseFloat(t):t}function Dt(t){const e=new WeakMap;return(n={})=>{const i=new Map,r=(e=0,r=100,o=0,a=!1)=>{const s=`${e}-${r}-${o}-${a}`;return i.has(s)||i.set(s,t(Object.assign({from:e,to:r,velocity:o},n))),i.get(s)},o=(t,n)=>(e.has(t)||e.set(t,function(t,e=c){let n,i=10,r=t(0);const o=[e(r.current)];for(;!r.done&&i<1e4;)r=t(i),o.push(e(r.done?r.target:r.current)),void 0===n&&r.hasReachedTarget&&(n=i),i+=10;const a=i-10;return 1===o.length&&o.push(r.current),{keyframes:o,duration:a/1e3,overshootDuration:(null!=n?n:a)/1e3}}(t,n)),e.get(t));return{createAnimation:(t,e=!0,n,i,a)=>{let s,l,u,f=0,d=c;const h=t.length;if(e)if(d=U(t,i?g.get(F(i)):void 0),u=kt(t[h-1]),h>1&&null!==t[0])l=kt(t[0]);else{const t=null==a?void 0:a.generator;if(t){const{animation:e,generatorStartTime:n}=a,i=(null==e?void 0:e.startTime)||n||0,r=(null==e?void 0:e.currentTime)||performance.now()-i,o=t(r).current;l=o,f=Tt((e=>t(e).current),r,o)}else n&&(l=kt(n()))}if(Lt(l)&&Lt(u)){const t=r(l,u,f,null==i?void 0:i.includes("scale"));s=Object.assign(Object.assign({},o(t,d)),{easing:"linear"}),a&&(a.generator=t,a.generatorStartTime=performance.now())}return s||(s={easing:"ease",duration:o(r(0,100)).overshootDuration}),s}}}}const jt=Dt(At),Wt=Dt((({from:t=0,velocity:e=0,power:n=.8,decay:i=.325,bounceDamping:r,bounceStiffness:o,changeTarget:a,min:s,max:c,restDistance:l=.5,restSpeed:u})=>{i=j.ms(i);const f={hasReachedTarget:!1,done:!1,current:t,target:t},d=t=>void 0===s?c:void 0===c||Math.abs(s-t)<Math.abs(c-t)?s:c;let h=n*e;const p=t+h,g=void 0===a?p:a(p);f.target=g,g!==p&&(h=g-t);const m=t=>-h*Math.exp(-t/i),y=t=>g+m(t),v=t=>{const e=m(t),n=y(t);f.done=Math.abs(e)<=l,f.current=f.done?g:n};let b,w;const E=t=>{var e;e=f.current,(void 0!==s&&e<s||void 0!==c&&e>c)&&(b=t,w=At({from:f.current,to:d(f.current),velocity:Tt(y,t,f.current),damping:r,stiffness:o,restDistance:l,restSpeed:u}))};return E(0),t=>{let e=!1;return w||void 0!==b||(e=!0,v(t),E(t)),void 0!==b&&t>b?(f.hasReachedTarget=!0,w(t-b)):(f.hasReachedTarget=!1,!e&&v(t),f)}})),Bt={any:0,all:1};function Pt(t,e,{root:n,margin:i,amount:r="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};const o=G(t),a=new WeakMap,s=new IntersectionObserver((t=>{t.forEach((t=>{const n=a.get(t.target);if(t.isIntersecting!==Boolean(n))if(t.isIntersecting){const n=e(t);L(n)?a.set(t.target,n):s.unobserve(t.target)}else n&&(n(t),a.delete(t.target))}))}),{root:n,rootMargin:i,threshold:"number"==typeof r?r:Bt[r]});return o.forEach((t=>s.observe(t))),()=>s.disconnect()}const Rt=new WeakMap;let zt;function qt({target:t,contentRect:e,borderBoxSize:n}){var i;null===(i=Rt.get(t))||void 0===i||i.forEach((i=>{i({target:t,contentSize:e,get size(){return function(t,e){if(e){const{inlineSize:t,blockSize:n}=e[0];return{width:t,height:n}}return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}(t,n)}})}))}function Vt(t){t.forEach(qt)}const $t=new Set;let Ct;function Ft(t,e){return L(t)?(n=t,$t.add(n),Ct||(Ct=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};$t.forEach((t=>t(e)))},window.addEventListener("resize",Ct)),()=>{$t.delete(n),!$t.size&&Ct&&(Ct=void 0)}):function(t,e){zt||"undefined"!=typeof ResizeObserver&&(zt=new ResizeObserver(Vt));const n=G(t);return n.forEach((t=>{let n=Rt.get(t);n||(n=new Set,Rt.set(t,n)),n.add(e),null==zt||zt.observe(t)})),()=>{n.forEach((t=>{const n=Rt.get(t);null==n||n.delete(e),(null==n?void 0:n.size)||null==zt||zt.unobserve(t)}))}}(t,e);var n}const Ht=50,It=()=>({time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}}),Nt={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Ut(t,e,n,i){const r=n[e],{length:o,position:a}=Nt[e],s=r.current,c=n.time;r.current=t["scroll"+a],r.scrollLength=t["scroll"+o]-t["client"+o],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=W(0,r.scrollLength,r.current);const l=i-c;r.velocity=l>Ht?0:xt(r.current-s,l)}const _t={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Xt={start:0,center:.5,end:1};function Gt(t,e,n=0){let i=0;if(void 0!==Xt[t]&&(t=Xt[t]),N(t)){const e=parseFloat(t);t.endsWith("px")?i=e:t.endsWith("%")?t=e/100:t.endsWith("vw")?i=e/100*document.documentElement.clientWidth:t.endsWith("vh")?i=e/100*document.documentElement.clientHeight:t=e}return k(t)&&(i=e*t),n+i}const Zt=[0,0];function Kt(t,e,n,i){let r=Array.isArray(t)?t:Zt,o=0,a=0;return k(t)?r=[t,t]:N(t)&&(r=(t=t.trim()).includes(" ")?t.split(" "):[t,Xt[t]?t:"0"]),o=Gt(r[0],n,i),a=Gt(r[1],e),o-a}const Yt={x:0,y:0};function Jt(t,e,n,i={}){const r=i.axis||"y";return{measure:()=>function(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!=t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}(t,i.target,n),update:e=>{!function(t,e,n){Ut(t,"x",e,n),Ut(t,"y",e,n),e.time=n}(t,n,e),(i.offset||i.target)&&function(t,e,n){let{offset:i=_t.All}=n;const{target:r=t,axis:o="y"}=n,a="y"===o?"height":"width",s=r!==t?function(t,e){let n={x:0,y:0},i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){const{top:t,left:e}=i.getBBox();for(n.x+=e,n.y+=t;i&&"svg"!==i.tagName;)i=i.parentNode}return n}(r,t):Yt,c=r===t?{width:t.scrollWidth,height:t.scrollHeight}:{width:r.clientWidth,height:r.clientHeight},l={width:t.clientWidth,height:t.clientHeight};e[o].offset.length=0;let u=!e[o].interpolate;const f=i.length;for(let t=0;t<f;t++){const n=Kt(i[t],l[a],c[a],s[o]);u||n===e[o].interpolatorOffsets[t]||(u=!0),e[o].offset[t]=n}u&&(e[o].interpolate=wt(pt(f),e[o].offset),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=e[o].interpolate(e[o].current)}(t,n,i)},notify:L(e)?()=>e(n):Qt(e,n[r])}}function Qt(t,e){return t.pause(),t.forEachNative(((t,{easing:e})=>{var n,i;if(t.updateDuration)e||(t.easing=c),t.updateDuration(1);else{const r={duration:1e3};e||(r.easing="linear"),null===(i=null===(n=t.effect)||void 0===n?void 0:n.updateTiming)||void 0===i||i.call(n,r)}})),()=>{t.currentTime=e.progress}}const te=new WeakMap,ee=new WeakMap,ne=new WeakMap,ie=t=>t===document.documentElement?window:t;function re(t,e={}){var{container:n=document.documentElement}=e,i=ft(e,["container"]);let r=ne.get(n);r||(r=new Set,ne.set(n,r));const o=It(),a=Jt(n,t,o,i);if(r.add(a),!te.has(n)){const t=()=>{const t=performance.now();for(const t of r)t.measure();for(const e of r)e.update(t);for(const t of r)t.notify()};te.set(n,t);const e=ie(n);window.addEventListener("resize",t,{passive:!0}),n!==document.documentElement&&ee.set(n,Ft(n,t)),e.addEventListener("scroll",t,{passive:!0})}const s=te.get(n),c=requestAnimationFrame(s);return()=>{var e;"function"!=typeof t&&t.stop(),cancelAnimationFrame(c);const i=ne.get(n);if(!i)return;if(i.delete(a),i.size)return;const r=te.get(n);te.delete(n),r&&(ie(n).removeEventListener("scroll",r),null===(e=ee.get(n))||void 0===e||e(),window.removeEventListener("resize",r))}}function oe(t,e){return function(t){return"object"==typeof t}(t)?t:t&&e?e[t]:void 0}let ae;function se(){if(!ae)return;const t=ae.sort(le).map(ue);t.forEach(fe),t.forEach(fe),ae=void 0}function ce(t){ae?l(ae,t):(ae=[t],requestAnimationFrame(se))}const le=(t,e)=>t.getDepth()-e.getDepth(),ue=t=>t.animateUpdates(),fe=t=>t.next(),de=(t,e)=>new CustomEvent(t,{detail:{target:e}});function he(t,e,n){t.dispatchEvent(new CustomEvent(e,{detail:{originalEvent:n}}))}function pe(t,e,n){t.dispatchEvent(new CustomEvent(e,{detail:{originalEntry:n}}))}const ge=(t,e,n)=>i=>{i.pointerType&&"mouse"!==i.pointerType||(n(),he(t,e,i))},me={inView:{isActive:t=>Boolean(t.inView),subscribe:(t,{enable:e,disable:n},{inViewOptions:i={}})=>{const{once:r}=i,o=ft(i,["once"]);return Pt(t,(i=>{if(e(),pe(t,"viewenter",i),!r)return e=>{n(),pe(t,"viewleave",e)}}),o)}},hover:{isActive:t=>Boolean(t.hover),subscribe:(t,{enable:e,disable:n})=>{const i=ge(t,"hoverstart",e),r=ge(t,"hoverend",n);return t.addEventListener("pointerenter",i),t.addEventListener("pointerleave",r),()=>{t.removeEventListener("pointerenter",i),t.removeEventListener("pointerleave",r)}}},press:{isActive:t=>Boolean(t.press),subscribe:(t,{enable:e,disable:n})=>{const i=e=>{n(),he(t,"pressend",e),window.removeEventListener("pointerup",i)},r=n=>{e(),he(t,"pressstart",n),window.addEventListener("pointerup",i)};return t.addEventListener("pointerdown",r),()=>{t.removeEventListener("pointerdown",r),window.removeEventListener("pointerup",i)}}}},ye=["initial","animate",...Object.keys(me),"exit"],ve=new WeakMap;function be(t={},e){let n,r=e?e.getDepth()+1:0;const o={initial:!0,animate:!0},a={},c={};for(const n of ye)c[n]="string"==typeof t[n]?t[n]:null==e?void 0:e.getContext()[n];const l=!1===t.initial?"animate":"initial";let f=ft(oe(t[l]||c[l],t.variants)||{},["transition"]);const d=Object.assign({},f),h=(t,e)=>()=>{o[t]=e,ce(g)},p=()=>{for(const e in me){const i=me[e].isActive(t),r=a[e];i&&!r?a[e]=me[e].subscribe(n,{enable:h(e,!0),disable:h(e,!1)},t):!i&&r&&(r(),delete a[e])}},g={update:e=>{n&&(t=e,p(),ce(g))},setActive:(t,e)=>{n&&(o[t]=e,ce(g))},animateUpdates:function*(){var e,i;const r=f;f={};const a={};for(const n of ye){if(!o[n])continue;const r=oe(t[n]);if(r)for(const n in r)"transition"!==n&&(f[n]=r[n],a[n]=X(null!==(i=null!==(e=r.transition)&&void 0!==e?e:t.transition)&&void 0!==i?i:{},n))}const c=new Set([...Object.keys(f),...Object.keys(r)]),l=[];c.forEach((t=>{var e,i,o;void 0===f[t]&&(f[t]=d[t]),typeof(i=r[t])==typeof(o=f[t])&&(Array.isArray(i)&&Array.isArray(o)?function(t,e){const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}(i,o):i===o)||(null!==(e=d[t])&&void 0!==e||(d[t]=H.get(n,t)),l.push(_(n,t,f[t],a[t],Et)))})),yield;const u=l.map((t=>t())).filter(Boolean);if(!u.length)return;const h=f;n.dispatchEvent(de("motionstart",h)),Promise.all(u.map((t=>t.finished))).then((()=>{n.dispatchEvent(de("motioncomplete",h))})).catch(s)},getDepth:()=>r,getTarget:()=>f,getOptions:()=>t,getContext:()=>c,mount:t=>(i(Boolean(t),"Animation state must be mounted with valid Element"),n=t,ve.set(n,g),p(),()=>{ve.delete(n),function(t){ae&&u(ae,t)}(g);for(const t in a)a[t]()}),isMounted:()=>Boolean(n)};return g}function we(t){const e={},n=[];for(let i in t){const r=t[i];w(i)&&(d[i]&&(i=d[i]),n.push(i),i=m(i));let o=Array.isArray(r)?r[0]:r;const a=g.get(i);a&&(o=k(r)?a.toDefaultUnit(r):r),e[i]=o}return n.length&&(e.transform=S(n)),e}const Ee=t=>`-${t.toLowerCase()}`,Se=t=>t.replace(/[A-Z]/g,Ee);function Oe(t={}){const e=we(t);let n="";for(const t in e)n+=t.startsWith("--")?t:Se(t),n+=`: ${e[t]}; `;return n}const xe=ut(Et);function Me(t,e={}){return K([()=>{const n=new Et(t,[0,1],e);return n.finished.catch((()=>{})),n}],e,e.duration)}function Te(t,e,n){return(L(t)?Me:xe)(t,e,n)}}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}return n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{const{timeline:t}=n(422),e=document.querySelector("[panel=open]"),i=[document.querySelector("[panel=close]"),document.querySelector("[background=close]")],r=document.querySelector("[display-panel]"),o=document.querySelector("[menu-panel]"),a=[[o,{translateX:"101%"},{at:0,duration:0}],[r,{display:"block"},{at:0,duration:0}],[r,{opacity:0},{at:0,duration:0}],[r,{opacity:1},{at:.1,duration:.1,easing:"ease-out"}],[o,{translateX:"0%"},{at:.1,duration:.1,easing:"ease-out"}]],s=[[o,{translateX:"101%"},{duration:.1,easing:"ease-out"}],[r,{opacity:0},{at:0,duration:.1,easing:"ease-out"}],[r,{display:"none"},{}]];e.addEventListener("click",(()=>{o.classList.contains("open")?(t(s),o.classList.remove("open")):(t(a),o.classList.add("open"))})),i.forEach((e=>{e.addEventListener("click",(()=>{o.classList.contains("open")?(t(s),o.classList.remove("open")):(t(a),o.classList.add("open"))}))}))})(),{}})()));