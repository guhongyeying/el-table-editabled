webpackJsonp([1],{"2OFK":function(e,t){},IEWJ:function(e,t){},KcPV:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("xd7I"),l={computed:{editTable:function(){return this.$refs.editTable}},data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",zip:200333},{date:"2016-05-02",name:"王小虎",zip:200333},{date:"2016-05-04",name:"王小虎",zip:200333}],validators:{date:function(e,t){var a=e.date;t(a?"":"请选择日期")},name:function(e,t){var a=e.name;t(a?"":"请填写姓名")}}}},methods:{handleCheckData:function(){console.log(this.tableData)},getNewRowData:function(){return{date:"",name:"",zip:""}},checkSelection:function(){if(this.selection&&this.selection.length)return!0;this.$message.error("请先选择数据")},handleEditRows:function(){this.checkSelection()&&this.editTable.editRows(this.selection)},handleEdit:function(e){this.$refs.elTableEditabled.editRows([e])},handleCancelRows:function(){this.checkSelection()&&(this.editTable.cancelRows(this.selection),this.$refs.table.clearSelection())},handleNewRows:function(){var e=this.getNewRowData();this.editTable.newRows([e])},handleDelRows:function(){this.checkSelection()&&this.editTable.delRows(this.selection)},handleSave:function(){var e=this;this.handleValidate(function(){e.editTable.cancelRows(e.tableData,!1),e.$refs.table.clearSelection()})},handleValidate:function(e){var t=this;this.editTable.validate(function(a){a?(t.$message.success("表格验证通过"),e()):t.$message.error("表格验证不通过")})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleSave}},[e._v("保存")]),e._v(" "),a("el-button",{on:{click:e.handleEditRows}},[e._v("编辑")]),e._v(" "),a("el-button",{on:{click:e.handleCancelRows}},[e._v("撤销")]),e._v(" "),a("el-button",{on:{click:e.handleNewRows}},[e._v("新增行")]),e._v(" "),a("el-button",{on:{click:e.handleDelRows}},[e._v("删除行")]),e._v(" "),a("el-button",{on:{click:e.handleValidate}},[e._v("验证表格正在编辑的数据")]),e._v(" "),a("el-button",{on:{click:e.handleCheckData}},[e._v("打印表格数据")])],1),e._v(" "),a("el-table-editabled",{ref:"editTable",attrs:{columns:["date","name"],validators:e.validators},model:{value:e.tableData,callback:function(t){e.tableData=t},expression:"tableData"}},[a("el-table",{ref:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"selection-change":function(t){e.selection=arguments[0]}}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-table-editabled-cell",{attrs:{row:n,prop:"date"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.rowStates,i=t.validateOwn;return[a("span",{directives:[{name:"show",rawName:"v-show",value:!l.editing,expression:"!rowStates.editing"}]},[e._v(e._s(n.date))]),e._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"rowStates.editing"}],attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期",clearable:""},on:{change:i},model:{value:n.date,callback:function(t){e.$set(n,"date",t)},expression:"row.date"}})]}}],null,!0)})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-table-editabled-cell",{attrs:{row:n,prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.rowStates,i=t.validateOwn;return[a("span",{directives:[{name:"show",rawName:"v-show",value:!l.editing,expression:"!rowStates.editing"}]},[e._v(e._s(n.name))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"rowStates.editing"}],attrs:{clearable:""},on:{input:i},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"row.name"}})]}}],null,!0)})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"zip",label:"邮编"}})],1)],1)],1)},staticRenderFns:[]},s={computed:{editTable:function(){return this.$refs.editTable}},data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",zip:200333},{date:"2016-05-02",name:"王小虎",zip:200333},{date:"2016-05-04",name:"王小虎",zip:200333}],validators:{date:function(e,t){var a=e.date;t(a?"":"请选择日期")},name:function(e,t){var a=e.name;t(a?"":"请填写姓名")}}}},methods:{handleCheckData:function(){console.log(this.tableData)},handleEditRow:function(e){this.editTable.editRows([e])},handleCanelRow:function(e){this.editTable.cancelRows([e])},handleSave:function(e){var t=this;this.editTable.validateRows([e],function(a){a&&t.editTable.cancelRows([e],!1)})},handleDelRow:function(e){this.editTable.delRows([e])}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticStyle:{"margin-bottom":"20px"},on:{click:e.handleCheckData}},[e._v("打印表格数据")]),e._v(" "),a("el-table-editabled",{ref:"editTable",attrs:{columns:["date","name"],validators:e.validators},model:{value:e.tableData,callback:function(t){e.tableData=t},expression:"tableData"}},[a("el-table",{attrs:{data:e.tableData},on:{"selection-change":function(t){e.selection=arguments[0]}}},[a("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-table-editabled-cell",{attrs:{row:n,prop:"date"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.rowStates,i=t.validateOwn;return[a("span",{directives:[{name:"show",rawName:"v-show",value:!l.editing,expression:"!rowStates.editing"}]},[e._v(e._s(n.date))]),e._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"rowStates.editing"}],attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期",clearable:""},on:{change:i},model:{value:n.date,callback:function(t){e.$set(n,"date",t)},expression:"row.date"}})]}}],null,!0)})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-table-editabled-cell",{attrs:{row:n,prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.rowStates,i=t.validateOwn;return[a("span",{directives:[{name:"show",rawName:"v-show",value:!l.editing,expression:"!rowStates.editing"}]},[e._v(e._s(n.name))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"rowStates.editing"}],attrs:{clearable:""},on:{input:i},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"row.name"}})]}}],null,!0)})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"zip",label:"邮编"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-table-editabled-cell",{attrs:{row:n},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.rowStates;return[a("div",{directives:[{name:"show",rawName:"v-show",value:!l.editing,expression:"!rowStates.editing"}]},[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleEditRow(n)}}},[e._v("\n                  编辑\n                ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){return e.handleDelRow(n)}}},[e._v("\n                  删除\n                ")])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"rowStates.editing"}]},[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleCanelRow(n)}}},[e._v("\n                  取消\n                ")]),e._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleSave(n)}}},[e._v("\n                  保存\n                ")])],1)]}}],null,!0)})]}}])})],1)],1)],1)},staticRenderFns:[]},r={computed:{editTable:function(){return this.$refs.editTable}},data:function(){var e=function(e){return{cellHovering:!1}};return{cellStates:{date:e,name:e},tableData:[{date:"2016-05-03",name:"王小虎",zip:200333},{date:"2016-05-02",name:"王小虎",zip:200333},{date:"2016-05-04",name:"王小虎",zip:200333}],validators:{date:function(e,t){var a=e.date;t(a?"":"请选择日期")},name:function(e,t){var a=e.name;t(a?"":"请填写姓名")}}}},methods:{handleCellMouse:function(e,t,a){this.editTable.store.setCellStates([e],[t.property],{cellHovering:"enter"===a})},handleCancelCell:function(e,t){this.editTable.cancelCells([e],[t])},handleSaveCell:function(e,t,a){var n=this;e(function(e){e?(n.$message.success("保存成功"),n.editTable.cancelCells([t],[a],!1)):n.$message.error("校验不通过")})},handleCheckData:function(){console.log(this.tableData)}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{staticStyle:{"margin-bottom":"20px"},on:{click:e.handleCheckData}},[e._v("打印表格数据")]),e._v(" "),a("el-table-editabled",{ref:"editTable",attrs:{columns:["date","name"],cellStates:e.cellStates,validators:e.validators,"validate-msg-tooltip":""},model:{value:e.tableData,callback:function(t){e.tableData=t},expression:"tableData"}},[a("el-table",{attrs:{data:e.tableData},on:{"cell-mouse-enter":function(t,a){return e.handleCellMouse(t,a,"enter")},"cell-mouse-leave":function(t,a){return e.handleCellMouse(t,a,"leave")},"selection-change":function(t){e.selection=arguments[0]}}},[a("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-table-editabled-cell",{attrs:{row:n,prop:"date"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.ownStates,i=t.validateOwn;return[a("div",{staticClass:"cell-edit-wrapper"},[a("div",{staticClass:"cell-content"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!l.editing,expression:"!ownStates.editing"}]},[e._v(e._s(n.date))]),e._v(" "),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"ownStates.editing"}],attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期",clearable:""},on:{change:i},model:{value:n.date,callback:function(t){e.$set(n,"date",t)},expression:"row.date"}})],1),e._v(" "),a("div",{staticClass:"cell-edit-controller"},[a("i",{directives:[{name:"show",rawName:"v-show",value:l.cellHovering&&!l.editing,expression:"ownStates.cellHovering && !ownStates.editing"}],staticClass:"el-icon-edit",on:{click:function(){return l.editing=!0}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"ownStates.editing"}]},[a("i",{staticClass:"el-icon-close",on:{click:function(t){return e.handleCancelCell(n,"date")}}}),e._v(" "),a("i",{staticClass:"el-icon-check",on:{click:function(t){return e.handleSaveCell(i,n,"date")}}})])])])]}}],null,!0)})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("el-table-editabled-cell",{attrs:{row:n,prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.ownStates,i=t.validateOwn;return[a("div",{staticClass:"cell-edit-wrapper"},[a("div",{staticClass:"cell-content"},[a("span",{directives:[{name:"show",rawName:"v-show",value:!l.editing,expression:"!ownStates.editing"}]},[e._v(e._s(n.name))]),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"ownStates.editing"}],attrs:{clearable:""},on:{input:i},model:{value:n.name,callback:function(t){e.$set(n,"name",t)},expression:"row.name"}})],1),e._v(" "),a("div",{staticClass:"cell-edit-controller"},[a("i",{directives:[{name:"show",rawName:"v-show",value:l.cellHovering&&!l.editing,expression:"ownStates.cellHovering && !ownStates.editing"}],staticClass:"el-icon-edit",on:{click:function(){return l.editing=!0}}}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:l.editing,expression:"ownStates.editing"}]},[a("i",{staticClass:"el-icon-close",on:{click:function(t){return e.handleCancelCell(n,"name")}}}),e._v(" "),a("i",{staticClass:"el-icon-check",on:{click:function(t){return e.handleSaveCell(i,n,"name")}}})])])])]}}],null,!0)})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"zip",label:"邮编"}})],1)],1)],1)},staticRenderFns:[]};var d={components:{batchEditDemo:a("C7Lr")(l,i,!1,null,null,null).exports,rowEditDemo:a("C7Lr")(s,o,!1,null,null,null).exports,cellEditDemo:a("C7Lr")(r,c,!1,function(e){a("KcPV")},null,null).exports}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{"padding-bottom":"20px"}},[a("el-link",{staticStyle:{"font-size":"22px"},attrs:{href:"https://github.com/ckang1229/el-table-editabled/tree/master#el-table-editabled",target:"_blank"}},[e._v("查看GitHub文档")]),e._v(" "),a("h3",[e._v("批量编辑")]),e._v(" "),a("el-link",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",underline:!1,href:"https://github.com/ckang1229/el-table-editabled/blob/gh-pages/src/demo/batch-edit.demo.vue",target:"_blank"}},[e._v("查看示例代码")]),e._v(" "),a("batch-edit-demo"),e._v(" "),a("h3",[e._v("单行编辑")]),e._v(" "),a("el-link",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",underline:!1,href:"https://github.com/ckang1229/el-table-editabled/blob/gh-pages/src/demo/row-edit.demo.vue",target:"_blank"}},[e._v("查看示例代码")]),e._v(" "),a("row-edit-demo"),e._v(" "),a("h3",[e._v("单元格编辑")]),e._v(" "),a("el-link",{staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary",underline:!1,href:"https://github.com/ckang1229/el-table-editabled/blob/gh-pages/src/demo/cell-edit.demo.vue",target:"_blank"}},[e._v("查看示例代码")]),e._v(" "),a("cell-edit-demo")],1)},staticRenderFns:[]};var v=a("C7Lr")(d,u,!1,function(e){a("IEWJ")},null,null).exports,h=a("4DWU"),f=a.n(h),p=(a("epTE"),a("lC5x")),b=a.n(p),w=a("rVsN"),m=a.n(w),g=a("J0Oq"),S=a.n(g),_=a("IHPB"),C=a.n(_),y=a("aA9S"),k=a.n(y),x=a("cUn4"),R=a.n(x);const D=Object.prototype.toString,E=e=>!(!O(e)&&!M(e))||($(e)?0===e.trim().length:z(e)?0===Object.keys(e).length:!!isArray(e)&&0===e.length),T=function(){return[]},N=function(){return{}},O=e=>"[object Undefined]"===D.call(e),M=e=>"[object Null]"===D.call(e),$=e=>"[object String]"===D.call(e),z=e=>"[object Object]"===D.call(e),j=n.default.observable||(e=>new n.default({data:e}));var A={name:"ElTableEditabled",provide:function(){return{editValidator:this}},model:{prop:"tableData",event:"table-data-change"},props:{tableData:{type:Array,default:T},columns:{type:Array,default:T},rowStates:{type:Function,default:N},cellStates:{type:Object,default:function(){return{default:N}}},validators:{type:Object,default:N},defaultEditing:{type:Boolean,default:!1},validateMsgTooltip:{type:Boolean,default:!1}},data:function(){return{store:new R.a}},watch:{tableData:{immediate:!0,handler:function(e,t){this.byOwnerAction||this.init(),this.byOwnerAction=!1}}},methods:{init:function(){var e=this;this.tableCacheData=new R.a;var t={};this.columns.forEach(function(a){var n=e.cellStates[a];t[a]=function(t){return j(k()({editing:e.defaultEditing,validateMsg:"",hovering:!1},n&&n(t)))}}),this.store=new class{constructor(e){Object.assign(this,{columns:[],rowStatesCreator:()=>({}),cellStatesCreator:{}},e),this.states=new Map,this.addStates(this.tableData,e.onInitLoop)}addStates(e,t){const{columns:a,rowStatesCreator:n,cellStatesCreator:l}=this;e.forEach(e=>{let i={_states:{}};n&&(i._states=n(e)),E(l)||a.forEach(t=>{const a=l[t]?l[t](e):{};E(a)||(i[t]=a)}),t&&t(e),this.states.set(e,i)})}getStates(e){return this.states.get(e)}setRowsStates(e,t){e.forEach(e=>Object.assign(this.states.get(e)._states,t))}setCellStates(e,t,a){e.forEach(e=>{const n=this.states.get(e);t.forEach(e=>{n[e]&&Object.assign(n[e],a)})})}delStates(e){e.forEach(e=>{this.states.delete(e)})}}({tableData:this.tableData,columns:this.columns,rowStatesCreator:function(t){return j(k()({editing:e.defaultEditing},e.rowStates(t)))},cellStatesCreator:t,onInitLoop:function(t){e.updateTableCache([t],"add")}})},editRows:function(e){this.store.setRowsStates(e,{editing:!0})},updateTableCache:function(e,t){var a=this.tableCacheData;e.forEach(function(e){"add"===t&&!a.has(e)||"update"===t?a.set(e,(e=>JSON.parse(JSON.stringify(e)))(e)):"delete"===t&&a.delete(e)})},cancelRows:function(e){var t=this,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.tableCacheData,l=this.store;e.forEach(function(e){var i=n.get(e);a&&i&&k()(e,i),t.updateTableCache([e],"update"),l.setRowsStates([e],{editing:!1}),l.setCellStates([e],t.columns,{editing:!1,validateMsg:""})})},cancelCells:function(e,t){var a=this,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=this.tableCacheData,i=this.store;e.forEach(function(e){var s=l.get(e);t.forEach(function(t){n&&s&&s[t]&&(e[t]=s[t]),a.updateTableCache([e],"update"),i.setCellStates([e],[t],{editing:!1,validateMsg:""})})})},editColumns:function(e,t){this.store.setCellStates(e,t,{editing:!0})},delRows:function(e){this.byOwnerAction=!0,this.updateTableCache(e,"delete"),this.$emit("table-data-change",this.tableData.filter(function(t){return!e.includes(t)})),this.store.delStates(e)},newRows:function(e){var t;this.byOwnerAction=!0,this.updateTableCache(e,"add"),this.store.addStates(e),(t=this.tableData).splice.apply(t,[0,0].concat(C()(e))),this.editRows(e)},insertRowsBeforeRow:function(e,t){this.insertRows(e,t,"before")},insertRowsAfterRow:function(e,t){this.insertRows(e,t,"after")},insertRows:function(e,t,a){var n=this;this.byOwnerAction=!0,this.store.addStates(t),this.updateTableCache(t,"add"),this.tableData.find(function(l,i){var s;if(e===l)return(s=n.tableData).splice.apply(s,["before"===a?i:i+1,0].concat(C()(t))),!0}),this.editRows(t)},validateRows:function(e,t){var a=this;return S()(b.a.mark(function n(){var l,i;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return l=[],i=void 0,e.forEach(function(e){var t=a.store.getStates(e),n=t._states;a.columns.forEach(function(i){var s=t?t[i]:{};(s.editing||n.editing)&&a.validators[i]&&l.push(new m.a(function(l,o){a.validateCell(i,e,n,t,s).then(function(e){e?o():l()})}))})}),n.prev=3,n.next=6,m.a.all(l);case 6:i=!0,n.next=12;break;case 9:n.prev=9,n.t0=n.catch(3),i=!1;case 12:t(i);case 13:case"end":return n.stop()}},n,a,[[3,9]])}))()},validate:function(e){this.validateRows(this.tableData,e)},validateCell:function(e,t,a,n,l){var i=this.validators[e];return new m.a(function(e){i(t,function(t){(l.editing||a.editing)&&(l.validateMsg=t,e(t))},a,n)})}}},V={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"el-table-editabled"},[this._t("default")],2)},staticRenderFns:[]},H=a("C7Lr")(A,V,!1,null,null,null).exports,F={name:"ElTableEditabledCell",inject:["editValidator"],props:{prop:String,row:null},computed:{rowStates:function(){return this.cellStates._states},cellStates:function(){return this.editValidator.store.getStates(this.row)},ownStates:function(){return this.cellStates&&this.prop?this.cellStates[this.prop]:{}}},methods:{validateOwn:function(e){this.editValidator.validateCell(this.prop,this.row,this.rowStates,this.cellStates,this.ownStates).then(function(t){var a=void 0;a=!t,"function"==typeof e&&e(a)})}}},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-table-editabled-cell",class:{"is-validate-error":!!e.ownStates.validateMsg},on:{mouseenter:function(){return e.ownStates.hovering=!0},mouseleave:function(){return e.ownStates.hovering=!1}}},[a("el-tooltip",{attrs:{disabled:!e.editValidator.validateMsgTooltip,value:!!e.ownStates.validateMsg&&e.ownStates.hovering,"popper-class":"el-table-editabled-cell-validate-msg",effect:"light",content:e.ownStates.validateMsg,placement:"top-start",manual:""}},[a("div",{staticClass:"el-table-editabled-cell__content"},[e._t("default",null,{cellStates:e.cellStates,rowStates:e.rowStates,ownStates:e.ownStates,validateOwn:e.validateOwn})],2)]),e._v(" "),e.editValidator.validateMsgTooltip?e._e():a("div",{directives:[{name:"show",rawName:"v-show",value:!!e.ownStates.validateMsg,expression:"!!ownStates.validateMsg"}],staticClass:"el-table-editabled-cell__error-msg"},[e._v("\n    "+e._s(e.ownStates.validateMsg)+"\n  ")])],1)},staticRenderFns:[]};var I=a("C7Lr")(F,L,!1,function(e){a("2OFK")},null,null).exports;n.default.use(f.a,{size:"small"}),n.default.use(function(e){e.component(H.name,H),e.component(I.name,I)}),n.default.config.productionTip=!1,new n.default({el:"#app",components:{App:v},template:"<App/>"})},epTE:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.63ee473e08d7b685649b.js.map