webpackJsonp([0],{"3KrT":function(t,e,n){"use strict";var a=n("pFYg"),o=n.n(a);e.a={bind:function(t,e,n){var a=void 0;a=o()(e.value)===Object(e.value)?e.value.id:e.value,"BUTTON"!==t.tagName&&t.setAttribute("role","BUTTON"),t.addEventListener("click",function(t){t.preventDefault(),n.context.$root.$emit("show:modal",a,n.elm)})}}},Ains:function(t,e,n){"use strict";var a=n("ZgLz"),o=n("ZuNB"),i=!1;var s=function(t){i||n("KNVS")},r=n("VU/8")(a.a,o.a,!1,s,null,null);r.options.__file="components/transitionShapeModal.vue",e.a=r.exports},CHSj:function(t,e,n){"use strict";var a=n("PrKD"),o=n("nmRE"),i=!1;var s=function(t){i||n("NPEf")},r=n("VU/8")(a.a,o.a,!1,s,null,null);r.options.__file="components/modal.vue",e.a=r.exports},DLCH:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-container"},[a("header",{staticClass:"site-header l-header"},[a("nav",{attrs:{role:"navigation"}},[a("div",{staticClass:"l-header__inner"},[a("transition",{attrs:{name:"page"},on:{"before-leave":t.afterPageTransition,"after-enter":t.enterPageTransition}},["index"!==t.$route.name?a("nuxt-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n("PfQk"),alt:"Freelance Anonymous"}})]):t._e()],1),a("button",{directives:[{name:"modal",rawName:"v-modal",value:"menu",expression:"'menu'"}],staticClass:"menu-button",class:{"is-active":t.isModalOpen},attrs:{type:"button","aria-label":"Menu"}},[t._v("\n                    Menu "),a("span",{staticClass:"menu-button__icon"})]),t._e()],1),a("transition-shape-modal",{staticClass:"c-modal--menu",attrs:{id:"menu",labelledBy:"main-nav__heading"}},[a("h2",{staticClass:"sr-only",attrs:{id:"main-nav__heading"}},[t._v("Site navigation")]),a("ul",{staticClass:"main-nav"},[a("li",{staticClass:"main-nav__item"},[a("nuxt-link",{staticClass:"main-nav__link",attrs:{to:"/team"},nativeOn:{click:function(e){return t.hideModal(e)}}},[a("span",{staticClass:"main-nav__heading"},[t._v("About")]),a("span",{staticClass:"main-nav__desc"},[t._v("Get to know who we are, and let's work together.")])])],1),a("li",{staticClass:"main-nav__item"},[a("nuxt-link",{staticClass:"main-nav__link",attrs:{to:"/projects"},nativeOn:{click:function(e){return t.hideModal(e)}}},[a("span",{staticClass:"main-nav__heading"},[t._v("Our projects")]),a("span",{staticClass:"main-nav__desc"},[t._v("A mix of client and internal projects for your viewing pleasure.")])])],1),a("li",{staticClass:"main-nav__item"},[a("nuxt-link",{staticClass:"main-nav__link",attrs:{to:"/faqs"},nativeOn:{click:function(e){return t.hideModal(e)}}},[a("span",{staticClass:"main-nav__heading"},[t._v("FAQs")]),a("span",{staticClass:"main-nav__desc"},[t._v("Looking to get a simple question answered? check here.")])])],1),a("li",{staticClass:"main-nav__item"},[a("nuxt-link",{staticClass:"main-nav__link",attrs:{to:"/selected-works"},nativeOn:{click:function(e){return t.hideModal(e)}}},[a("span",{staticClass:"main-nav__heading"},[t._v("Our write-ups")]),a("span",{staticClass:"main-nav__desc"},[t._v("We also like to write, browse our writings to view topics you find interesting.")])])],1),a("li",{staticClass:"main-nav__item"},[a("nuxt-link",{staticClass:"main-nav__link",attrs:{to:"/connect"},nativeOn:{click:function(e){return t.hideModal(e)}}},[a("span",{staticClass:"main-nav__heading"},[t._v("Let's connect")]),a("span",{staticClass:"main-nav__desc"},[t._v("Have a project you would like us to take a look at? Interested in joining us?")])])],1)])])],1)]),a("main",{staticClass:"site-content"},[a("nuxt")],1),a("transition",{attrs:{name:"page"}},[t.showFooter?a("footer",{staticClass:"site-footer"},[a("hr"),a("p",[t._v("© 2018 Freelance Anonymous. All rights reserved.")])]):t._e()])],1)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},KNVS:function(t,e,n){var a=n("fRTg");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("594ad4a8",a,!1,{sourceMap:!1})},KWnR:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.menu-button {\n  font-family: inherit;\n  font-size: 16px;\n  background: none;\n  border: none;\n  padding: 0;\n  color: #1a1920;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-transition: 0.4s cubic-bezier(0.95, 0.18, 0.71, 0.7) all;\n  transition: 0.4s cubic-bezier(0.95, 0.18, 0.71, 0.7) all;\n  margin-left: auto;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  z-index: 20000;\n}\n.menu-button__icon {\n    background-image: url(\"data:image/svg+xml,%3Csvg viewPort='0 0 32 22' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='1' y1='2' x2='31' y2='2' stroke='%23333' stroke-width='2' /%3E%3Cline x1='1' y1='11' x2='31' y2='11' stroke='%23333' stroke-width='2' /%3E%3Cline x1='1' y1='20' x2='31' y2='20' stroke='%23333' stroke-width='2' /%3E%3C/svg%3E\");\n    display: inline-block;\n    width: 32px;\n    height: 22px;\n    margin-left: 10px;\n}\n.menu-button.is-active {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n}\nbody.is-dark .menu-button {\n  color: #fafafa;\n}\nbody.is-dark .menu-button__icon {\n    background-image: url(\"data:image/svg+xml,%3Csvg viewPort='0 0 32 22' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='1' y1='2' x2='31' y2='2' stroke='%23fafafa' stroke-width='2' /%3E%3Cline x1='1' y1='11' x2='31' y2='11' stroke='%23fafafa' stroke-width='2' /%3E%3Cline x1='1' y1='20' x2='31' y2='20' stroke='%23fafafa' stroke-width='2' /%3E%3C/svg%3E\");\n}\n",""])},Ma2J:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("iArx"),o=n("DLCH"),i=!1;var s=function(t){i||n("gLzy")},r=n("VU/8")(a.a,o.a,!1,s,null,null);r.options.__file="layouts/default.vue",e.default=r.exports},NPEf:function(t,e,n){var a=n("fw/6");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("71cc93cb",a,!1,{sourceMap:!1})},PfQk:function(t,e,n){t.exports=n.p+"img/fa-logo-small.9843911.png"},PrKD:function(t,e,n){"use strict";var a='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';e.a={name:"modal",props:{transitionName:{type:String,default:"fade"},extraClasses:{type:String},role:{type:String,default:"modal"},labelledBy:{type:String},describedBy:{type:String},showClose:{type:Boolean,default:!0},showBackdrop:{type:Boolean,default:!0},beforeEnter:{type:Function,default:function(){}},enter:{type:Function,default:function(){}},beforeLeave:{type:Function,default:function(){}},leave:{type:Function,default:function(){}},bindCssTransition:{type:Boolean,default:!0}},data:function(){return{isOpen:!1,srcElement:null}},mounted:function(){this.$root.$on("show:modal",this.openModal),this.$root.$on("hide:modal",this.closeModal)},methods:{openModal:function(t,e){var n=this,o=void 0;this.modalId===t&&(o=this.$el.querySelectorAll(a),this.isOpen=!0,this.srcElement=e,this.$nextTick(function(){o[0].focus(),n.$root.$emit("shown:modal",t,n.srcElement),document.body.style.overflow="hidden"}))},closeModal:function(t){this.modalId===t&&(this.isOpen=!1,this.srcElement&&(this.srcElement.focus(),document.body.style.overflow="visible"),this.$root.$emit("hidden:modal",t,this.srcElement))},closeLocalModal:function(){this.closeModal(this.modalId,this.srcElement)},onKeyUp:function(t){27===t.keyCode&&this.closeModal(this.modalId)},onKeyDown:function(t){var e=this.$el.querySelectorAll(a);9!==t.keyCode||t.shiftKey||t.srcElement!==e[e.length-1]||setTimeout(function(){e[0].focus()}),9===t.keyCode&&t.shiftKey&&t.srcElement===e[0]&&setTimeout(function(){e[e.length-1].focus()})},onFocusOut:function(t){this.isOpen&&!this.$refs.modal.contains(t.relatedTarget)&&this.$el.focus()}},computed:{modalClasses:function(){return["c-modal",this.isOpen?"is-open":"",this.extraClasses]},modalAttributes:function(){return{tabindex:"-1",role:this.role,"aria-labelledby":this.labelledBy,"aria-describedby":this.describedBy,"aria-modal":"true"}},modalId:function(){return this.$el.getAttribute("id")}}}},ZgLz:function(t,e,n){"use strict";var a=n("Xxa5"),o=n.n(a),i=n("exGp"),s=n.n(i),r=n("//Fk"),l=n.n(r),c=n("CHSj"),d=function(t){return new l.a(function(e){return setTimeout(e,t)})};e.a={components:{modal:c.a},methods:{beforeEnter:function(t){var e=t.querySelector(".c-modal__backdrop"),n=document.querySelector(".menu-button");this.setBackdropPosition(e,n)},enter:function(t,e){var n=this,a=t.querySelector(".c-modal__backdrop"),i=t.querySelector(".c-modal__content"),r=document.querySelector(".menu-button");this.$nextTick(s()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.animateBackdrop(a,r),t.next=3,d(400);case 3:i.style.opacity=1,e();case 5:case"end":return t.stop()}},t,n)})))},leave:function(t,e){var n=this,a=t.querySelector(".c-modal__backdrop"),i=t.querySelector(".c-modal__content-backdrop"),r=t.querySelector(".c-modal__content"),l=document.querySelector(".menu-button");this.$nextTick(s()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(10);case 2:return n.animateBackdrop(i,l),r.style.opacity=0,t.next=6,d(500);case 6:return a.style.display="none",i.style.opacity=0,n.resetBackdrop(a,l),t.next=11,d(400);case 11:a.style.display="",n.resetBackdrop(i,l),e();case 14:case"end":return t.stop()}},t,n)})))},beforeLeave:function(t){var e=t.querySelector(".c-modal__content-backdrop"),n=document.querySelector(".menu-button");this.setBackdropPosition(e,n)},setBackdropPosition:function(t,e){var n=e.getBoundingClientRect();t.style.top=n.top+n.height/2+"px",t.style.left=n.left+n.width/2+"px"},animateBackdrop:function(t,e){var n=2*Math.sqrt(Math.pow(window.innerHeight,2)+Math.pow(window.innerWidth,2));t.style.transition=".5s cubic-bezier(.95,.18,.71,.7) all",t.style.top=n/2*-1+(e.getBoundingClientRect().top+e.clientHeight/2)+"px",t.style.left=n/2*-1+(e.getBoundingClientRect().left+e.clientWidth/2)+"px",t.style.opacity=1,t.style.transform="scale(1) rotate(0)",t.style.height=n+"px",t.style.width=n+"px",t.style.borderRadius="0"},resetBackdrop:function(t,e){var n=e.getBoundingClientRect();t.style.opacity="",t.style.transition="",t.style.transform="",t.style.height="",t.style.width="",t.style.borderRadius="5px",t.style.top=n.top+n.height/2+"px",t.style.left=n.left+n.width/2+"px"}}}},ZuNB:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",t._g(t._b({attrs:{enter:t.enter,beforeEnter:t.beforeEnter,leave:t.leave,beforeLeave:t.beforeLeave,bindCssTransition:!1}},"modal",t.$attrs,!1),t.$listeners),[t._t("default"),n("template",{slot:"backdrop"},[n("div",{staticClass:"c-modal__backdrop"}),n("div",{staticClass:"c-modal__content-backdrop"})])],2)};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},fRTg:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.c-modal--menu .c-modal__content {\n  position: relative;\n  -webkit-transition: 0.5s cubic-bezier(0.35, 0, 0.25, 1) all;\n  transition: 0.5s cubic-bezier(0.35, 0, 0.25, 1) all;\n  opacity: 0;\n}\n.c-modal--menu .c-modal__content-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: auto;\n  bottom: auto;\n  z-index: 10000;\n  background-color: #fafafa;\n}\n.c-modal--menu .c-modal__backdrop, .c-modal--menu .c-modal__content-backdrop {\n  opacity: .9;\n  -webkit-transform: scale(0) rotate(90deg);\n          transform: scale(0) rotate(90deg);\n  height: 0;\n  width: 0;\n  right: auto;\n  bottom: auto;\n  border-radius: 5px;\n}\n.c-modal--menu .c-modal__close {\n  color: #fafafa;\n}\nbody.is-dark .c-modal__content-backdrop {\n  background-color: #1A1920;\n}\n",""])},"fw/6":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"\n.c-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.c-modal__wrapper {\n    z-index: 10010;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    min-height: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n}\n.c-modal__container {\n    margin: auto;\n}\n.c-modal__backdrop {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 10000;\n}\n.c-modal__close {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.c-modal__close-icon {\n    padding-left: 10px;\n}\n.fade-enter-active, .fade-leave-active {\n  -webkit-transition: all .5s;\n  transition: all .5s;\n}\n.fade-enter, .fade-leave-to {\n  opacity: 0;\n  top: -20px;\n}\n",""])},gLzy:function(t,e,n){var a=n("KWnR");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("1d05f335",a,!1,{sourceMap:!1})},iArx:function(t,e,n){"use strict";var a=n("Ains"),o=n("3KrT"),i=n("CHSj");e.a={data:function(){return{isModalOpen:!1,showFooter:!1}},directives:{modal:o.a},components:{modal:i.a,transitionShapeModal:a.a},mounted:function(){this.$root.$on("shown:modal",this.modalShown),this.$root.$on("hidden:modal",this.modalHidden),"index"!==this.$route.name&&(this.showFooter=!0)},beforeDestroy:function(){this.$root.$off("shown:modal",this.modalShown),this.$root.$off("hidden:modal",this.modalHidden)},methods:{afterPageTransition:function(){console.log(this.$route.name,arguments),"index"===this.$route.name&&(this.showFooter=!1)},enterPageTransition:function(){console.log(this.$route.name,arguments),"index"!==this.$route.name&&(this.showFooter=!0)},hideModal:function(){this.$root.$emit("hide:modal","menu")},modalShown:function(t){"menu"===t&&(this.isModalOpen=!0)},modalHidden:function(t){"menu"===t&&(this.isModalOpen=!1)}}}},nmRE:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transitionName,css:t.bindCssTransition},on:{"before-enter":t.beforeEnter,enter:t.enter,"before-leave":t.beforeLeave,leave:t.leave}},[n("div",t._b({directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"modal",class:t.modalClasses,on:{focusout:t.onFocusOut,keydown:t.onKeyDown,keyup:t.onKeyUp}},"div",t.modalAttributes,!1),[n("div",{staticClass:"c-modal__wrapper"},[n("div",{staticClass:"c-modal__container"},[n("div",{staticClass:"c-modal__content"},[t.showClose?n("button",{staticClass:"c-modal__close",class:{"is-active":t.isOpen},attrs:{type:"button","aria-label":"Close"},on:{click:t.closeLocalModal}},[t._v("\n\n                        Close\n\n                        "),n("svg",{staticClass:"c-modal__close-icon",attrs:{width:"22",height:"22",viewPort:"0 0 22 22",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[n("line",{attrs:{x1:"1",y1:"21",x2:"21",y2:"1",stroke:"#fafafa","stroke-width":"2"}}),n("line",{attrs:{x1:"1",y1:"1",x2:"21",y2:"21",stroke:"#fafafa","stroke-width":"2"}})])]):t._e(),t._t("default",null,{closeModal:t.closeLocalModal})],2)])]),t._t("backdrop",[t.showBackdrop?n("div",{staticClass:"c-modal__backdrop"}):t._e()])],2)])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o}});