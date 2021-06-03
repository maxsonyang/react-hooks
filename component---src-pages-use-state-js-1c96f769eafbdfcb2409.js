(self.webpackChunkreact_hooks=self.webpackChunkreact_hooks||[]).push([[946],{3966:function(e,t,a){"use strict";a.r(t);var n=a(7294),l=a(5414),c=a(6638);t.default=function(){var e=(0,n.useState)(0),t=e[0],a=e[1],s=(0,n.useState)(0),r=s[0],o=s[1],u=(0,n.useState)({a:0,b:0}),i=u[0],m=i.a,h=i.b,d=u[1];return n.createElement(n.Fragment,null,n.createElement(l.q,null,n.createElement("title",null,t+" clicks!")),n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"page-header"},n.createElement("h1",null,"useState"),n.createElement("div",{className:"page-subheader"},"I'll think of something for a subheader here.")),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Basic useState"),n.createElement("div",{className:"blurb"},"The most basic of ways you can implement useState"),n.createElement("div",null,"You've clicked the counter "+t+" times"),n.createElement("button",{onClick:function(){return a(t+1)}},"Click me!!!!")),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"With Updater Function"),n.createElement("div",{className:"blurb"},"Updater function can be useful for avoiding race conditions. Since state updates are asynchronous, directly referencing the value could result in receiving an outdated value."),n.createElement("div",null,"Yet another counter: "+r+" clicks"),n.createElement("button",{onClick:function(){return o((function(e){return e+1}))}},"Update this counter")),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Object Example"),n.createElement("div",{className:"blurb"},"Updating a state with an object. Calling setState and modifying one of the attributes without preserving the others will cause the others to be deleted. When using '...' syntax, the original state must come first before any updates, as the original values are overriden subsequently. Alternatively, you can break these up into individual states."),n.createElement("div",null,"A has: "+m+" clicks"),n.createElement("div",null,"B has: "+h+" clicks"),n.createElement("button",{onClick:function(){return d((function(e){return Object.assign({},e,{a:m+1})}))}},"Update A only."),n.createElement("button",{onClick:function(){return d((function(e){return Object.assign({},e,{b:h+1})}))}},"Update B only.")),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Forms Example"),n.createElement("div",{className:"blurb"},"A form as an example of a very common use case, as well as a generalized state updater. This approach allows us to decouple state from the actual UI, so we can plug this into other components. It can also be called whenever there's a state change."),n.createElement(c.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-use-state-js-1c96f769eafbdfcb2409.js.map