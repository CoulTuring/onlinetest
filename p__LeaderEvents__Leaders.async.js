(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{tpsW:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),r=(a("qVdP"),a("jsC+")),l=(a("Pwec"),a("CtXQ")),o=(a("lUTK"),a("BvKs")),i=(a("Awhp"),a("KrTs")),s=(a("+L6B"),a("2/Rp")),c=(a("T2oS"),a("W9HT")),d=(a("miYZ"),a("tsqr")),u=(a("2qtc"),a("kLXV")),p=a("qIgq"),m=a.n(p),h=a("d6i3"),f=a.n(h),v=a("1l/V"),b=a.n(v),g=a("p0pE"),w=a.n(g),y=a("2Taf"),C=a.n(y),x=a("vZ4D"),E=a.n(x),k=a("l4Ni"),T=a.n(k),S=a("ujKo"),L=a.n(S),V=a("MhPg"),O=a.n(V),P=(a("g9YV"),a("wCAj")),B=a("q1tI"),q=a.n(B),I=a("MuoO"),_=a("FkSf"),z=(a("y8nQ"),a("Vl3Y")),A=a("d/v1"),F=a("pJVQ"),N=a("p9nB"),j=a("WAby"),K=a("6NK7"),M=function(e){},W=function(e){function t(){var e,a;C()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=T()(this,(e=L()(t)).call.apply(e,[this].concat(r))),a.state={peopleOptions:[],selectedPeople:[]},a.searchPeople=function(e,t){var n=a.props.dispatch;n({type:"people/people/search",payload:{person:t},callback:a.searchPeopleCallback})},a.searchPeopleCallback=function(e){var t=K["a"].transferPeopleToOptionsWithName(e);a.setState({peopleOptions:t})},a}return O()(t,e),E()(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=(e.leader,e.searching),a=e.handleSubmit,n=e.submitButtonText,r=e.submitting,l=this.state.peopleOptions;return q.a.createElement("div",null,q.a.createElement(z["a"],{onSubmit:a,layout:"horizontal",className:"modal-form"},q.a.createElement(A["a"],{name:"person",label:"\u4eba\u5458",size:"default",mode:"combobox",labelCol:{span:6},wrapperCol:{span:18},options:l,defaultActiveFirstOption:!1,showArrow:!1,filterOption:!1,onFocus:this.searchPeople,onChange:this.searchPeople,required:!0,hasFeedback:!0,validate:[j["g"],j["d"]],notFoundContent:t?q.a.createElement(c["a"],{size:"small"}):null,component:N["d"]}),q.a.createElement(A["a"],{name:"visible",label:"\u53ef\u67e5\u8be2",size:"default",labelCol:{span:6},wrapperCol:{span:18},defaultChecked:!0,checkedChildren:"\u53ef\u67e5\u8be2",unCheckedChildren:"\u4e0d\u53ef\u89c1",component:N["e"]}),q.a.createElement(A["a"],{name:"sort_weight",type:"text",size:"default",placeholder:"",label:"\u6392\u5e8f\u6743\u91cd",required:!0,hasFeedback:!0,validate:[j["g"]],labelCol:{span:6},wrapperCol:{span:18},component:N["b"]}),q.a.createElement(s["a"],{type:"primary",htmlType:"submit",disabled:r,className:"modal-form-button"},n)))}}]),t}(q.a.Component),D=Object(F["a"])({form:"leaderForm",validate:M})(W);function J(e,t){var a=t.leader;return{searching:e.loading.effects["people/people/search"],initialValues:a,leader:t.leader,submitButtonText:t.submitButtonText||"\u63d0\u4ea4"}}var Q,Y,H,X=Object(I["connect"])(J)(D),Z=a("zHco"),R=P["a"].Column,U=(Q=Object(I["connect"])(function(e){return{loading:e.loading.effects["leader-events/leaders/fetch"],test:e["leader-events/leaders"].test,state:e,list:e["leader-events/leaders"].data.list,pagination:e["leader-events/leaders"].data.pagination}}),Q((H=function(e){function t(){var e,a;C()(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=T()(this,(e=L()(t)).call.apply(e,[this].concat(r))),a.state={leader:null,ordering:"",filters:null,filterVisible:!1,filtered:!1,searchText:"",modalTitle:"",modalContent:null,submitButtonText:"",modalVisible:!1,submitting:!1},a.fetchLeaders=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=a.props,n=t.dispatch,r=t.pagination,l=a.state,o=l.ordering,i=l.filters,s=l.searchText;n(e?{type:"leader-events/leaders/fetch",payload:e}:{type:"leader-events/leaders/fetch",payload:w()({search:s,page:r?r.current:1,ordering:o},i)})},a.handleTableChange=function(){var e=b()(f.a.mark(function e(t,n,r){var l,o;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return l=a.state.searchText,o=K["a"].transferSorterToOrdering(r),a.setState({ordering:o,filters:n}),e.next=5,a.fetchLeaders(w()({search:l,page:t.current,ordering:o},n));case 5:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.editLeader=b()(f.a.mark(function e(){var t,n,r,l,o,i,s=arguments;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:null,n=a.state.submitting,r=null===t?["\u521b\u5efa\u9886\u5bfc\u4eba\u5458","\u521b\u5efa"]:["\u7f16\u8f91\u9886\u5bfc\u4eba\u5458","\u7f16\u8f91"],l=m()(r,2),o=l[0],i=l[1],e.next=5,a.setState({leader:t?w()({},t,{person:"".concat(t["person_detail"]["name"],"(").concat(t["person_detail"]["id"],")")}):{}});case 5:return e.next=7,a.setState({modalTitle:o,modalContent:q.a.createElement(X,{leader:a.state.leader,title:o,submitButtonText:i,onSubmit:a.onSubmit,submitting:n}),submitButtonText:i,modalVisible:!0});case 7:case"end":return e.stop()}},e)})),a.deleteLeader=function(){var e=b()(f.a.mark(function e(t){var n;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.props.dispatch,u["a"].confirm({title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664\u9886\u5bfc\u4eba\u5458 ".concat(t["person_detail"]["name"]," \u5417?"),content:"\u5220\u9664\u540e\u5c06\u4e0d\u53ef\u6062\u590d\uff0c\u5176\u76f8\u5173\u6570\u636e\u3001\u4fe1\u606f\u4e5f\u5c06\u4e00\u5e76\u5220\u9664\u3002",onOk:function(){var e=b()(f.a.mark(function e(){return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n({type:"leader-events/leaders/remove",payload:{leader:t},callback:function(){return a.fetchLeaders()}}),d["a"].success("\u6210\u529f\u5220\u9664\u9886\u5bfc\u4eba\u5458 ".concat(t["person_detail"]["name"],"\u3002"));case 2:case"end":return e.stop()}},e)}));function r(){return e.apply(this,arguments)}return r}(),onCancel:function(){}});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.handleCancel=b()(f.a.mark(function e(){return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.setState({modalVisible:!1,modalContent:null});case 2:case"end":return e.stop()}},e)})),a.onSubmit=function(){var e=b()(f.a.mark(function e(t){var n,r,l,o;return f.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.props.dispatch,r=a.state.leader,l=/\((\w{4,11})\)/.exec(t["person"]),o=w()({},t,{visible:!!t["visible"],person:l[1]}),e.prev=4,e.next=7,a.setState({submitting:!0});case 7:r&&r["person"]?n({type:"leader-events/leaders/update",payload:{leader:w()({},o)},callback:function(){return a.fetchLeaders()}}):n({type:"leader-events/leaders/add",payload:{leader:o},callback:function(){return a.fetchLeaders()}}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](4),console.log(e.t0);case 13:return e.prev=13,e.next=16,a.setState({submitting:!1});case 16:return e.finish(13);case 17:return e.next=19,a.setState({modalVisible:!1,modalContent:null});case 19:case"end":return e.stop()}},e,null,[[4,10,13,17]])}));return function(t){return e.apply(this,arguments)}}(),a}return O()(t,e),E()(t,[{key:"componentDidMount",value:function(){this.fetchLeaders()}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,d=t.pagination,p=t.loading,m=t.state,h=this.state,f=h.modalTitle,v=h.modalContent,b=h.modalVisible;return console.warn("list, pages, loading:",a,d,p,m),q.a.createElement(Z["a"],{title:"\u9886\u5bfc\u4eba\u5458\u7ba1\u7406"},q.a.createElement(n["a"],{bordered:!1},d&&q.a.createElement(_["a"],null,d.total),q.a.createElement(u["a"],{title:f,visible:b,onCancel:this.handleCancel,footer:null},v||q.a.createElement(c["a"],{spinning:p})),q.a.createElement(s["a"],{type:"primary",onClick:function(){return e.editLeader()}},"\u65b0\u5efa\u9886\u5bfc"),q.a.createElement(P["a"],{dataSource:a,loading:p,rowKey:"id",onChange:this.handleTableChange,pagination:d,width:500,scroll:{x:500}},q.a.createElement(R,{title:"\u4eba\u5458",dataIndex:"person",render:function(e,t){return t["person_detail"]?t["person_detail"]["name"]:t["person"]}}),q.a.createElement(R,{title:"\u6392\u5e8f",dataIndex:"sort_weight"}),q.a.createElement(R,{title:"\u53ef\u67e5\u8be2",dataIndex:"visible",render:function(e){return e?q.a.createElement(i["a"],{status:"success",text:"\u5f00\u653e"}):q.a.createElement(i["a"],{status:"default",text:"\u5173\u95ed"})}}),q.a.createElement(R,{title:"\u64cd\u4f5c",width:152,fixed:"right",render:function(t,a){return q.a.createElement("div",null,q.a.createElement("a",{onClick:function(){return e.editLeader(a)}},"\u7f16\u8f91"),q.a.createElement("span",{className:"ant-divider"}),q.a.createElement(r["a"],{overlay:q.a.createElement(o["a"],null,q.a.createElement(o["a"].Item,null,q.a.createElement("a",{onClick:function(){return e.deleteLeader(a)}},"\u5220\u9664")))},q.a.createElement("a",{className:"ant-dropdown-link"},"\u66f4\u591a ",q.a.createElement(l["a"],{type:"down"}))))}}))))}}]),t}(B["PureComponent"]),Y=H))||Y);t["default"]=U}}]);