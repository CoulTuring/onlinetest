(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[112],{KkuX:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),o=(a("qVdP"),a("jsC+")),r=(a("Pwec"),a("CtXQ")),l=(a("lUTK"),a("BvKs")),i=(a("+L6B"),a("2/Rp")),s=(a("miYZ"),a("tsqr")),c=(a("2qtc"),a("kLXV")),u=a("qIgq"),p=a.n(u),d=a("d6i3"),h=a.n(d),m=a("1l/V"),f=a.n(m),b=a("p0pE"),y=a.n(b),k=a("2Taf"),w=a.n(k),v=a("vZ4D"),S=a.n(v),g=a("l4Ni"),E=a.n(g),C=a("ujKo"),x=a.n(C),O=a("MhPg"),T=a.n(O),P=(a("g9YV"),a("wCAj")),_=a("q1tI"),V=a.n(_),A=a("MuoO"),I=a("zHco"),j=(a("3eRE"),a("y8nQ"),a("Vl3Y")),D=(a("T2oS"),a("W9HT")),z=a("gWZ8"),F=a.n(z),B=a("d/v1"),K=a("pJVQ"),q=a("p9nB"),N=(a("WAby"),a("6NK7")),M=function(e){},J=function(e){function t(){var e,a;w()(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return a=E()(this,(e=x()(t)).call.apply(e,[this].concat(o))),a.state={people:[],authorities:[],peopleOptions:[],selectedPeople:[],loading:!1},a.searchPeople=function(e){var t=a.props.dispatch;t({type:"people/people/search",payload:{person:e},callback:a.searchPeopleCallback})},a.searchPeopleCallback=function(e){var t=N["a"].transferObjectsToSelectOptions(e);a.state.selectedPeople.forEach(function(e){return t.findIndex(function(t){return t.id===e.id})<0&&t.push(e)}),a.setState({peopleOptions:t}),a.setState({loading:!1})},a.handleSelect=function(){var e=f()(h.a.mark(function e(t){return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.setState({selectedPeople:a.state.selectedPeople.concat(a.state.peopleOptions.filter(function(e){return e.id===t}))});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleDeselect=function(){var e=f()(h.a.mark(function e(t){return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.setState({selectedPeople:a.state.selectedPeople.filter(function(e){return e.id!==t})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return T()(t,e),S()(t,[{key:"componentDidMount",value:function(){var e=this.props.authority;if(e){var t=N["a"].transferObjectsToSelectOptions(e["call_administrators_detail"]),a=N["a"].transferObjectsToSelectOptions(e["task_administrators_detail"]),n=N["a"].transferObjectsToSelectOptions(e["meeting_administrators_detail"]),o=N["a"].transferObjectsToSelectOptions(e["worknote_administrators_detail"]),r=F()(t),l=[].concat(F()(a),F()(n),F()(o));l.forEach(function(e){return r.findIndex(function(t){return t.id===e.id})<0&&r.push(e)}),this.setState({peopleOptions:r,selectedPeople:r})}}},{key:"render",value:function(){var e=this.props,t=e.authority,a=e.schools,n=e.handleSubmit,o=e.submitButtonText,r=e.submitting,l=this.state,s=l.peopleOptions,c=l.loading;return V.a.createElement("div",null,V.a.createElement(j["a"],{onSubmit:n,layout:"horizontal",className:"modal-form"},V.a.createElement(B["a"],{name:"school",label:"\u90e8\u95e8\uff08\u5b66\u9662\uff09",size:"default",labelCol:{span:6},wrapperCol:{span:18},options:a,disabled:null!==t,component:q["d"]}),V.a.createElement(B["a"],{name:"call_administrators",label:"\u901a\u8baf\u7ba1\u7406\u5458",size:"default",labelCol:{span:6},wrapperCol:{span:18},options:s,defaultValue:[],mode:"multiple",filterOption:!1,onFocus:this.searchPeople,onSearch:this.searchPeople,onSelect:this.handleSelect,onDeselect:this.handleDeselect,notFoundContent:c?V.a.createElement(D["a"],{size:"small"}):null,component:q["d"]}),V.a.createElement(B["a"],{name:"task_administrators",label:"\u4efb\u52a1\u7ba1\u7406\u5458",size:"default",labelCol:{span:6},wrapperCol:{span:18},options:s,defaultValue:[],mode:"multiple",filterOption:!1,onFocus:this.searchPeople,onSearch:this.searchPeople,onSelect:this.handleSelect,onDeselect:this.handleDeselect,notFoundContent:c?V.a.createElement(D["a"],{size:"small"}):null,component:q["d"]}),V.a.createElement(B["a"],{name:"worknote_administrators",label:"\u5de5\u4f5c\u8bb0\u5f55\u7ba1\u7406\u5458",size:"default",labelCol:{span:6},wrapperCol:{span:18},options:s,defaultValue:[],mode:"multiple",filterOption:!1,onFocus:this.searchPeople,onSearch:this.searchPeople,onSelect:this.handleSelect,onDeselect:this.handleDeselect,notFoundContent:c?V.a.createElement(D["a"],{size:"small"}):null,component:q["d"]}),V.a.createElement(B["a"],{name:"meeting_administrators",label:"\u4f1a\u8bae\u7ba1\u7406\u5458",size:"default",labelCol:{span:6},wrapperCol:{span:18},options:s,defaultValue:[],mode:"multiple",filterOption:!1,onFocus:this.searchPeople,onSearch:this.searchPeople,onSelect:this.handleSelect,onDeselect:this.handleDeselect,notFoundContent:c?V.a.createElement(D["a"],{size:"small"}):null,component:q["d"]}),V.a.createElement(i["a"],{type:"primary",htmlType:"submit",disabled:r,className:"modal-form-button"},o)))}}]),t}(V.a.Component),W=Object(K["a"])({form:"authorityForm",validate:M})(J);function X(e,t){var a=t.authority;return{initialValues:a,authority:t.authority,submitButtonText:t.submitButtonText||"\u63d0\u4ea4"}}var L,Q,Y,Z=Object(A["connect"])(X)(W),H=a("FkSf"),R=(a("Tt/K"),a("X3JL")),U=P["a"].Column,G=(L=Object(A["connect"])(function(e){return{loading:e.loading.effects["worknotes/authorities/fetch"],list:e["worknotes/authorities"].data.list,pagination:e["worknotes/authorities"].data.pagination}}),L((Y=function(e){function t(){var e,a;w()(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return a=E()(this,(e=x()(t)).call.apply(e,[this].concat(o))),a.state={authority:null,schoolsOptions:[],schoolsSelectOptions:[],ordering:"",filters:null,filterVisible:!1,filtered:!1,searchText:"",modalTitle:"",submitButtonText:"",modalVisible:!1,modalContent:null,submitting:!1},a.fetchSchools=function(){var e=a.props.dispatch;e({type:"schools/schools/fetchPublic",payload:{},callback:a.fetchSchoolsCallback})},a.fetchSchoolsCallback=function(e){a.setState({schoolsOptions:N["a"].transferObjectsToFilterOptions(e)}),a.setState({schoolsSelectOptions:N["a"].transferObjectsToSelectOptionsWithoutID(e)})},a.fetchAuthorities=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=a.props,n=t.dispatch,o=t.pagination,r=a.state,l=r.ordering,i=r.filters,s=r.searchText;n(e?{type:"worknotes/authorities/fetch",payload:e}:{type:"worknotes/authorities/fetch",payload:y()({search:s,page:o?o.current:1,ordering:l},i)})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onAuthoritySearch=f()(h.a.mark(function e(){var t,n,o,r;return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=a.state,n=t.ordering,o=t.filters,r=t.searchText,a.fetchAuthorities(y()({search:r,page:1,ordering:n},o)),a.setState({filterVisible:!1,filtered:!!r});case 3:case"end":return e.stop()}},e)})),a.handleTableChange=function(){var e=f()(h.a.mark(function e(t,n,o){var r,l;return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=a.state.searchText,l=N["a"].transferSorterToOrdering(o),a.setState({ordering:l,filters:n}),a.fetchAuthorities(y()({search:r,page:t.current,ordering:l},n));case 4:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.editAuthority=f()(h.a.mark(function e(){var t,n,o,r,l,i,s,c,u=arguments;return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:null,n=a.state,o=n.schoolsSelectOptions,r=n.submitting,l=null===t?["\u521b\u5efa\u65e5\u5e38\u5de5\u4f5c\u6743\u9650","\u521b\u5efa"]:["\u7f16\u8f91\u65e5\u5e38\u5de5\u4f5c\u6743\u9650","\u7f16\u8f91"],i=p()(l,2),s=i[0],c=i[1],e.next=5,a.setState({authority:t,modalTitle:s,submitButtonText:c,modalVisible:!0,modalContent:V.a.createElement(Z,{authority:t,schools:o,title:s,submitButtonText:c,onSubmit:a.onSubmit,submitting:r})});case 5:case"end":return e.stop()}},e)})),a.deleteAuthority=function(){var e=f()(h.a.mark(function e(t){return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:c["a"].confirm({title:"\u60a8\u786e\u8ba4\u8981\u5220\u9664 ".concat(t.name," \u65e5\u5e38\u5de5\u4f5c\u6743\u9650\u5417?"),content:"\u5220\u9664\u540e\u5c06\u4e0d\u53ef\u6062\u590d",onOk:function(){var e=f()(h.a.mark(function e(){return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a.props.dispatch({type:"worknotes/authorities/remove",payload:{authority:t},callback:function(){return a.fetchAuthorities()}}),s["a"].success('\u6210\u529f\u5220\u9664 "'.concat(t.name,'" \u65e5\u5e38\u5de5\u4f5c\u6743\u9650'));case 2:case"end":return e.stop()}},e)}));function n(){return e.apply(this,arguments)}return n}(),onCancel:function(){}});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleCancel=f()(h.a.mark(function e(){return h.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.setState({modalVisible:!1,modalContent:null,authority:null});case 2:case"end":return e.stop()}},e)})),a.onSubmit=function(e){var t=a.props.dispatch,n=a.state.authority;try{a.setState({submitting:!0}),n&&n["school"]?t({type:"worknotes/authorities/update",payload:{authority:e},callback:function(){return a.onSubmitCallback("\u4fee\u6539\u6743\u9650\u8bb0\u5f55\u6210\u529f")}}):t({type:"worknotes/authorities/add",payload:{authority:e},callback:function(){return a.onSubmitCallback("\u521b\u5efa\u6743\u9650\u8bb0\u5f55\u6210\u529f")}})}catch(e){console.log(e)}finally{a.setState({submitting:!1})}a.setState({modalVisible:!1,modalContent:null,authority:null})},a}return T()(t,e),S()(t,[{key:"componentDidMount",value:function(){this.fetchAuthorities(),this.fetchSchools()}},{key:"onSubmitCallback",value:function(e){s["a"].success(e),this.fetchAuthorities()}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,s=t.pagination,u=t.loading,p=this.state,d=p.modalTitle,h=p.modalContent,m=p.modalVisible;return V.a.createElement(I["a"],{title:"\u65e5\u5e38\u5de5\u4f5c\u6743\u9650\u5217\u8868"},V.a.createElement(n["a"],{bordered:!1},s&&V.a.createElement(H["a"],null,s.total),V.a.createElement(c["a"],{title:d,visible:m,onCancel:this.handleCancel,footer:null},h),V.a.createElement(i["a"],{type:"primary",onClick:function(){return e.editAuthority()}},"\u65b0\u5efa\u65e5\u5e38\u5de5\u4f5c\u6743\u9650"),V.a.createElement(R["a"],null),V.a.createElement(P["a"],{dataSource:a,loading:u,rowKey:"school",width:1e3,scroll:{x:1e3},onChange:this.handleTableChange,pagination:s},V.a.createElement(U,{title:"\u5e8f\u53f7",dataIndex:"school",key:"school",sorter:function(e,t){return e.school-t.school}}),V.a.createElement(U,{title:"\u90e8\u95e8",dataIndex:"name",render:function(e,t){return V.a.createElement("div",{key:t.school},t["school_detail"]&&t["school_detail"]["name"])}}),V.a.createElement(U,{title:"\u901a\u8baf\u7ba1\u7406\u4eba\u5458",dataIndex:"call_administrators",render:function(e,t){return V.a.createElement("div",{key:t.school},t["call_administrators_detail"].map(N["a"].displayPerson))}}),V.a.createElement(U,{title:"\u4efb\u52a1\u7ba1\u7406\u4eba\u5458",dataIndex:"task_administrators",render:function(e,t){return V.a.createElement("div",{key:t.school},t["task_administrators_detail"].map(N["a"].displayPerson))}}),V.a.createElement(U,{title:"\u5de5\u4f5c\u8bb0\u5f55\u7ba1\u7406\u4eba\u5458",dataIndex:"worknote_administrators",render:function(e,t){return V.a.createElement("div",{key:t.school},t["worknote_administrators_detail"].map(N["a"].displayPerson))}}),V.a.createElement(U,{title:"\u4f1a\u8bae\u7ba1\u7406\u4eba\u5458",dataIndex:"meeting_administrators",render:function(e,t){return V.a.createElement("div",{key:t.school},t["meeting_administrators_detail"].map(N["a"].displayPerson))}}),V.a.createElement(U,{title:"\u64cd\u4f5c",fixed:"right",width:136,render:function(t,a){return V.a.createElement("div",null,V.a.createElement("a",{onClick:function(){return e.editAuthority(a)}},"\u7f16\u8f91"),V.a.createElement("span",{className:"ant-divider"}),V.a.createElement(o["a"],{overlay:V.a.createElement(l["a"],null,V.a.createElement(l["a"].Item,null,V.a.createElement("a",{onClick:function(){return e.deleteAuthority(a)}},"\u5220\u9664")))},V.a.createElement("a",{className:"ant-dropdown-link"},"\u66f4\u591a ",V.a.createElement(r["a"],{type:"down"}))))}}))))}}]),t}(_["PureComponent"]),Q=Y))||Q);t["default"]=G}}]);