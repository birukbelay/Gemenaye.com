(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{2:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"h",(function(){return l}));var r="REQUEST_ISSUES",a="RECEIVED_ISSUES",s="LOADING_ERROR",o="NETWORK_ERROR",u="POSTING_APPROVAL",c="APPROVAL_POSTED",i={APPROVED:"getApproved",DECLINED:"getDeclined",PENDING:"pending"},l={APPROVE:"approve",DECLINE:"decline"}},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return h}));var r=n(9),a=n.n(r),s=n(18),o="http://3f1f2fb7f186.ngrok.io/api/",u=n(2),c=n(32),i=function(e,t){return setTimeout((function(){return e(c)}),t||100)},l=n(33),d=n.n(l),f=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:u.g}),t.next=4,v(e);case 4:r=t.sent,console.log("MainIssues",r),n(p(r)),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),n({type:u.c,e:t.t0}),i((function(e){console.log("index",e),n({type:u.d,issues:e}),n(p(e))}));case 14:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return{type:u.f,issues:e,recievedAt:Date.now()}};function v(e){return E.apply(this,arguments)}function E(){return(E=Object(s.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o+"issues/".concat(t,"/"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(e,t){return function(n){n({type:u.e}),d.a.post(o+"issues/".concat(e,"/").concat(t,"/")).then((function(r){n(function(e,t){return{type:u.a,id:e,approvalType:t,recievedAt:Date.now()}}(e,t)),console.log("postRes-",r)})).catch((function(e){n({type:u.c,error:e}),console.log(e)}))}}},32:function(e){e.exports=JSON.parse('[{"id":"1","name":"abebe","issue":"very important Issue","status":0},{"id":"1","name":"abebe","issue":"very important Issue","status":1},{"id":"1","name":"abebe","issue":"very important Issue","status":2},{"id":"1","name":"abebe","issue":"very important Issue","status":0},{"id":"1","name":"abebe","issue":"very important Issue","status":0},{"id":"1","name":"abebe","issue":"very important Issue","status":0},{"id":"1","name":"abebe","issue":"very important Issue","status":0},{"id":"1","name":"abebe","issue":"very important Issue","status":0}]')},35:function(e,t,n){e.exports=n(66)},40:function(e,t,n){},41:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(10),o=n.n(s),u=n(34),c=n(1),i=(n(40),n(41),Object(r.lazy)((function(){return n.e(4).then(n.bind(null,70))}))),l=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,69))}));var d=function(){return a.a.createElement(u.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null," Loading ...")},a.a.createElement(c.c,null,a.a.createElement(c.a,{exact:!0,path:"/old",component:i}),a.a.createElement(c.a,{exact:!0,path:"/",component:l}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=n(19),p=n(6),v=n(31),E=n(2),h=Object(p.c)({issuesLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.f:return!1;case E.g:return!0;case E.c:return!1;default:return e}},issuesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.f:return t.issues;default:return e}},localIssuesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.d:return t.issues;default:return e}},networkError:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.f:case E.g:return!1;case E.c:return!0;default:return e}}}),b=(n(47),[v.a]);var m=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):p.d)(p.a.apply(void 0,b)),y=Object(p.c)({issues:h}),O=Object(p.e)(y,{},m),g=n(20);O.dispatch(Object(g.a)(E.b.PENDING)),o.a.render(a.a.createElement(f.a,{store:O},a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.b37a99ef.chunk.js.map