(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[118],{RWXd:function(e,t,n){"use strict";n.r(t);n("IzEo");var a,o,r,i=n("bx4M"),l=(n("qVdP"),n("jsC+")),s=(n("lUTK"),n("BvKs")),c=(n("Awhp"),n("KrTs")),u=(n("Pwec"),n("CtXQ")),d=(n("5NDa"),n("5rEg")),h=(n("T2oS"),n("W9HT")),p=(n("+L6B"),n("2/Rp")),f=(n("miYZ"),n("tsqr")),m=(n("2qtc"),n("kLXV")),k=n("qIgq"),w=n.n(k),g=n("d6i3"),b=n.n(g),E=n("1l/V"),S=n.n(E),v=n("p0pE"),y=n.n(v),C=n("2Taf"),x=n.n(C),O=n("vZ4D"),T=n.n(O),W=n("l4Ni"),I=n.n(W),V=n("ujKo"),_=n.n(V),F=n("MhPg"),j=n.n(F),B=(n("g9YV"),n("wCAj")),D=n("q1tI"),A=n.n(D),N=n("MuoO"),P=n("34ay"),q=n("zHco"),K=n("FkSf"),M=n("6NK7"),z=n("rFvL"),L=n("dVw7"),R=n("l13n"),X=n("00B6"),H=n("Ntaw"),J=B["a"].Column,U=function(e){var t=e.worknote;return A.a.createElement("div",null,A.a.createElement("p",null,"\u5de5\u4f5c\u5185\u5bb9\uff1a",t.content))},Y=(a=Object(N["connect"])(function(e){return{loading:e.loading.effects["worknotes/worknotes/fetch"],list:e["worknotes/worknotes"].data.list,pagination:e["worknotes/worknotes"].data.pagination}}),a((r=function(e){function t(){var e,n;x()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=I()(this,(e=_()(t)).call.apply(e,[this].concat(o))),n.state={worknote:null,isWorknotesAdmin:!1,schoolsOptions:[],schoolsSelectOptions:[],categoriesOptions:[],categoriesSelectOptions:[],ordering:"",filters:null,filterVisible:!1,filtered:!1,searchText:"",modalTitle:"",modalContent:null,modalFooter:null,submitButtonText:"",modalVisible:!1,submitting:!1},n.fetchSchools=function(){var e=n.props.dispatch;e({type:"schools/schools/fetchPublic",payload:{},callback:n.fetchSchoolsCallback})},n.fetchSchoolsCallback=function(e){n.createSchoolsOptions(e)},n.fetchCategories=function(){var e=n.props.dispatch,t=Object(P["b"])();e({type:"worknotes/categories/fetchForSelectedSchools",payload:{school:t["worknotes_app_schools"].map(function(e){return e["id"]})},callback:n.fetchCategoriesCallback})},n.fetchCategoriesCallback=function(e){console.warn("categories: ",e),n.setState({categoriesOptions:M["a"].transferObjectsToFilterOptions(e)}),n.setState({categoriesSelectOptions:M["a"].transferObjectsToSelectOptionsWithoutID(e)})},n.createSchoolsOptions=function(e){n.setState({schoolsOptions:M["a"].transferObjectsToFilterOptions(e)}),n.setState({schoolsSelectOptions:M["a"].transferObjectsToSelectOptionsWithoutID(e)})},n.fetchWorknotes=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=n.props,a=t.dispatch,o=t.pagination,r=n.state,i=r.ordering,l=r.filters,s=r.searchText;a(e?{type:"worknotes/worknotes/fetch",payload:e}:{type:"worknotes/worknotes/fetch",payload:y()({search:s,page:o?o.current:1,ordering:i},l)})},n.onInputChange=function(e){n.setState({searchText:e.target.value})},n.onWorknoteSearch=S()(b.a.mark(function e(){var t,a,o,r;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=n.state,a=t.ordering,o=t.filters,r=t.searchText,n.fetchWorknotes(y()({search:r,page:1,ordering:a},o)),n.setState({filterVisible:!1,filtered:!!r});case 3:case"end":return e.stop()}},e)})),n.handleTableChange=function(){var e=S()(b.a.mark(function e(t,a,o){var r,i;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=n.state.searchText,i=M["a"].transferSorterToOrdering(o),n.setState({ordering:i,filters:a}),n.fetchWorknotes(y()({search:r,page:t.current,ordering:i},a));case 4:case"end":return e.stop()}},e)}));return function(t,n,a){return e.apply(this,arguments)}}(),n.editWorknote=S()(b.a.mark(function e(){var t,a,o,r,i,l,s,c,u,d=arguments;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=d.length>0&&void 0!==d[0]?d[0]:null,a=n.state,o=a.schoolsSelectOptions,r=a.categoriesSelectOptions,i=a.submitting,l=null===t?["\u521b\u5efa\u5de5\u4f5c\u8bb0\u5f55","\u521b\u5efa"]:["\u7f16\u8f91\u5de5\u4f5c\u8bb0\u5f55","\u7f16\u8f91"],s=w()(l,2),c=s[0],u=s[1],e.next=5,n.setState({worknote:null!==t?y()({},t,{person:"".concat(t["person_detail"]["name"],"(").concat(t.person,")")}):t});case 5:return e.next=7,n.setState({modalTitle:c,modalContent:A.a.createElement(z["a"],{isWorknotesAdmin:n.state.isWorknotesAdmin,worknote:n.state.worknote,schools:o,categories:r,title:c,submitButtonText:u,onSubmit:n.onSubmit,submitting:i}),submitButtonText:u,modalVisible:!0});case 7:case"end":return e.stop()}},e)})),n.deleteWorknote=function(){var e=S()(b.a.mark(function e(t){var a,o;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=n.props.dispatch,o="".concat(t["person_detail"]["name"],"(").concat(t.person,")"),m["a"].confirm({title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664 ".concat(o," \u7684 ").concat(t.title," \u4efb\u52a1\u5417?"),content:"\u5220\u9664\u540e\u5c06\u4e0d\u53ef\u6062\u590d",onOk:function(){var e=S()(b.a.mark(function e(){return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a({type:"worknotes/worknotes/remove",payload:{worknote:t},callback:function(){return n.fetchWorknotes()}}),f["a"].success("\u6210\u529f\u5220\u9664 ".concat(o," \u7684 ").concat(t.title," \u4efb\u52a1"));case 2:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}(),onCancel:function(){}});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.showTask=function(e){n.setState({modalTitle:"",modalContent:A.a.createElement(L["a"],{taskId:e}),modalFooter:[A.a.createElement(p["a"],{key:"ok",size:"default",onClick:n.handleCancel},"\u786e\u5b9a")],submitButtonText:"",modalVisible:!0})},n.showMeeting=function(e){n.setState({modalTitle:"",modalContent:A.a.createElement(R["a"],{meetingId:e}),modalFooter:[A.a.createElement(p["a"],{key:"ok",size:"default",onClick:n.handleCancel},"\u786e\u5b9a")],submitButtonText:"",modalVisible:!0})},n.handleCancel=S()(b.a.mark(function e(){return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.setState({modalVisible:!1,modalContent:null,modalFooter:null});case 2:case"end":return e.stop()}},e)})),n.onSubmit=function(e){var t=n.props.dispatch,a=n.state.worknote,o=/\((\w{4,11})\)/.exec(e["person"]),r=y()({},e,{person:o[1]});try{n.setState({submitting:!0}),a&&a["id"]?t({type:"worknotes/worknotes/update",payload:{worknote:r},callback:function(){return n.fetchWorknotes()}}):t({type:"worknotes/worknotes/add",payload:{worknote:r},callback:function(){return n.fetchWorknotes()}})}catch(e){console.log(e)}finally{n.setState({submitting:!1})}n.setState({modalVisible:!1,modalContent:null,modalFooter:null})},n}return j()(t,e),T()(t,[{key:"componentDidMount",value:function(){var e=Object(P["b"])(),t=Object(P["c"])();if(this.fetchWorknotes(),this.fetchCategories(),Object(P["f"])())this.fetchSchools();else if(t.includes("worknoteUser")){var n=e["worknotes_admin_schools"],a=!0,o=!1,r=void 0;try{for(var i,l=function(){var e=i.value;n.findIndex(function(t){return t.id===e.id})<0&&n.push(e)},s=e["worknotes_app_schools"][Symbol.iterator]();!(a=(i=s.next()).done);a=!0)l()}catch(e){o=!0,r=e}finally{try{a||null==s.return||s.return()}finally{if(o)throw r}}this.createSchoolsOptions(n)}this.setState({isWorknotesAdmin:e["worknotes_admin_schools"]&&e["worknotes_admin_schools"].length>0||Object(P["f"])()})}},{key:"render",value:function(){var e=this,t=this.props,n=t.list,a=t.pagination,o=t.loading,r=this.state,f=(r.schoolsOptions,r.categoriesOptions),k=r.filtered,w=r.filterVisible,g=r.modalTitle,b=r.modalVisible,E=r.modalContent,S=r.modalFooter;return A.a.createElement(q["a"],{title:"\u5de5\u4f5c\u8bb0\u5f55\u5217\u8868"},A.a.createElement(i["a"],{bordered:!1},a&&A.a.createElement(K["a"],null,a.total),A.a.createElement(m["a"],{title:g,visible:b,onCancel:this.handleCancel,footer:S},E||A.a.createElement(h["a"],{spinning:o})),A.a.createElement(p["a"],{type:"primary",onClick:function(){return e.editWorknote()}},"\u65b0\u5efa\u5de5\u4f5c\u8bb0\u5f55"),A.a.createElement(B["a"],{dataSource:n,loading:o,rowKey:"id",width:1400,scroll:{x:1400},expandedRowRender:function(e){return A.a.createElement(U,{worknote:e})},onChange:this.handleTableChange,pagination:a},A.a.createElement(J,{title:"\u5de5\u4f5c\u4eba\u5458",key:"person",render:function(e){return e["person_detail"]&&e["person_detail"]["name"]},filterDropdown:A.a.createElement("div",{className:"table-input-search"},A.a.createElement(d["a"],{placeholder:"\u59d3\u540d/\u5b66\u5de5\u53f7",value:this.state.searchText,onChange:this.onInputChange,onPressEnter:this.onWorknoteSearch}),A.a.createElement(p["a"],{type:"primary",onClick:this.onWorknoteSearch},"\u68c0\u7d22")),filterIcon:A.a.createElement(u["a"],{type:"search",style:{color:k?"#108ee9":"#aaa"}}),filterDropdownVisible:w,onFilterDropdownVisibleChange:function(t){e.setState({filterVisible:t})}}),A.a.createElement(J,{title:"\u6807\u9898",dataIndex:"title",render:function(e,t){return t["title"]||"\u65e0"}}),A.a.createElement(J,{title:"\u7c7b\u578b",dataIndex:"category",render:function(e,t){return t["category_title"]||"\u65e0"},filters:f}),A.a.createElement(J,{title:"\u5de5\u4f5c\u65f6\u957f",dataIndex:"hours",sorter:!0,render:function(e,t){return"".concat(t["hours"]," \u5c0f\u65f6")}}),A.a.createElement(J,{title:"\u521b\u5efa\u65f6\u95f4",sorter:!0,dataIndex:"created"}),A.a.createElement(J,{title:"\u6700\u540e\u4fee\u6539\u65f6\u95f4",sorter:!0,dataIndex:"modified"}),A.a.createElement(J,{title:"\u521b\u5efa\u4eba",key:"creator",width:200,render:function(e){return e["creator_detail"]&&e["creator_detail"]["name"]}}),A.a.createElement(J,{title:"\u76f8\u5173\u5de5\u4f5c\u4efb\u52a1",sorter:!0,render:function(t){return t.task?A.a.createElement("a",{onClick:function(){return e.showTask(t.task)}},X["a"].assembleIcon("FaExternalLink",13,H["blue500"])," \u67e5\u770b"):A.a.createElement(c["a"],{status:"default",text:"\u65e0"})}}),A.a.createElement(J,{title:"\u64cd\u4f5c",fixed:"right",width:152,render:function(t,n){return A.a.createElement("div",null,A.a.createElement("a",{onClick:function(){return e.editWorknote(n)}},"\u7f16\u8f91 ",X["a"].assembleIcon("FaPencil",12,H["blue500"])),A.a.createElement("span",{className:"ant-divider"}),A.a.createElement(l["a"],{overlay:A.a.createElement(s["a"],null,A.a.createElement(s["a"].Item,null,A.a.createElement("a",{onClick:function(){return e.deleteWorknote(n)}},"\u5220\u9664")),n.task&&A.a.createElement(s["a"].Item,null,A.a.createElement("a",{onClick:function(){return e.showTask(n.task)}},"\u67e5\u770b\u76f8\u5173\u4efb\u52a1")),n.meeting&&A.a.createElement(s["a"].Item,null,A.a.createElement("a",{onClick:function(){return e.showMeeting(n.meeting)}},"\u67e5\u770b\u76f8\u5173\u4f1a\u8bae")))},A.a.createElement("a",{className:"ant-dropdown-link"},"\u66f4\u591a ",A.a.createElement(u["a"],{type:"down"}))))}}))))}}]),t}(D["PureComponent"]),o=r))||o);t["default"]=Y}}]);