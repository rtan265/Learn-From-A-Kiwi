(this.webpackJsonplearnfromakiwi=this.webpackJsonplearnfromakiwi||[]).push([[0],{31:function(e,t,a){e.exports=a(53)},36:function(e,t,a){},37:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(36),a(6)),s=a(7),i=a(9),m=a(8),u=a(14),b=a(15),p=a(54),d=a(55),E=a(56),h=a(62),f=a(57),g=a(58),v=a(59),y=(a(37),[{link:"/explore",text:"Explore"},{link:"/instructors",text:"Instructors"},{link:"/signIn",text:"Sign in"}]),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(b.a)(n)),n.closeNavbar=n.closeNavbar.bind(Object(b.a)(n)),n.state={collapsed:!0},n}return Object(s.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"closeNavbar",value:function(){!0!==this.state.collapsed&&this.toggleNavbar()}},{key:"render",value:function(){return console.log("hello from navigation"),r.a.createElement("div",null,r.a.createElement(p.a,{position:"sticky",expand:"lg",dark:!0,className:"navbar sticky-top"},r.a.createElement(d.a,{className:"link",exact:!0,href:"/"},"LearnFromA.Kiwi"),r.a.createElement(E.a,{onClick:this.toggleNavbar}),r.a.createElement(h.a,{isOpen:!this.state.collapsed,navbar:!0},r.a.createElement(f.a,{navbar:!0,className:"ml-auto"},y.map((function(e,t){return r.a.createElement(g.a,null,r.a.createElement(v.a,{className:"link",key:t,href:e.link},e.text))}))))))}}]),a}(r.a.Component),N=a(13),j=a(60),O=a(61),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j.a,{fluid:!0},r.a.createElement(O.a,{fluid:!0},r.a.createElement("h1",{className:"display-3"},"Locals. Learning. Live")))}}]),a}(r.a.Component),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Explore")}}]),a}(r.a.Component),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Instructors")}}]),a}(r.a.Component),C=(a(47),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toInstructor=function(){n.setState({loginState:"instructor"})},n.toStudent=function(){n.setState({loginState:"student"})},n.state={loginState:"student"},n}return Object(s.a)(a,[{key:"toggleLogin",value:function(){return"student"===this.state.loginState?r.a.createElement("form",{className:"sign-in-form"},r.a.createElement("h3",null,"Sign In as a ",r.a.createElement("strong",null,"Student")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter Email",style:{width:"50%",margin:"auto"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter Password",style:{width:"50%",margin:"auto"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",style:{width:"50%",margin:"auto"}},"Submit"),r.a.createElement("div",{style:{textAlign:"center"}},"Forgot ",r.a.createElement("a",{href:"#"},"password?")),r.a.createElement("div",null,"Are you an ",r.a.createElement("a",{onClick:this.toInstructor,href:"javascript:;"},"instructor"),"?")):r.a.createElement("form",{className:"sign-in-form"},r.a.createElement("h3",null,"Sign In as an ",r.a.createElement("strong",null,"Instructor")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter Email",style:{width:"50%",margin:"auto"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",placeholder:"Enter Password",style:{width:"50%",margin:"auto"}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",style:{width:"50%",margin:"auto"}},"Submit"),r.a.createElement("div",{style:{textAlign:"center"}},"Forgot ",r.a.createElement("a",{href:"#"},"password?")),r.a.createElement("div",null,"Are you a ",r.a.createElement("a",{onClick:this.toStudent,href:"javascript:;"},"student"),"?"))}},{key:"render",value:function(){return r.a.createElement("div",null,this.toggleLogin())}}]),a}(r.a.Component)),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.b,null,r.a.createElement(N.b,{to:"/",component:w}),r.a.createElement(N.b,{to:"/explore",component:x}),r.a.createElement(N.b,{to:"/instructors",component:S}),r.a.createElement(N.b,{to:"/signin",component:C}))}}]),a}(r.a.Component),I=(a(51),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("main",{className:"App"},r.a.createElement(k,null),r.a.createElement(A,null))}}]),a}(r.a.Component)),F=Object(u.e)(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52);c.a.render(r.a.createElement(N.a,{basename:"/learnFromAKiwi"},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.742de0ed.chunk.js.map