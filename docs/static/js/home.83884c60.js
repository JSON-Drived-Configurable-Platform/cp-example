(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"223a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-home"},[a("Carousel",{attrs:{loop:""},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},t._l(t.carouselData,function(e,s){return a("CarouselItem",{key:s},[a("div",{staticClass:"page-home-carousel-content"},[t._v(t._s(e))])])}),1),a("div",{staticClass:"page-home-hot-templates"},[a("h1",{staticClass:"page-home-hot-templates-header"},[t._v("Hot Templates")]),a("div",{staticClass:"page-home-hot-templates-cards"},t._l(t.hotTemplates,function(e,s){return a("Card",{key:s,staticClass:"page-home-hot-templates-card"},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),a("p",[t._v("\n          "+t._s(e.description)+"\n        ")])])}),1)])],1)},o=[],n=a("8e44"),l=n["a"].home.getHomeData,r={data:function(){return{current:0,carouselData:[],hotTemplates:[]}},mounted:function(){var t=this;l().then(function(e){var a=e.data,s=a.carouselData,o=a.hotTemplates;t.carouselData=s,t.hotTemplates=o})}},c=r,u=(a("576b"),a("2877")),i=Object(u["a"])(c,s,o,!1,null,null,null),p=i.exports;e["default"]=p},"576b":function(t,e,a){"use strict";var s=a("dbb8"),o=a.n(s);o.a},dbb8:function(t,e,a){}}]);
//# sourceMappingURL=home.83884c60.js.map