(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0135":function(e,t,a){e.exports=a.p+"static/img/users.94854e1a.png"},"0b9e":function(e,t,a){e.exports=a.p+"static/img/curd.3c3092f4.png"},"1b6d":function(e,t,a){e.exports=a.p+"static/img/wizard.c611ad6a.jpeg"},"223a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-home"},[e.pageTitle?a("h2",{staticClass:"page-home-page-title"},[e._v(e._s(e.pageTitle))]):e._e(),e.searchFormConfig.formFields.length>0?a("FormGenerator",{ref:"searchConditionsFormGenerator",staticClass:"page-home-conditions",attrs:{fields:e.searchFormConfig.formFields||[],model:e.searchFormModel,options:e.searchFormConfig.options||{}}}):e._e(),a("div",{staticClass:"page-home-templates"},e._l(e.templates,(function(t,i){return a("Card",{key:i,staticClass:"page-home-templates-card"},[a("router-link",{attrs:{to:t.path}},[a("div",{staticClass:"page-home-templates-card-img"},[a("img",{attrs:{src:t.img,alt:t.title}})]),a("div",{staticClass:"page-home-templates-card-content"},[a("h3",[e._v(e._s(t.title))]),a("p",[e._v("\n            "+e._s(t.desc)+"\n          ")])])])],1)})),1)],1)},l=[],o=(a("386d"),{title:"模板查找",search:{formFields:[{type:"Radio",subtype:"button",label:"分类",sizie:"large",model:"class",options:[{label:"全部",value:"all"},{label:"表单输入",value:"form"},{label:"增删改查",value:"curd"},{label:"权限管理",value:"rbac"},{label:"首页门户",value:"home"},{label:"热门推荐",value:"recommand"}]},{type:"Divider",orientation:"left",dashed:!0,size:"small"},{type:"Select",label:"作者",model:"author",placeholder:"不限",options:[{label:"BingBlog",value:"BingBlog"},{label:"changyuqing",value:"changyuqing"},{label:"glsnb",value:"glsnb"},{label:"SAHX",value:"SAHX"},{label:"Tobin1990",value:"Tobin1990"},{label:"xiaomiCat",value:"xiaomiCat"},{label:"zhengxkq",value:"zhengxkq"}],width:240,inline:!0},{type:"Select",label:"好评度",model:"score",placeholder:"不限",options:[{label:"5分",value:"5"},{label:"4分",value:"4"},{label:"3分",value:"3"},{label:"2分",value:"2"},{label:"1分",value:"1"}],width:240,inline:!0}],options:{labelPosition:"left",labelWidth:80}},templates:[{path:"/form-modal",img:a("fe20"),title:"弹框表单",desc:"将表单内置于一个弹框中"},{path:"/form-multi-modal",img:a("f68e"),title:"多弹框表单",desc:"页面中可以同时展示多个可编辑表单"},{path:"/form-slideout",img:a("d4b8"),title:"侧滑表单",desc:"表单从屏幕侧边滑出"},{path:"/form-inline-table",img:a("52e8"),title:"表格行扩展编辑",desc:"表格的行可展开编辑"},{path:"/form-editable-table",img:a("6d20"),title:"可编辑表格",desc:"直接在表格中进行编辑"},{path:"/form-takeover",img:a("713b"),title:"分步表单",desc:"一些列需要按照先后顺序完成的表单"},{path:"/form-wizard",img:a("1b6d"),title:"导航表单",desc:"快速引导进入指定编辑区域"},{path:"/form-sectioned",img:a("79f4"),title:"分组表单",desc:"将表单按照功能进行区域分割"},{path:"/form-conversational",img:a("9478"),title:"对话表单",desc:"以对话的形式完成表单输入"},{path:"/form-popover",img:a("e86a4"),title:"提示框表单",desc:"表单以提示框的形式展示"},{path:"/curd/user",img:a("0b9e"),title:"增删改查",desc:"包含添加、删除、编辑、搜索等完整功能的模板"},{path:"/data-report/real-time",img:a("ff94"),title:"数据报表",desc:"支持可视化，可动态搜索的数据报表模板"},{path:"/data-report/real-time",img:a("ff94"),title:"数据报表",desc:"支持可视化，可动态搜索的数据报表模板"},{path:"/rbac/users",img:a("0135"),title:"RBAC-用户管理",desc:"基于RBAC的用户管理模板"},{path:"/rbac/roles",img:a("eda3"),title:"RBAC-角色管理",desc:"基于RBAC的角色管理模板"},{path:"/rbac/permissions",img:a("be16"),title:"RBAC-权限管理",desc:"基于RBAC的权限管理模板"}]}),s={data:function(){return{searchFormModel:{}}},computed:{pageTitle:function(){return o.title||""},searchFormConfig:function(){return o.search||{}},templates:function(){return o.templates||[]}}},n=s,r=(a("576b"),a("2877")),c=Object(r["a"])(n,i,l,!1,null,null,null),p=c.exports;t["default"]=p},"386d":function(e,t,a){"use strict";var i=a("cb7c"),l=a("83a1"),o=a("5f1b");a("214f")("search",1,(function(e,t,a,s){return[function(a){var i=e(this),l=void 0==a?void 0:a[t];return void 0!==l?l.call(a,i):new RegExp(a)[t](String(i))},function(e){var t=s(a,e,this);if(t.done)return t.value;var n=i(e),r=String(this),c=n.lastIndex;l(c,0)||(n.lastIndex=0);var p=o(n,r);return l(n.lastIndex,c)||(n.lastIndex=c),null===p?-1:p.index}]}))},"52e8":function(e,t,a){e.exports=a.p+"static/img/inline.4de602f6.jpeg"},"576b":function(e,t,a){"use strict";var i=a("dbb8"),l=a.n(i);l.a},"6d20":function(e,t,a){e.exports=a.p+"static/img/editable-table.0b63fb8c.jpeg"},"713b":function(e,t,a){e.exports=a.p+"static/img/takeover.bc807004.jpeg"},"79f4":function(e,t,a){e.exports=a.p+"static/img/sectioned.301141c3.jpeg"},"83a1":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},9478:function(e,t,a){e.exports=a.p+"static/img/conversational.3f94db48.jpeg"},be16:function(e,t,a){e.exports=a.p+"static/img/permissions.819f3ced.png"},d4b8:function(e,t,a){e.exports=a.p+"static/img/slideout.46f65be3.jpeg"},dbb8:function(e,t,a){},e86a4:function(e,t,a){e.exports=a.p+"static/img/popover.f75ecd03.jpeg"},eda3:function(e,t,a){e.exports=a.p+"static/img/roles.c60b5e5c.png"},f68e:function(e,t,a){e.exports=a.p+"static/img/multi-modal.cbc5a140.jpeg"},fe20:function(e,t,a){e.exports=a.p+"static/img/modal.c828361d.jpeg"},ff94:function(e,t,a){e.exports=a.p+"static/img/data-report.a1e89252.png"}}]);
//# sourceMappingURL=home.66e9c370.js.map