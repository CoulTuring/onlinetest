(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{"1xau":function(e,a,t){e.exports={header:"antd-pro-pages-exams-exampaper-header",sider:"antd-pro-pages-exams-exampaper-sider",serial:"antd-pro-pages-exams-exampaper-serial",answeredSerial:"antd-pro-pages-exams-exampaper-answeredSerial",content:"antd-pro-pages-exams-exampaper-content",question:"antd-pro-pages-exams-exampaper-question",option:"antd-pro-pages-exams-exampaper-option",exampaperFooter:"antd-pro-pages-exams-exampaper-exampaperFooter",submitButton:"antd-pro-pages-exams-exampaper-submitButton",title:"antd-pro-pages-exams-exampaper-title"}},rMwh:function(e,a,t){"use strict";t.r(a);t("IzEo");var n,r,i,l=t("bx4M"),o=(t("Pwec"),t("CtXQ")),s=(t("2qtc"),t("kLXV")),u=t("d6i3"),c=t.n(u),p=t("1l/V"),m=t.n(p),v=t("2Taf"),d=t.n(v),h=t("vZ4D"),f=t.n(h),x=t("l4Ni"),E=t.n(x),y=t("ujKo"),S=t.n(y),g=t("MhPg"),k=t.n(g),b=(t("+L6B"),t("2/Rp")),C=(t("B9cy"),t("Ol7k")),w=t("q1tI"),_=t.n(w),N=t("MuoO"),q=t("3a4m"),B=t.n(q),D=t("Yaqk"),M=t("3eRE"),j=t("1xau"),A=t.n(j),T=(t("7Kak"),t("9yH6")),P=function(e){function a(){var e,t;d()(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=E()(this,(e=S()(a)).call.apply(e,[this].concat(r))),t.state={value:null},t.onChange=function(e){t.setState({value:e.target.value}),t.props.onSelect(t.props.relation.id,e.target.value)},t}return k()(a,e),f()(a,[{key:"componentDidMount",value:function(){var e=this.props.relation;this.setState({value:e["user_answer"]})}},{key:"componentWillReceiveProps",value:function(e){var a=this.props.relation;e.relation.id!==a.id&&this.setState({value:e.relation["user_answer"]})}},{key:"render",value:function(){var e=this.props.relation,a=e.selection;return _.a.createElement("div",null,_.a.createElement("p",{className:A.a.question},e["serial_number"],". ",a.question),_.a.createElement(T["a"].Group,{onChange:this.onChange,value:this.state.value},_.a.createElement(T["a"],{className:A.a.option,value:"A"},"A. ",a["A"]),_.a.createElement(T["a"],{className:A.a.option,value:"B"},"B. ",a["B"]),_.a.createElement(T["a"],{className:A.a.option,value:"C"},"C. ",a["C"]),a["D"]&&_.a.createElement(T["a"],{className:A.a.option,value:"D"},"D. ",a["D"]),a["E"]&&_.a.createElement(T["a"],{className:A.a.option,value:"E"},"E. ",a["E"])))}}]),a}(w["PureComponent"]),R=(t("sRBo"),t("kaz8")),F=t("gWZ8"),I=t.n(F),J=function(e){function a(){var e,t;d()(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=E()(this,(e=S()(a)).call.apply(e,[this].concat(r))),t.state={values:[]},t.onChange=function(e){var a=I()(e).sort();t.setState({values:a}),t.props.onSelect(t.props.relation.id,a)},t}return k()(a,e),f()(a,[{key:"componentDidMount",value:function(){var e=this.props.relation;e["user_answer"]&&this.setState({values:I()(e["user_answer"])})}},{key:"componentWillReceiveProps",value:function(e){var a=this.props.relation;e.relation.id!==a.id&&(e.relation["user_answer"]?this.setState({values:I()(e.relation["user_answer"])}):this.setState({values:[]}))}},{key:"render",value:function(){var e=this.props.relation,a=e.multiselection;return _.a.createElement("div",null,_.a.createElement("p",{className:A.a.question},e["serial_number"],". ",a.question),_.a.createElement(R["a"].Group,{onChange:this.onChange,value:this.state.values},_.a.createElement(R["a"],{className:A.a.option,value:"A"},"A. ",a["A"]),_.a.createElement(R["a"],{className:A.a.option,value:"B"},"B. ",a["B"]),_.a.createElement(R["a"],{className:A.a.option,value:"C"},"C. ",a["C"]),a["D"]&&_.a.createElement(R["a"],{className:A.a.option,value:"D"},"D. ",a["D"]),a["E"]&&_.a.createElement(R["a"],{className:A.a.option,value:"E"},"E. ",a["E"])))}}]),a}(w["PureComponent"]),W=function(e){function a(){var e,t;d()(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=E()(this,(e=S()(a)).call.apply(e,[this].concat(r))),t.state={value:null},t.onChange=function(e){t.setState({value:e.target.value}),t.props.onSelect(t.props.relation.id,e.target.value)},t}return k()(a,e),f()(a,[{key:"componentDidMount",value:function(){var e=this.props.relation;this.setState({value:e["user_answer"]})}},{key:"componentWillReceiveProps",value:function(e){var a=this.props.relation;e.relation.id!==a.id&&this.setState({value:e.relation["user_answer"]})}},{key:"render",value:function(){var e=this.props.relation,a=e.judge;return _.a.createElement("div",null,_.a.createElement("p",{className:A.a.question},e["serial_number"],". ",a.question),_.a.createElement(T["a"].Group,{onChange:this.onChange,value:this.state.value},_.a.createElement(T["a"],{className:A.a.option,value:"A"},"\u6b63\u786e"),_.a.createElement(T["a"],{className:A.a.option,value:"B"},"\u9519\u8bef")))}}]),a}(w["PureComponent"]),z=C["a"].Header,G=C["a"].Sider,O=C["a"].Content,H=C["a"].Footer,K=function(e){var a=e.serial,t=e.answered,n=e.answering,r=e.onClick;return _.a.createElement(b["a"],{type:n?"primary":"default",className:t&&!n?A.a.answeredSerial:A.a.serial,onClick:function(){return r(a)},styles:{marginRight:14},shape:"circle"},a)},L=function(e){var a,t=e.relations,n=e.questionType,r=e.currentSerial,i=e.onClick;if(0===t.length)return null;a="selection"===n?"\u5355\u9009\u9898":"judge"===n?"\u5224\u65ad\u9898":"\u591a\u9009\u9898";var l=t.map(function(e){return _.a.createElement(K,{key:e["id"],serial:e["serial_number"],onClick:i,answered:e["user_answer"],answering:r===e["serial_number"]})});return _.a.createElement("div",null,_.a.createElement("h3",{style:{marginTop:16,marginBottom:4}},a),_.a.createElement("div",null,l))},V=["selections_relations","judges_relations","multiselections_relations"],X=(n=Object(N["connect"])(function(e){return{exampaper:e["exams/exampapers"].selectedExampaper}}),n((i=function(e){function a(){var e,t;d()(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=E()(this,(e=S()(a)).call.apply(e,[this].concat(r))),t.state={component:null,submitting:!1,serial:1,minSerial:99999,maxSerial:0},t.init=function(){var e=m()(c.a.mark(function e(a){var n,r,i,l,o,s,u,p,m,v,d,h,f;return c.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=!0,i=!1,l=void 0,e.prev=3,o=V[Symbol.iterator]();case 5:if(r=(s=o.next()).done){e.next=41;break}u=s.value,p=!0,m=!1,v=void 0,e.prev=10,d=a[u][Symbol.iterator]();case 12:if(p=(h=d.next()).done){e.next=24;break}if(f=h.value,!(f["serial_number"]<t.state.minSerial)){e.next=18;break}return n=u,e.next=18,t.setState({minSerial:f["serial_number"]});case 18:if(!(f["serial_number"]>t.state.maxSerial)){e.next=21;break}return e.next=21,t.setState({maxSerial:f["serial_number"]});case 21:p=!0,e.next=12;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e["catch"](10),m=!0,v=e.t0;case 30:e.prev=30,e.prev=31,p||null==d.return||d.return();case 33:if(e.prev=33,!m){e.next=36;break}throw v;case 36:return e.finish(33);case 37:return e.finish(30);case 38:r=!0,e.next=5;break;case 41:e.next=47;break;case 43:e.prev=43,e.t1=e["catch"](3),i=!0,l=e.t1;case 47:e.prev=47,e.prev=48,r||null==o.return||o.return();case 50:if(e.prev=50,!i){e.next=53;break}throw l;case 53:return e.finish(50);case 54:return e.finish(47);case 55:t.onSerialClick(n,t.state.minSerial);case 56:case"end":return e.stop()}},e,null,[[3,43,47,55],[10,26,30,38],[31,,33,37],[48,,50,54]])}));return function(a){return e.apply(this,arguments)}}(),t.onSerialClick=function(e,a){var n=t.props.exampaper,r=e;if(""===e){var i=!0,l=!1,o=void 0;try{for(var s,u=V[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;n[c].findIndex(function(e){return e["serial_number"]===a})>=0&&(r=c)}}catch(e){l=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(l)throw o}}}var p,m=n[r].find(function(e){return e["serial_number"]===a});"selections_relations"===r?p=_.a.createElement(P,{relation:m,onSelect:t.onChangeSelection}):"judges_relations"===r?p=_.a.createElement(W,{relation:m,onSelect:t.onChangeJudge}):"multiselections_relations"===r&&(p=_.a.createElement(J,{relation:m,onSelect:t.onChangeMultiselection})),t.setState({serial:a,component:p})},t.forceSubmit=function(e){var a=t.props.exampaper;e||M["a"].isEarlyThan(a.deadline,a.now)&&t.onSubmitExampaper()},t.onChangeSelection=function(e,a){var n=t.props.dispatch;n({type:"exams/exampapers/answerSelection",payload:{relationId:e,answer:a},callback:t.forceSubmit})},t.onChangeJudge=function(e,a){var n=t.props.dispatch;n({type:"exams/exampapers/answerJudge",payload:{relationId:e,answer:a},callback:t.forceSubmit})},t.onChangeMultiselection=function(e,a){var n=t.props.dispatch;n({type:"exams/exampapers/answerMultiselection",payload:{relationId:e,answer:a.reduce(function(e,a){return e+a},"")},callback:t.forceSubmit})},t.onSubmitExampaper=function(){var e=t.props,a=e.dispatch,n=e.exampaper,r={id:n.id},i=!0,l=!1,o=void 0;try{for(var s,u=V[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r[c]=[];var p=!0,m=!1,v=void 0;try{for(var d,h=n[c][Symbol.iterator]();!(p=(d=h.next()).done);p=!0){var f=d.value;r[c].push({id:f["id"],user_answer:f.user_answer})}}catch(e){m=!0,v=e}finally{try{p||null==h.return||h.return()}finally{if(m)throw v}}}}catch(e){l=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(l)throw o}}a({type:"exams/exampapers/submitExampaper",payload:{exampaper:r}})},t.showSubmitConfirm=function(){s["a"].confirm({title:"\u60a8\u786e\u5b9a\u8981\u63d0\u4ea4\u8bd5\u5377\u5417\uff1f",content:"\u8bd5\u5377\u63d0\u4ea4\u540e\u5c06\u65e0\u6cd5\u518d\u4fee\u6539\u3002",onOk:t.onSubmitExampaper,onCancel:function(){}})},t.redirectToExams=function(){B.a.push("/exams/exams")},t}return k()(a,e),f()(a,[{key:"componentDidMount",value:function(){var e=this.props.exampaper;e&&this.init(e)}},{key:"componentWillReceiveProps",value:function(e){e.exampaper&&null===this.props.exampaper&&this.init(e.exampaper),e.exampaper&&e.exampaper.submitted&&B.a.push("/exams/exams")}},{key:"render",value:function(){var e=this,a=this.props.exampaper,t=this.state,n=t.serial,r=t.minSerial,i=t.maxSerial,s=t.component,u=t.submitting;a||this.redirectToExams();var c=a.exam,p=c.boilerplate;return _.a.createElement(l["a"],{bordered:!1},_.a.createElement(C["a"],null,_.a.createElement(z,{className:A.a.header},_.a.createElement("h1",null,a.exam&&a.exam.name),_.a.createElement("h4",null,_.a.createElement("b",null,"\u8bd5\u5377\u8bf4\u660e\uff1a"),"\u672c\u8bd5\u5377\u5171\u5305\u542b\u5355\u9009\u9898",p["num_selections"],"\u9053\uff08\u6bcf\u9898",parseFloat(p["point_per_selection"]),"\u5206\uff09\uff0c \u5224\u65ad\u9898",p["num_judges"],"\u9053\uff08\u6bcf\u9898",parseFloat(p["point_per_judge"]),"\u5206\uff09\uff0c \u591a\u9009\u9898",p["num_multiselections"],"\u9053\uff08\u6bcf\u9898",parseFloat(p["point_per_multiselection"]),"\u5206\uff09",c.minutes>0?"\uff0c\u7b54\u9898\u9650\u65f6 ".concat(c.minutes," \u5206\u949f"):null),_.a.createElement("h5",null,"\u5269\u4f59\u7b54\u9898\u65f6\u95f4\uff1a",_.a.createElement(D["a"],{style:{fontSize:20},target:a["deadline"]}))),_.a.createElement(C["a"],null,_.a.createElement(G,{width:248,className:A.a.sider},_.a.createElement(L,{relations:a["selections_relations"],onClick:function(a){return e.onSerialClick("selections_relations",a)},questionType:"selection",currentSerial:n}),_.a.createElement(L,{relations:a["blanks_relations"],onClick:function(a){return e.onSerialClick("blanks_relations",a)},onSelect:this.onChangeJudge,questionType:"blank",currentSerial:n}),_.a.createElement(L,{relations:a["multiselections_relations"],onClick:function(a){return e.onSerialClick("multiselections_relations",a)},onSelect:this.onChangeMultiselection,questionType:"multiselection",currentSerial:n}),_.a.createElement(L,{relations:a["judges_relations"],onClick:function(a){return e.onSerialClick("judges_relations",a)},questionType:"judge",currentSerial:n}),_.a.createElement(L,{relations:a["solvings_relations"],onClick:function(a){return e.onSerialClick("solvings_relations",a)},questionType:"solving",currentSerial:n})),_.a.createElement(O,{className:A.a.content},s)),_.a.createElement(H,{className:A.a.exampaperFooter},_.a.createElement(b["a"],{type:"danger",className:A.a.submitButton,disabled:u,size:"large",onClick:this.showSubmitConfirm},_.a.createElement(o["a"],{type:"check"}),"\u4ea4\u5377"),_.a.createElement(b["a"].Group,null,_.a.createElement(b["a"],{type:"primary",disabled:u||n===r,onClick:function(){return e.onSerialClick("",n-1)}},_.a.createElement(o["a"],{type:"left"}),"\u4e0a\u4e00\u9898"),_.a.createElement(b["a"],{type:"primary",disabled:u||n===i,onClick:function(){return e.onSerialClick("",n+1)}},"\u4e0b\u4e00\u9898",_.a.createElement(o["a"],{type:"right"}))))))}}]),a}(w["PureComponent"]),r=i))||r);a["default"]=X}}]);