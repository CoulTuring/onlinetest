(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{z2N3:function(e,t,n){"use strict";n.r(t);var a,o,r,i=n("jehZ"),s=n.n(i),c=(n("T2oS"),n("W9HT")),l=n("d6i3"),u=n.n(l),d=n("p0pE"),p=n.n(d),h=n("1l/V"),g=n.n(h),f=n("2Taf"),m=n.n(f),v=n("vZ4D"),E=n.n(v),y=n("l4Ni"),w=n.n(y),P=n("ujKo"),b=n.n(P),k=n("MhPg"),C=n.n(k),q=n("q1tI"),M=n.n(q),Q=n("MuoO"),T=n("MPSb"),x=n("ztqQ"),B=n("yxjg"),j=(a=Object(Q["connect"])(function(e){return{selectedBoard:e["consultations/boards"].selectedBoard,loading:e.loading.effects["consultations/questions/fetch"],list:e["consultations/questions"].data.list,pagination:e["consultations/questions"].data.pagination}}),a((r=function(e){function t(){var e,n;m()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=w()(this,(e=b()(t)).call.apply(e,[this].concat(o))),n.state={searchText:""},n.fetchQuestions=g()(u.a.mark(function e(){var t,a,o,r,i,s,c,l,d,h,g=arguments;return u.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=g.length>0&&void 0!==g[0]?g[0]:null,a=n.props,o=a.dispatch,r=a.match,i=a.pagination,s=a.selectedBoard,c=n.state,l=c.ordering,d=c.filters,h=c.searchText,console.warn("board: ",r.params,n.props),o(t?{type:"consultations/questions/fetch",payload:{board:s&&s["id"]}}:{type:"consultations/questions/fetch",payload:p()({board:s&&s["id"],search:h,page:i?i.current:1,ordering:l},d)});case 5:case"end":return e.stop()}},e)})),n.handlePaginationChange=function(e,t){var a=t.activePage,o=n.state.searchText;n.fetchQuestions({search:o,page:a}).then()},n}return C()(t,e),E()(t,[{key:"componentDidMount",value:function(){this.fetchQuestions().then()}},{key:"componentDidUpdate",value:function(e){var t=this.props.selectedBoard;t!==e.selectedBoard&&this.fetchQuestions().then()}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.pagination,a=e.loading,o=e.selectQuestion,r=n?n.current:0,i=n?Math.ceil(n.total/n.pageSize):0;return M.a.createElement(M.a.Fragment,null,M.a.createElement(c["a"],{spinning:a},t&&t.length>0&&M.a.createElement(M.a.Fragment,null,M.a.createElement(T["a"].Group,{divided:!0},t.map(function(e,t){return M.a.createElement(T["a"],{key:t},M.a.createElement(T["a"].Content,null,M.a.createElement(T["a"].Header,{as:"a",onClick:function(){return o(e)}},e["title"]),M.a.createElement(T["a"].Meta,{content:e["created"]}),M.a.createElement(T["a"].Description,null,e["content"]),!1))})),M.a.createElement(x["a"],{activePage:r,totalPages:i,onPageChange:this.handlePaginationChange}))))}}]),t}(q["PureComponent"]),o=r))||o),D=function(e){return M.a.createElement(B["a"].Consumer,null,function(t){return M.a.createElement(j,s()({},t,e))})};D.typeName="Consultations",t["default"]=D}}]);