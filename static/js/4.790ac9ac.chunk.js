(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[4],{310:function(e,t,a){e.exports={logo:"profileinfo_logo__-ZLd5",all:"profileinfo_all__3lvx_",description:"profileinfo_description__1PNCC",input:"profileinfo_input__2ROkp",des:"profileinfo_des__2mgho",contacts:"profileinfo_contacts__himN3",button:"profileinfo_button__3j9F6",buttonModal:"profileinfo_buttonModal__3zvck",checkBox:"profileinfo_checkBox__1ysiO"}},315:function(e,t,a){e.exports={input:"profileStatus_input__D2zhv",button:"profileStatus_button__2EhDJ",span:"profileStatus_span__1W3d1"}},328:function(e,t,a){e.exports={click:"MyPosts_click__3vyjv",textarea:"MyPosts_textarea__3juEw",MyPost:"MyPosts_MyPost__1796P"}},329:function(e,t,a){e.exports={img:"Post_img__KNO_M",button:"Post_button__3sSYo",item:"Post_item__1jdmn"}},335:function(e,t,a){"use strict";a.r(t);var n=a(31),o=a(32),r=a(35),l=a(34),s=a(0),c=a.n(s),i=a(101),u=a(310),f=a.n(u),p=a(43),m=a(33),d=a.n(m),b=a(315),h=a.n(b),E=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],r=Object(s.useState)(e.status),l=Object(i.a)(r,2),u=l[0],f=l[1];Object(s.useEffect)((function(){f(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{className:h.a.span,onClick:function(){o(!0)}},"\u0421\u0442\u0430\u0442\u0443\u0441: "+e.status)),n&&c.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u0443\u0441:",c.a.createElement("input",{className:h.a.input,onChange:function(e){f(e.currentTarget.value)},autoFocus:!0,onKeyPress:function(t){13===t.charCode&&(o(!1),e.updateStatus(u))},value:u}),c.a.createElement("button",{className:h.a.button,onClick:function(){o(!1),e.updateStatus(u)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))},v=a(316),_=a(38),g=a(133),O=a(16),k=a.n(O),j=a(334),P=a(317);function S(){var e=Object(v.a)(["\n        background: #18191a;\n        color:#fff;\n        .close {\n            color:#fff;\n        }\n    "]);return S=function(){return e},e}var N=Object(g.a)({form:"edit-profile"})((function(e){var t=P.a.div(S());return c.a.createElement(j.a,{show:e.show,onHide:function(){return e.setShow(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",keyboard:!1},c.a.createElement(t,null,c.a.createElement(j.a.Header,{closeButton:!0},c.a.createElement(j.a.Title,{id:"contained-modal-title-vcenter"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement(j.a.Body,null,c.a.createElement("div",{className:f.a.des},c.a.createElement("div",null,"\u0418\u043c\u044f:  ",Object(_.c)("\u0418\u043c\u044f","fullName",[],_.a)),c.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u0443\u0441: ",Object(_.c)("\u0421\u0442\u0430\u0442\u0443\u0441","status",[],_.a)),c.a.createElement("div",{className:f.a.checkBox},"\u0420\u0430\u0431\u043e\u0442\u0430: ",Object(_.c)("","lookingForAJob",[],_.a,{type:"checkbox"})),c.a.createElement("div",null,"\u041c\u043e\u0438 \u0441\u043a\u0438\u043b\u043b\u044b: ",Object(_.c)("\u043e \u0440\u0430\u0431\u043e\u0442\u0435","lookingForAJobDescription",[],_.a)),c.a.createElement("div",null,"\u041e\u0431\u043e \u043c\u043d\u0435: ",Object(_.c)("\u041e\u0431\u043e \u043c\u043d\u0435","aboutMe",[],_.a)),c.a.createElement("div",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: ",Object.keys(e.profile.contacts).map((function(e){return c.a.createElement("div",null,Object(_.c)(e,"contacts."+e,[],_.a))}))),e.error&&c.a.createElement("div",{className:k.a.formSummaryError},e.error))),c.a.createElement(j.a.Footer,null,c.a.createElement("button",{className:f.a.buttonModal},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))))})),y=function(e){return c.a.createElement("ul",{className:f.a.des},c.a.createElement("li",null,"\u0418\u043c\u044f: "+e.profile.fullName),c.a.createElement("li",null,c.a.createElement(E,{status:e.status,updateStatus:e.updateStatus})),c.a.createElement("li",null,"\u0420\u0430\u0431\u043e\u0442\u0430: "+(e.profile.lookingForAJob?e.profile.lookingForAJob:"\u041d\u0435\u0442")),c.a.createElement("li",null,"\u041c\u043e\u0438 \u0441\u043a\u0438\u043b\u043b\u044b: "+(e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"\u041d\u0435\u0442")),c.a.createElement("li",null,"\u041e\u0431\u043e \u043c\u043d\u0435: "+(e.profile.aboutMe?e.profile.aboutMe:"\u041d\u0435\u0442")),c.a.createElement("li",null,Object.keys(e.profile.contacts).map((function(t){return c.a.createElement(w,{key:t,contactTitle:t,contactValue:e.profile.contacts[t]})}))),e.isOwner&&c.a.createElement("button",{className:f.a.button,onClick:e.handleShow},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"))},w=function(e){return c.a.createElement("div",{className:f.a.contacts},e.contactTitle,": ",c.a.createElement("a",{href:e.contactValue,target:"blank"},e.contactValue))},x=function(e){var t=Object(s.useState)(!1),a=Object(i.a)(t,2),n=a[0],o=a[1];if(!e.profile)return c.a.createElement(p.a,null);var r={aboutMe:e.profile.aboutMe,status:e.status,contacts:e.profile.contacts,fullName:e.profile.fullName,lookingForAJob:e.profile.lookingForAJob,lookingForAJobDescription:e.profile.lookingForAJobDescription,userId:e.profile.userId};return c.a.createElement("div",null,c.a.createElement("div",{className:f.a.all},c.a.createElement("div",null,c.a.createElement("div",{className:f.a.description},c.a.createElement("img",{onClick:function(){e.isOwner&&document.getElementById("file").click()},className:f.a.logo,id:"image",src:null==e.profile.photos.large?d.a:e.profile.photos.large}),c.a.createElement("input",{className:f.a.input,type:"file",id:"file",onChange:function(t){t.target.files.length&&e.savePhoto(t.target.files[0])}}),n?c.a.createElement(N,{show:n,setShow:o,initialValues:r,profile:e.profile,onSubmit:function(t){e.updateStatus(t.status),e.saveProfile(t).then((function(){o(!1)}))}}):c.a.createElement(y,{status:e.status,updateStatus:e.updateStatus,profile:e.profile,isOwner:e.isOwner,handleShow:function(){return o(!0)}})))))},M=a(48),A=a(328),F=a.n(A),I=a(329),J=a.n(I),C=function(e){return c.a.createElement("div",{className:J.a.item},c.a.createElement("div",null,c.a.createElement("img",{className:J.a.img,src:"https://klike.net/uploads/posts/2018-05/1525256972_15.jpg",alt:""}),e.message,c.a.createElement("div",null,c.a.createElement("button",{className:J.a.button,href:"#"},"\u2764",e.like))))},D=a(94),T=a(44),B=c.a.memo((function(e){c.a.createRef();var t=e.post.map((function(e){return c.a.createElement(C,{message:e.message,like:e.like})}));return c.a.createElement("div",{className:F.a.MyPost},c.a.createElement("div",null,"\u041c\u043e\u0438 \u0417\u0430\u043f\u0438\u0441\u0438"),c.a.createElement(V,{onSubmit:function(t){e.addPost(t.newPostText)}}),t)})),U=Object(T.a)(30),V=Object(g.a)({form:"ProfileForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement("div",null,c.a.createElement(D.a,{validate:[T.b,U],placeholder:"post message",component:_.b,name:"newPostText",className:F.a.textarea}),c.a.createElement("div",null,c.a.createElement("button",{className:F.a.click,href:"#"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))))})),z=B,H=a(13),K=a(9),R=(Object(K.compose)(Object(H.b)((function(e){return{post:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(M.a)(t))}}})))(z),function(e){var t=Object(s.useState)(null),a=Object(i.a)(t,2),n=a[0],o=a[1],r=Object(s.useState)(!0),l=Object(i.a)(r,2),u=l[0],f=l[1],p=Object(H.c)((function(e){return e.auth})),m=e.match.params.userId,d=!(!p||null===p||!e.profile);return Object(s.useEffect)((function(){return(d&&p.userId!==e.profile.userId||d&&!m&&p.userId)&&(o(e.profile),f(!1)),function(){o(null),f(!1)}}),[e.profile]),u?"":c.a.createElement("div",null,c.a.createElement(x,{isOwner:e.isOwner,profile:n,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}))}),L=a(27),W=a(102),Y=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.AuthUserId),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return c.a.createElement(R,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(c.a.Component);t.default=Object(K.compose)(Object(H.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,AuthUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:M.d,getStatus:M.c,updateStatus:M.g,savePhoto:M.e,saveProfile:M.f}),L.g,W.a)(Y)}}]);
//# sourceMappingURL=4.790ac9ac.chunk.js.map