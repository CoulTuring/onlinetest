(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[113],{Qbh0:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),l=(a("qVdP"),a("jsC+")),o=(a("lUTK"),a("BvKs")),r=(a("Awhp"),a("KrTs")),s=(a("Pwec"),a("CtXQ")),c=(a("5NDa"),a("5rEg")),i=(a("T2oS"),a("W9HT")),u=(a("+L6B"),a("2/Rp")),p=(a("miYZ"),a("tsqr")),d=(a("2qtc"),a("kLXV")),m=a("qIgq"),h=a.n(m),f=a("d6i3"),b=a.n(f),k=a("1l/V"),w=a.n(k),C=a("p0pE"),v=a.n(C),y=a("gWZ8"),g=a.n(y),E=a("2Taf"),S=a.n(E),x=a("vZ4D"),T=a.n(x),O=a("l4Ni"),V=a.n(O),F=a("ujKo"),_=a.n(F),I=a("MhPg"),B=a.n(I),P=(a("g9YV"),a("wCAj")),q=a("q1tI"),z=a.n(q),D=a("MuoO"),j=a("34ay"),N=a("zHco"),A=(a("3eRE"),a("FkSf")),M=a("6NK7"),Y=(a("y8nQ"),a("Vl3Y")),K=a("d/v1"),W=a("pJVQ"),R=a("p9nB"),H=a("WAby"),J=function(e){},L=function(e){function t(){var e,a;S()(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=V()(this,(e=_()(t)).call.apply(e,[this].concat(l))),a.state={people:[],person:null,loading:!1},a.searchPeople=function(){var e=w()(b.a.mark(function e(t,n){var l;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:l=a.props.dispatch,a.setState({person:n||null}),l({type:"people/people/search",payload:{person:n},callback:a.searchPeopleCallback});case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.searchPeopleCallback=function(e){var t=M["a"].transferPeopleToOptionsWithName(e);a.setState({people:t}),a.setState({loading:!1})},a}return B()(t,e),T()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.call,a=e.schools,n=e.handleSubmit,l=e.submitButtonText,o=e.submitting,r=this.state,s=r.people,c=r.loading;return z.a.createElement("div",null,z.a.createElement(Y["a"],{onSubmit:n,layout:"horizontal",className:"modal-form"},z.a.createElement(K["a"],{name:"school",label:"\u6765\u7535\u5355\u4f4d",size:"default",labelCol:{span:6},wrapperCol:{span:18},options:a,disabled:null!==t,component:R["d"]}),z.a.createElement(K["a"],{name:"person",label:"\u6765\u7535\u4eba\u59d3\u540d",size:"default",mode:"combobox",value:this.state.person,labelCol:{span:6},wrapperCol:{span:18},options:s,disabled:null!==t,defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,onFocus:this.searchPeople,onChange:this.searchPeople,required:!0,hasFeedback:!0,validate:[H["g"],H["d"]],notFoundContent:c?z.a.createElement(i["a"],{size:"small"}):null,component:R["d"]}),z.a.createElement(K["a"],{name:"call_number",type:"text",size:"default",placeholder:"\u6765\u7535\u4eba\u7535\u8bdd",label:"\u6765\u7535\u4eba\u7535\u8bdd",required:!0,hasFeedback:!0,validate:[H["g"]],labelCol:{span:6},wrapperCol:{span:18},component:R["g"]}),z.a.createElement(K["a"],{type:"text",name:"call_datetime",size:"default",placeholder:"\u6765\u7535\u65f6\u95f4",label:"\u6765\u7535\u65f6\u95f4",required:!0,hasFeedback:!0,validate:[H["g"]],labelCol:{span:6},wrapperCol:{span:18,offset:0},component:R["a"],dateTimeFormat:"YYYY-MM-DD HH:mm:ss",showTime:!0}),z.a.createElement(K["a"],{type:"text",name:"content",size:"default",placeholder:"\u6765\u7535\u5185\u5bb9",label:"\u6765\u7535\u5185\u5bb9",required:!0,hasFeedback:!0,validate:[H["g"]],labelCol:{span:6},wrapperCol:{span:18},component:R["f"]}),z.a.createElement(K["a"],{type:"text",name:"notes",size:"default",placeholder:"\u5904\u7406\u60c5\u51b5",label:"\u5904\u7406\u60c5\u51b5",required:!0,hasFeedback:!0,validate:[H["g"]],labelCol:{span:6},wrapperCol:{span:18},component:R["f"]}),z.a.createElement(u["a"],{type:"primary",htmlType:"submit",disabled:o,className:"modal-form-button"},l)))}}]),t}(z.a.Component),Q=Object(W["a"])({form:"callForm",validate:J})(L);function X(e,t){var a=t.call;return{initialValues:a,call:t.call,submitButtonText:t.submitButtonText||"\u63d0\u4ea4"}}var Z,U,G,$=Object(D["connect"])(X)(Q),ee=a("tR9B"),te=a("dVw7"),ae=a("00B6"),ne=a("Ntaw"),le=a("X3JL"),oe=P["a"].Column,re=(Z=Object(D["connect"])(function(e){return{auth:e["auth"],loading:e.loading.effects["worknotes/calls/fetch"],list:e["worknotes/calls"].data.list,pagination:e["worknotes/calls"].data.pagination}}),Z((G=function(e){function t(){var e,a;S()(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return a=V()(this,(e=_()(t)).call.apply(e,[this].concat(l))),a.state={call:null,schoolsOptions:[],schoolsSelectOptions:[],limitedSchoolsSelectOptions:[],ordering:"",filters:null,filterVisible:!1,filtered:!1,searchText:"",modalTitle:"",modalContent:null,modalFooter:null,submitButtonText:"",modalVisible:!1,submitting:!1},a.fetchSchools=function(){var e=a.props.dispatch;e({type:"schools/schools/fetchPublic",payload:{},callback:a.fetchSchoolsCallback})},a.fetchSchoolsCallback=function(e){var t=a.props.auth,n=Object(j["b"])();a.setState({schoolsOptions:M["a"].transferObjectsToFilterOptions(e)}),a.setState({schoolsSelectOptions:M["a"].transferObjectsToSelectOptionsWithoutID(e)});var l=g()(t.person["calls_admin_schools"]),o=!0,r=!1,s=void 0;try{for(var c,i=function(){var e=c.value;l.findIndex(function(t){return t["id"]===e.id})<0&&l.push(e)},u=n["worknotes_app_schools"][Symbol.iterator]();!(o=(c=u.next()).done);o=!0)i()}catch(e){r=!0,s=e}finally{try{o||null==u.return||u.return()}finally{if(r)throw s}}a.setState({limitedSchoolsSelectOptions:M["a"].transferObjectsToSelectOptionsWithoutID(l)})},a.fetchCalls=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=a.props,n=t.dispatch,l=t.pagination,o=a.state,r=o.ordering,s=o.filters,c=o.searchText;n(e?{type:"worknotes/calls/fetch",payload:e}:{type:"worknotes/calls/fetch",payload:v()({search:c,page:l?l.current:1,ordering:r},s)})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onCallSearch=w()(b.a.mark(function e(){var t,n,l,o;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=a.state,n=t.ordering,l=t.filters,o=t.searchText,a.fetchCalls(v()({search:o,page:1,ordering:n},l)),a.setState({filterVisible:!1,filtered:!!o});case 3:case"end":return e.stop()}},e)})),a.handleTableChange=function(){var e=w()(b.a.mark(function e(t,n,l){var o,r;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:o=a.state.searchText,r=M["a"].transferSorterToOrdering(l),a.setState({ordering:r,filters:n}),a.fetchCalls(v()({search:o,page:t.current,ordering:r},n));case 4:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.editCall=w()(b.a.mark(function e(){var t,n,l,o,r,s,c,i,u=arguments;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:null,n=a.state,l=n.schoolsSelectOptions,o=n.submitting,r=null===t?["\u521b\u5efa\u901a\u8baf\u8bb0\u5f55","\u521b\u5efa"]:["\u7f16\u8f91\u901a\u8baf\u8bb0\u5f55","\u7f16\u8f91"],s=h()(r,2),c=s[0],i=s[1],e.next=5,a.setState({call:null!==t?v()({},t,{person:t["person_detail"]&&"".concat(t["person_detail"]["name"],"(").concat(t.person,")")}):t});case 5:return e.next=7,a.setState({modalTitle:c,modalContent:z.a.createElement($,{call:a.state.call,schools:l,title:c,submitButtonText:i,onSubmit:a.onSubmit,submitting:o}),submitButtonText:i,modalVisible:!0});case 7:case"end":return e.stop()}},e)})),a.deleteCall=function(){var e=w()(b.a.mark(function e(t){var n,l;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.props.dispatch,l="".concat(t["person_detail"]["name"],"(").concat(t.person,")"),d["a"].confirm({title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664 ".concat(l," \u7684\u901a\u8baf\u8bb0\u5f55\u5417?"),content:"\u5220\u9664\u540e\u5c06\u4e0d\u53ef\u6062\u590d",onOk:function(){var e=w()(b.a.mark(function e(){return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n({type:"worknotes/calls/remove",payload:{call:t},callback:function(){return a.fetchCalls()}}),p["a"].success("\u6210\u529f\u5220\u9664 ".concat(l," \u7684\u901a\u8baf\u8bb0\u5f55"));case 2:case"end":return e.stop()}},e)}));function o(){return e.apply(this,arguments)}return o}(),onCancel:function(){}});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.createTask=function(){var e=w()(b.a.mark(function e(t){var n,l,o,r,s;return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.state,l=n.submitting,o=n.limitedSchoolsSelectOptions,r="\u521b\u5efa\u4efb\u52a1",s="\u7f16\u8f91",e.next=4,a.setState({call:t,modalTitle:r,modalContent:z.a.createElement(ee["a"],{task:null,schools:o,title:r,submitButtonText:s,onSubmit:a.onTaskSubmit,submitting:l}),submitButtonText:s,modalVisible:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.showTask=function(e){a.setState({modalTitle:"",modalContent:z.a.createElement(te["a"],{taskId:e}),modalFooter:[z.a.createElement(u["a"],{key:"ok",size:"default",onClick:a.handleCancel},"\u786e\u5b9a")],submitButtonText:"",modalVisible:!0})},a.handleCancel=w()(b.a.mark(function e(){return b.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.setState({modalVisible:!1,modalContent:null,modalFooter:null});case 2:case"end":return e.stop()}},e)})),a.onSubmit=function(e){var t=a.props.dispatch,n=a.state.call,l=/\((\w{4,11})\)/.exec(e["person"]),o=v()({},e,{person:l[1]});try{a.setState({submitting:!0}),n&&n["id"]?t({type:"worknotes/calls/update",payload:{call:o},callback:function(){return a.onSubmitCallback("\u901a\u8baf\u8bb0\u5f55\u4fee\u6539\u6210\u529f")}}):t({type:"worknotes/calls/add",payload:{call:o},callback:function(){return a.onSubmitCallback("\u901a\u8baf\u8bb0\u5f55\u521b\u5efa\u6210\u529f")}})}catch(e){console.log(e)}finally{a.setState({submitting:!1})}a.setState({modalVisible:!1,modalContent:null,modalFooter:null})},a.onTaskSubmit=function(e){var t=a.props.dispatch,n=a.state.call,l=/\((\w{4,11})\)/.exec(e["person"]),o=v()({},e,{person:l[1],call:n.id});t({type:"worknotes/tasks/add",payload:{task:o},callback:function(){return a.fetchCalls()}}),a.setState({modalVisible:!1,modalContent:null,modalFooter:null})},a}return B()(t,e),T()(t,[{key:"componentDidMount",value:function(){this.fetchSchools(),this.fetchCalls()}},{key:"onSubmitCallback",value:function(e){p["a"].success(e),this.fetchCalls()}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,p=t.pagination,m=t.loading,h=this.state,f=h.schoolsOptions,b=h.filtered,k=h.filterVisible,w=h.modalTitle,C=h.modalContent,v=h.modalFooter,y=h.modalVisible;return z.a.createElement(N["a"],{title:"\u901a\u8baf\u8bb0\u5f55\u5217\u8868"},z.a.createElement(n["a"],{bordered:!1},p&&z.a.createElement(A["a"],null,p.total),z.a.createElement(d["a"],{title:w,visible:y,onCancel:this.handleCancel,footer:v},C||z.a.createElement(i["a"],{spinning:m})),z.a.createElement(u["a"],{type:"primary",onClick:function(){return e.editCall()}},"\u65b0\u5efa\u901a\u8baf\u8bb0\u5f55"),z.a.createElement(le["a"],null),z.a.createElement(P["a"],{dataSource:a,loading:m,rowKey:"id",width:1e3,scroll:{x:1e3},expandedRowRender:function(e){return z.a.createElement("div",null,z.a.createElement("p",null,"\u6765\u7535\u5185\u5bb9\uff1a",e.content),z.a.createElement("p",null,"\u5904\u7406\u60c5\u51b5\uff1a",e.notes))},onChange:this.handleTableChange,pagination:p},z.a.createElement(oe,{title:"\u8bb0\u5f55\u4eba",key:"creator",render:function(e){return e["creator_detail"]&&e["creator_detail"]["name"]}}),z.a.createElement(oe,{title:"\u6765\u7535\u90e8\u95e8",key:"school",render:function(e){return e["school_detail"]&&e["school_detail"]["name"]},filters:f}),z.a.createElement(oe,{title:"\u6765\u7535\u4eba\u59d3\u540d",key:"person",render:function(e){return e["person_detail"]&&e["person_detail"]["name"]},filterDropdown:z.a.createElement("div",{className:"table-input-search"},z.a.createElement(c["a"],{placeholder:"\u59d3\u540d\u6216\u5b66\u5de5\u53f7",value:this.state.searchText,onChange:this.onInputChange,onPressEnter:this.onCallSearch}),z.a.createElement(u["a"],{type:"primary",onClick:this.onCallSearch},"\u68c0\u7d22")),filterIcon:z.a.createElement(s["a"],{type:"search",style:{color:b?"#108ee9":"#aaa"}}),filterDropdownVisible:k,onFilterDropdownVisibleChange:function(t){e.setState({filterVisible:t})}}),z.a.createElement(oe,{title:"\u6765\u7535\u53f7\u7801",dataIndex:"call_number"}),z.a.createElement(oe,{title:"\u6765\u7535\u65f6\u95f4",sorter:!0,dataIndex:"call_datetime"}),z.a.createElement(oe,{title:"\u76f8\u5173\u4efb\u52a1",key:"id",render:function(t){return t.task?z.a.createElement("a",{onClick:function(){return e.showTask(t.task)}},ae["a"].assembleIcon("FaExternalLink",13,ne["blue500"])," \u67e5\u770b"):z.a.createElement(r["a"],{status:"default",text:"\u672a\u521b\u5efa"})}}),z.a.createElement(oe,{title:"\u64cd\u4f5c",fixed:"right",width:136,render:function(t,a){return z.a.createElement("div",null,z.a.createElement("a",{onClick:function(){return e.editCall(a)}},"\u7f16\u8f91"),z.a.createElement("span",{className:"ant-divider"}),z.a.createElement(l["a"],{overlay:z.a.createElement(o["a"],null,z.a.createElement(o["a"].Item,null,z.a.createElement("a",{onClick:function(){return e.deleteCall(a)}},"\u5220\u9664")),z.a.createElement(o["a"].Item,null,a.task?z.a.createElement("a",{onClick:function(){return e.showTask(a.task)}},"\u67e5\u770b\u4efb\u52a1"):z.a.createElement("a",{onClick:function(){return e.createTask(a)}},"\u521b\u5efa\u4efb\u52a1")))},z.a.createElement("a",{className:"ant-dropdown-link"},"\u66f4\u591a ",z.a.createElement(s["a"],{type:"down"}))))}}))))}}]),t}(q["PureComponent"]),U=G))||U);t["default"]=re}}]);