(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-257280e4"],{"356d":function(e,t,a){"use strict";var s=a("feb6"),n=a.n(s);n.a},"7db3":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("h1",{staticClass:"mb-5"},[e._v("Zakażenia w Polsce")]),a("Stats",{attrs:{sick:""+e.new_sick,sickText:"Dzisiejsze zakażenia",recovery:""+e.new_recovery,recoveryText:"Liczba wyzdrowień",deads:""+e.new_deads,deadsText:"Dzisiejsze zgony",withAll:!0,all:""+e.all,allText:"Zakażenia",allDeaths:""+e.allDeaths,allDeathsText:"Zgony"}}),a("Stats",{staticClass:"mt-3",attrs:{sick:""+e.active,sickText:"Aktualnie chorzy",recovery:""+e.tests,recoveryText:"Wykonane testy",deads:""+e.critical,deadsText:"Stan krytyczny"}})],1)},n=[],c=(a("96cf"),a("1da1")),r=a("bc3a"),i=a.n(r),o=a("5c41"),l={name:"InPoland",components:{Stats:o["a"]},data:function(){return{new_sick:"",new_recovery:"",new_deads:"",critical:"",active:"",tests:"",all:"",allDeaths:""}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.get("https://coronavirus-19-api.herokuapp.com/countries/Poland");case 3:a=t.sent,s=a.data,e.new_sick=s.todayCases,e.new_recovery=s.recovered,e.new_deads=s.todayDeaths,e.critical=s.critical,e.active=s.active,e.tests=s.totalTests,e.all=s.cases,e.allDeaths=s.deaths,t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}},d=l,u=(a("356d"),a("2877")),v=Object(u["a"])(d,s,n,!1,null,"3f4ec8ac",null);t["default"]=v.exports},feb6:function(e,t,a){}}]);
//# sourceMappingURL=chunk-257280e4.b645ff84.js.map