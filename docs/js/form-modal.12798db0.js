(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form-modal"],{"0b5b":function(t,e,a){"use strict";var o=a("52bb"),i=a.n(o);i.a},"52bb":function(t,e,a){},f1aa:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-form-modal"},[a("Table",{attrs:{loading:t.tableLoading,columns:t.columns,data:t.data},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.row;return[a("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleEditButtonClick(o)}}},[t._v("编辑")])]}}])}),a("div",{staticClass:"page-form-modal-pagenation"},[a("Page",{attrs:{total:t.total,"show-total":""}})],1),a("Modal",{attrs:{title:"编辑","footer-hide":""},model:{value:t.editDialogOpeon,callback:function(e){t.editDialogOpeon=e},expression:"editDialogOpeon"}},[a("FormGenerator",{ref:"FormGenerator",attrs:{fields:t.editFormFields,model:t.editModel},on:{"on-submit":t.handleSave}})],1)],1)},i=[],n=a("8e44"),l=n["a"]["form"],r=l.getPageConfig,s=l.getList,d={data:function(){return{loading:!0,tableLoading:!0,data:[],editModel:{},pageConfig:{},editDialogOpeon:!1,pageSize:10,pageNumber:1,total:0,model:{},open:!1}},computed:{options:function(){return this.pageConfig.form.options},columns:function(){return this.pageConfig.columns},editFormFields:function(){return this.pageConfig.editFormFields}},mounted:function(){var t=this,e=this.$route.params.pageId;r({pageId:e}).then(function(e){t.pageConfig=e.data,t.loading=!1,t.getTableData()})},methods:{getTableData:function(){var t=this;this.tableLoading=!0;var e=this.$route.params.pageId,a={pageSize:this.pageSize,pageNumber:this.pageNumber,pageId:e};s(a).then(function(e){var a=e.data,o=a.list,i=a.pageSize,n=a.pageNumber,l=a.total;t.data=o||[],t.pageSize=i||t.pageSize,t.pageNumber=n||t.pageNumber,t.total=l||t.total,t.tableLoading=!1})},handleEditButtonClick:function(t,e){this.editModel=t,this.editModel.index=e,this.editDialogOpeon=!0},handleSave:function(){var t=this;this.$refs.FormGenerator.submit().then(function(e){console.log("update model",e),t.open=!1,t.$Message.info("update success!")}).catch(function(t){console.log("valid",t)})}}},u=d,g=(a("0b5b"),a("2877")),p=Object(g["a"])(u,o,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=form-modal.12798db0.js.map