(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form-index"],{"06eb":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-form"},[i("ul",{staticClass:"page-form-navs"},[i("li",[i("router-link",{attrs:{to:"/form-simple"}},[i("img",{attrs:{src:a("d65f"),alt:"simple"}}),i("span",[e._v("simple")])])],1),i("li",[i("router-link",{attrs:{to:"/form-modal"}},[i("img",{attrs:{src:a("abfe"),alt:"modal"}}),i("span",[e._v("modal")])])],1),i("li",[i("router-link",{attrs:{to:"/form-multi-modal"}},[i("img",{attrs:{src:a("421d"),alt:"multi-modal"}}),i("span",[e._v("multi-modal")])])],1),i("li",[i("router-link",{attrs:{to:"/form-slideout"}},[i("img",{attrs:{src:a("fdf2"),alt:"slideout"}}),i("span",[e._v("slideout")])])],1),i("li",[i("router-link",{attrs:{to:"/form-inline-table"}},[i("img",{attrs:{src:a("63e5"),alt:"inline-table"}}),i("span",[e._v("inline-table")])])],1),i("li",[i("router-link",{attrs:{to:"/form-editable-table"}},[i("img",{attrs:{src:a("6afa"),alt:"editable-table"}}),i("span",[e._v("editable-table")])])],1),i("li",[i("router-link",{attrs:{to:"/form-takeover"}},[i("img",{attrs:{src:a("6242"),alt:"takeover"}}),i("span",[e._v("takeover")])])],1),i("li",[i("router-link",{attrs:{to:"/form-wizard"}},[i("img",{attrs:{src:a("0713"),alt:"wizard"}}),i("span",[e._v("wizard")])])],1),i("li",[i("router-link",{attrs:{to:"/form-sectioned"}},[i("img",{attrs:{src:a("d65f"),alt:"sectioned"}}),i("span",[e._v("sectioned")])])],1),i("li",[i("router-link",{attrs:{to:"/form-conversational"}},[i("img",{attrs:{src:a("3339"),alt:"conversational"}}),i("span",[e._v("conversational")])])],1)])])},n=[],o={data:function(){return{}},methods:{}},s=o,r=(a("da72"),a("2877")),l=Object(r["a"])(s,i,n,!1,null,null,null),d=l.exports;t["default"]=d},"0713":function(e,t,a){e.exports=a.p+"static/img/wizard.c611ad6a.jpeg"},3339:function(e,t,a){e.exports=a.p+"static/img/conversational.3f94db48.jpeg"},3378:function(e,t,a){},"405c":function(e,t,a){"use strict";var i=a("3378"),n=a.n(i);n.a},"421d":function(e,t,a){e.exports=a.p+"static/img/multi-modal.cbc5a140.jpeg"},6242:function(e,t,a){e.exports=a.p+"static/img/takeover.bc807004.jpeg"},"63e5":function(e,t,a){e.exports=a.p+"static/img/inline.4de602f6.jpeg"},"6afa":function(e,t,a){e.exports=a.p+"static/img/editable-table.0b63fb8c.jpeg"},8187:function(e,t,a){"use strict";var i=a("cdaf"),n=a.n(i);n.a},"9b9d":function(e,t,a){"use strict";var i=a("9f30"),n=a.n(i);n.a},"9f30":function(e,t,a){},"9f3a":function(e,t,a){},a567:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-home"},[a("h3",[e._v("当前登录用户角色、权限信息如下：")]),a("pre",[e._v(e._s(e.homeData))])])},n=[],o=a("8e44"),s=o["a"].rbac.getRbacUserInfo,r={data:function(){return{current:0,data:{}}},computed:{homeData:function(){return JSON.stringify(this.data,null,4)}},mounted:function(){var e=this;s().then(function(t){var a=t.errno,i=t.data;0===+a&&(e.data=i)})}},l=r,d=a("2877"),u=Object(d["a"])(l,i,n,!1,null,null,null);t["default"]=u.exports},abfe:function(e,t,a){e.exports=a.p+"static/img/modal.c828361d.jpeg"},c410:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("div",{staticClass:"page-rbac-role-loading"},[a("Spin",{staticClass:"page-rbac-role-loading-spin",attrs:{size:"large"}})],1):a("div",{staticClass:"page-rbac-role"},[a("h3",{staticClass:"page-rbac-role-header"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("创建角色")])],1),a("Table",{staticClass:"page-rbac-role-table",attrs:{loading:e.tableLoading,columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,function(t){return{key:t.slot,fn:function(i){var n=i.row,o=i.index;return[a("Form",{key:t.slot,attrs:{model:n}},e._l(t.formFields,function(t,i){return a("FieldGenerator",{key:i,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,n,o)}}})}),1)]}}})],null,!0)}),a("div",{staticClass:"page-rbac-role-pagenation"},[a("Page",{attrs:{total:e.total,"show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":function(t){return e.handlePageNumberChange(t)},"on-page-size-change":function(t){return e.handlePageSizeChange(t)}}})],1),a("Modal",{attrs:{title:"编辑","footer-hide":""},model:{value:e.editDialogOpeon,callback:function(t){e.editDialogOpeon=t},expression:"editDialogOpeon"}},[e.editDialogOpeon?a("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.editFormFields,model:e.editModel},on:{"on-submit":e.handleSave}}):e._e()],1),a("Modal",{attrs:{title:"角色权限","footer-hide":""},model:{value:e.editPermissionDialogOpeon,callback:function(t){e.editPermissionDialogOpeon=t},expression:"editPermissionDialogOpeon"}},[e.editPermissionDialogOpeon?a("FormGenerator",{ref:"FormPermissionGenerator",attrs:{fields:e.editPermissionFormFields,model:e.editModel},on:{"on-submit":e.handlePermissionSave}}):e._e()],1)],1)},n=[],o=(a("6b54"),a("7f7f"),a("8e44")),s=o["a"].rbac,r=s.getRolePageConfig,l=s.getRoleList,d=s.roleAdd,u=s.roleEdit,c=s.roleDel,g=s.getRolePermission,f=s.updateRolePermission,p={data:function(){return{loading:!0,tableLoading:!0,data:[],editModel:{},pageConfig:{},editDialogOpeon:!1,editPermissionDialogOpeon:!1,pageSize:10,pageNumber:1,total:0}},computed:{columns:function(){return this.pageConfig.columns},editFormFields:function(){return this.pageConfig.editFormFields},editPermissionFormFields:function(){return this.pageConfig.editPermissionFormFields}},mounted:function(){var e=this,t=this.$route.params.pageId;r({pageId:t}).then(function(t){e.pageConfig=t.data,e.loading=!1,e.getTableData()})},methods:{getTableData:function(){var e=this;this.tableLoading=!0;var t=this.$route.params.pageId,a={pageSize:this.pageSize,pageNumber:this.pageNumber,pageId:t};l(a).then(function(t){var a=t.data,i=a.list,n=a.pageSize,o=a.pageNumber,s=a.total;e.data=i||[],e.pageSize=n||e.pageSize,e.pageNumber=o||e.pageNumber,e.total=s||e.total,e.tableLoading=!1})},handlePageNumberChange:function(e){this.pageNumber=e,this.getTableData()},handlePageSizeChange:function(e){this.pageSize=e,this.getTableData()},handleCreateButtonClick:function(){this.editModel={type:"add",status:"1"},this.editDialogOpeon=!0},handleButtonEvent:function(e,t,a){this[e.name](t,a)},editButtonClick:function(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpeon=!0},deleteButtonClick:function(e){this.deleteRequest(e)},permissionButtonClick:function(e,t){var a=this;g({role_id:e.id}).then(function(i){var n=i.data,o=i.errno;if(0===+o){var s=n.permissions;a.editModel=e,a.$set(a.editModel,"permissions",s.map(function(e){return e.id})),a.editModel.index=t,a.editPermissionDialogOpeon=!0}}).catch(function(e){console.log(e)})},toBlackButtonClick:function(e){this.toBlackRequest(e)},toWhiteButtonClick:function(e){this.toWhiteRequest(e)},handleSave:function(){var e=this;this.$refs.FormGenerator.submit().then(function(){if("add"===e.editModel.type)return e.addRequest(e.editModel),void e.getTableData();e.editRequest(e.editModel)}).catch(function(e){console.log(e)})},addRequest:function(e){var t=this;d(e).then(function(e){0===+e.errno?(t.$Message.info("Add Success!"),t.editDialogOpeon=!1,t.getTableData()):t.$Message.error("Add Failed!")})},editRequest:function(e){var t=this;u(e).then(function(e){0===+e.errno?(t.$Message.info("Edit Success!"),t.editDialogOpeon=!1,t.getTableData()):t.$Message.error("Edit Failed!")})},deleteRequest:function(e){var t=this;c(e).then(function(e){0===+e.errno?(t.$Message.info("Delete Success!"),t.getTableData()):t.$Message.error("Delete Failed!")})},handlePermissionSave:function(){var e=this;this.$refs.FormPermissionGenerator.submit().then(function(){f({role_id:e.editModel.id,permission_ids:e.editModel.permissions.join(",")}).then(function(t){0===+t.errno?(e.$Message.info("Update Success!"),e.editPermissionDialogOpeon=!1):e.$Message.error("Update Failed!")}).catch(function(t){e.$Message.error("Update Failed!".concat(t.toString()))})}).catch(function(e){console.log(e)})}}},m=p,h=(a("9b9d"),a("2877")),b=Object(h["a"])(m,i,n,!1,null,null,null);t["default"]=b.exports},cdaf:function(e,t,a){},cea6:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("div",{staticClass:"page-rbac-permission-loading"},[a("Spin",{staticClass:"page-rbac-permission-loading-spin",attrs:{size:"large"}})],1):a("div",{staticClass:"page-rbac-permission"},[a("h3",{staticClass:"page-rbac-permission-header"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("新增权限")])],1),a("Table",{staticClass:"page-rbac-permission-table",attrs:{loading:e.tableLoading,columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,function(t){return{key:t.slot,fn:function(i){var n=i.row,o=i.index;return[a("Form",{key:t.slot,attrs:{model:n}},e._l(t.formFields,function(t,i){return a("FieldGenerator",{key:i,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,n,o)}}})}),1)]}}})],null,!0)}),a("div",{staticClass:"page-rbac-permission-pagenation"},[a("Page",{attrs:{total:e.total,"show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":function(t){return e.handlePageNumberChange(t)},"on-page-size-change":function(t){return e.handlePageSizeChange(t)}}})],1),a("Modal",{attrs:{title:"编辑","footer-hide":""},model:{value:e.editDialogOpeon,callback:function(t){e.editDialogOpeon=t},expression:"editDialogOpeon"}},[e.editDialogOpeon?a("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.editFormFields,model:e.editModel},on:{"on-submit":e.handleSave}}):e._e()],1)],1)},n=[],o=(a("7f7f"),a("8e44")),s=o["a"].rbac,r=s.getPermissionPageConfig,l=s.getPermissionList,d=s.permissionAdd,u=s.permissionEdit,c=s.permissionDel,g={data:function(){return{loading:!0,tableLoading:!0,data:[],editModel:{},pageConfig:{},editDialogOpeon:!1,pageSize:10,pageNumber:1,total:0}},computed:{columns:function(){return this.pageConfig.columns},editFormFields:function(){return this.pageConfig.editFormFields}},mounted:function(){var e=this,t=this.$route.params.pageId;r({pageId:t}).then(function(t){e.pageConfig=t.data,e.loading=!1,e.getTableData()})},methods:{getTableData:function(){var e=this;this.tableLoading=!0;var t=this.$route.params.pageId,a={pageSize:this.pageSize,pageNumber:this.pageNumber,pageId:t};l(a).then(function(t){var a=t.data,i=a.list,n=a.pageSize,o=a.pageNumber,s=a.total;e.data=i||[],e.pageSize=n||e.pageSize,e.pageNumber=o||e.pageNumber,e.total=s||e.total,e.tableLoading=!1})},handlePageNumberChange:function(e){this.pageNumber=e,this.getTableData()},handlePageSizeChange:function(e){this.pageSize=e,this.getTableData()},handleCreateButtonClick:function(){this.editModel={type:"add",status:"1"},this.editDialogOpeon=!0},handleButtonEvent:function(e,t,a){this[e.name](t,a)},editButtonClick:function(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpeon=!0},deleteButtonClick:function(e){this.deleteRequest(e)},toBlackButtonClick:function(e){this.toBlackRequest(e)},toWhiteButtonClick:function(e){this.toWhiteRequest(e)},handleSave:function(){var e=this;this.$refs.FormGenerator.submit().then(function(){if("add"===e.editModel.type)return e.editModel.type="",e.addRequest(e.editModel),void e.getTableData();e.editRequest(e.editModel)}).catch(function(e){console.log(e)})},addRequest:function(e){var t=this;d(e).then(function(e){0===+e.errno?(t.$Message.info("Add Success!"),t.editDialogOpeon=!1,t.getTableData()):t.$Message.error("Add Failed!")})},editRequest:function(e){var t=this;u(e).then(function(e){0===+e.errno?(t.$Message.info("Edit Success!"),t.editDialogOpeon=!1,t.getTableData()):t.$Message.error("Edit Failed!")})},deleteRequest:function(e){var t=this;c(e).then(function(e){0===+e.errno?(t.$Message.info("Delete Success!"),t.getTableData()):t.$Message.error("Delete Failed!")})}}},f=g,p=(a("8187"),a("2877")),m=Object(p["a"])(f,i,n,!1,null,null,null);t["default"]=m.exports},d65f:function(e,t,a){e.exports=a.p+"static/img/sectioned.301141c3.jpeg"},da72:function(e,t,a){"use strict";var i=a("9f3a"),n=a.n(i);n.a},dc2b:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("div",{staticClass:"page-rbac-user-loading"},[a("Spin",{staticClass:"page-rbac-user-loading-spin",attrs:{size:"large"}})],1):a("div",{staticClass:"page-rbac-user"},[a("h3",{staticClass:"page-rbac-user-header"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleCreateButtonClick}},[e._v("创建用户")])],1),a("Table",{staticClass:"page-rbac-user-table",attrs:{loading:e.tableLoading,columns:e.columns,data:e.data},scopedSlots:e._u([e._l(e.columns,function(t){return{key:t.slot,fn:function(i){var n=i.row,o=i.index;return[a("Form",{key:t.slot,attrs:{model:n}},e._l(t.formFields,function(t,i){return a("FieldGenerator",{key:i,attrs:{field:t},on:{"on-button-event":function(t){return e.handleButtonEvent(t,n,o)}}})}),1)]}}})],null,!0)}),a("div",{staticClass:"page-rbac-user-pagenation"},[a("Page",{attrs:{total:e.total,"show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":function(t){return e.handlePageNumberChange(t)},"on-page-size-change":function(t){return e.handlePageSizeChange(t)}}})],1),a("Modal",{attrs:{title:"用户","footer-hide":""},model:{value:e.editDialogOpeon,callback:function(t){e.editDialogOpeon=t},expression:"editDialogOpeon"}},[e.editDialogOpeon?a("FormGenerator",{ref:"FormGenerator",attrs:{fields:e.editFormFields,model:e.editModel},on:{"on-submit":e.handleSave}}):e._e()],1),a("Modal",{attrs:{title:"用户角色","footer-hide":""},model:{value:e.editRoleDialogOpeon,callback:function(t){e.editRoleDialogOpeon=t},expression:"editRoleDialogOpeon"}},[e.editRoleDialogOpeon?a("FormGenerator",{ref:"FormRoleGenerator",attrs:{fields:e.editRoleFormFields,model:e.editModel},on:{"on-submit":e.handleRoleSave}}):e._e()],1)],1)},n=[],o=(a("6b54"),a("7f7f"),a("8e44")),s=o["a"].rbac,r=s.getUserPageConfig,l=s.getUserList,d=s.userAdd,u=s.userEdit,c=s.userDel,g=s.getUserRolePermission,f=s.updateUserRole,p={data:function(){return{loading:!0,tableLoading:!0,data:[],editModel:{},pageConfig:{},editDialogOpeon:!1,editRoleDialogOpeon:!1,pageSize:10,pageNumber:1,total:0}},computed:{columns:function(){return this.pageConfig.columns},editFormFields:function(){return this.pageConfig.editFormFields},editRoleFormFields:function(){return this.pageConfig.editRoleFormFields}},mounted:function(){var e=this,t=this.$route.params.pageId;r({pageId:t}).then(function(t){e.pageConfig=t.data,e.loading=!1,e.getTableData()})},methods:{getTableData:function(){var e=this;this.tableLoading=!0;var t=this.$route.params.pageId,a={pageSize:this.pageSize,pageNumber:this.pageNumber,pageId:t};l(a).then(function(t){var a=t.data,i=a.list,n=a.pageSize,o=a.pageNumber,s=a.total;e.data=i||[],e.pageSize=n||e.pageSize,e.pageNumber=o||e.pageNumber,e.total=s||e.total,e.tableLoading=!1})},handlePageNumberChange:function(e){this.pageNumber=e,this.getTableData()},handlePageSizeChange:function(e){this.pageSize=e,this.getTableData()},handleCreateButtonClick:function(){this.editModel={type:"add",status:"1"},this.editDialogOpeon=!0},handleButtonEvent:function(e,t,a){this[e.name](t,a)},editButtonClick:function(e,t){this.editModel=e,this.editModel.index=t,this.editDialogOpeon=!0},roleButtonClick:function(e,t){var a=this,i=e.username;g({username:i}).then(function(i){var n=i.data,o=i.errno;0===+o&&(a.editModel=e,a.$set(a.editModel,"roles",n.roles.map(function(e){return parseInt(e.id,10)})),a.editModel.index=t,a.editRoleDialogOpeon=!0)}).catch(function(e){console.log(e)})},deleteButtonClick:function(e){this.deleteRequest(e)},toBlackButtonClick:function(e){this.toBlackRequest(e)},toWhiteButtonClick:function(e){this.toWhiteRequest(e)},handleSave:function(){var e=this;this.$refs.FormGenerator.submit().then(function(){if("add"===e.editModel.type)return e.addRequest(e.editModel),void e.getTableData();e.editRequest(e.editModel)}).catch(function(e){console.log(e)})},addRequest:function(e){var t=this;d(e).then(function(e){0===+e.errno?(t.$Message.info("Add Success!"),t.editDialogOpeon=!1,t.getTableData()):t.$Message.error("Add Failed!")})},editRequest:function(e){var t=this;u(e).then(function(e){0===+e.errno?(t.$Message.info("Edit Success!"),t.editDialogOpeon=!1,t.getTableData()):t.$Message.error("Edit Failed!")})},deleteRequest:function(e){var t=this;c(e).then(function(e){0===+e.errno?(t.$Message.info("Delete Success!"),t.getTableData()):t.$Message.error("Delete Failed!")})},handleRoleSave:function(){var e=this;this.$refs.FormRoleGenerator.submit().then(function(){var t=e.editModel.roles;f({username:e.editModel.username,role_id:t.map(function(e){return e.id}).join(",")}).then(function(t){0===+t.errno?(e.$Message.info("Update Success!"),e.editRoleDialogOpeon=!1):e.$Message.error("Update Failed!")}).catch(function(t){e.$Message.error("Update Failed!".concat(t.toString()))})}).catch(function(e){console.log(e)})}}},m=p,h=(a("405c"),a("2877")),b=Object(h["a"])(m,i,n,!1,null,null,null);t["default"]=b.exports},fdf2:function(e,t,a){e.exports=a.p+"static/img/slideout.46f65be3.jpeg"}}]);
//# sourceMappingURL=form-index.d0f158bb.js.map