"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[244],{8103:function(s,t,e){e.r(t),e.d(t,{default:function(){return U}});var a=e(2791),i=e(1009),o=e(3504),n=e(885),r=e.p+"static/media/changeStatus.333680197a4515933ca4.png",l=e(184),c=function(s){var t=(0,a.useState)(!1),e=(0,n.Z)(t,2),i=e[0],o=e[1],c=(0,a.useState)(s.status),p=(0,n.Z)(c,2),d=p[0],u=p[1];(0,a.useEffect)((function(){u(s.status)}),[s.status]);var f=function(){o(!0)};return(0,l.jsx)("div",{className:"App__status-wrapper",children:i?(0,l.jsx)("div",{className:"App__status-input-block",children:(0,l.jsx)("input",{className:"App__status-input",onChange:function(s){u(s.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),s.updateStatus(d)},value:d})}):(0,l.jsxs)("div",{className:"App__profileStatus",children:[s.isOwner?(0,l.jsx)("span",{onDoubleClick:f,children:s.status||"No status"}):(0,l.jsx)("span",{children:s.status||"No status"}),s.isOwner&&(0,l.jsx)("button",{className:"App__profileStatus-changeButton",onClick:f,children:(0,l.jsx)("img",{src:r,alt:"#"})})]})})},p=function(s){return(0,l.jsxs)("div",{className:"App__contacts-list-item",children:[(0,l.jsxs)("p",{className:"App__contacts-item",children:[s.contactTitle,":"]}),(0,l.jsx)("p",{className:"App__contacts-value",children:s.contactValue})]})},d=function(s){var t,e,a,i;return(0,l.jsxs)("div",{className:"App__description-aboutMeform",children:[(0,l.jsx)("h3",{className:"App__profile-fullName",children:null===(t=s.profile)||void 0===t?void 0:t.fullName}),(0,l.jsx)(c,{isOwner:s.isOwner,status:s.status,updateStatus:s.updateStatus}),(0,l.jsx)("div",{className:"App__description-aboutMe-list",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"App__profile-contacts-title",children:(0,l.jsx)("b",{children:"Contacts"})}),s.isOwner&&(0,l.jsx)(o.OL,{to:"/profile-settings",children:(0,l.jsx)("p",{className:"App__description-editProfile",children:"Edit profile"})}),(0,l.jsx)("div",{className:"App__contacts-list",children:Object.keys(s.profile.contacts).map((function(t){var e;return(0,l.jsx)(p,{contactTitle:t,contactValue:null===(e=s.profile)||void 0===e?void 0:e.contacts[t]},t)}))})]})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"App__description-aboutMeform-item",children:(0,l.jsx)("b",{children:"Looking for a job"})}),(0,l.jsx)("p",{className:"App__description-aboutMeform-valueItem",children:null!==(e=s.profile)&&void 0!==e&&e.lookingForAJob?"Yes":"No"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"App__description-aboutMeform-item",children:(0,l.jsx)("b",{children:"My proffesional skills"})}),(0,l.jsx)("p",{className:"App__description-aboutMeform-valueItem",children:null===(a=s.profile)||void 0===a?void 0:a.lookingForAJobDescription})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"App__description-aboutMeform-item",children:(0,l.jsx)("b",{children:"About me"})}),(0,l.jsx)("p",{className:"App__description-aboutMeform-valueItem",children:null===(i=s.profile)||void 0===i?void 0:i.aboutMe})]})]})},u=e.p+"static/media/uploadPhoto.c088ceeb1cf73d5e6070.png",f=function(s){var t,e;return(0,l.jsxs)("div",{className:"App__profile-info",children:[(0,l.jsx)("div",{className:"App__profile-first-block",children:(0,l.jsxs)("div",{className:"App__profile-photo-block",children:[(0,l.jsx)("img",{className:"App__profile-photo",src:(null===(t=s.dataProfile.profile)||void 0===t||null===(e=t.photos)||void 0===e?void 0:e.large)||i,alt:"#"}),(0,l.jsx)("input",{id:"input-changePhoto",className:"input-changePhoto",type:"file",onChange:function(t){var e;null!==(e=t.target.files)&&void 0!==e&&e.length&&s.savePhoto(t.target.files[0])}}),s.isOwner&&(0,l.jsx)("label",{htmlFor:"input-changePhoto",children:(0,l.jsx)("img",{className:"App__profile-photo-change",src:u,alt:""})})]})}),(0,l.jsx)(d,{isOwner:s.isOwner,profile:s.dataProfile.profile,status:s.status,updateStatus:s.updateStatus})]})},h=e(6139),m=e(704),x=e(5197),_=e(2740),j=e.p+"static/media/heartNotLike.2b2f2b1f413672a8aa7a.png",v=function(s){return(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"App__profile-postItem",children:s.message}),(0,l.jsxs)("div",{className:"App__profile-likesItem",children:[(0,l.jsx)("img",{src:j,alt:""}),s.likes]})]})},N=e.p+"static/media/addPost.d5a7c7533c230922fcba.png",P=(0,x.B)(10),A=(0,m.Z)({form:"addPost"})((function(s){return(0,l.jsxs)("form",{className:"App__posts-addPost-form",onSubmit:s.handleSubmit,children:[(0,l.jsx)(h.Z,{className:"App__posts-addPost-textarea",validate:P,placeholder:"Write post message here...",component:_.N,formType:"textarea",type:"text",name:"postText"}),(0,l.jsx)("button",{className:"App__posts-addPost-button",children:(0,l.jsx)("img",{src:N,alt:""})})]})})),b=function(s){var t=s.dataPosts.map((function(s){return(0,l.jsx)(v,{message:s.postText,likes:s.likes},s.id)}));return(0,l.jsxs)("div",{className:"App__posts-info",children:[(0,l.jsxs)("div",{className:"App__posts-form",children:[(0,l.jsx)("h3",{className:"App__posts-title",children:(0,l.jsx)("b",{children:"My posts"})}),s.isOwner&&(0,l.jsx)(A,{onSubmit:s.addNewPost})]}),(0,l.jsx)("div",{className:"App__post-items",children:t})]})},g=function(s){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(b,{isOwner:s.isOwner,dataPosts:s.dataPosts,addNewPost:s.addNewPost})})},w=e(3378),S=function(s){return s.dataProfile.profile?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f,{savePhoto:s.savePhoto,isOwner:s.isOwner,dataProfile:s.dataProfile,status:s.status,updateStatus:s.updateStatus}),(0,l.jsx)(g,{isOwner:s.isOwner,dataPosts:s.dataPosts,dataProfile:s.dataProfile,addNewPost:s.addNewPost})]}):(0,l.jsx)(w.Z,{})},k=e(8687),O=e(7781),M=e(9094),C=e(6871),I=e(7774),U=(0,O.qC)((0,k.$j)((function(s){return{dataPosts:s.dataProfile.dataPosts,dataProfile:s.dataProfile,status:s.dataProfile.status,authorizedUserId:s.auth.id,isAuth:s.auth.isAuth}}),(function(s){return{setUserProfile:function(t){s((0,I.nA)(t))},setUserStatus:function(t){s((0,I.gY)(t))},updateStatus:function(t){s((0,I.NN)(t))},savePhoto:function(t){s((0,I.m2)(t))},addNewPost:function(t){s(I.Nw.newPostActionCreator(t))}}})),M.A)((function(s){var t=(0,C.UO)().profileId,e=Number(t);return(0,a.useEffect)((function(){e?(s.setUserProfile(e),s.setUserStatus(e)):console.log("UserId should be number!")}),[t]),s.dataProfile.profile?(0,l.jsx)("div",{className:"App__profile",children:(0,l.jsx)(S,{dataProfile:s.dataProfile,isOwner:Number(t)===s.authorizedUserId,savePhoto:s.savePhoto,isAuth:s.isAuth,status:s.status,updateStatus:s.updateStatus,dataPosts:s.dataPosts,addNewPost:function(t){s.addNewPost(t.postText)}})}):(0,l.jsx)(w.Z,{})}))}}]);
//# sourceMappingURL=244.906140b8.chunk.js.map