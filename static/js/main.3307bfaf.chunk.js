(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){},20:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(12),r=n.n(i),a=(n(20),n(11),n(10)),s=n(4),l=n(3),d=n(1),u={padding:"20px 0",lineHeight:"1.5em"},j=function(){return Object(d.jsx)("header",{style:u,children:Object(d.jsx)("h1",{style:{fontSize:"4rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"!N \u0426\u0435\u043b\u0435\u0439 \u043a \u0443\u0441\u043f\u0435\u0445\u0443"})})},p=n(7),b=n(13),f=function(t){var e=Object(o.useState)({title:""}),n=Object(l.a)(e,2),c=n[0],i=n[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.title.trim()?(t.addTodoItemProps(c.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(d.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:c.title,name:"title",onChange:function(t){i(Object(s.a)(Object(s.a)({},c),{},Object(p.a)({},t.target.name,t.target.value)))}}),Object(d.jsx)("button",{className:"input-submit",children:Object(d.jsx)(b.a,{})})]})},h=n(8),m=n.n(h),O=n(15),x=n(14),g={fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"},y=function(t){var e=Object(o.useState)(!1),n=Object(l.a)(e,2),c=n[0],i=n[1];Object(o.useEffect)((function(){return function(){console.log("RaxMontyirovali")}}),[]);var r={},a={};return c?r.display="none":a.display="none",Object(d.jsxs)("li",{className:m.a.item,children:[Object(d.jsx)("div",{onClick:function(){i(!0),console.log("hey child")},style:r,children:Object(d.jsx)(x.a,{})}),Object(d.jsx)("input",{type:"text",style:a,className:m.a.textInput,value:t.todo.title,onChange:function(e){t.updateTodoProps(e.target.value,t.todo.id)},onKeyDown:function(t){"Enter"===t.key&&i(!1)}}),Object(d.jsx)("input",{type:"checkbox",className:m.a.checkbox,checked:t.todo.completed,onChange:function(){return t.handleChangeProps(t.todo.id)}}),Object(d.jsx)("button",{onClick:function(){return t.deleteTodoProps(t.todo.id)},children:Object(d.jsx)(O.a,{style:{color:"orangered",fontSize:"16px"}})}),Object(d.jsx)("span",{style:t.todo.completed?g:null,children:t.todo.title})]})},v=function(t){return Object(d.jsx)("ul",{children:t.todos.map((function(e){return Object(d.jsx)(y,{todo:e,handleChangeProps:t.handleChangeProps,deleteTodoProps:t.deleteTodoProps,updateTodoProps:t.updateTodoProps},e.id)}))})},P=n(24),T=function(){var t=Object(o.useState)(function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);return console.log("tttttttttttt"),e||[]}()),e=Object(l.a)(t,2),n=e[0],c=e[1];Object(o.useEffect)((function(){var t=JSON.stringify(n);localStorage.setItem("todos",t)}),[n]);return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)(f,{addTodoItemProps:function(t){var e={id:Object(P.a)(),title:t,completed:!1};c([].concat(Object(a.a)(n),[e]))}}),Object(d.jsx)(v,{todos:n,handleChangeProps:function(t){c((function(e){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))}))},deleteTodoProps:function(t){c(Object(a.a)(n.filter((function(e){return e.id!==t}))))},updateTodoProps:function(t,e){c(n.map((function(n){return n.id===e&&(n.title=t),n})))}})]})})};var I=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(T,{})})},S=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),S()},8:function(t,e,n){t.exports={item:"TodoItem_item__2IOhU",checkbox:"TodoItem_checkbox__81TLh",textInput:"TodoItem_textInput__3-EjY"}}},[[22,1,2]]]);
//# sourceMappingURL=main.3307bfaf.chunk.js.map