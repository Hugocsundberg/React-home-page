(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{1:function(t,e,a){t.exports={contentMain:"video_block_contentMain__2OtmJ",section1:"video_block_section1__2Qqrp",gridcontainer:"video_block_gridcontainer__3y8uK",hidden:"video_block_hidden__1ayYW",javaScript:"video_block_javaScript__262YT",react:"video_block_react__28Q8E",hoverContainer:"video_block_hoverContainer__2TdZb",video:"video_block_video__2GaJj",fadein:"video_block_fadein__10Fuz",none:"video_block_none__2GqBK",section2:"video_block_section2__1pzWF",cuttingContainer:"video_block_cuttingContainer__21Njw",black_background:"video_block_black_background__2h__k",white_text:"video_block_white_text__3YPTx",black_text:"video_block_black_text__AUu4e",white_background:"video_block_white_background__eEGcz",expanded:"video_block_expanded__23NXu",calmContainer:"video_block_calmContainer__UDdIE",transition:"video_block_transition__8ZKz_",goToAppButton:"video_block_goToAppButton__15iaU",buttonAttention:"video_block_buttonAttention__isLSP",expandButton:"video_block_expandButton__39u9a",sec2p:"video_block_sec2p__16u12",buttontext:"video_block_buttontext__2Y_cr"}},10:function(t,e,a){t.exports={switch:"darkMode_switch_switch__373Hk",darkMode:"darkMode_switch_darkMode__ukbo1",lightMode:"darkMode_switch_lightMode__1wWeO"}},19:function(t,e,a){t.exports=a.p+"static/media/Screenshot_1.a3356021.png"},2:function(t,e,a){t.exports={contentMain:"image_block_contentMain__3a_0v",section1:"image_block_section1__tf5Hj",gridcontainer:"image_block_gridcontainer__2I_UZ",javaScript:"image_block_javaScript__1Q0Dy",react:"image_block_react__1hOXj",hoverContainer:"image_block_hoverContainer__VUXZA",hidden:"image_block_hidden__2TWYX",fadein:"image_block_fadein__gxbQp",section2:"image_block_section2__3cIty",darkMode:"image_block_darkMode__1YLea",black_background:"image_block_black_background__3bN8q",white_text:"image_block_white_text__bDJI7",black_text:"image_block_black_text__1E7J8",white_background:"image_block_white_background__3b7ym",transition:"image_block_transition__1Rid4",expanded:"image_block_expanded__1Yqak",expandButton:"image_block_expandButton__s8asS",calmContainer:"image_block_calmContainer__b7N8V",goToAppButton:"image_block_goToAppButton__1DtDp",buttonAttention:"image_block_buttonAttention__YFmRr",sec2p:"image_block_sec2p__26MKF",buttontext:"image_block_buttontext__339Xr"}},24:function(t,e,a){t.exports=a.p+"static/media/animalvideo.6a6bcaaf.mp4"},25:function(t,e,a){t.exports=a(42)},30:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(14),c=a.n(i),s=(a(30),a(4)),r=a(5),d=a(3),u=a(7),l=a(6),h=a(1),p=a.n(h),m=a(9),_=a.n(m),k=a(8),v=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={scrollDirection:"top",deedIsDone:!1,darkMode:n.props.darkMode},n.darkModeSwitch=n.darkModeSwitch.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"toTop",value:function(){k.animateScroll.scrollToTop()}},{key:"darkModeSwitch",value:function(){this.props.changeStateFadeOut(!0),console.log(this.props.StateChangeFunction),!0===this.state.darkMode?this.props.StateChangeFunction(!1):this.props.StateChangeFunction(!0),console.log("header state: "+this.state.darkMode)}},{key:"componentWillReceiveProps",value:function(){var t=this;setTimeout((function(){t.setState({darkMode:t.props.darkMode})}),5)}},{key:"componentDidMount",value:function(){var t,e=this;setInterval((function(){}),1e3),window.addEventListener("scroll",(function(){var a=window.scrollY;setTimeout((function(){var n=window.scrollY;a<n?(t="down",e.setTheState(t)):a>n&&(t="up",e.setTheState(t))}),20),0==window.scrollY&&"down"==e.state.scrollDirection?setTimeout((function(){t="topFromDown",e.setTheState(t)}),650):0==window.scrollY&&setTimeout((function(){t="top",e.setTheState(t)}),650)}))}},{key:"setTheState",value:function(t){var e=this;this.state.deedIsDone||(this.setState({scrollDirection:t}),this.setState({deedIsDone:!0}),setTimeout((function(){e.setState({deedIsDone:!1})}),650))}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return o.a.createElement("div",{className:"".concat(_.a.container," ").concat("up"==this.state.scrollDirection?_.a.up:"down"==this.state.scrollDirection?_.a.down:"top"==this.state.scrollDirection?_.a.top:_.a.topFromDown," ").concat(this.state.darkMode?_.a.black_background:" "," "),style:"up"===this.state.scrollDirection||"down"===this.state.scrollDirection?{height:"40px"}:{}},o.a.createElement("p",{onClick:this.toTop,className:"".concat(_.a.text," ").concat(this.state.darkMode?_.a.white_text:" "),style:"up"===this.state.scrollDirection||"down"===this.state.scrollDirection?{fontFamily:"verdana",fontSize:"13px"}:{}},"top"===this.state.scrollDirection||"topFromDown"===this.state.scrollDirection?"HS":"To top"))}}]),a}(n.Component),b=a(24),g=a.n(b),j=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).video=o.a.createRef(),n.state={videoLoaded:!1,buttonEffect:null,media:2,isExpanded:!1,darkMode:n.props.darkMode},n.expandedSwitch=n.expandedSwitch.bind(Object(d.a)(n)),n.linkFunc=n.linkFunc.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"expandedSwitch",value:function(){0==this.state.isExpanded?(this.setState({isExpanded:!0}),k.scroller.scrollTo("section2",{duration:1e3,delay:0,smooth:"easeInOutQuint",offset:-window.innerHeight/2+200})):(this.setState({isExpanded:!1}),k.animateScroll.scrollToTop({duration:1e3,delay:0,smooth:"easeInOutQuint"}))}},{key:"componentWillReceiveProps",value:function(){var t=this;setTimeout((function(){t.setState({darkMode:t.props.darkMode}),t.state.darkMode?document.body.style.backgroundColor="black":document.body.style.backgroundColor="white",console.log("darkmode is: "+t.state.darkMode)}),5)}},{key:"linkFunc",value:function(){var t=this;this.props.changeStateFadeOut(!0),setTimeout((function(){window.location.href=t.props.link}),1e3)}},{key:"componentDidMount",value:function(){var t=this;setInterval((function(){}),1e3);this.video.current.addEventListener("loadeddata",function(){t.setState({videoLoaded:!0})}.bind(this)),this.video.current.addEventListener("mouseover",(function(){t.setState({buttonEffect:!0})})),this.video.current.addEventListener("mouseout",function(){t.setState({buttonEffect:!1})}.bind(this))}},{key:"render",value:function(){return o.a.createElement("div",{className:"".concat(p.a.contentMain)},o.a.createElement("div",{className:p.a.section1,style:{height:"".concat(this.props.height,"vh")}},o.a.createElement("video",{className:p.a.video,autoPlay:!0,loop:!0,muted:!0,src:g.a,style:{height:parseInt(this.props.height)+20+"vh"}}),o.a.createElement("div",{className:p.a.gridcontainer},o.a.createElement("div",{className:"item ".concat("javaScript"===this.props.tool1?p.a.javaScript:"react"===this.props.tool1?p.a.react:""," ")}),o.a.createElement("div",{className:"item ".concat("javaScript"===this.props.tool2?p.a.javaScript:"react"===this.props.tool2?p.a.react:""," ")}),o.a.createElement("div",{className:"item ".concat(this.props.tool3)})),o.a.createElement("div",{className:p.a.hoverContainer,ref:this.video,onClick:this.linkFunc})),o.a.createElement("div",{className:"".concat(p.a.cuttingContainer)},o.a.createElement("div",{className:"".concat(p.a.section2," ").concat(this.state.isExpanded?p.a.expanded:" "," ").concat(this.state.darkMode?p.a.black_background:" "),onClick:this.expandedSwitch,name:"section2"},o.a.createElement("div",{className:"".concat(p.a.calmContainer," ").concat(this.state.darkMode?p.a.black_background:" "," ").concat(p.a.transition)},o.a.createElement("h1",{className:" ".concat(this.state.darkMode?p.a.white_text:" ")},this.props.headline),o.a.createElement("p",{className:"".concat(p.a.sec2p,"  ").concat(this.state.darkMode?p.a.white_text:" ")},"".concat(this.props.text,"  ").concat(this.state.isExpanded?this.props.expandedText:"")),o.a.createElement("button",{className:"".concat(p.a.goToAppButton," ").concat(this.props.button?"":p.a.hidden," ").concat(this.state.buttonEffect?p.a.buttonAttention:" "),onClick:this.linkFunc},o.a.createElement("p",{className:"".concat(p.a.buttontext,"  ").concat(this.state.darkMode?p.a.white_text:" ")},"".concat(this.props.buttontext))),o.a.createElement("button",{onClick:this.expandedSwitch,className:"".concat(p.a.expandButton,"  ").concat(this.state.darkMode?p.a.white_text:" "),name:"knapp",smooth:!0,duration:1e3},this.state.isExpanded?"minimize":"expand")))))}}]),a}(n.Component),f=a(2),x=a.n(f),w=a(19),S=a.n(w),M=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).video=o.a.createRef(),n.expandedSwitch=n.expandedSwitch.bind(Object(d.a)(n)),n.state={videoLoaded:!1,buttonEffect:null,media:2,isExpanded:!1,darkMode:n.props.darkMode},n.linkFunc=n.linkFunc.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"expandedSwitch",value:function(){0==this.state.isExpanded?(this.setState({isExpanded:!0}),k.scroller.scrollTo(this.props.name+"section2",{duration:1e3,delay:0,smooth:"easeInOutQuint",offset:-window.innerHeight/2+200})):(this.setState({isExpanded:!1}),k.scroller.scrollTo(this.props.name,{duration:1e3,delay:0,smooth:"easeInOutQuint",offset:0}))}},{key:"linkFunc",value:function(){var t=this;this.props.changeStateFadeOut(!0),setTimeout((function(){window.location.href=t.props.link}),1e3)}},{key:"componentWillReceiveProps",value:function(){var t=this;setTimeout((function(){t.setState({darkMode:t.props.darkMode})}),5)}},{key:"componentDidMount",value:function(){var t=this;setInterval((function(){}),1e3);this.video.current.addEventListener("loadeddata",function(){t.setState({videoLoaded:!0})}.bind(this)),this.video.current.addEventListener("mouseover",(function(){t.setState({buttonEffect:!0})})),this.video.current.addEventListener("mouseout",function(){t.setState({buttonEffect:!1})}.bind(this))}},{key:"render",value:function(){return o.a.createElement("div",{className:x.a.contentMain,name:this.props.name},o.a.createElement("div",{className:x.a.section1,style:{backgroundImage:"url(".concat(S.a,")")}},o.a.createElement("div",{className:x.a.gridcontainer},o.a.createElement("div",{className:"item ".concat("javaScript"===this.props.tool1?x.a.javaScript:"react"===this.props.tool1?x.a.react:""," ")}),o.a.createElement("div",{className:"item ".concat("javaScript"===this.props.tool2?x.a.javaScript:"react"===this.props.tool2?x.a.react:""," ")}),o.a.createElement("div",{className:"item ".concat(this.props.tool3)})),o.a.createElement("div",{className:x.a.hoverContainer,ref:this.video,onClick:this.linkFunc})),o.a.createElement("div",{className:"".concat(x.a.section2," ").concat(this.state.isExpanded?x.a.expanded:" "," ").concat(this.state.darkMode?x.a.black_background:" "),onClick:this.expandedSwitch,name:this.props.name+"section2"},o.a.createElement("div",{className:"".concat(x.a.calmContainer," ").concat(this.state.darkMode?x.a.black_background:" "," ").concat(x.a.transition)},o.a.createElement("h1",{className:" ".concat(this.state.darkMode?x.a.white_text:" ")},this.props.headline),o.a.createElement("p",{className:"".concat(x.a.sec2p,"  ").concat(this.state.darkMode?x.a.white_text:" ")},"".concat(this.props.text,"  ").concat(this.state.isExpanded?this.props.expandedText:"")),o.a.createElement("button",{className:"".concat(x.a.goToAppButton," ").concat(this.props.button?"":x.a.hidden," ").concat(this.state.buttonEffect?x.a.buttonAttention:" "),onClick:this.linkFunc},o.a.createElement("p",{className:"".concat(x.a.buttontext,"  ").concat(this.state.darkMode?x.a.white_text:" ")},this.props.buttontext)),o.a.createElement("button",{onClick:this.expandedSwitch,className:"".concat(x.a.expandButton,"  ").concat(this.state.darkMode?x.a.white_text:" "),name:"knapp",smooth:!0,duration:1e3},this.state.isExpanded?"minimize":"expand"))))}}]),a}(n.Component),E=a(10),O=a.n(E),y=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={rightHanded:!0,darkMode:n.props.darkMode},n.darkModeSwitch=n.darkModeSwitch.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"darkModeSwitch",value:function(){!0===this.state.darkMode?this.props.StateChangeFunction(!1):this.props.StateChangeFunction(!0),console.log("header state: "+this.state.darkMode)}},{key:"componentWillReceiveProps",value:function(){var t=this;setTimeout((function(){t.setState({darkMode:t.props.darkMode})}),5)}},{key:"componentDidMount",value:function(){var t=this;window.addEventListener("touchstart",(function(e){console.log(e.touches[0].clientX),e.touches[0].clientX>document.body.offsetWidth/2?t.setState({rightHanded:!0}):t.setState({rightHanded:!1})}))}},{key:"render",value:function(){var t=window.innerWidth-90;return o.a.createElement("div",{className:"".concat(O.a.switch," ").concat(this.state.rightHanded?O.a.rightHanded:O.a.leftHanded," ").concat(this.state.darkMode?O.a.darkMode:O.a.lightMode),onClick:this.darkModeSwitch,style:this.state.rightHanded?{left:"".concat(t,"px")}:{left:"30px"}})}}]),a}(n.Component),T=(a(41),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={darkMode:!1,fadeOut:!1},n.changeStateDarkMode=n.changeStateDarkMode.bind(Object(d.a)(n)),n.changeStateFadeOut=n.changeStateFadeOut.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"changeStateDarkMode",value:function(t){this.setState({darkMode:t}),this.render()}},{key:"changeStateFadeOut",value:function(t){this.setState({fadeOut:t}),this.render()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App ".concat(this.state.fadeOut?"fadeout":"")},o.a.createElement(v,{darkMode:this.state.darkMode,StateChangeFunction:this.changeStateDarkMode,changeStateFadeOut:this.changeStateFadeOut}),o.a.createElement(y,{darkMode:this.state.darkMode,StateChangeFunction:this.changeStateDarkMode}),o.a.createElement(j,{button:!0,link:"http://svartkaff3.se/Animal/index.html",changeStateFadeOut:this.changeStateFadeOut,darkMode:this.state.darkMode,video:"2",height:"60",text:"True evolution \xe4r ett projekt som Incidunt enim ad magnam beatae, minus ips True evolution \xe4r ett projekt",expandedText:"m cursus molestie maximus. Donec fringilla leo eros, ihjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjd interdum dui rutrum quis. Quisque placerat augue eu tellus vulputate placerat. Duis at molestie felis, id facilisis nunc. Pellentesque rutrum pretium sem, eu sagittis lacus bibendum id. Vivamus tincidunt dignissim mi, at consectetur arcu congue ut. Vestibulum ornare pretium quam, ut vulputate justo interdum vitae. Fusce fermentum feugiat rum.",headline:"True Evolution",tool1:"javaScript",tool2:"",buttontext:"G\xe5 till app"}),o.a.createElement(M,{button:!1,link:"http://google.se",changeStateFadeOut:this.changeStateFadeOut,darkMode:this.state.darkMode,image:"./Screenshot_1.png",name:"secondBlock",video:"1",height:"80",text:"True evolution \xe4r ett projekt som Incidunt enim ad magnam beatae, minus ips True evolution \xe4r ett projekt",expandedText:"m cursus molestie maximus. Donec fringilla leo eros, ihjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjd interdum dui rutrum quis. Quisque placerat augue eu tellus vulputate placerat. Duis at molestie felis, id facilisis nunc. Pellentesque rutrum pretium sem, eu sagittis lacus bibendum id. Vivamus tincidunt dignissim mi, at consectetur arcu congue ut. Vestibulum ornare pretium quam, ut vulputate justo interdum vitae. Fusce fermentum feugiat rum.",headline:".this",tool1:"react",tool2:""}),o.a.createElement(M,{button:!0,link:"http://google.se",changeStateFadeOut:this.changeStateFadeOut,darkMode:this.state.darkMode,name:"thirdBlock",video:"1",height:"80",text:"True evolution \xe4r ett projekt som Incidunt enim ad magnam beatae, minus ips True evolution \xe4r ett projekt",expandedText:"m cursus molestie maximus. Donec fringilla leo eros, ihjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjhjd interdum dui rutrum quis. Quisque placerat augue eu tellus vulputate placerat. Duis at molestie felis, id facilisis nunc. Pellentesque rutrum pretium sem, eu sagittis lacus bibendum id. Vivamus tincidunt dignissim mi, at consectetur arcu congue ut. Vestibulum ornare pretium quam, ut vulputate justo interdum vitae. Fusce fermentum feugiat rum.",headline:"Lorem Ipsum",tool1:"react",tool2:"javaScript",buttontext:"G\xe5 till app"}))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,a){t.exports={container:"header_container__259IS",text:"header_text__25mUQ",black_background:"header_black_background__2vQAw",white_text:"header_white_text__jJNAM",black_text:"header_black_text__1ntuB",white_background:"header_white_background__2iaSv",down:"header_down__2Os4y",up:"header_up__22QOM",top:"header_top__wyxp3",topFromDown:"header_topFromDown__2AxdZ"}}},[[25,1,2]]]);
//# sourceMappingURL=main.3502802e.chunk.js.map