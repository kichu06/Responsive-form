(function(){"use strict";var e={7920:function(e,t,r){var o=r(5130),s=r(6768);const n={class:"form-align"};function a(e,t,r,o,a,i){const l=(0,s.g2)("ContactForm");return(0,s.uX)(),(0,s.CE)("div",n,[(0,s.bF)(l)])}var i=r(4232);const l={class:"form-container"},u=(0,s.Lk)("h1",null,"Contact Us",-1),m={class:"name-group"},c={class:"form-group"},f=(0,s.Lk)("label",{for:"first-name"},"First Name*",-1),d={key:0,class:"error-message"},p={class:"form-group"},b=(0,s.Lk)("label",{for:"last-name"},"Last Name*",-1),h={key:0,class:"error-message"},y={class:"form-group"},v=(0,s.Lk)("label",{for:"email"},"Email*",-1),g={key:0,class:"error-message"},k={class:"form-group"},L=(0,s.Lk)("label",null,"Query Type*",-1),E={class:"checkbox-group"},C={key:0,class:"error-message"},T={class:"form-group"},N=(0,s.Lk)("label",{for:"message"},"Message*",-1),w={key:0,class:"error-message"},q={class:"form-group"},X={key:0,class:"error-message"},O=(0,s.Lk)("div",{class:"form-group"},[(0,s.Lk)("button",{type:"submit"},"Submit")],-1);function V(e,t,r,n,a,V){const x=(0,s.g2)("toastPopup");return(0,s.uX)(),(0,s.CE)("div",l,[(0,s.bF)(x,{ref:"toast"},null,512),(0,s.Lk)("form",{onSubmit:t[7]||(t[7]=(0,o.D$)(((...e)=>V.handleSubmit&&V.handleSubmit(...e)),["prevent"]))},[u,(0,s.Lk)("div",m,[(0,s.Lk)("div",c,[f,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"first-name","onUpdate:modelValue":t[0]||(t[0]=e=>a.form.firstName=e),class:(0,i.C4)({"error-border":!a.form.firstName&&a.submitted})},null,2),[[o.Jo,a.form.firstName]]),!a.form.firstName&&a.submitted?((0,s.uX)(),(0,s.CE)("p",d,"This field is required")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",p,[b,(0,s.bo)((0,s.Lk)("input",{type:"text",id:"last-name","onUpdate:modelValue":t[1]||(t[1]=e=>a.form.lastName=e),class:(0,i.C4)({"error-border":!a.form.lastName&&a.submitted})},null,2),[[o.Jo,a.form.lastName]]),!a.form.lastName&&a.submitted?((0,s.uX)(),(0,s.CE)("p",h,"This field is required")):(0,s.Q3)("",!0)])]),(0,s.Lk)("div",y,[v,(0,s.bo)((0,s.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>a.form.email=e),class:(0,i.C4)({"error-border":!V.isEmailValid&&a.submitted})},null,2),[[o.Jo,a.form.email]]),!V.isEmailValid&&a.submitted?((0,s.uX)(),(0,s.CE)("p",g,"Please enter a valid email address")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",k,[L,(0,s.Lk)("div",E,[(0,s.Lk)("label",null,[(0,s.bo)((0,s.Lk)("input",{type:"radio","onUpdate:modelValue":t[3]||(t[3]=e=>a.form.queryType=e),value:"general"},null,512),[[o.XL,a.form.queryType]]),(0,s.eW)(" General Query ")]),(0,s.Lk)("label",null,[(0,s.bo)((0,s.Lk)("input",{type:"radio","onUpdate:modelValue":t[4]||(t[4]=e=>a.form.queryType=e),value:"support"},null,512),[[o.XL,a.form.queryType]]),(0,s.eW)(" Support Query ")])]),!a.form.queryType&&a.submitted?((0,s.uX)(),(0,s.CE)("p",C,"Please select a query type")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",T,[N,(0,s.bo)((0,s.Lk)("textarea",{id:"message","onUpdate:modelValue":t[5]||(t[5]=e=>a.form.message=e),class:(0,i.C4)({"error-border":!a.form.message&&a.submitted})},null,2),[[o.Jo,a.form.message]]),!a.form.message&&a.submitted?((0,s.uX)(),(0,s.CE)("p",w,"This field is required")):(0,s.Q3)("",!0)]),(0,s.Lk)("div",q,[(0,s.Lk)("label",null,[(0,s.bo)((0,s.Lk)("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=e=>a.form.consent=e),class:(0,i.C4)({"error-border":!a.form.consent&&a.submitted})},null,2),[[o.lH,a.form.consent]]),(0,s.eW)(" I consent to being contacted by the team ")]),!a.form.consent&&a.submitted?((0,s.uX)(),(0,s.CE)("p",X,"To submit this form, please consent to being contacted")):(0,s.Q3)("",!0)]),O],32)])}var x=r.p+"img/icon-success-check.7198a256.svg";const F={key:0,class:"toast"},Q=(0,s.Lk)("div",{class:"toast-title"},[(0,s.Lk)("img",{src:x,alt:"Message sent icon"}),(0,s.eW)(" Message Sent!")],-1),U={class:"toast-content"};function S(e,t,r,n,a,l){return(0,s.uX)(),(0,s.Wv)(o.eB,{name:"fade",onBeforeEnter:l.beforeEnter,onEnter:l.enter,onLeave:l.leave},{default:(0,s.k6)((()=>[a.show?((0,s.uX)(),(0,s.CE)("div",F,[Q,(0,s.Lk)("div",U,[(0,s.Lk)("p",null,(0,i.v_)(a.message),1)])])):(0,s.Q3)("",!0)])),_:1},8,["onBeforeEnter","onEnter","onLeave"])}var j={data(){return{show:!1,message:""}},methods:{showToast(e){this.message=e,this.show=!0,setTimeout((()=>{this.show=!1}),3e3)},beforeEnter(e){e.style.opacity=0},enter(e,t){e.offsetHeight,e.style.transition="opacity 0.5s",e.style.opacity=1,t()},leave(e,t){e.style.transition="opacity 0.5s",e.style.opacity=0,t()}}},P=r(1241);const W=(0,P.A)(j,[["render",S]]);var _=W,A={components:{toastPopup:_},data(){return{form:{firstName:"",lastName:"",email:"",queryType:"",message:"",consent:!1},submitted:!1}},computed:{isEmailValid(){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return e.test(this.form.email)}},methods:{handleSubmit(){console.log("clicked"),this.submitted=!0,this.validateForm()&&(this.$refs.toast.showToast("Thanks for completing the form. We’ll be in touch soon!"),this.resetForm())},validateForm(){return this.form.firstName&&this.form.lastName&&this.isEmailValid&&this.form.queryType&&this.form.message&&this.form.consent},resetForm(){this.form={firstName:"",lastName:"",email:"",queryType:"",message:"",consent:!1},this.submitted=!1}}};const J=(0,P.A)(A,[["render",V]]);var M=J,B={name:"App",components:{ContactForm:M}};const $=(0,P.A)(B,[["render",a]]);var H=$;const D=(0,o.Ef)(H);D.mount("#app")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,o,s,n){if(!o){var a=1/0;for(m=0;m<e.length;m++){o=e[m][0],s=e[m][1],n=e[m][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||a>=n)&&Object.keys(r.O).every((function(e){return r.O[e](o[l])}))?o.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(m--,1);var u=s();void 0!==u&&(t=u)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[o,s,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/Responsive-form/"}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,n,a=o[0],i=o[1],l=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(l)var m=l(r)}for(t&&t(o);u<a.length;u++)n=a[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(m)},o=self["webpackChunkcontact_form"]=self["webpackChunkcontact_form"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(7920)}));o=r.O(o)})();
//# sourceMappingURL=app.f6d7a964.js.map