(this["webpackJsonpsprint-three"]=this["webpackJsonpsprint-three"]||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/mohan-muruge.ba2f48f9.jpg"},31:function(e,a,t){e.exports=t.p+"static/media/Logo-brainflix.1e121e6b.svg"},32:function(e,a,t){e.exports=t.p+"static/media/icon-search.28606900.svg"},33:function(e,a,t){e.exports=t.p+"static/media/icon-upload.909b8976.svg"},36:function(e,a,t){e.exports=t.p+"static/media/icon-likes.23c3f857.svg"},37:function(e,a,t){e.exports=t.p+"static/media/icon-views.a488fc5b.svg"},38:function(e,a,t){e.exports=t.p+"static/media/upload-video-preview.c814c81c.jpg"},39:function(e,a,t){e.exports=t(68)},44:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(30),o=t.n(i),r=(t(44),t(11)),s=t(12),l=t(15),m=t(13),d=t(16),u=t(8),p=t(31),_=t.n(p),v=t(32),f=t.n(v),E=t(33),h=t.n(E),g=t(14),N=t.n(g);var b=function(){return c.a.createElement("div",{className:"navbar"},c.a.createElement(u.b,{to:"/"},c.a.createElement("img",{className:"navbar__img",src:_.a,alt:"this is the Brainflix logo"})),c.a.createElement("form",{className:"navbar__search-container"},c.a.createElement("img",{className:"navbar__search-img",src:f.a,alt:"magnifying glass"}),c.a.createElement("input",{className:"navbar__search-input",type:"text",placeholder:"Search"})),c.a.createElement("div",{className:"navbar__button-user-container"},c.a.createElement(u.b,{className:"navbar__upload-link",to:"/upload"},c.a.createElement("button",{className:"navbar__upload-button"},c.a.createElement("img",{className:"navbar__upload-img",src:h.a,alt:"plus symbol upload"}),"UPLOAD")),c.a.createElement("img",{className:"navbar__user-img",src:N.a,alt:"user logo"})))},y=t(36),V=t.n(y),k=t(37),O=t.n(k);function D(e){var a=e.currentVideo;return c.a.createElement("div",{className:"videoinfo"},c.a.createElement("h1",{className:"videoinfo__title"},a.title),c.a.createElement("div",{className:"videoinfo__author-date-view-like-container"},c.a.createElement("div",{className:"videoinfo__author-post-container"},c.a.createElement("p",{className:"videoinfo__author"},"By ",a.channel),c.a.createElement("span",{className:"videoinfo__postdate"},function(e){var a=Date.now()-e;if(a<6e4)return"".concat(Math.floor(a/1e3)," s ago");if(a<36e5)return"".concat(Math.floor(a/6e4)," minutes ago");if(a<72e5)return"1 hour ago";if(a<864e5)return"".concat(Math.floor(a/36e5)," hours ago");var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear())}(a.timestamp))),c.a.createElement("div",{className:"videoinfo__view-like-container"},c.a.createElement("div",{className:"videoinfo__view-container"},c.a.createElement("img",{className:"videoinfo__view-img",src:O.a,alt:""}),c.a.createElement("span",{className:"videoinfo__view-count"},a.views)),c.a.createElement("div",{className:"videoinfo__like-container"},c.a.createElement("img",{className:"videoinfo__like-img",src:V.a,alt:""}),c.a.createElement("span",{className:"videoinfo__like-count"},a.likes)))),c.a.createElement("p",{className:"videoinfo__description"},a.description))}var C=t(5),w=t.n(C);var j=function(e){var a=e.comments,t=e.id,n=e.setCurrentVideo,i=a.map((function(e){return c.a.createElement("div",{className:"comments__card",id:e.id,key:e.id},c.a.createElement("div",{className:"comments__card-left"},c.a.createElement("div",{className:"comments__card-image"})),c.a.createElement("div",{className:"comments__card-right"},c.a.createElement("div",{className:"comments__card-right-top"},c.a.createElement("p",{className:"comments__card-name"},e.name),c.a.createElement("p",{className:"comments__card-date"},function(e){var a=Date.now()-e;if(a<6e4)return"".concat(Math.floor(a/1e3)," s ago");if(a<36e5)return"".concat(Math.floor(a/6e4)," minutes ago");if(a<72e5)return"1 hour ago";if(a<864e5)return"".concat(Math.floor(a/36e5)," hours ago");var t=new Date(e);return"".concat(t.getMonth()+1,"/").concat(t.getDate(),"/").concat(t.getFullYear())}(e.timestamp))),c.a.createElement("div",{className:"comments__card-right-bottom"},c.a.createElement("p",{className:"comments__card-comment"},e.comment))))}));return c.a.createElement("section",{className:"comments"},c.a.createElement("h1",{className:"comments__title"},a.length," Comments"),c.a.createElement("div",{className:"comments__input-container"},c.a.createElement("div",{className:"comments__image-container"},c.a.createElement("img",{src:N.a,alt:"user icon",className:"comments__image"})),c.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),w.a.post("/api/videos/".concat(t,"/comment"),{comment:e.target.usercomment.value}).then((function(e){n(t)})).catch((function(e){return console.log(e)})),e.target.reset()},className:"comments__form",id:"comments-form"},c.a.createElement("div",{className:"comments__user-input-container"},c.a.createElement("label",{className:"comments__user-input-label"},"JOIN THE CONVERSATION"),c.a.createElement("textarea",{className:"comments__user-input-field",name:"usercomment",form:"comments-form",cols:"30",rows:"10",placeholder:"Add a new comment"})),c.a.createElement("input",{type:"submit",value:"COMMENT",className:"comments__form-button"}))),i)};var x=function(e){var a;return a=e.playlist.map((function(a){return a.id===e.currentVideoID?"":c.a.createElement(u.b,{className:"playlist__react-link",id:a.id,key:a.id,to:"/video/".concat(a.id)},c.a.createElement("div",{className:"playlist__card"},c.a.createElement("img",{className:"playlist__img",src:a.image,alt:a.title}),c.a.createElement("div",{className:"playlist__text-container"},c.a.createElement("span",{className:"playlist__video-title"},a.title),c.a.createElement("span",{className:"playlist__author"},a.channel))))})),c.a.createElement("div",{className:"playlist"},c.a.createElement("h2",{className:"playlist__title"},"NEXT VIDEO"),c.a.createElement("div",{className:"playlist__list-container"},a))};function M(e){var a=e.playlist;return c.a.createElement("div",{className:"video__container"},c.a.createElement("video",{className:"video__video",poster:a.image,key:"".concat(a.video,"/?api_key=9646c732-3af7-4647-8da4-20fb64fd3c53"),controls:!0},c.a.createElement("source",{src:"".concat(a.video,"/?api_key=9646c732-3af7-4647-8da4-20fb64fd3c53"),type:"video/mp4"}),"Your browser does not support this video tag"))}var I=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(M,{playlist:e.currentVideo}),c.a.createElement("div",{className:"video-description"},c.a.createElement("div",{className:"video-description__left"},c.a.createElement(D,{currentVideo:e.currentVideo}),c.a.createElement(j,{comments:e.currentVideo.comments,id:e.id,setCurrentVideo:e.setCurrentVideo})),c.a.createElement("div",{className:"video-description__right"},c.a.createElement(x,{playlist:e.playlist,currentVideoID:e.currentVideo.id}))))},T=function(e){function a(){return Object(r.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.props.match.params.id!==this.props.currentVideo.id&&this.props.setCurrentVideo(this.props.match.params.id)}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(I,{currentVideo:this.props.currentVideo,setCurrentVideo:this.props.setCurrentVideo,id:this.props.match.params.id,playlist:this.props.playlist}))}}]),a}(n.Component),A=t(38),F=t.n(A);var S=function(e){return c.a.createElement("div",{className:"upload"},c.a.createElement("h1",{className:"upload__title"},"Upload Video"),c.a.createElement("div",{className:"upload__image-form-container"},c.a.createElement("div",{className:"upload__image-container"},c.a.createElement("h2",{className:"upload__image-title"},"VIDEO THUMBNAIL"),c.a.createElement("img",{className:"upload__image",src:F.a,alt:"bike handlebars"})),c.a.createElement("form",{action:"submit",className:"upload__form",name:"uploadForm",id:"uploadForm"},c.a.createElement("label",{className:"upload__video-title-label"},"TITLE YOUR VIDEO"),c.a.createElement("input",{className:"upload__video-title-input",type:"text",name:"videoTitle",placeholder:"Add a title to your video",autoComplete:"off"}),c.a.createElement("label",{className:"upload__video-description-label"},"ADD A VIDEO DESCRIPTION"),c.a.createElement("textarea",{className:"upload__video-description-input",name:"videoDescription",form:"uploadForm",placeholder:"Add a description of your video"}))),c.a.createElement("div",{className:"upload__publish-cancel-container"},c.a.createElement("button",{className:"upload__publish-button",form:"uploadForm",type:"submit",onClick:function(a){a.preventDefault(),console.log(a.target.form);var t={title:a.target.form.videoTitle.value,channel:"Mega Mohan",description:a.target.form.videoDescription.value,image:"https://i.imgur.com/GLUMomv.jpg"};console.log(t),w.a.post("/api/upload",t).then((function(a){e.setPlaylist(),e.history.replace({pathname:"/video/".concat(a.data.id)})})).catch((function(e){throw console.log(e),e})),a.target.form.reset()}},"PUBLISH"),c.a.createElement("button",{className:"upload__cancel-button",onClick:function(){e.history.goBack()}},"CANCEL")))},L=t(7),P=(t(67),function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).setPlaylist=function(){w.a.get("/api/videos").then((function(e){var a=e.data;w.a.get("/api/videos/").then((function(e){t.setState({playlist:a})}))}))},t.setCurrentVideo=function(e){w.a.get("/api/videos/".concat(e)).then((function(e){t.setState({currentVideo:e.data})})).catch((function(e){return console.log(e)}))},t.state={playlist:[],currentVideo:{comments:[]}},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;w.a.get("/api/videos").then((function(a){var t=a.data,n=a.data[0].id;w.a.get("/api/videos/".concat(n)).then((function(a){e.setState({playlist:t,currentVideo:a.data})}))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement(u.a,null,c.a.createElement(b,null),c.a.createElement(L.b,{exact:!0,path:"/"},c.a.createElement(L.a,{to:"/video/1af0jruup5gu"})),c.a.createElement(L.b,{path:"/video/:id",render:function(a){return c.a.createElement(T,Object.assign({playlist:e.state.playlist,setCurrentVideo:e.setCurrentVideo,currentVideo:e.state.currentVideo},a))}}),c.a.createElement(L.b,{path:"/upload",render:function(a){return c.a.createElement(S,Object.assign({setPlaylist:e.setPlaylist},a))}}))}}]),a}(n.Component));o.a.render(c.a.createElement(P,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.34aa7ebb.chunk.js.map