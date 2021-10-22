(this["webpackJsonpexpenses-tracker"]=this["webpackJsonpexpenses-tracker"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),l=n.n(c),s=(n(14),n(5)),i=n(2),r=n(7),o=(n(15),n(0)),j=function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),j=r[0],u=r[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),x=b[0],v=b[1];return Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:parseInt(j),date:new Date(x)};e.onSaveExpData(n),l(""),u(""),v("")},children:[Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Title"}),Object(o.jsx)("input",{type:"text",value:c,onChange:function(e){var t=e.target.value;l(t)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{type:"number",value:j,min:"0.01",step:"0.01",onChange:function(e){var t=e.target.value;u(t)}})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Date"}),Object(o.jsx)("input",{type:"date",value:x,min:"2019-01-01",step:"2022-12-31",onChange:function(e){var t=e.target.value;v(t)}})]})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{type:"reset",onClick:e.onCollape,children:"Cancel"}),Object(o.jsx)("button",{type:"submit",children:"Add expense"})]})]})},u=(n(17),function(e){var t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],l=n[1];function s(){l(!c)}return Object(o.jsx)("div",{className:"new-expense",children:c?Object(o.jsx)("button",{onClick:s,children:"Add expense"}):Object(o.jsx)(j,{onSaveExpData:function(t){var n=Object(r.a)(Object(r.a)({},t),{},{id:Math.random().toString()});e.onAddExp(n)},onCollape:s})})});n(18),n(19);var d=function(e){var t="card "+e.className;return Object(o.jsx)("div",{className:t,children:e.children})},b=(n(20),function(e){return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsxs)("div",{className:"expenses-filter__control",children:[Object(o.jsx)("label",{children:"Filter by year"}),Object(o.jsxs)("select",{value:e.selectedYr,onChange:function(t){return e.onFilterYR(t.target.value)},children:[Object(o.jsx)("option",{value:"2022",children:"2022"}),Object(o.jsx)("option",{value:"2021",children:"2021"}),Object(o.jsx)("option",{value:"2020",children:"2020"}),Object(o.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(21);var x=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsx)("div",{className:"expense-date__month",children:t}),Object(o.jsx)("div",{className:"expense-date__year",children:a}),Object(o.jsx)("div",{className:"expense-date__day",children:n})]})};n(22);var v=function(e){var t=Object(a.useState)(e.title),n=Object(i.a)(t,2),c=n[0],l=n[1];return Object(o.jsxs)(d,{className:"expense-item",children:[Object(o.jsx)(x,{date:e.date}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsx)("h2",{children:c}),Object(o.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(o.jsx)("button",{onClick:function(e){l("Update!!");var t=e.target;return console.log(t)},children:"Change Title"})]})};n(23);var O=function(e){return 0===e.items.length?Object(o.jsx)("h2",{className:"expenses-list__fallback",children:"No data found."}):Object(o.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e,t){return Object(o.jsx)(v,{title:e.title,date:e.date,amount:e.amount},e.id)}))})},h=n(9);n(24),n(25);function p(e){var t="0%";return e.maxVal>0&&(t=Math.round(e.value/e.maxVal*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}var m=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(s.a)(t));return console.log(t),console.log(n),Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(p,{value:e.value,maxVal:n,label:e.label},e.label)}))})};function f(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(h.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value,l=c.date.getMonth();n[l].value+=c.amount,console.log(c.amount),console.log(n[l])}}catch(s){a.e(s)}finally{a.f()}return Object(o.jsx)(m,{dataPoints:n})}var g=function(e){var t=Object(a.useState)("2021"),n=Object(i.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(o.jsx)("div",{children:Object(o.jsxs)(d,{className:"expenses",children:[Object(o.jsx)(b,{selectedYr:c,onFilterYR:function(e){l(e)},value:e.onNewData}),Object(o.jsx)(f,{expenses:s}),Object(o.jsx)(O,{items:s})]})})},N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var _=function(){var e=Object(a.useState)(N),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Let's get started!"}),Object(o.jsx)(u,{onAddExp:function(e){console.log("in app js"),c((function(t){return[e].concat(Object(s.a)(t))}))}}),Object(o.jsx)(g,{items:n})]})};l.a.render(Object(o.jsx)(_,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.0f2c748e.chunk.js.map