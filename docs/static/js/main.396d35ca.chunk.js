(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=(n(15),n(2)),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=e.categories,c=Object(a.useState)(""),r=Object(i.a)(c,2),u=r[0],j=r[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t([u].concat(Object(s.a)(n))),j("")),console.log("Submit hecho")},children:Object(o.jsx)("input",{type:"text",value:u,onChange:function(e){console.log(e.target.value),j(e.target.value)}})})},j=n(10),l=n(6),d=n.n(l),b=n(8),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=C9XbWRKLREnHgd8hRDzn4DEBiQlnhSiQ"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){e.id;var t=e.title,n=e.url;return Object(o.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:n,alt:t}),Object(o.jsx)("p",{children:t})]})},f=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){m(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,r=n.loading;return console.log(r),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(o.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(o.jsx)(p,Object(j.a)({img:e},e),e.id)}))})]})},g=function(){var e=Object(a.useState)(["Dragon Ball Z"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:c,categories:n}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(e){return Object(o.jsx)(f,{category:e},e)}))})]})};r.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.396d35ca.chunk.js.map