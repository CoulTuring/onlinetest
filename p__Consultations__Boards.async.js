(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{up2d:function(e,t,a){"use strict";a.r(t);a("IzEo");var n=a("bx4M"),r=(a("qVdP"),a("jsC+")),o=(a("lUTK"),a("BvKs")),s=(a("P2fV"),a("NJEC")),l=(a("Awhp"),a("KrTs")),i=(a("Pwec"),a("CtXQ")),c=(a("5NDa"),a("5rEg")),d=(a("+L6B"),a("2/Rp")),m=(a("2qtc"),a("kLXV")),u=(a("T2oS"),a("W9HT")),p=(a("miYZ"),a("tsqr")),f=a("qIgq"),h=a.n(f),b=a("d6i3"),g=a.n(b),v=a("1l/V"),w=a.n(v),E=a("p0pE"),C=a.n(E),y=a("2Taf"),O=a.n(y),x=a("vZ4D"),j=a.n(x),k=a("l4Ni"),M=a.n(k),S=a("ujKo"),B=a.n(S),T=a("MhPg"),P=a.n(T),V=(a("g9YV"),a("wCAj")),I=a("q1tI"),F=a.n(I),D=a("MuoO"),z=a("LLXN"),q=a("FkSf"),N=(a("y8nQ"),a("Vl3Y")),A=a("gWZ8"),K=a.n(A),L=a("d/v1"),_=a("pJVQ"),W=a("p9nB"),J=a("WAby"),Q=a("6NK7"),X=function(e){},Y=function(e){function t(){var e,a;O()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=M()(this,(e=B()(t)).call.apply(e,[this].concat(r))),a.state={people:[],peopleOptions:[],selectedPeople:[],loading:!1},a.searchPeople=function(e){var t=a.props.dispatch;t({type:"people/people/search",payload:{person:e},callback:a.searchPeopleCallback})},a.searchPeopleCallback=function(e){var t=Q["a"].transferObjectsToSelectOptions(e);a.state.selectedPeople.forEach(function(e){return t.findIndex(function(t){return t.id===e.id})<0&&t.push(e)}),a.setState({peopleOptions:t}),a.setState({loading:!1})},a.handleSelect=function(){var e=w()(g.a.mark(function e(t){return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.setState({selectedPeople:a.state.selectedPeople.concat(a.state.peopleOptions.filter(function(e){return e.id===t}))});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.handleDeselect=function(){var e=w()(g.a.mark(function e(t){return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.setState({selectedPeople:a.state.selectedPeople.filter(function(e){return e.id!==t})});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return P()(t,e),j()(t,[{key:"componentDidMount",value:function(){var e=this.props.board;if(e){var t=Q["a"].transferObjectsToSelectOptions(e["administrators_detail"]),a=Q["a"].transferObjectsToSelectOptions(e["reviewers_detail"]),n=K()(t);a.forEach(function(e){return n.findIndex(function(t){return t.id===e.id})<0&&n.push(e)}),this.setState({peopleOptions:n,selectedPeople:n})}}},{key:"render",value:function(){var e=this.props,t=(e.board,e.handleSubmit),a=e.submitButtonText,n=e.submitting,r=this.state,o=r.peopleOptions,s=r.loading;return F.a.createElement("div",null,F.a.createElement(N["a"],{onSubmit:t,layout:"horizontal",className:"modal-form"},F.a.createElement(L["a"],{name:"name",type:"text",size:"default",placeholder:"",label:Object(z["formatMessage"])({id:"common.brand-name"}),required:!0,hasFeedback:!0,validate:[J["g"]],labelCol:{span:6},wrapperCol:{span:18},component:W["g"]}),F.a.createElement(L["a"],{name:"introduction",type:"text",size:"default",placeholder:"",label:Object(z["formatMessage"])({id:"common.introduction"}),labelCol:{span:6},wrapperCol:{span:18},rows:5,component:W["f"]}),F.a.createElement(L["a"],{name:"sort_weight",type:"text",size:"default",placeholder:"",label:Object(z["formatMessage"])({id:"common.sortWeight"}),required:!0,hasFeedback:!0,validate:[J["g"]],labelCol:{span:6},wrapperCol:{span:18},component:W["b"]}),F.a.createElement(L["a"],{name:"administrators",label:Object(z["formatMessage"])({id:"common.administrators"}),size:"default",labelCol:{span:6},wrapperCol:{span:18},options:o,defaultValue:[],mode:"multiple",filterOption:!1,onFocus:this.searchPeople,onSearch:this.searchPeople,onSelect:this.handleSelect,onDeselect:this.handleDeselect,notFoundContent:s?F.a.createElement(u["a"],{size:"small"}):null,component:W["d"]}),F.a.createElement(L["a"],{name:"reviewers",label:Object(z["formatMessage"])({id:"common.reviewers"}),size:"default",labelCol:{span:6},wrapperCol:{span:18},options:o,defaultValue:[],mode:"multiple",filterOption:!1,onFocus:this.searchPeople,onSearch:this.searchPeople,onSelect:this.handleSelect,onDeselect:this.handleDeselect,notFoundContent:s?F.a.createElement(u["a"],{size:"small"}):null,component:W["d"]}),F.a.createElement(L["a"],{name:"visible",label:Object(z["formatMessage"])({id:"common.visible"}),size:"default",labelCol:{span:6},wrapperCol:{span:18},defaultChecked:!0,checkedChildren:Object(z["formatMessage"])({id:"common.visible"}),unCheckedChildren:Object(z["formatMessage"])({id:"common.invisible"}),component:W["e"]}),F.a.createElement(d["a"],{type:"primary",htmlType:"submit",disabled:n,className:"modal-form-button"},a)))}}]),t}(F.a.Component),Z=Object(_["a"])({form:"boardForm",validate:X})(Y);function H(e,t){var a=t.board;return{initialValues:a,board:t.board,submitButtonText:t.submitButtonText||Object(z["formatMessage"])({id:"common.submit"})}}var R,G,U,$=Object(D["connect"])(H)(Z),ee=a("zHco"),te=a("yP6+"),ae=a("cQSq"),ne=a.n(ae),re=V["a"].Column,oe=(R=Object(D["connect"])(function(e){return{loading:e.loading.effects["consultations/boards/fetch"],list:e["consultations/boards"].data.list,pagination:e["consultations/boards"].data.pagination}}),R((U=function(e){function t(){var e,a;O()(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=M()(this,(e=B()(t)).call.apply(e,[this].concat(r))),a.state={board:null,ordering:"",filters:null,filterVisible:!1,filtered:!1,searchText:"",modalTitle:"",modalContent:null,submitButtonText:"",modalVisible:!1,submitting:!1},a.fetchBoards=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=a.props,n=t.dispatch,r=t.pagination,o=a.state,s=o.ordering,l=o.filters,i=o.searchText;n(e?{type:"consultations/boards/fetch",payload:e}:{type:"consultations/boards/fetch",payload:C()({search:i,page:r?r.current:1,ordering:s},l)})},a.handleTableChange=function(){var e=w()(g.a.mark(function e(t,n,r){var o,s;return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=a.state.searchText,s=Q["a"].transferSorterToOrdering(r),a.setState({ordering:s,filters:n}),e.next=5,a.fetchBoards(C()({search:o,page:t.current,ordering:s},n));case 5:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),a.editBoard=w()(g.a.mark(function e(){var t,n,r,o,s,l,i=arguments;return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:null,n=a.state.submitting,r=null===t?[Object(z["formatMessage"])({id:"operations.create"},{name:Object(z["formatMessage"])({id:"app.consultations.boards"})}),Object(z["formatMessage"])({id:"common.create"})]:[Object(z["formatMessage"])({id:"operations.edit",name:Object(z["formatMessage"])({id:"app.consultations.boards"})}),Object(z["formatMessage"])({id:"common.edit"})],o=h()(r,2),s=o[0],l=o[1],e.next=5,a.setState({board:t});case 5:return e.next=7,a.setState({modalTitle:s,modalContent:F.a.createElement($,{board:a.state.board,title:s,submitButtonText:l,onSubmit:a.onSubmit,submitting:n}),submitButtonText:l,modalVisible:!0});case 7:case"end":return e.stop()}},e)})),a.deleteBoard=function(){var e=w()(g.a.mark(function e(t){var n;return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=a.props.dispatch,n({type:"consultations/boards/remove",payload:{board:t},callback:function(){return a.deleteBoardCallback(t["name"])}});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.deleteBoardCallback=function(e){p["a"].success("".concat(Object(z["formatMessage"])({id:"operations.success-delete"},{name:Object(z["formatMessage"])({id:"app.consultations.boards"})})," ").concat(e)),a.fetchBoards()},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onBoardSearch=w()(g.a.mark(function e(){var t,n,r,o;return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.state,n=t.ordering,r=t.filters,o=t.searchText,e.next=3,a.fetchBoards(C()({search:o,page:1,ordering:n},r));case 3:a.setState({filterVisible:!1,filtered:!!o});case 4:case"end":return e.stop()}},e)})),a.handleCancel=w()(g.a.mark(function e(){return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.setState({modalVisible:!1,modalContent:null});case 2:case"end":return e.stop()}},e)})),a.onSubmit=function(){var e=w()(g.a.mark(function e(t){var n,r,o;return g.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=a.props.dispatch,r=a.state.board,o=C()({},t,{visible:!!t["visible"]}),e.prev=3,e.next=6,a.setState({submitting:!0});case 6:r&&r["id"]?n({type:"consultations/boards/update",payload:{board:C()({},o)},callback:function(){return a.fetchBoards()}}):n({type:"consultations/boards/add",payload:{board:o},callback:function(){return a.fetchBoards()}}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),console.log(e.t0);case 12:return e.prev=12,e.next=15,a.setState({submitting:!1});case 15:return e.finish(12);case 16:return e.next=18,a.setState({modalVisible:!1,modalContent:null});case 18:case"end":return e.stop()}},e,null,[[3,9,12,16]])}));return function(t){return e.apply(this,arguments)}}(),a.showConsultationsBarChart=function(){var e=a.props.dispatch;e({type:"consultations/boards/stats",payload:{},callback:a.showConsultationsBarChartCallback}),a.setState({modalTitle:"\u677f\u5757\u54a8\u8be2\u60c5\u51b5\u7edf\u8ba1"})},a.showConsultationsBarChartCallback=function(e){console.warn("stats: ",e);var t=e.map(function(e){return{label:e["name"],"\u603b\u6570":e["counts"]["questions"],"\u5df2\u5ba1\u6838":e["counts"]["approved"],"\u5df2\u56de\u590d":e["counts"]["replied"]}}),n=new ne.a,r=n.createView().source(t);r.transform({type:"fold",fields:["\u603b\u6570","\u5df2\u5ba1\u6838","\u5df2\u56de\u590d"],key:"type",value:"value"}),a.setState({modalVisible:!0,modalContent:F.a.createElement(te["Chart"],{height:400,data:r,forceFit:!0},F.a.createElement(te["Legend"],null),F.a.createElement(te["Coord"],{transpose:!0,scale:[1,-1]}),F.a.createElement(te["Axis"],{name:"label",label:{offset:12}}),F.a.createElement(te["Axis"],{name:"value",position:"right"}),F.a.createElement(te["Tooltip"],null),F.a.createElement(te["Geom"],{type:"interval",position:"label*value",color:"type",adjust:[{type:"dodge",marginRatio:1/32}]}))})},a}return P()(t,e),j()(t,[{key:"componentDidMount",value:function(){this.fetchBoards()}},{key:"render",value:function(){var e=this,t=this.props,a=t.list,p=t.pagination,f=t.loading,h=this.state,b=h.filtered,g=h.filterVisible,v=h.modalTitle,w=h.modalContent,E=h.modalVisible;return console.warn("list, pages, loading:",a,p,f),F.a.createElement(ee["a"],{title:Object(z["formatMessage"])({id:"operations.management"},{name:Object(z["formatMessage"])({id:"app.consultations.boards"})})},F.a.createElement(n["a"],{bordered:!1},p&&F.a.createElement(q["a"],null,p.total),F.a.createElement(m["a"],{title:v,visible:E,onCancel:this.handleCancel,footer:null},w||F.a.createElement(u["a"],{spinning:f})),F.a.createElement(d["a"],{type:"primary",onClick:function(){return e.editBoard()}},F.a.createElement(z["FormattedMessage"],{id:"operations.create",values:{name:Object(z["formatMessage"])({id:"app.consultations.boards"})}})),F.a.createElement(d["a"],{style:{marginLeft:16},type:"primary",onClick:this.showConsultationsBarChart},"\u677f\u5757\u54a8\u8be2\u60c5\u51b5\u7edf\u8ba1"),F.a.createElement(V["a"],{dataSource:a,loading:f,rowKey:"id",onChange:this.handleTableChange,pagination:p,width:1e3,scroll:{x:1e3}},F.a.createElement(re,{title:Object(z["formatMessage"])({id:"common.brand-name"}),dataIndex:"name",filterDropdown:F.a.createElement("div",{className:"table-input-search"},F.a.createElement(c["a"],{placeholder:Object(z["formatMessage"])({id:"common.brand-name"}),value:this.state.searchText,onChange:this.onInputChange,onPressEnter:this.onBoardSearch}),F.a.createElement(d["a"],{type:"primary",onClick:this.onBoardSearch},F.a.createElement(z["FormattedMessage"],{id:"common.search"}))),filterIcon:F.a.createElement(i["a"],{type:"search",style:{color:b?"#108ee9":"#aaa"}}),filterDropdownVisible:g,onFilterDropdownVisibleChange:function(t){e.setState({filterVisible:t})}}),F.a.createElement(re,{title:Object(z["formatMessage"])({id:"common.introduction"}),dataIndex:"introduction"}),F.a.createElement(re,{title:Object(z["formatMessage"])({id:"common.sortWeight"}),dataIndex:"sort_weight"}),F.a.createElement(re,{title:Object(z["formatMessage"])({id:"common.administrators"}),dataIndex:"administrators",render:function(e,t){return F.a.createElement("div",{key:t.school},t["administrators_detail"].map(Q["a"].displayPerson))}}),F.a.createElement(re,{title:Object(z["formatMessage"])({id:"common.reviewers"}),dataIndex:"reviewers",render:function(e,t){return F.a.createElement("div",{key:t.school},t["reviewers_detail"].map(Q["a"].displayPerson))}}),F.a.createElement(re,{title:Object(z["formatMessage"])({id:"common.visible"}),dataIndex:"visible",render:function(e){return e?F.a.createElement(l["a"],{status:"success",text:Object(z["formatMessage"])({id:"common.open"})}):F.a.createElement(l["a"],{status:"default",text:Object(z["formatMessage"])({id:"common.close"})})}}),F.a.createElement(re,{title:Object(z["formatMessage"])({id:"common.operations"}),width:152,fixed:"right",render:function(t,a){return F.a.createElement("div",null,F.a.createElement("a",{onClick:function(){return e.editBoard(a)}},Object(z["formatMessage"])({id:"common.edit"})),F.a.createElement("span",{className:"ant-divider"}),F.a.createElement(r["a"],{overlay:F.a.createElement(o["a"],null,F.a.createElement(o["a"].Item,null,F.a.createElement(s["a"],{title:Object(z["formatMessage"])({id:"common.delete-ask"}),onConfirm:function(){return e.deleteBoard(a)}},F.a.createElement("a",{href:"#"},F.a.createElement(z["FormattedMessage"],{id:"common.delete"})))))},F.a.createElement("a",{className:"ant-dropdown-link"},F.a.createElement(z["FormattedMessage"],{id:"common.more"})," ",F.a.createElement(i["a"],{type:"down"}))))}}))))}}]),t}(I["PureComponent"]),G=U))||G);t["default"]=oe}}]);