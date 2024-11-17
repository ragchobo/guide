import{B as k,o as a,t as c,m as s,i as r,j as i,d as g,s as $,y as j,r as P,q as C,c as m,w as B,g as p,h as z,v as T,T as x}from"./index-CupGSsGg.js";import{s as b,a as f,b as h,c as v}from"./index-CNxu2agW.js";import{R as D}from"./index-WT0zXJXe.js";var A=function(o){var e=o.dt;return`
.p-card {
    background: `.concat(e("card.background"),`;
    color: `).concat(e("card.color"),`;
    box-shadow: `).concat(e("card.shadow"),`;
    border-radius: `).concat(e("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(e("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(e("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(e("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(e("card.title.font.size"),`;
    font-weight: `).concat(e("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(e("card.subtitle.color"),`;
}
`)},E={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},M=k.extend({name:"card",theme:A,classes:E}),N={name:"BaseCard",extends:$,style:M,provide:function(){return{$pcCard:this,$parentInstance:this}}},L={name:"Card",extends:N,inheritAttrs:!1};function K(n,o,e,t,u,d){return a(),c("div",s({class:n.cx("root")},n.ptmi("root")),[n.$slots.header?(a(),c("div",s({key:0,class:n.cx("header")},n.ptm("header")),[r(n.$slots,"header")],16)):i("",!0),g("div",s({class:n.cx("body")},n.ptm("body")),[n.$slots.title||n.$slots.subtitle?(a(),c("div",s({key:0,class:n.cx("caption")},n.ptm("caption")),[n.$slots.title?(a(),c("div",s({key:0,class:n.cx("title")},n.ptm("title")),[r(n.$slots,"title")],16)):i("",!0),n.$slots.subtitle?(a(),c("div",s({key:1,class:n.cx("subtitle")},n.ptm("subtitle")),[r(n.$slots,"subtitle")],16)):i("",!0)],16)):i("",!0),g("div",s({class:n.cx("content")},n.ptm("content")),[r(n.$slots,"content")],16),n.$slots.footer?(a(),c("div",s({key:1,class:n.cx("footer")},n.ptm("footer")),[r(n.$slots,"footer")],16)):i("",!0)],16)],16)}L.render=K;var R=function(o){var e=o.dt;return`
.p-message {
    border-radius: `.concat(e("message.border.radius"),`;
    outline-width: `).concat(e("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(e("message.content.padding"),`;
    gap: `).concat(e("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 0 0 auto;
    overflow: hidden;
    position: relative;
    width: `).concat(e("message.close.button.width"),`;
    height: `).concat(e("message.close.button.height"),`;
    border-radius: `).concat(e("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(e("message.transition.duration"),", color ").concat(e("message.transition.duration"),", outline-color ").concat(e("message.transition.duration"),", box-shadow ").concat(e("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(e("message.close.icon.size"),`;
    width: `).concat(e("message.close.icon.size"),`;
    height: `).concat(e("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(e("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(e("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(e("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(e("message.info.background"),`;
    outline-color: `).concat(e("message.info.border.color"),`;
    color: `).concat(e("message.info.color"),`;
    box-shadow: `).concat(e("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(e("message.info.close.button.hover.background"),`;
}

.p-message-success {
    background: `).concat(e("message.success.background"),`;
    outline-color: `).concat(e("message.success.border.color"),`;
    color: `).concat(e("message.success.color"),`;
    box-shadow: `).concat(e("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(e("message.success.close.button.hover.background"),`;
}

.p-message-warn {
    background: `).concat(e("message.warn.background"),`;
    outline-color: `).concat(e("message.warn.border.color"),`;
    color: `).concat(e("message.warn.color"),`;
    box-shadow: `).concat(e("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(e("message.warn.close.button.hover.background"),`;
}

.p-message-error {
    background: `).concat(e("message.error.background"),`;
    outline-color: `).concat(e("message.error.border.color"),`;
    color: `).concat(e("message.error.color"),`;
    box-shadow: `).concat(e("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(e("message.error.close.button.hover.background"),`;
}

.p-message-secondary {
    background: `).concat(e("message.secondary.background"),`;
    outline-color: `).concat(e("message.secondary.border.color"),`;
    color: `).concat(e("message.secondary.color"),`;
    box-shadow: `).concat(e("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(e("message.secondary.close.button.hover.background"),`;
}

.p-message-contrast {
    background: `).concat(e("message.contrast.background"),`;
    outline-color: `).concat(e("message.contrast.border.color"),`;
    color: `).concat(e("message.contrast.color"),`;
    box-shadow: `).concat(e("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(e("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(e("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(e("message.contrast.close.button.hover.background"),`;
}

.p-message-text {
    font-size: `).concat(e("message.text.font.size"),`;
    font-weight: `).concat(e("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(e("message.icon.size"),`;
    width: `).concat(e("message.icon.size"),`;
    height: `).concat(e("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}
`)},V={root:function(o){var e=o.props;return"p-message p-component p-message-"+e.severity},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},q=k.extend({name:"message",theme:R,classes:V}),F={name:"BaseMessage",extends:$,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:q,provide:function(){return{$pcMessage:this,$parentInstance:this}}},G={name:"Message",extends:F,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var o=this;this.life&&setTimeout(function(){o.visible=!1,o.$emit("life-end")},this.life)},methods:{close:function(o){this.visible=!1,this.$emit("close",o)}},computed:{iconComponent:function(){return{info:b,success:f,warn:h,error:v}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:D},components:{TimesIcon:j,InfoCircleIcon:b,CheckIcon:f,ExclamationTriangleIcon:h,TimesCircleIcon:v}};function l(n){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},l(n)}function y(n,o){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);o&&(t=t.filter(function(u){return Object.getOwnPropertyDescriptor(n,u).enumerable})),e.push.apply(e,t)}return e}function w(n){for(var o=1;o<arguments.length;o++){var e=arguments[o]!=null?arguments[o]:{};o%2?y(Object(e),!0).forEach(function(t){H(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}function H(n,o,e){return(o=J(o))in n?Object.defineProperty(n,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[o]=e,n}function J(n){var o=Q(n,"string");return l(o)=="symbol"?o:o+""}function Q(n,o){if(l(n)!="object"||!n)return n;var e=n[Symbol.toPrimitive];if(e!==void 0){var t=e.call(n,o||"default");if(l(t)!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(n)}var U=["aria-label"];function W(n,o,e,t,u,d){var I=P("TimesIcon"),O=C("ripple");return a(),m(x,s({name:"p-message",appear:""},n.ptmi("transition")),{default:B(function(){return[p(g("div",s({class:n.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},n.ptm("root")),[n.$slots.container?r(n.$slots,"container",{key:0,closeCallback:d.close}):(a(),c("div",s({key:1,class:n.cx("content")},n.ptm("content")),[r(n.$slots,"icon",{class:"p-message-icon"},function(){return[(a(),m(z(n.icon?"span":null),s({class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16,["class"]))]}),n.$slots.default?(a(),c("div",s({key:0,class:["p-message-text",n.cx("text")]},n.ptm("text")),[r(n.$slots,"default")],16)):i("",!0),n.closable?p((a(),c("button",s({key:1,class:n.cx("closeButton"),"aria-label":d.closeAriaLabel,type:"button",onClick:o[0]||(o[0]=function(S){return d.close(S)})},w(w({},n.closeButtonProps),n.ptm("closeButton"))),[r(n.$slots,"closeicon",{},function(){return[n.closeIcon?(a(),c("i",s({key:0,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16)):(a(),m(I,s({key:1,class:[n.cx("closeIcon"),n.closeIcon]},n.ptm("closeIcon")),null,16,["class"]))]})],16,U)),[[O]]):i("",!0)],16))],16),[[T,u.visible]])]}),_:3},16)}G.render=W;export{G as a,L as s};
