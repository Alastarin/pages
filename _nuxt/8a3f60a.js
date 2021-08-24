(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{579:function(e,t,n){"use strict";var r=n(1),o=(n(39),n(66),n(240),n(10),n(9),n(54),n(111),n(11),n(8),n(14),n(15),n(5)),c=n(100),l=n(116);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},582:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"createUser"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"createUserInput"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CreateUserInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createUser"},arguments:[{kind:"Argument",name:{kind:"Name",value:"createUserInput"},value:{kind:"Variable",name:{kind:"Name",value:"createUserInput"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:117}};n.loc.source={body:"mutation createUser($createUserInput:CreateUserInput!){\n  createUser(createUserInput:$createUserInput){\n    id\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function r(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){r(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){r(e,t)})),e.definitions&&e.definitions.forEach((function(e){r(e,t)}))}var o={};function c(e,t){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==t)return element}}n.definitions.forEach((function(e){if(e.name){var t=new Set;r(e,t),o[e.name.value]=t}})),e.exports=n,e.exports.createUser=function(e,t){var n={kind:e.kind,definitions:[c(e,t)]};e.hasOwnProperty("loc")&&(n.loc=e.loc);var r=o[t]||new Set,l=new Set,d=new Set;for(r.forEach((function(e){d.add(e)}));d.size>0;){var f=d;d=new Set,f.forEach((function(e){l.has(e)||(l.add(e),(o[e]||new Set).forEach((function(e){d.add(e)})))}))}return l.forEach((function(t){var r=c(e,t);r&&n.definitions.push(r)})),n}(n,"createUser")},599:function(e,t,n){"use strict";n.r(t);var r=n(16),o=(n(67),n(582)),c=n.n(o),l={name:"Signup",layout:"auth",data:function(){return{showPassword:!1,user:{name:"",email:"",password:""}}},methods:{onSubmit:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.user,t.prev=1,t.next=4,e.$apollo.mutate({mutation:c.a,variables:{createUserInput:n}});case 4:e.$router.push({name:"auth-signin"}),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(1);case 9:case"end":return t.stop()}}),t,null,[[1,7]])})))()}}},d=n(57),f=n(58),v=n.n(f),m=n(334),h=n(221),w=n(186),k=n(522),y=n(510),_=n(579),x=n(523),O=n(552),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{flat:""}},[n("v-row",{staticClass:"px-4",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("nuxt-link",{staticClass:"text-color--gradient text-h5",attrs:{to:{name:"index"}}},[e._v("\n        Warframe Helper\n      ")])],1),e._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("div",{staticClass:"text--secondary text-center"},[e._v("\n        Hello there! Sign Up and start managing your account\n      ")])])],1),e._v(" "),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Name",outlined:"","append-icon":"mdi-account",error:e.hasValidationError("name"),"error-messages":e.hasValidationError("name",!0)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit.apply(null,arguments)}},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e._v(" "),n("v-text-field",{attrs:{label:"Email","append-icon":"mdi-email",outlined:"",error:e.hasValidationError("email"),"error-messages":e.hasValidationError("email",!0)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit.apply(null,arguments)}},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),n("v-text-field",{attrs:{label:"Password",outlined:"",error:e.hasValidationError("password"),"error-messages":e.hasValidationError("password",!0),"append-icon":e.showPassword?"mdi-eye":"mdi-eye-off",type:e.showPassword?"text":"password"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSubmit.apply(null,arguments)},"click:append":function(t){e.showPassword=!e.showPassword}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"primary",block:""},on:{click:e.onSubmit}},[e._v("\n          Create\n        ")])],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{dense:"",align:"center"}},[n("v-col",[n("v-divider")],1),e._v(" "),n("v-col",{attrs:{cols:"auto"}},[e._v("\n            Or\n          ")]),e._v(" "),n("v-col",[n("v-divider")],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"text-center"},[n("span",{staticClass:"text--secondary"},[e._v("Already have an account?")]),e._v(" "),n("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:{name:"auth-signin"}}},[e._v("\n            Sign in\n          ")])],1)])],1)],1)],1)}),[],!1,null,"78feb292",null);t.default=component.exports;v()(component,{VBtn:m.a,VCard:h.a,VCardActions:w.a,VCardText:w.b,VCol:k.a,VDivider:y.a,VForm:_.a,VRow:x.a,VTextField:O.a})}}]);