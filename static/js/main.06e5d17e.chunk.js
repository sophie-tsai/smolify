(this.webpackJsonpSmolify=this.webpackJsonpSmolify||[]).push([[0],{45:function(e,t,a){e.exports=a(85)},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),s=a(3),u=a(19),o=a(42),l=a(16),i=a(1),p=a.n(i),m=a(5),f=a(13),b=a.n(f),d=a(14),E=a.n(d),v={signUp:0,logIn:0,update:0};function h(e){return{type:"SET_SIGN_UP_CODE",payload:e}}function k(e){return{type:"SET_LOG_IN_CODE",payload:e}}function g(e){return{type:"SET_UPDATE_CODE",payload:e}}var O="http://localhost:5000",N=function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(O,"/users/").concat(t));case 3:if(n=e.sent,(r=n.data)[0]){e.next=10;break}if(!a){e.next=8;break}return e.abrupt("return");case 8:return A.dispatch(k(404)),e.abrupt("return");case 10:return A.dispatch(k(200)),e.abrupt("return",r[0]);case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("".concat(O,"/users"),{user:{user:t}});case 3:return a=e.sent,n=a.data,A.dispatch(h(200)),e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(0),A.dispatch(h(e.t0.response.status)),e.abrupt("return",e.t0.response.status);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("".concat(O,"/users/").concat(t));case 3:a=e.sent,console.log(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.put("".concat(O,"/users/").concat(t),{updatedUser:a});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),A.dispatch(g(e.t0.response.status)),e.abrupt("return",e.t0.response.status);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("".concat(O,"/users/").concat(t,"/urls"));case 3:return a=e.sent,e.abrupt("return",{userLinks:a.data,totalLinks:a.data.length});case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.delete("".concat(O,"/urls/").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(m.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.post("".concat(O,"/urls"),{url:{longUrl:t,user:a}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),C={username:"",userId:""};function S(e,t){return function(){var a=Object(m.a)(p.a.mark((function a(n){var r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,N(e,t);case 2:if(r=a.sent){a.next=5;break}return a.abrupt("return");case 5:n({type:"LOG_IN_USER",payload:{username:r.user,userId:r._id}}),b.a.set("currentUser","".concat(e));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}function I(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:if(403!==(n=t.sent)){t.next=5;break}return t.abrupt("return");case 5:console.log("newuser",n),a({type:"CREATE_USER_ACCOUNT",payload:{username:n.user,userId:n._id}}),b.a.set("currentUser","".concat(e));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var L=a(44),T={userLinks:[],totalLinks:0};var D=Object(u.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_IN_USER":case"CREATE_USER_ACCOUNT":case"UPDATE_USERNAME":return Object(l.a)({},e,{},t.payload);case"DELETE_USER":case"LOG_OUT_USER":return C;default:return e}},links:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_LINKS":return Object(l.a)({},e,{},t.payload);case"DELETE_LINK":var a=e.userLinks.filter((function(e){return e._id!==t.payload}));return{userLinks:a,totalLinks:e.totalLinks-1};case"ADD_LINK":return{userLinks:[t.payload].concat(Object(L.a)(e.userLinks)),totalLinks:e.totalLinks+1};default:return e}},statusCodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SIGN_UP_CODE":return Object(l.a)({},e,{signUp:t.payload});case"SET_LOG_IN_CODE":return Object(l.a)({},e,{logIn:t.payload});case"SET_UPDATE_CODE":return Object(l.a)({},e,{update:t.payload});default:return e}}}),R=Object(u.d)(D,Object(u.a)(o.a));R.subscribe((function(){return console.log("global state",R.getState())}));var A=R,G=a(24),K=a.n(G);a(71),a(72);var P=function(){var e=Object(s.c)((function(e){return e.user.username}));return r.a.createElement("div",{className:"page-container landing-page"},r.a.createElement("h1",{className:"landing-tagline"},"shorten, manage, and track your links!"),e?r.a.createElement("button",{className:"button button-primary"},r.a.createElement(c.b,{to:"/links"},"manage links")):r.a.createElement("button",{className:"button button-primary"},r.a.createElement(c.b,{to:"/signup"},"get started")))};a(74);var M=function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("h2",{className:"title"},r.a.createElement(c.b,{to:"/"},"smolify ")),r.a.createElement("p",{className:"header-item"},r.a.createElement(c.b,{to:"/links"},"links ")),r.a.createElement("p",{className:"header-item"},r.a.createElement(c.b,{to:"/account"},"account")))},F=a(8),J=a(15);a(75);var B=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.statusCodes.signUp})),a=Object(J.f)(),u=Object(n.useState)(""),o=Object(F.a)(u,2),l=o[0],i=o[1],f=Object(n.useState)(""),b=Object(F.a)(f,2),d=b[0],E=b[1];Object(n.useEffect)((function(){403===t&&E("username already taken"),200===t&&v()}),[t]);var v=function(){a.push("/links"),i(""),console.log("sign up successful"),E(""),e(h(0))},k=function(){var t=Object(m.a)(p.a.mark((function t(a){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,l){t.next=5;break}return E("please enter username"),t.abrupt("return");case 5:e(I(l)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"page-container auth-page"},r.a.createElement("h2",{className:"page-title"},"create an account"),r.a.createElement("strong",{className:"error-message"},d),r.a.createElement("form",{className:"auth-form"},r.a.createElement("input",{type:"text",placeholder:"username",className:"input username-auth-input",onChange:function(a){13===a.keyCode&&k(),d&&E(""),0!==t&&e(h(0));var n=a.target.value;i(n)},value:l}),r.a.createElement("br",null),r.a.createElement("button",{className:"button button-auth",onClick:k},"submit")),r.a.createElement("span",null,r.a.createElement(c.b,{to:"/login",className:"cta-link"},"already have an account?")))},q=a(17),z=a(18);a(78);var H=function(e){var t="".concat("http://localhost:5000","/").concat(e.token),a=Object(s.b)();return r.a.createElement("div",{className:"link-div"},r.a.createElement(q.a,{icon:z.d,onClick:function(){var t;a((t=e.id,function(){var e=Object(m.a)(p.a.mark((function e(a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:a({type:"DELETE_LINK",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},className:"delete-icon"}),r.a.createElement("div",{className:"links"},r.a.createElement("a",{className:"short-link",href:t,target:"_blank",rel:"noopener noreferrer"},t),r.a.createElement("p",{className:"long-link"},e.longUrl)),r.a.createElement("p",{className:"link-info"},e.timesClicked,"x"))};a(79);var Q=function(){var e=Object(s.c)((function(e){return e.links})).userLinks,t=r.a.createElement("div",{className:"no-links-container"},r.a.createElement("strong",{className:"no-links"},"shorten a link to start tracking!")),a=e.map((function(e){return r.a.createElement(H,{key:e._id,longUrl:e.longUrl,token:e.token,timesClicked:e.timesUsed,id:e._id})}));return r.a.createElement("div",{className:"all-links"},e.length>0?a:t)};a(80);var V=function(){return r.a.createElement("p",null,r.a.createElement(c.b,{to:"/signup",className:"cta-link"},"sign up")," ","or"," ",r.a.createElement(c.b,{to:"/login",className:"cta-link"},"log in")," ","to get started")};var W=function(){var e=Object(s.c)((function(e){return e.user})).userId,t=Object(n.useState)(""),a=Object(F.a)(t,2),c=a[0],u=a[1],o=Object(s.b)();return r.a.createElement("form",{className:"shorten-link-form"},r.a.createElement("div",{className:"input shorten-link-input-div"},r.a.createElement("span",{className:"https"},"https://"),r.a.createElement("input",{type:"text",className:"shorten-link-input",placeholder:"www...",value:c,onChange:function(e){var t=e.target.value;u(t)}})),r.a.createElement("button",{className:"shorten-link-button",onClick:function(){var t,a;o((t=c,a=e,function(){var e=Object(m.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U(t,a);case 2:n({type:"ADD_LINK",payload:t});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}},"shorten"))};var X=function(){var e=Object(s.c)((function(e){return e.user})).userId;return r.a.createElement("div",{className:"page-container links-page"},r.a.createElement("h2",{className:"page-title"},"your links"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null),r.a.createElement(Q,null)):r.a.createElement(V,null))};a(81);var Y=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(""),c=Object(F.a)(a,2),u=c[0],o=c[1],l=Object(s.c)((function(e){return e.user})),i=(l.username,l.userId,Object(s.c)((function(e){return e.statusCodes.update}))),p=Object(s.b)(),m=e.editMode,f=e.usernameInput,b=e.setUsernameInput,d=e.label,E=e.value;return Object(n.useEffect)((function(){m&&"username"===d&&t.current.focus()}),[m]),r.a.createElement("div",{className:"inside-box"},r.a.createElement("p",{className:"account-label"},d),m&&"username"===d?r.a.createElement("input",{ref:t,type:"text",className:"account-subcomponent-child-input",onChange:function(e){u&&o(""),0!==i&&p(g(0));var t=e.target.value;b(t)},value:f}):r.a.createElement("p",{className:"account-value"},E))};var Z=function(){var e=Object(s.b)(),t=Object(J.f)(),a=Object(s.c)((function(e){return e.user})),u=a.username,o=a.userId,l=Object(s.c)((function(e){return e.statusCodes.update})),i=Object(s.c)((function(e){return e.links})).totalLinks,f=Object(n.useState)(""),d=Object(F.a)(f,2),E=d[0],v=d[1],h=Object(n.useState)(""),k=Object(F.a)(h,2),O=k[0],N=k[1],j=Object(n.useState)(!1),_=Object(F.a)(j,2),w=_[0],U=_[1];return Object(n.useEffect)((function(){403===l&&v("username already taken")}),[l]),Object(n.useEffect)((function(){e(g(0))}),[]),r.a.createElement("div",{className:"page-container account-page"},r.a.createElement("h2",{className:"page-title"},"account details"),r.a.createElement("strong",{className:"error-message"},E),u?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"account-body"},r.a.createElement("div",{className:"account-subcomponent"},r.a.createElement("div",{className:"edit-icons-div"},w?r.a.createElement(q.a,{icon:z.d,className:"account-subcomponent-icon",onClick:function(){return U(!1)}}):r.a.createElement(q.a,{icon:z.b,className:"account-subcomponent-icon",onClick:function(){return U(!0)}})),r.a.createElement(Y,{label:"username",value:u,editMode:w,usernameInput:O,setUsernameInput:N}),r.a.createElement("div",{className:"submit-icon"},w&&r.a.createElement(q.a,{icon:z.a,className:"account-subcomponent-icon",style:{color:"green"},onClick:function(){var t,a;O?e((t=o,a=O,function(){var e=Object(m.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t,a);case 2:if(403!==e.sent){e.next=5;break}return e.abrupt("return");case 5:console.log("updated"),n({type:"UPDATE_USERNAME",payload:{username:a,userId:t}}),b.a.set("currentUser","".concat(a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):v("please enter username")}}))),r.a.createElement("div",{className:"account-subcomponent"},r.a.createElement("div",{className:"edit-icons-div"},r.a.createElement(c.b,{to:"/links"},r.a.createElement(q.a,{icon:z.c,className:"account-subcomponent-icon"}))),r.a.createElement(Y,{label:"total links",value:i,editMode:w,usernameInput:O,setUsernameInput:N}),r.a.createElement("div",{className:"submit-icon"})),r.a.createElement("div",{className:"account-subcomponent"},r.a.createElement("div",{className:"edit-icons-div"}),r.a.createElement("button",{className:"button button-primary button-45",onClick:function(){e((b.a.remove("currentUser"),{type:"LOG_OUT_USER"})),t.push("/")}},"log out"),r.a.createElement("div",{className:"submit-icon"}))),r.a.createElement("p",{className:"cta-link",onClick:function(){var a;window.confirm("are you sure you want to delete your account? this will delete all your links as well!")&&e((a=o,function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(a);case 2:console.log("deleted user",a),b.a.remove("currentUser"),t({type:"DELETE_USER"});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t.push("/")}},"delete account")):r.a.createElement(V,null))};a(82);var $=function(){var e=Object(s.b)(),t=Object(J.f)(),a=Object(s.c)((function(e){return e.statusCodes.logIn})),c=Object(n.useState)(""),u=Object(F.a)(c,2),o=u[0],l=u[1],i=Object(n.useState)(""),p=Object(F.a)(i,2),m=p[0],f=p[1];Object(n.useEffect)((function(){e(k(0))}),[]),Object(n.useEffect)((function(){0===a&&f(""),404===a&&f("username does not exist"),200===a&&b()}),[a]);var b=function(){t.push("/links"),l(""),console.log("log in successful"),f(""),e(k(0))},d=function(t){t.preventDefault(),o?e(S(o)):f("please enter username")};return r.a.createElement("div",{className:"page-container auth-page"},r.a.createElement("h2",{className:"page-title"},"log in"),r.a.createElement("strong",{className:"error-message"},m),r.a.createElement("form",{className:"auth-form"},r.a.createElement("input",{type:"text",placeholder:"username",className:"input username-auth-input",onChange:function(t){13===t.keyCode&&d(),m&&f(""),0!==a&&e(k(0));var n=t.target.value;l(n)},value:o}),r.a.createElement("br",null),r.a.createElement("button",{className:"button button-auth",onClick:d},"submit")))};a(83);var ee=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"https://sophietsai.com",target:"_blank",rel:"noopener noreferrer",className:"signature"},"created by sophie tsai."))};a(84);var te=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user})).userId;return Object(n.useEffect)((function(){b.a.get("currentUser")&&e(S(b.a.get("currentUser"),!0))}),[]),Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:n=t.sent,a({type:"GET_USER_LINKS",payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[t]),r.a.createElement("div",{className:"app-container"},r.a.createElement(M,{style:{flexGrow:0}}),r.a.createElement(J.c,null,r.a.createElement(J.a,{exact:!0,path:"/"},r.a.createElement(P,null)),r.a.createElement(J.a,{exact:!0,path:"/signup"},r.a.createElement(B,null)),r.a.createElement(J.a,{exact:!0,path:"/links"},r.a.createElement(X,{style:{flexGrow:1}})),r.a.createElement(J.a,{exact:!0,path:"/account"},r.a.createElement(Z,null)),r.a.createElement(J.a,{exact:!0,path:"/login"},r.a.createElement($,null))),r.a.createElement(ee,null))};K.a.render(r.a.createElement(s.a,{store:A},r.a.createElement(c.a,null,r.a.createElement(te,null))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.06e5d17e.chunk.js.map