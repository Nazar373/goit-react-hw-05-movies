"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[107],{107:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(885),a=n(791),u=n(731),c=n(72),o=n(184),i=function(t){var e=t.setSearchParams,n=(0,a.useState)(""),u=(0,r.Z)(n,2),c=u[0],i=u[1];return(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(c?{query:c.trim()}:{}),i("")},children:[(0,o.jsx)("input",{type:"text",onChange:function(t){i(t.target.value)},value:c}),(0,o.jsx)("button",{type:"submit",children:"Search"})]})},s=n(689),f=function(t){var e=t.movies,n=(0,s.TH)();return(0,o.jsx)("ul",{children:e.map((function(t){var e=t.title,r=t.name,a=t.id;return(0,o.jsx)("li",{children:(0,o.jsx)(u.rU,{to:"/movies/".concat(a),state:{from:n},children:e||r})},a)}))})},p=function(){var t,e=(0,a.useState)([]),n=(0,r.Z)(e,2),s=n[0],p=n[1],v=(0,u.lr)(),l=(0,r.Z)(v,2),h=l[0],d=l[1],m=null!==(t=h.get("query"))&&void 0!==t?t:"";return(0,a.useEffect)((function(){m&&(0,c.qF)(m).then((function(t){p(t)})).catch((function(t){return console.log(t)}))}),[m]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{setSearchParams:d}),(0,o.jsx)(f,{movies:s})]})}},72:function(t,e,n){n.d(e,{TP:function(){return s},qF:function(){return i},t$:function(){return o},tx:function(){return p},zv:function(){return f}});var r=n(165),a=n(861),u=n(44);u.ZP.defaults.baseURL="https://api.themoviedb.org/3";var c="7c5d8002fbbd5b76a32e331288c58dfe",o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/trending/all/day?api_key=".concat(c));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/search/movie?api_key=".concat(c,"&query=").concat(e));case 2:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(e,"?api_key=").concat(c));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return n=t.sent,a=n.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.ZP.get("/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return n=t.sent,a=n.data,t.abrupt("return",a.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=107.43b289cc.chunk.js.map