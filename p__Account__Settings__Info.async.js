(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"0evu":function(e,t,a){e.exports={main:"antd-pro-pages-account-settings-info-main",leftmenu:"antd-pro-pages-account-settings-info-leftmenu",right:"antd-pro-pages-account-settings-info-right",title:"antd-pro-pages-account-settings-info-title"}},JE8d:function(e,t,a){"use strict";a.r(t);a("Mwp2");var n=a("VXEj"),i=(a("Pwec"),a("CtXQ")),s=a("2Taf"),r=a.n(s),c=a("vZ4D"),o=a.n(c),l=a("l4Ni"),p=a.n(l),u=a("ujKo"),m=a.n(u),g=a("MhPg"),d=a.n(g),f=a("q1tI"),v=a.n(f),h=a("LLXN"),y=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return a=p()(this,(e=m()(t)).call.apply(e,[this].concat(s))),a.getData=function(){return[{title:Object(h["formatMessage"])({id:"app.settings.binding.taobao"},{}),description:Object(h["formatMessage"])({id:"app.settings.binding.taobao-description"},{}),actions:[v.a.createElement("a",null,v.a.createElement(h["FormattedMessage"],{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:v.a.createElement(i["a"],{type:"taobao",className:"taobao"})},{title:Object(h["formatMessage"])({id:"app.settings.binding.alipay"},{}),description:Object(h["formatMessage"])({id:"app.settings.binding.alipay-description"},{}),actions:[v.a.createElement("a",null,v.a.createElement(h["FormattedMessage"],{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:v.a.createElement(i["a"],{type:"alipay",className:"alipay"})},{title:Object(h["formatMessage"])({id:"app.settings.binding.dingding"},{}),description:Object(h["formatMessage"])({id:"app.settings.binding.dingding-description"},{}),actions:[v.a.createElement("a",null,v.a.createElement(h["FormattedMessage"],{id:"app.settings.binding.bind",defaultMessage:"Bind"}))],avatar:v.a.createElement(i["a"],{type:"dingding",className:"dingding"})}]},a}return d()(t,e),o()(t,[{key:"render",value:function(){return v.a.createElement(f["Fragment"],null,v.a.createElement(n["a"],{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return v.a.createElement(n["a"].Item,{actions:e.actions},v.a.createElement(n["a"].Item.Meta,{avatar:e.avatar,title:e.title,description:e.description}))}}))}}]),t}(f["Component"]);t["default"]=y},JeqK:function(e,t,a){"use strict";a.r(t);a("Mwp2");var n=a("VXEj"),i=(a("BoS7"),a("Sdc0")),s=a("2Taf"),r=a.n(s),c=a("vZ4D"),o=a.n(c),l=a("l4Ni"),p=a.n(l),u=a("ujKo"),m=a.n(u),g=a("MhPg"),d=a.n(g),f=a("q1tI"),v=a.n(f),h=a("LLXN"),y=function(e){function t(){var e,a;r()(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return a=p()(this,(e=m()(t)).call.apply(e,[this].concat(s))),a.getData=function(){var e=v.a.createElement(i["a"],{checkedChildren:Object(h["formatMessage"])({id:"app.settings.open"}),unCheckedChildren:Object(h["formatMessage"])({id:"app.settings.close"}),defaultChecked:!0});return[{title:Object(h["formatMessage"])({id:"app.settings.notification.password"},{}),description:Object(h["formatMessage"])({id:"app.settings.notification.password-description"},{}),actions:[e]},{title:Object(h["formatMessage"])({id:"app.settings.notification.messages"},{}),description:Object(h["formatMessage"])({id:"app.settings.notification.messages-description"},{}),actions:[e]},{title:Object(h["formatMessage"])({id:"app.settings.notification.todo"},{}),description:Object(h["formatMessage"])({id:"app.settings.notification.todo-description"},{}),actions:[e]}]},a}return d()(t,e),o()(t,[{key:"render",value:function(){return v.a.createElement(f["Fragment"],null,v.a.createElement(n["a"],{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return v.a.createElement(n["a"].Item,{actions:e.actions},v.a.createElement(n["a"].Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(f["Component"]);t["default"]=y},"N01/":function(e,t,a){"use strict";a.r(t);var n,i,s,r=a("2Taf"),c=a.n(r),o=a("vZ4D"),l=a.n(o),p=a("l4Ni"),u=a.n(p),m=a("ujKo"),g=a.n(m),d=a("MhPg"),f=a.n(d),v=(a("lUTK"),a("BvKs")),h=a("q1tI"),y=a.n(h),b=a("MuoO"),M=a("3a4m"),E=a.n(M),O=a("LLXN"),w=a("v99g"),j=a("0evu"),k=a.n(j),N=v["a"].Item,F=(n=Object(b["connect"])(function(e){var t=e.user;return{currentUser:t.currentUser}}),n((s=function(e){function t(e){var a;c()(this,t),a=u()(this,g()(t).call(this,e)),a.getmenu=function(){var e=a.state.menuMap;return Object.keys(e).map(function(t){return y.a.createElement(N,{key:t},e[t])})},a.getRightTitle=function(){var e=a.state,t=e.selectKey,n=e.menuMap;return n[t]},a.selectKey=function(e){var t=e.key;E.a.push("/account/settings/".concat(t)),a.setState({selectKey:t})},a.resize=function(){a.main&&requestAnimationFrame(function(){var e="inline",t=a.main.offsetWidth;a.main.offsetWidth<641&&t>400&&(e="horizontal"),window.innerWidth<768&&t>400&&(e="horizontal"),a.setState({mode:e})})};var n=e.match,i=e.location,s={base:y.a.createElement(O["FormattedMessage"],{id:"app.settings.menuMap.basic",defaultMessage:"Basic Settings"}),security:y.a.createElement(O["FormattedMessage"],{id:"app.settings.menuMap.security",defaultMessage:"Security Settings"}),binding:y.a.createElement(O["FormattedMessage"],{id:"app.settings.menuMap.binding",defaultMessage:"Account Binding"}),notification:y.a.createElement(O["FormattedMessage"],{id:"app.settings.menuMap.notification",defaultMessage:"New Message Notification"})},r=i.pathname.replace("".concat(n.path,"/"),"");return a.state={mode:"inline",menuMap:s,selectKey:s[r]?r:"base"},a}return f()(t,e),l()(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize),this.resize()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){var e=this,t=this.props,a=t.children,n=t.currentUser;if(!n.userid)return"";var i=this.state,s=i.mode,r=i.selectKey;return y.a.createElement(w["a"],null,y.a.createElement("div",{className:k.a.main,ref:function(t){e.main=t}},y.a.createElement("div",{className:k.a.leftmenu},y.a.createElement(v["a"],{mode:s,selectedKeys:[r],onClick:this.selectKey},this.getmenu())),y.a.createElement("div",{className:k.a.right},y.a.createElement("div",{className:k.a.title},this.getRightTitle()),a)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.match,n=e.location,i=n.pathname.replace("".concat(a.path,"/"),"");return i=t.menuMap[i]?i:"base",i!==t.selectKey?{selectKey:i}:null}}]),t}(h["Component"]),i=s))||i);t["default"]=F},VGLV:function(e,t,a){e.exports={row:"antd-pro-pages-account-settings-geographic-view-row",item:"antd-pro-pages-account-settings-geographic-view-item"}},a4KE:function(e,t,a){"use strict";a.r(t);a("Mwp2");var n=a("VXEj"),i=a("2Taf"),s=a.n(i),r=a("vZ4D"),c=a.n(r),o=a("l4Ni"),l=a.n(o),p=a("ujKo"),u=a.n(p),m=a("MhPg"),g=a.n(m),d=a("q1tI"),f=a.n(d),v=a("LLXN"),h={strong:f.a.createElement("font",{className:"strong"},f.a.createElement(v["FormattedMessage"],{id:"app.settings.security.strong",defaultMessage:"Strong"})),medium:f.a.createElement("font",{className:"medium"},f.a.createElement(v["FormattedMessage"],{id:"app.settings.security.medium",defaultMessage:"Medium"})),weak:f.a.createElement("font",{className:"weak"},f.a.createElement(v["FormattedMessage"],{id:"app.settings.security.weak",defaultMessage:"Weak"}),"Weak")},y=function(e){function t(){var e,a;s()(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=l()(this,(e=u()(t)).call.apply(e,[this].concat(i))),a.getData=function(){return[{title:Object(v["formatMessage"])({id:"app.settings.security.password"},{}),description:f.a.createElement(d["Fragment"],null,Object(v["formatMessage"])({id:"app.settings.security.password-description"}),"\uff1a",h.strong),actions:[f.a.createElement("a",null,f.a.createElement(v["FormattedMessage"],{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:Object(v["formatMessage"])({id:"app.settings.security.phone"},{}),description:"".concat(Object(v["formatMessage"])({id:"app.settings.security.phone-description"},{}),"\uff1a138****8293"),actions:[f.a.createElement("a",null,f.a.createElement(v["FormattedMessage"],{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:Object(v["formatMessage"])({id:"app.settings.security.question"},{}),description:Object(v["formatMessage"])({id:"app.settings.security.question-description"},{}),actions:[f.a.createElement("a",null,f.a.createElement(v["FormattedMessage"],{id:"app.settings.security.set",defaultMessage:"Set"}))]},{title:Object(v["formatMessage"])({id:"app.settings.security.email"},{}),description:"".concat(Object(v["formatMessage"])({id:"app.settings.security.email-description"},{}),"\uff1aant***sign.com"),actions:[f.a.createElement("a",null,f.a.createElement(v["FormattedMessage"],{id:"app.settings.security.modify",defaultMessage:"Modify"}))]},{title:Object(v["formatMessage"])({id:"app.settings.security.mfa"},{}),description:Object(v["formatMessage"])({id:"app.settings.security.mfa-description"},{}),actions:[f.a.createElement("a",null,f.a.createElement(v["FormattedMessage"],{id:"app.settings.security.bind",defaultMessage:"Bind"}))]}]},a}return g()(t,e),c()(t,[{key:"render",value:function(){return f.a.createElement(d["Fragment"],null,f.a.createElement(n["a"],{itemLayout:"horizontal",dataSource:this.getData(),renderItem:function(e){return f.a.createElement(n["a"].Item,{actions:e.actions},f.a.createElement(n["a"].Item.Meta,{title:e.title,description:e.description}))}}))}}]),t}(d["Component"]);t["default"]=y},dzOB:function(e,t,a){"use strict";a.r(t);a("5NDa");var n,i,s,r,c,o,l,p=a("5rEg"),u=a("2Taf"),m=a.n(u),g=a("vZ4D"),d=a.n(g),f=a("l4Ni"),v=a.n(f),h=a("ujKo"),y=a.n(h),b=a("MhPg"),M=a.n(b),E=(a("DZo9"),a("8z0m")),O=(a("+L6B"),a("2/Rp")),w=(a("OaEy"),a("2fM7")),j=(a("y8nQ"),a("Vl3Y")),k=a("q1tI"),N=a.n(k),F=a("LLXN"),C=a("MuoO"),I=a("gJV7"),L=a.n(I),D=(a("T2oS"),a("W9HT")),S=a("VGLV"),V=a.n(S),K=w["a"].Option,P={label:"",key:""},q=(n=Object(C["connect"])(function(e){var t=e.geographic,a=t.province,n=t.isLoading,i=t.city;return{province:a,city:i,isLoading:n}}),n((s=function(e){function t(){var e,a;m()(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return a=v()(this,(e=y()(t)).call.apply(e,[this].concat(i))),a.componentDidMount=function(){var e=a.props.dispatch;e({type:"geographic/fetchProvince"})},a.getCityOption=function(){var e=a.props.city;return a.getOption(e)},a.getOption=function(e){return!e||e.length<1?N.a.createElement(K,{key:0,value:0},"\u6ca1\u6709\u627e\u5230\u9009\u9879"):e.map(function(e){return N.a.createElement(K,{key:e.id,value:e.id},e.name)})},a.selectProvinceItem=function(e){var t=a.props,n=t.dispatch,i=t.onChange;n({type:"geographic/fetchCity",payload:e.key}),i({province:e,city:P})},a.selectCityItem=function(e){var t=a.props,n=t.value,i=t.onChange;i({province:n.province,city:e})},a}return M()(t,e),d()(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.dispatch,n=t.value;!e.value&&n&&n.province&&a({type:"geographic/fetchCity",payload:n.province.key})}},{key:"getProvinceOption",value:function(){var e=this.props.province;return this.getOption(e)}},{key:"conversionObject",value:function(){var e=this.props.value;if(!e)return{province:P,city:P};var t=e.province,a=e.city;return{province:t||P,city:a||P}}},{key:"render",value:function(){var e=this.conversionObject(),t=e.province,a=e.city,n=this.props.isLoading;return N.a.createElement(D["a"],{spinning:n,wrapperClassName:V.a.row},N.a.createElement(w["a"],{className:V.a.item,value:t,labelInValue:!0,showSearch:!0,onSelect:this.selectProvinceItem},this.getProvinceOption()),N.a.createElement(w["a"],{className:V.a.item,value:a,labelInValue:!0,showSearch:!0,onSelect:this.selectCityItem},this.getCityOption()))}}]),t}(k["PureComponent"]),i=s))||i),z=q,B=a("uy6Z"),U=a.n(B),A=function(e){function t(){return m()(this,t),v()(this,y()(t).apply(this,arguments))}return M()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange,n=["",""];return t&&(n=t.split("-")),N.a.createElement(k["Fragment"],null,N.a.createElement(p["a"],{className:U.a.area_code,value:n[0],onChange:function(e){a("".concat(e.target.value,"-").concat(n[1]))}}),N.a.createElement(p["a"],{className:U.a.phone_number,onChange:function(e){a("".concat(n[0],"-").concat(e.target.value))},value:n[1]}))}}]),t}(k["PureComponent"]),_=A,T=j["a"].Item,X=w["a"].Option,x=function(e){var t=e.avatar;return N.a.createElement(k["Fragment"],null,N.a.createElement("div",{className:L.a.avatar_title},N.a.createElement(F["FormattedMessage"],{id:"app.settings.basic.avatar",defaultMessage:"Avatar"})),N.a.createElement("div",{className:L.a.avatar},N.a.createElement("img",{src:t,alt:"avatar"})),N.a.createElement(E["a"],{fileList:[]},N.a.createElement("div",{className:L.a.button_view},N.a.createElement(O["a"],{icon:"upload"},N.a.createElement(F["FormattedMessage"],{id:"app.settings.basic.change-avatar",defaultMessage:"Change avatar"})))))},Z=function(e,t,a){var n=t.province,i=t.city;n.key||a("Please input your province!"),i.key||a("Please input your city!"),a()},W=function(e,t,a){var n=t.split("-");n[0]||a("Please input your area code!"),n[1]||a("Please input your phone number!"),a()},R=(r=Object(C["connect"])(function(e){var t=e.user;return{currentUser:t.currentUser}}),c=j["a"].create(),r(o=c((l=function(e){function t(){var e,a;m()(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return a=v()(this,(e=y()(t)).call.apply(e,[this].concat(i))),a.setBaseInfo=function(){var e=a.props,t=e.currentUser,n=e.form;Object.keys(n.getFieldsValue()).forEach(function(e){var a={};a[e]=t[e]||null,n.setFieldsValue(a)})},a.getViewDom=function(e){a.view=e},a}return M()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.setBaseInfo()}},{key:"getAvatarURL",value:function(){var e=this.props.currentUser;if(e.avatar)return e.avatar;var t="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png";return t}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return N.a.createElement("div",{className:L.a.baseView,ref:this.getViewDom},N.a.createElement("div",{className:L.a.left},N.a.createElement(j["a"],{layout:"vertical",onSubmit:this.handleSubmit,hideRequiredMark:!0},N.a.createElement(T,{label:Object(F["formatMessage"])({id:"app.settings.basic.email"})},e("email",{rules:[{required:!0,message:Object(F["formatMessage"])({id:"app.settings.basic.email-message"},{})}]})(N.a.createElement(p["a"],null))),N.a.createElement(T,{label:Object(F["formatMessage"])({id:"app.settings.basic.nickname"})},e("name",{rules:[{required:!0,message:Object(F["formatMessage"])({id:"app.settings.basic.nickname-message"},{})}]})(N.a.createElement(p["a"],null))),N.a.createElement(T,{label:Object(F["formatMessage"])({id:"app.settings.basic.profile"})},e("profile",{rules:[{required:!0,message:Object(F["formatMessage"])({id:"app.settings.basic.profile-message"},{})}]})(N.a.createElement(p["a"].TextArea,{placeholder:Object(F["formatMessage"])({id:"app.settings.basic.profile-placeholder"}),rows:4}))),N.a.createElement(T,{label:Object(F["formatMessage"])({id:"app.settings.basic.country"})},e("country",{rules:[{required:!0,message:Object(F["formatMessage"])({id:"app.settings.basic.country-message"},{})}]})(N.a.createElement(w["a"],{style:{maxWidth:220}},N.a.createElement(X,{value:"China"},"\u4e2d\u56fd")))),N.a.createElement(T,{label:Object(F["formatMessage"])({id:"app.settings.basic.geographic"})},e("geographic",{rules:[{required:!0,message:Object(F["formatMessage"])({id:"app.settings.basic.geographic-message"},{})},{validator:Z}]})(N.a.createElement(z,null))),N.a.createElement(T,{label:Object(F["formatMessage"])({id:"app.settings.basic.address"})},e("address",{rules:[{required:!0,message:Object(F["formatMessage"])({id:"app.settings.basic.address-message"},{})}]})(N.a.createElement(p["a"],null))),N.a.createElement(T,{label:Object(F["formatMessage"])({id:"app.settings.basic.phone"})},e("phone",{rules:[{required:!0,message:Object(F["formatMessage"])({id:"app.settings.basic.phone-message"},{})},{validator:W}]})(N.a.createElement(_,null))),N.a.createElement(O["a"],{type:"primary"},N.a.createElement(F["FormattedMessage"],{id:"app.settings.basic.update",defaultMessage:"Update Information"})))),N.a.createElement("div",{className:L.a.right},N.a.createElement(x,{avatar:this.getAvatarURL()})))}}]),t}(k["Component"]),o=l))||o)||o);t["default"]=R},gJV7:function(e,t,a){e.exports={baseView:"antd-pro-pages-account-settings-base-view-baseView",left:"antd-pro-pages-account-settings-base-view-left",right:"antd-pro-pages-account-settings-base-view-right",avatar_title:"antd-pro-pages-account-settings-base-view-avatar_title",avatar:"antd-pro-pages-account-settings-base-view-avatar",button_view:"antd-pro-pages-account-settings-base-view-button_view"}},uy6Z:function(e,t,a){e.exports={area_code:"antd-pro-pages-account-settings-phone-view-area_code",phone_number:"antd-pro-pages-account-settings-phone-view-phone_number"}}}]);