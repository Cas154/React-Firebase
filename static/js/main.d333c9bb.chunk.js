(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{36:function(e,t,c){},43:function(e,t,c){},46:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(6),a=c.n(n),r=c(37),s=c.n(r),i=(c(43),c(22)),o=c(13),l=c(0),u=c.n(l),j=c(1),b=c(11),d=c(38),O=c(15),p=c(12),x=Object(d.a)({apiKey:"AIzaSyAxqKZb6B_Z5MwRK34Jkeo2B4wK9X4wjTM",authDomain:"react-sql-project-7f824.firebaseapp.com",projectId:"react-sql-project-7f824",storageBucket:"react-sql-project-7f824.appspot.com",messagingSenderId:"215403116008",appId:"1:215403116008:web:6674fff1290d6b1862e05d",measurementId:"G-GH4VEP16JN"}),h=Object(O.g)(x),f=Object(p.g)(x),v=new O.c,m=function(){var e=Object(j.a)(u.a.mark((function e(){var t,c,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.l)(h,v);case 3:return t=e.sent,c=t.user,n=Object(p.j)(Object(p.c)(f,"users"),Object(p.l)("uid","==",c.uid)),e.next=8,Object(p.f)(n);case 8:if(0!==e.sent.docs.length){e.next=12;break}return e.next=12,Object(p.b)(Object(p.c)(f,"users"),{uid:c.uid,name:c.displayName,authProvider:"google",email:c.email});case 12:e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(u.a.mark((function e(t,c,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(O.f)(h,c,n);case 3:return a=e.sent,r=a.user,e.next=7,Object(p.b)(Object(p.c)(f,"users"),{uid:r.uid,name:t,authProvider:"local",email:c});case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,c,n){return e.apply(this,arguments)}}(),k=function(){Object(O.m)(h)},_=c(24),w=(c(46),c(7));var N=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),l=s[0],d=s[1],p=Object(_.a)(h),x=Object(b.a)(p,2),f=x[0],v=x[1],g=Object(o.f)();Object(n.useEffect)((function(){v||f&&g("/")}),[f,v]);var k=function(){var e=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c&&l){e.next=3;break}return alert("Please fill in all fields"),e.abrupt("return");case 3:return console.log(h),e.prev=4,e.next=7,Object(O.k)(h,c,l);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(4),console.error(e.t0),alert(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"login",children:Object(w.jsxs)("div",{className:"login__container",children:[Object(w.jsx)("input",{type:"text",className:"login__textBox",value:c,onChange:function(e){return a(e.target.value)},placeholder:"E-mail Address"}),Object(w.jsx)("input",{type:"password",className:"login__textBox",value:l,onChange:function(e){return d(e.target.value)},placeholder:"Password"}),Object(w.jsx)("button",{className:"login__btn",onClick:k,children:"Login"}),Object(w.jsx)("button",{className:"login__btn login__google",onClick:m,children:"Login with Google"}),Object(w.jsx)("div",{children:Object(w.jsx)(i.b,{to:"/reset",children:"Forgot Password"})}),Object(w.jsxs)("div",{children:["Don't have an account? ",Object(w.jsx)(i.b,{to:"/register",children:"Register"})," now."]})]})})};c(48);var C=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),l=s[0],u=s[1],j=Object(n.useState)(""),d=Object(b.a)(j,2),O=d[0],p=d[1],x=Object(_.a)(h),f=Object(b.a)(x,2),v=f[0],k=f[1],N=Object(o.f)();return Object(n.useEffect)((function(){k||v&&N("/")}),[v,k]),Object(w.jsx)("div",{className:"register",children:Object(w.jsxs)("div",{className:"register__container",children:[Object(w.jsx)("input",{type:"text",className:"register__textBox",value:O,onChange:function(e){return p(e.target.value)},placeholder:"Full Name"}),Object(w.jsx)("input",{type:"text",className:"register__textBox",value:c,onChange:function(e){return a(e.target.value)},placeholder:"E-mail Address"}),Object(w.jsx)("input",{type:"password",className:"register__textBox",value:l,onChange:function(e){return u(e.target.value)},placeholder:"Password"}),Object(w.jsx)("button",{className:"register__btn",onClick:function(){O||alert("Please enter name"),g(O,c,l)},children:"Register"}),Object(w.jsx)("button",{className:"register__btn register__google",onClick:m,children:"Register with Google"}),Object(w.jsxs)("div",{children:["Already have an account? ",Object(w.jsx)(i.b,{to:"/",children:"Login"})," now."]})]})})};c(49);var y=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(_.a)(h),s=Object(b.a)(r,2),l=s[0],u=s[1],j=Object(o.f)();return Object(n.useEffect)((function(){u||l&&j("/")}),[l,u]),Object(w.jsx)("div",{className:"reset",children:Object(w.jsxs)("div",{className:"reset__container",children:[Object(w.jsx)("input",{type:"text",className:"reset__textBox",value:c,onChange:function(e){return a(e.target.value)},placeholder:"E-mail Address"}),Object(w.jsx)("button",{className:"reset__btn",onClick:function(){return Object(O.j)(c)},children:"Send password reset email"}),Object(w.jsxs)("div",{children:["Don't have an account? ",Object(w.jsx)(i.b,{to:"/register",children:"Register"})," now."]})]})})};c(36);var S=function(){var e=Object(_.a)(h),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),i=s[0],l=s[1],d=Object(o.f)(),O=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(p.j)(Object(p.c)(f,"users"),Object(p.l)("uid","==",null===c||void 0===c?void 0:c.uid)),e.next=4,Object(p.f)(t);case 4:n=e.sent,a=n.docs[0].data(),l(a.name),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),alert("An error occured while fetching user data");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){if(!a)return c?void O():d("/")}),[c,a]),Object(w.jsx)("div",{className:"dashboard",children:Object(w.jsxs)("div",{className:"dashboard__container",children:["Logged in as",Object(w.jsx)("div",{children:i}),Object(w.jsx)("div",{children:null===c||void 0===c?void 0:c.email}),Object(w.jsx)("button",{className:"dashboard__btn",onClick:k,children:"Logout"})]})})},E=(c(50),c(29));c(51),c(52);var A=function(e){var t=e.open,c=e.modalLable,n=e.children,a=e.custom_modal,r=e.onClose;return t?Object(w.jsx)("div",{className:"modalContainer",onClick:function(e){return"modalContainer"===e.target.className&&r(),null},children:Object(w.jsxs)("div",{className:"modal ".concat(a),children:[Object(w.jsxs)("div",{className:"modal__head",children:[Object(w.jsx)("h2",{children:c}),Object(w.jsx)("span",{className:"modal__close",onClick:r,children:"x"})]}),n]})}):null};c(53);var B=function(e){var t=e.onClose,c=e.open,n=e.title,a=e.description;return Object(w.jsx)(A,{modalLable:"Task Item",onClose:t,open:c,children:Object(w.jsxs)("div",{className:"taskItem",children:[Object(w.jsx)("h2",{children:n}),Object(w.jsx)("p",{children:a})]})})};c(54);var D=function(e){var t=e.open,c=e.onClose,a=e.toEditTitle,r=e.toEditDescription,s=e.id,i=Object(n.useState)(a),o=Object(b.a)(i,2),l=o[0],d=o[1],O=Object(n.useState)(r),x=Object(b.a)(O,2),h=x[0],v=x[1],m=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Object(p.e)(f,"tasks/".concat(s)),e.prev=2,e.next=5,Object(p.k)(n,{title:l,description:h});case 5:c(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(A,{modalLable:"Edit Task",onClose:c,open:t,children:Object(w.jsxs)("form",{onSubmit:m,className:"editTask",name:"updateTask",children:[Object(w.jsx)("input",{type:"text",name:"title",onChange:function(e){return d(e.target.value.toUpperCase())},value:l}),Object(w.jsx)("textarea",{onChange:function(e){return v(e.target.value)},value:h}),Object(w.jsx)("button",{type:"submit",children:"Edit"})]})})};var T=function(e){var t=e.id,c=e.title,a=e.description,r=e.completed,s=Object(n.useState)(r),i=Object(b.a)(s,2),o=i[0],l=i[1],d=Object(n.useState)({edit:!1,view:!1}),O=Object(b.a)(d,2),x=O[0],h=O[1],v=function(){h({edit:!1,view:!1})},m=function(){var e=Object(j.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(p.e)(f,"tasks/".concat(t)),e.prev=1,e.next=4,Object(p.k)(c,{completed:o});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(p.e)(f,"tasks/".concat(t)),e.prev=1,e.next=4,Object(p.d)(c);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"task ".concat(o&&"task--borderColor"),children:[Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{id:"checkbox-".concat(t),className:"checkbox-custom",name:"checkbox",checked:o,onChange:m,type:"checkbox"}),Object(w.jsx)("label",{htmlFor:"checkbox-".concat(t),className:"checkbox-custom-label",onClick:function(){return l(!o)}})]}),Object(w.jsxs)("div",{className:"task__body",children:[Object(w.jsx)("h2",{children:c}),Object(w.jsx)("p",{children:a}),Object(w.jsxs)("div",{className:"task__buttons",children:[Object(w.jsxs)("div",{className:"task__deleteNedit",children:[Object(w.jsx)("button",{className:"task__editButton",onClick:function(){return h(Object(E.a)(Object(E.a)({},x),{},{edit:!0}))},children:"Edit"}),Object(w.jsx)("button",{className:"task__deleteButton",onClick:g,children:"Delete"})]}),Object(w.jsx)("button",{onClick:function(){return h(Object(E.a)(Object(E.a)({},x),{},{view:!0}))},children:"View"})]})]}),x.view&&Object(w.jsx)(B,{onClose:v,title:c,description:a,open:x.view}),x.edit&&Object(w.jsx)(D,{onClose:v,toEditTitle:c,toEditDescription:a,open:x.edit,id:t})]})};c(55);var L=function(e){var t=e.onClose,c=e.open,a=Object(n.useState)(""),r=Object(b.a)(a,2),s=r[0],i=r[1],o=Object(n.useState)(""),l=Object(b.a)(o,2),d=l[0],O=l[1],x=function(){var e=Object(j.a)(u.a.mark((function e(c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,Object(p.b)(Object(p.c)(f,"tasks"),{title:s,description:d,completed:!1,created:p.a.now()});case 4:t(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)(A,{modalLable:"Add Task",onClose:t,open:c,children:Object(w.jsxs)("form",{onSubmit:x,className:"addTask",name:"addTask",children:[Object(w.jsx)("input",{type:"text",name:"title",onChange:function(e){return i(e.target.value.toUpperCase())},value:s,placeholder:"Enter title"}),Object(w.jsx)("textarea",{onChange:function(e){return O(e.target.value)},placeholder:"Enter task decription",value:d}),Object(w.jsx)("button",{type:"submit",children:"Done"})]})})};var I=function(){var e=Object(_.a)(h),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,1)[0],i=Object(n.useState)(!1),l=Object(b.a)(i,2),d=l[0],O=l[1],x=Object(n.useState)([]),v=Object(b.a)(x,2),m=v[0],g=v[1],N=Object(o.f)();Object(n.useEffect)((function(){var e=Object(p.j)(Object(p.c)(f,"tasks"),Object(p.i)("created","desc"));Object(p.h)(e,(function(e){g(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]);var C=function(){var e=Object(j.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=Object(p.j)(Object(p.c)(f,"users"),Object(p.l)("uid","==",null===c||void 0===c?void 0:c.uid)),e.next=4,Object(p.f)(t);case 4:n=e.sent,a=n.docs[0].data(),s(a.name),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0),alert("An error occured while fetching user data");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){if(!a)return c?void C():N("/login")}),[c,a]);var y=function(){var e=Object(j.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(p.j)(Object(p.c)(f,"tasks"),Object(p.l)("completed","==",!0)),e.next=3,Object(p.f)(t);case 3:c=e.sent;try{c.forEach((function(e){console.log(e.id),Object(p.d)(Object(p.e)(f,"tasks",e.id))}))}catch(n){alert(n),console.log(n.message)}case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"taskManager",children:[Object(w.jsx)("header",{children:"Task Manager"}),Object(w.jsxs)("div",{className:"taskManager__container",children:[Object(w.jsx)("button",{onClick:function(){return O(!0)},children:"Add task +"}),Object(w.jsx)("div",{className:"taskManager__tasks",children:m.map((function(e){return Object(w.jsx)(T,{id:e.id,completed:e.data.completed,title:e.data.title,description:e.data.description},e.id)}))}),Object(w.jsxs)("div",{className:"taskManager__deleteAll",children:[Object(w.jsx)("button",{onClick:y,children:"Delete All done"}),Object(w.jsx)("button",{onClick:function(){k()},children:"Logout"})]})]}),d&&Object(w.jsx)(L,{onClose:function(){return O(!1)},open:d})]})};var M=function(){return Object(w.jsx)("div",{className:"app",children:Object(w.jsx)(i.a,{children:Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{exact:!0,path:"/",element:Object(w.jsx)(I,{})}),Object(w.jsx)(o.a,{exact:!0,path:"/Register",element:Object(w.jsx)(C,{})}),Object(w.jsx)(o.a,{exact:!0,path:"/Reset",element:Object(w.jsx)(y,{})}),Object(w.jsx)(o.a,{exact:!0,path:"/Dashboard",element:Object(w.jsx)(S,{})}),Object(w.jsx)(o.a,{exact:!0,path:"/login",element:Object(w.jsx)(N,{})})]})})})};s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d333c9bb.chunk.js.map