(window.webpackJsonp=window.webpackJsonp||[]).push([[9,3],{524:function(t,e,n){var content=n(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4b2ec3c7",content,!0,{sourceMap:!1})},525:function(t,e,n){"use strict";n.r(e);n(23);var r={name:"PageBanner",props:{src:{type:[String],default:function(){return"/images/Mesa.jpg"}},height:{type:[String,Number],default:function(){return"256"}}}},o=(n(526),n(56)),l=n(57),c=n.n(l),d=n(216),h=(n(528),n(1).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),f=n(5),v=Object(f.a)(h).extend().extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String,srcset:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, ".concat(this.parallax,"px)")}}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",(function(){t.translate(),t.listeners()}),!1),this.isBooted=!0)},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var e=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,srcset:this.srcset,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:"".concat(this.height,"px")},on:this.$listeners},[e,content])}}),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"page-banner__wrapper",attrs:{hover:""}},[n("v-parallax",{attrs:{height:t.height,src:t.src}},[t._t("default")],2)],1)}),[],!1,null,"214b5aa7",null);e.default=component.exports;c()(component,{VCard:d.a,VParallax:v})},526:function(t,e,n){"use strict";n(524)},527:function(t,e,n){var r=n(16)(!1);r.push([t.i,"",""]),t.exports=r},528:function(t,e,n){var content=n(529);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0cd63bd9",content,!0,{sourceMap:!1})},529:function(t,e,n){var r=n(16)(!1);r.push([t.i,".v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}",""]),t.exports=r},548:function(t,e,n){"use strict";n.r(e);var r={name:"Index",components:{PageBanner:n(525).default}},o=n(56),l=n(57),c=n.n(l),d=n(325),h=n(216),f=n(182),v=n(510),m=n(523),w=n(512),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",[n("page-banner",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"display-4"},[t._v("\n              Main news\n            ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"primary"}},[t._v("\n              Learn more\n            ")])],1)],1)],1)],1)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"8"}},[n("v-row",t._l(3,(function(i){return n("v-col",{key:i,attrs:{cols:"12"}},[n("v-card",[n("v-card-text",[t._v("Some Newsl")])],1)],1)})),1)],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-card",[n("v-card-text",[t._v("Somw widget")])],1)],1)],1)],1)}),[],!1,null,"9b05d53a",null);e.default=component.exports;c()(component,{PageBanner:n(525).default}),c()(component,{VBtn:d.a,VCard:h.a,VCardText:f.b,VCol:v.a,VContainer:m.a,VRow:w.a})}}]);