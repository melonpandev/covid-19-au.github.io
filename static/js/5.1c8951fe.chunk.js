(this["webpackJsonp2019-ncov"]=this["webpackJsonp2019-ncov"]||[]).push([[5],{208:function(e,t,o){"use strict";o.r(t);var a=o(8),n=o(0),r=o.n(n),c=o(206);t.default=function(e){var t=e.province,o=e.newData,i=Object(n.useState)(!0),s=Object(a.a)(i,2),f=s[0],u=s[1];Object(n.useEffect)((function(){u(!1)}),[t]);var A=Object(n.useState)(null),l=Object(a.a)(A,2),p=l[0],d=l[1];return Object(n.useEffect)((function(){for(var e={NSW:"AU-NSW",ACT:"AU-ACT",NT:"AU-NT",WA:"AU-WA",VIC:"AU-VIC",QLD:"AU-QLD",SA:"AU-SA",TAS:"AU-TAS"},t=[["state","confirmed"]],a=0;a<o.length;a++)t.push([e[o[a][0]],parseInt(o[a][1])]);d(t)}),[t]),f?r.a.createElement("div",{className:"loading"},"Loading..."):r.a.createElement(c.a,{width:window.innerWidth<960?"100%":"auto",left:"auto",align:"right",top:"40%",chartType:"GeoChart",data:p,options:{region:"AU",colorAxis:{colors:["#ffefef","#ffc0b1","#ff8c71","#ef1717"]},backgroundColor:"white",datalessRegionColor:"rgb(216,221,224)",defaultColor:"#f5f5f5",resolution:"provinces"},mapsApiKey:"YOUR_KEY_HERE",rootProps:{"data-testid":"3"}})}}}]);
//# sourceMappingURL=5.1c8951fe.chunk.js.map