(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[126],{"FLM/":function(e,t,n){"use strict";n.r(t);var i,a,r=n("2Taf"),l=n.n(r),o=n("vZ4D"),s=n.n(o),c=n("l4Ni"),u=n.n(c),d=n("ujKo"),p=n.n(d),h=n("MhPg"),f=n.n(h),m=n("q1tI"),y=n.n(m),v=n("yP6+"),x=n("RFWI"),g=v["Guide"].Arc,k=v["Guide"].Html,E=v["Guide"].Line,F=function(e){switch(e){case"2":return"\u5dee";case"4":return"\u4e2d";case"6":return"\u826f";case"8":return"\u4f18";default:return""}};v["Shape"].registerShape("point","pointer",{drawShape:function(e,t){var n=e.points[0];n=this.parsePoint(n);var i=this.parsePoint({x:0,y:0});return t.addShape("line",{attrs:{x1:i.x,y1:i.y,x2:n.x,y2:n.y,stroke:e.color,lineWidth:2,lineCap:"round"}}),t.addShape("circle",{attrs:{x:i.x,y:i.y,r:6,stroke:e.color,lineWidth:3,fill:"#fff"}})}});var S=(i=Object(x["a"])(),i(a=function(e){function t(){return l()(this,t),u()(this,p()(t).apply(this,arguments))}return f()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.height,i=e.percent,a=e.forceFit,r=void 0===a||a,l=e.formatter,o=void 0===l?F:l,s=e.color,c=void 0===s?"#2F9CFF":s,u=e.bgColor,d=void 0===u?"#F0F2F5":u,p={value:{type:"linear",min:0,max:10,tickCount:6,nice:!0}},h=[{value:i/10}];return y.a.createElement(v["Chart"],{height:n,data:h,scale:p,padding:[-16,0,16,0],forceFit:r},y.a.createElement(v["Coord"],{type:"polar",startAngle:-1.25*Math.PI,endAngle:.25*Math.PI,radius:.8}),y.a.createElement(v["Axis"],{name:"1",line:null}),y.a.createElement(v["Axis"],{line:null,tickLine:null,subTickLine:null,name:"value",zIndex:2,gird:null,label:{offset:-12,formatter:o,textStyle:{fontSize:12,fill:"rgba(0, 0, 0, 0.65)",textAlign:"center"}}}),y.a.createElement(v["Guide"],null,y.a.createElement(E,{start:[3,.905],end:[3,.85],lineStyle:{stroke:c,lineDash:null,lineWidth:2}}),y.a.createElement(E,{start:[5,.905],end:[5,.85],lineStyle:{stroke:c,lineDash:null,lineWidth:3}}),y.a.createElement(E,{start:[7,.905],end:[7,.85],lineStyle:{stroke:c,lineDash:null,lineWidth:3}}),y.a.createElement(g,{zIndex:0,start:[0,.965],end:[10,.965],style:{stroke:d,lineWidth:10}}),y.a.createElement(g,{zIndex:1,start:[0,.965],end:[h[0].value,.965],style:{stroke:c,lineWidth:10}}),y.a.createElement(k,{position:["50%","95%"],html:function(){return'\n                <div style="width: 300px;text-align: center;font-size: 12px!important;">\n                  <p style="font-size: 14px; color: rgba(0,0,0,0.43);margin: 0;">'.concat(t,'</p>\n                  <p style="font-size: 24px;color: rgba(0,0,0,0.85);margin: 0;">\n                    ').concat(10*h[0].value,"%\n                  </p>\n                </div>")}})),y.a.createElement(v["Geom"],{line:!1,type:"point",position:"value*1",shape:"pointer",color:c,active:!1}))}}]),t}(y.a.Component))||a);t["default"]=S}}]);