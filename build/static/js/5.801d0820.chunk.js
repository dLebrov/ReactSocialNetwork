(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[5],{309:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1vd7H",dialogsItems:"Dialogs_dialogsItems__2z6ay",dialog:"Dialogs_dialog__3ySCK",messages:"Dialogs_messages__1fkLG",text:"Dialogs_text__4XFxH",formMessage:"Dialogs_formMessage__3RZoo",textarea:"Dialogs_textarea__1qSoc",addMessage:"Dialogs_addMessage__3iqJb",button:"Dialogs_button__1f3tF",input:"Dialogs_input__3xS9Q"}},314:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(36),s=t(37),i=t(39),r=t(40),o=t(0),l=t.n(o),c=t(30),m=t(13),u=function(e){return{isAuth:e.auth.isAuth}},d=function(e){var a=function(a){Object(r.a)(o,a);var t=Object(i.a)(o);function o(){return Object(n.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return this.props.isAuth?l.a.createElement(e,this.props):l.a.createElement(c.a,{to:"/login"})}}]),o}(l.a.Component);return Object(m.b)(u)(a)}},379:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(105),r=t(309),o=t.n(r),l=t(11),c=function(e){return s.a.createElement("div",{className:o.a.dialog},s.a.createElement("img",{src:"https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",alt:""}),s.a.createElement(l.b,{to:"/dialogs/"+e.id}," ",e.name," "))},m=function(e){return s.a.createElement("div",{className:o.a.text},e.message)},u=t(128),d=t(129),g=t(88),f=t(378),p=t(374),_=t(375);function b(e){var a=e.input;return s.a.createElement("div",null,s.a.createElement(_.a,Object.assign({className:o.a.textarea},a,{autoComplete:"off",id:"outlined-size-small",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",defaultValue:" ",variant:"outlined",size:"small"})))}var E=t(372),v=t(373),h=t(371),j=Object(g.a)(50),N=Object(d.a)({form:"dialogForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",{className:o.a.formMessage},s.a.createElement("div",{className:o.a.input},s.a.createElement(u.a,{component:b,onSubmit:e.handleSubmit,name:"newMessageBody",validate:[g.b,j]})),s.a.createElement("div",{className:o.a.button},s.a.createElement(f.a,{variant:"contained",color:"primary",endIcon:s.a.createElement(p.a,null,"send"),onClick:e.handleSubmit},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))})),O=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return s.a.createElement(c,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return s.a.createElement(m,{message:e.message,key:e.id,id:e.id})})),i=Object(E.a)((function(e){return{root:{flexGrow:4},paper:{padding:e.spacing(5),background:"#f5f5f5"}}}))();return s.a.createElement(v.a,{container:!0},s.a.createElement("div",{className:o.a.dialogs},s.a.createElement("div",{className:o.a.dialogsItems},s.a.createElement(h.a,{className:i.paper},t)),s.a.createElement("div",{className:o.a.messages},s.a.createElement(h.a,{className:i.paper},n))),s.a.createElement("div",{className:o.a.addMessage}),s.a.createElement(N,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}}))},k=t(13),x=t(314),D=t(7);a.default=Object(D.d)(Object(k.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(a){e(Object(i.a)(a))}}})),x.a)(O)}}]);
//# sourceMappingURL=5.801d0820.chunk.js.map