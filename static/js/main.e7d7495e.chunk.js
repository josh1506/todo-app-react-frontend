(this["webpackJsonptodo-app-react-frontend"]=this["webpackJsonptodo-app-react-frontend"]||[]).push([[0],{73:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(26),o=a.n(c),s=a(9),r=a(8),i=a(20),l=a(44),d="authAdded",u="authRemoved",j=function(e){return localStorage.setItem("auth_token",e),{type:d,payload:{token:e}}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return t.payload.token;case u:return"";default:return e}},h=a(18),m=a(2),p=a(5),O=a.n(p),f=a(13),x=a(45),g=a.n(x),v=localStorage.getItem("auth_token"),k=g.a.create({baseURL:"https://todo-app-django-server.herokuapp.com/",headers:{Authorization:"Token ".concat(v)}}),N="todoGetData",w="todoAdded",y="todoDeleted",S="todoUpdated",C="taskUpdated",M="taskDeleted",A="todoUpdatedData",D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.payload.todoList;case w:return console.log(t.payload),[].concat(Object(h.a)(e),[t.payload]);case y:return e.filter((function(e){return e.id!==t.payload.id}));case S:case A:return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case C:var a=t.payload.todoID,n=t.payload.checklist;return Object(h.a)(e.map((function(e){return e.id===a?Object(m.a)(Object(m.a)({},e),{},{checklist:Object(h.a)(e.checklist.map((function(e){return e.id===n.id?n:e})))}):e})));case M:return e.map((function(e){return e.id===t.payload.id?Object(m.a)(Object(m.a)({},e),{},{checklist:e.checklist.filter((function(e){return e.id!==t.payload.checklist.id}))}):e}));default:return e}},U=Object(i.c)({auth:b,todo:D}),L=Object(i.d)(U,Object(i.a)(l.a)),P=a(7),I=(a(73),a(0));var _=Object(r.b)((function(e){return{auth:e.auth}}))((function(e){return Object(I.jsxs)("div",{className:"landing-page-container",children:[Object(I.jsxs)("div",{className:"landing-page-show-content",children:[Object(I.jsx)("div",{className:"landing-page-img"}),e.auth?Object(I.jsx)(s.b,{to:"/todo",className:"landing-page-button",children:"Go to Dashboard"}):Object(I.jsx)(s.b,{to:"/login",className:"landing-page-button",children:"Register/Login"})]}),Object(I.jsx)("div",{className:"landing-page-paragraph-container",children:Object(I.jsx)("p",{className:"landing-page-paragraph",children:"To-do lists should not take hours to build and should not be too complex. Any second you spent making a task list and planning for the job ahead is time lost instead of going out there and removing tasks from your calendar."})})]})})),T=a(6),z=a(12),E=a(24),F=a(46),R=a.n(F);a(78);var G=Object(r.b)((function(e){return{auth:e.auth}}),{authAdd:j})((function(e){var t=Object(n.useState)({username:"",password:""}),a=Object(T.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)(""),i=Object(T.a)(r,2),l=i[0],d=i[1],u=function(){var t=Object(f.a)(O.a.mark((function t(){var a,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(""),t.next=3,k.post("user/auth/",c).catch((function(){return d("username or password is incorrect")}));case 3:(a=t.sent)&&(d(""),n=a.data.token,e.authAdd(n),e.history.replace("/"));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(f.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.post("user/facebook/auth/",a).then((function(t){var a=t.data;d("");var n=a.token;e.authAdd(n),e.history.replace("/")}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){(e.auth||localStorage.getItem("auth_token"))&&e.history.replace("/todo")}),[]),Object(I.jsx)("div",{className:"login-page-container",children:Object(I.jsxs)("div",{className:"login-container",children:[l&&Object(I.jsxs)("p",{className:"login-error-label",children:["* ",l]}),Object(I.jsxs)("form",{className:"login-form-container",onSubmit:u,children:[Object(I.jsx)("label",{htmlFor:"username",className:"login-label",children:"Username"}),Object(I.jsx)("input",{type:"text",name:"username",id:"username",className:"login-input-text",placeholder:"Username",value:c.username,onChange:function(e){return o(Object(m.a)(Object(m.a)({},c),{},{username:e.target.value}))}}),Object(I.jsx)("label",{htmlFor:"password",className:"login-label",children:"Password"}),Object(I.jsx)("input",{type:"text",name:"password",id:"password",className:"login-input-text",placeholder:"Password",value:c.password,onChange:function(e){return o(Object(m.a)(Object(m.a)({},c),{},{password:e.target.value}))}})]}),Object(I.jsxs)("div",{className:"login-btn-container",children:[Object(I.jsxs)("div",{className:"login-btn-container-two",children:[Object(I.jsx)(s.b,{to:"/signup",className:"login-btn-signup",children:"Signup"}),Object(I.jsx)("button",{className:"login-btn-login",onClick:function(){return u()},children:"Login"})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("p",{className:"login-label",children:"Login with:"}),Object(I.jsx)(R.a,{appId:"808533529754347",fields:"name,email,picture",callback:j,cssClass:"facebook-login-btn",textButton:Object(I.jsx)(z.a,{icon:E.a,color:"white",size:"2x",className:"facebook-login-icon"})})]})]})]})})}));a(79);var J=Object(r.b)((function(e){return{auth:e.auth}}),{authRemoved:function(){return localStorage.removeItem("auth_token"),{type:u}},authAdd:j})((function(e){return Object(n.useEffect)((function(){localStorage.getItem("auth_token")&&e.authAdd(localStorage.getItem("auth_token"))}),[]),Object(I.jsxs)("div",{className:"navbar-container",children:[Object(I.jsx)("div",{}),Object(I.jsx)(s.b,{to:"/",className:"navbar-title",children:"Todo App"}),e.auth?Object(I.jsxs)("div",{className:"navbar-button-container",children:[Object(I.jsx)(s.b,{to:"/todo",className:"navbar-button",children:"Dashboard"}),Object(I.jsx)("p",{className:"navbar-button-seperator",children:"/"}),Object(I.jsx)(s.b,{to:"/",className:"navbar-button",onClick:function(){e.authRemoved()},children:"Logout"})]}):Object(I.jsxs)("div",{className:"navbar-button-container",children:[Object(I.jsx)(s.b,{to:"/login",className:"navbar-button",children:"Login"}),Object(I.jsx)("p",{className:"navbar-button-seperator",children:"/"}),Object(I.jsx)(s.b,{to:"/signup",className:"navbar-button",children:"Signup"})]})]})})),B=a(17);a(80);var q=Object(r.b)((function(e){return{auth:e.auth}}),{authAdd:j})((function(e){var t=Object(n.useState)({}),a=Object(T.a)(t,2),c=a[0],o=a[1],r=Object(n.useState)({username:"",password:"",confirmPassword:""}),i=Object(T.a)(r,2),l=i[0],d=i[1],u=Object(n.useState)(!1),j=Object(T.a)(u,2),b=j[0],h=j[1];Object(n.useEffect)((function(){(e.auth||localStorage.getItem("auth_token"))&&e.history.replace("/todo")}),[]),Object(n.useEffect)((function(){var e=l.password,t=l.confirmPassword;return h(e!==t||""===e)}),[l.password,l.confirmPassword]);var p=function(e){var t=e.currentTarget.name,a=e.currentTarget.value;d(Object(m.a)(Object(m.a)({},l),{},Object(B.a)({},t,a)))},x=function(){var t=Object(f.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return delete l.confirmPassword,t.next=3,k.post("user/account/",l).then((function(t){t.data;k.post("user/auth/",l).then((function(t){var a=t.data;e.authAdd(a.token),e.history.replace("/")}))})).catch((function(e){var t=e.response;return o(t.data)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(I.jsx)("div",{className:"signup-page-container",children:Object(I.jsxs)("div",{className:"signup-container",children:[c.username&&c.username.map((function(e){return Object(I.jsxs)("p",{className:"signup-error-label",children:["Username: ",e]})})),c.password&&c.password.map((function(e){return Object(I.jsxs)("p",{className:"signup-error-label",children:["Password: ",e]})})),Object(I.jsxs)("form",{action:"",className:"signup-form-container",onSubmit:x,children:[Object(I.jsx)("label",{htmlFor:"username",className:"signup-label",children:"Username"}),Object(I.jsx)("input",{type:"text",name:"username",id:"username",placeholder:"Username",className:"signup-input-text",value:l.username,onChange:function(e){return d(Object(m.a)(Object(m.a)({},l),{},{username:e.target.value}))}}),Object(I.jsx)("label",{htmlFor:"password",className:"signup-label",children:"Password"}),Object(I.jsx)("input",{type:"password",name:"password",id:"password",className:"signup-input-text",placeholder:"Password",value:l.password,onChange:p}),Object(I.jsx)("label",{htmlFor:"confirm-password",className:"signup-label",children:"Confirm Password"}),Object(I.jsx)("input",{type:"password",name:"confirmPassword",id:"confirm-password",className:"signup-input-text",placeholder:"Confirm Password",value:l.confirmPassword,onChange:p})]}),Object(I.jsxs)("div",{className:"signup-button-container",children:[Object(I.jsx)(s.b,{to:"/login",className:"signup-button-cancel",children:"Cancel"}),Object(I.jsx)("button",{className:"signup-button-create",disabled:b,onClick:x,children:"Create Account"})]})]})})})),H=a(19);var K=Object(r.b)(null,{todoAdded:function(e,t){return function(){var a=Object(f.a)(O.a.mark((function a(n){var c;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,k.post("todo/list/",e);case 3:return c=a.sent,a.next=6,t.map((function(e){return k.post("todo/task/",Object(m.a)(Object(m.a)({},e),{},{todo:c.data.id}))}));case 6:n({type:w,payload:Object(m.a)(Object(m.a)({},c.data),{},{checklist:t})}),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("Something went wrong");case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)([]),a=Object(T.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({memo:"",status:!1}),r=Object(T.a)(s,2),i=r[0],l=r[1],d=Object(n.useState)({}),u=Object(T.a)(d,2),j=u[0],b=u[1],p=function(t){for(var a=[],n=0,c=Object.entries(j);n<c.length;n++){var o=Object(T.a)(c[n],2),s=(o[0],o[1]);a.push(s)}e.todoAdded(i,a),e.onSetModal(!1),b([])};return Object(I.jsx)("div",{className:"create-todo-modal-container",children:Object(I.jsxs)("div",{className:"create-todo-modal",children:[Object(I.jsxs)("form",{className:"todo-form-container",onSubmit:p,children:[Object(I.jsx)("label",{htmlFor:"memo",className:"todo-label",children:"Memo"}),Object(I.jsx)("input",{type:"text",name:"memo",id:"memo",className:"todo-input-text-memo",placeholder:"Memo",value:i.memo,onChange:function(e){return l(Object(m.a)(Object(m.a)({},i),{},{memo:e.target.value}))}}),Object(I.jsx)("label",{htmlFor:"checklist",className:"todo-label",children:"Memo"}),Object(I.jsx)("div",{className:"checklist-count-container",children:c.map((function(e){return Object(I.jsx)("input",{className:"todo-input-text-checklist",type:"text",name:"checklist",id:"checklist",placeholder:"Checklist",value:j[e].text,onChange:function(t){return b(Object(m.a)(Object(m.a)({},j),{},Object(B.a)({},e,{text:t.target.value})))}},e)}))}),Object(I.jsx)("p",{onClick:function(){var e=c.length+1;o([].concat(Object(h.a)(c),[e])),b(Object(m.a)(Object(m.a)({},j),{},Object(B.a)({},e,{text:"",status:!1})))},className:"todo-label-add",children:"+ Add checklist"})]}),Object(I.jsxs)("div",{className:"todo-btn-container",children:[Object(I.jsx)("button",{className:"todo-btn-cancel",onClick:function(){e.onSetModal(!1),b([])},children:"Cancel"}),Object(I.jsx)("button",{className:"todo-btn-create",onClick:function(){return p()},children:"Create"})]})]})})}));a(81);var Q=Object(r.b)(null,{todoDeleted:function(e){return function(){var t=Object(f.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.delete("todo/list/".concat(e.id,"/"));case 2:a({type:y,payload:e});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.onSelectTodo.memo.substring(0,25),a=e.onSelectTodo.memo.trim().length>25?"...":"",n="".concat(t).concat(a);return Object(I.jsx)("div",{className:"delete-todo-modal-container",children:Object(I.jsxs)("div",{className:"delete-todo-modal",children:[Object(I.jsxs)("p",{className:"delete-message",children:["Are you sure you want to delete ",Object(I.jsx)("h4",{children:n})]}),Object(I.jsxs)("div",{className:"todo-btn-container",children:[Object(I.jsx)("button",{className:"todo-btn-cancel-delete",onClick:function(){return e.onSetModal(!1)},children:"Cancel"}),Object(I.jsx)("button",{className:"todo-btn-delete",onClick:function(){e.todoDeleted(e.onSelectTodo),e.onSetModal(!1),e.onCloseEditModal(!1)},children:"Delete"})]})]})})}));var V=Object(r.b)(null,{todoUpdateData:function(e,t){return function(){var a=Object(f.a)(O.a.mark((function a(n){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(t),a.next=3,k.put("/todo/list/".concat(e.id,"/"),e);case 3:if(!(t.length>0)){a.next=6;break}return a.next=6,t.map((function(t){return t.id?k.put("todo/task/".concat(t.id,"/"),t):k.post("todo/task/",Object(m.a)(Object(m.a)({},t),{},{todo:e.id}))}));case 6:n({type:A,payload:Object(m.a)(Object(m.a)({},e),{},{checklist:t})});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},taskDeleted:function(e,t){return function(){var a=Object(f.a)(O.a.mark((function a(n){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,k.delete("todo/task/".concat(t.id,"/"));case 2:n({type:M,payload:Object(m.a)(Object(m.a)({},e),{},{checklist:t})});case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)([{id:1,1:{text:"",status:!1}}]),a=Object(T.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({memo:"",status:!1,checklist:[{text:"",status:!1}]}),r=Object(T.a)(s,2),i=r[0],l=r[1],d=Object(n.useState)({1:{text:"",status:!1}}),u=Object(T.a)(d,2),j=u[0],b=u[1],p=Object(n.useState)(!1),O=Object(T.a)(p,2),f=O[0],x=O[1];Object(n.useEffect)((function(){e.itemSelect.checklist&&o(e.itemSelect.checklist),l(e.itemSelect)}),[e.itemSelect]);var g=function(e){return function(t){var a=Object(h.a)(c);a[e]=Object(m.a)(Object(m.a)({},a[e]),{},{text:t.target.value}),o(a)}},v=function(){e.todoUpdateData(i,c),e.onSetModal(!1)};return Object(I.jsxs)("div",{className:"create-todo-modal-container",children:[Object(I.jsxs)("div",{className:"create-todo-modal",children:[Object(I.jsx)(z.a,{icon:H.e,color:"white",size:"lg",className:"todo-delete-icon",onClick:function(){return x(!0)}}),Object(I.jsxs)("form",{className:"todo-form-container",onSubmit:v,children:[Object(I.jsx)("label",{htmlFor:"memo",className:"todo-label",children:"Memo"}),Object(I.jsx)("input",{type:"text",name:"memo",id:"memo",className:"todo-input-text-memo",placeholder:"Memo",value:i.memo,onChange:function(e){return l(Object(m.a)(Object(m.a)({},i),{},{memo:e.target.value}))}}),Object(I.jsx)("label",{htmlFor:"checklist",className:"todo-label",children:"Memo"}),Object(I.jsx)("div",{className:"checklist-count-container",children:c.map((function(t,a){return Object(I.jsxs)("div",{style:{display:"flex"},children:[Object(I.jsx)("input",{className:"todo-input-text-checklist",type:"text",name:"checklist".concat(t.id),id:"checklist".concat(t.id),placeholder:"Checklist",value:t.text,onChange:g(a)},"".concat(t.id)),Object(I.jsx)(z.a,{className:"todo-delete-icon",color:"white",icon:H.b,style:{marginLeft:10},onClick:function(){return function(t){e.taskDeleted(i,t),o(c.filter((function(e){return e.id!==t.id})))}(t)}})]})}))}),Object(I.jsxs)("p",{onClick:function(){var e=c.length+1;o([].concat(Object(h.a)(c),[e])),b(Object(m.a)(Object(m.a)({},j),{},Object(B.a)({},e,{text:"",status:!1})))},className:"todo-label-add",children:[Object(I.jsx)(z.a,{color:"white",size:"xs",icon:H.c,style:{marginLeft:10}})," Add checklist"]})]}),Object(I.jsxs)("div",{className:"todo-btn-container",children:[Object(I.jsx)("button",{className:"todo-btn-cancel",onClick:function(){return e.onSetModal(!1)},children:"Cancel"}),Object(I.jsx)("button",{className:"todo-btn-create",onClick:function(){return v()},children:"Save"})]})]}),f&&Object(I.jsx)(Q,{onSelectTodo:i,onSetModal:x,onCloseEditModal:e.onSetModal})]})}));var W=Object(r.b)((function(e){return{todoList:e.todo}}),{todoGetData:function(e){return function(){var t=Object(f.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("todo/list/get_user_data/",{headers:{Authentication:"Token ".concat(e)}}).then((function(e){var t=e.data;return a({type:N,payload:{todoList:t}})})).catch((function(){return console.log("Something went wrong")}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},todoUpdated:function(e){return function(){var t=Object(f.a)(O.a.mark((function t(a){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.status=!e.status,t.next=3,k.put("todo/list/".concat(e.id,"/"),e);case 3:a({type:S,payload:e});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},taskUpdated:function(e,t){return function(){var a=Object(f.a)(O.a.mark((function a(n){return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.status=!t.status,a.next=3,k.put("todo/task/".concat(t.id,"/"),t);case 3:n({type:C,payload:{todoID:e,checklist:t}});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=Object(n.useState)(""),a=Object(T.a)(t,2),c=a[0],o=a[1],s=Object(n.useState)({}),r=Object(T.a)(s,2),i=r[0],l=r[1],d=Object(n.useState)(!1),u=Object(T.a)(d,2),j=u[0],b=u[1],h=Object(n.useState)(!1),m=Object(T.a)(h,2),p=m[0],O=m[1];Object(n.useEffect)((function(){var t=e.auth||localStorage.getItem("auth_token");t||e.history.replace("/login"),e.todoGetData(t)}),[]);var f=function(e){if(e.status)return"Done";if(!e.checklist)return"0%";if(e.checklist.length<=0)return"0%";var t=0,a=e.checklist.length;e.checklist.map((function(e){return!0===e.status?t+=1:t}));var n=Math.ceil(t/a*100);return n>=100?"Done":"".concat(n,"%")},x=function(e){return e.sort((function(e,t){return e.status-t.status}))};return e.todoList<=0||!e.todoList?Object(I.jsxs)("div",{className:"todo-page-container",children:[Object(I.jsxs)("div",{className:"todo-container",children:[Object(I.jsx)("div",{className:"todo-add-icon-container",children:Object(I.jsx)(z.a,{icon:H.d,color:"white",size:"lg",className:"todo-add-icon",onClick:function(){return b(!0)}})}),Object(I.jsx)("h1",{className:"todo-item-title",style:{textAlign:"center"},children:"There are no to-do created"})]}),j?Object(I.jsx)(K,{onSetModal:b}):"",p?Object(I.jsx)(V,{onSetModal:O,itemSelect:i}):""]}):Object(I.jsxs)("div",{className:"todo-page-container",children:[Object(I.jsxs)("div",{className:"todo-container",children:[Object(I.jsx)("div",{className:"todo-add-icon-container",children:Object(I.jsx)(z.a,{icon:H.d,color:"white",size:"lg",className:"todo-add-icon",onClick:function(){return b(!0)}})}),x(e.todoList).map((function(t){return Object(I.jsxs)("div",{className:"todo-item ".concat(c===t.id?"active":""),children:[Object(I.jsxs)("div",{className:"todo-item-title-container",onClick:function(){return c===t.id?o(""):o(t.id)},children:[Object(I.jsxs)("div",{className:"item-title-container",children:[Object(I.jsxs)("label",{className:"checkbox-container",children:[Object(I.jsx)("input",{type:"checkbox",checked:t.status,onChange:function(){return function(t){e.todoUpdated(t)}(t)}}),Object(I.jsx)("span",{className:"checkbox-checkmark"})]}),Object(I.jsx)("h1",{className:"todo-item-title",children:t.memo})]}),Object(I.jsxs)("div",{className:"todo-status-container",children:[Object(I.jsx)("p",{className:"todo-item-title",children:f(t)}),Object(I.jsx)(z.a,{icon:H.a,color:"white",size:"lg",className:"todo-add-icon",onClick:function(){O(!0),l(t)}})]})]}),Object(I.jsx)("div",{className:"todo-task-list",children:Object(I.jsx)("ol",{children:x(t.checklist).map((function(a){return Object(I.jsxs)("li",{className:"checklist-container",children:[Object(I.jsxs)("label",{className:"checkbox-container-mini",children:[Object(I.jsx)("input",{type:"checkbox",checked:a.status,onChange:function(){return function(t,a){e.taskUpdated(t,a)}(t.id,a)}}),Object(I.jsx)("span",{className:"checkbox-checkmark-mini"})]}),a.text]},a.id)}))})})]},t.id)}))]}),j?Object(I.jsx)(K,{onSetModal:b}):"",p?Object(I.jsx)(V,{onSetModal:O,itemSelect:i}):""]})}));a(82),a(83);var X=function(e){return Object(I.jsxs)("div",{className:"footer-container",children:[Object(I.jsxs)("p",{className:"footer-text",children:["\xa9 Copyright 2021, ",Object(I.jsx)("a",{className:"footer-link",href:"mailto:jmjabor@gmail.com",children:"Joshua Michael Jabor"})]}),Object(I.jsxs)("div",{className:"footer-icon-container",children:[Object(I.jsx)("a",{href:"https://www.linkedin.com/in/joshua-michael-jabor/",target:"_blank",rel:"noreferrer",children:Object(I.jsx)(z.a,{icon:E.c,color:"white",size:"lg",className:"footer-icon"})}),Object(I.jsx)("a",{href:"https://github.com/josh1506",target:"_blank",rel:"noreferrer",children:Object(I.jsx)(z.a,{icon:E.b,color:"white",size:"lg",className:"footer-icon"})})]})]})};var Y=function(e){return Object(I.jsxs)("div",{children:[Object(I.jsx)(J,{}),Object(I.jsx)("div",{className:"app-content-container",children:Object(I.jsxs)(P.d,{children:[Object(I.jsx)(P.b,{path:"/todo",component:W}),Object(I.jsx)(P.b,{path:"/login",component:G}),Object(I.jsx)(P.b,{path:"/signup",component:q}),Object(I.jsx)(P.b,{path:"/",component:_}),Object(I.jsx)(P.a,{})]})}),Object(I.jsx)(X,{})]})};o.a.render(Object(I.jsx)(r.a,{store:L,children:Object(I.jsx)(s.a,{children:Object(I.jsx)(Y,{})})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.e7d7495e.chunk.js.map