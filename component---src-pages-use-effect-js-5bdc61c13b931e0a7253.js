(self.webpackChunkreact_hooks=self.webpackChunkreact_hooks||[]).push([[161],{8178:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var n=a(7294),l=a(5414),o=a(6638);var c=function(){return(0,n.useEffect)((function(){return console.log("Hi, I exist!"),console.log("Child components are mounted first."),function(){console.log("Good bye!")}}),[]),n.createElement("div",null,"Hello! I exist!")};var r=function(){var e=(0,o.c)({firstName:"",lastName:"",email:"",password:""}),t=e[0],a=e[1],r=(0,n.useState)(12),s=r[0],u=(r[1],function(e){var t=(0,n.useState)({data:null,loading:!0}),a=t[0],l=t[1];return(0,n.useEffect)((function(){l((function(e){return{data:e.data,loading:!0}})),fetch(e).then((function(e){return e.text()})).then((function(e){l({data:e,loading:!1})}))}),[e,l]),a}("http://numbersapi.com/"+s+"/trivia")),i=u.data,m=u.loading,f=(0,n.useState)(!0),d=f[0],h=f[1],E=(0,n.useState)(0),p=E[0],g=E[1];return(0,n.useEffect)((function(){var e=localStorage.getItem("count");e&&g(JSON.parse(e))}),[]),(0,n.useEffect)((function(){return console.log("Only called when email is updated."),function(){}}),[t.email]),(0,n.useEffect)((function(){console.log("Multiple useEffects can be added, and they fire in order."),localStorage.setItem("count",JSON.stringify(p))}),[p]),n.createElement(n.Fragment,null,n.createElement(l.q,null,n.createElement("meta",{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"})),n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"page-header"},n.createElement("h1",null,"useEffect"),n.createElement("div",{className:"page-subheader"},"Hook that's called after each render. Most of these examples log something to console, so you'll want to open that up.")),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Basic useEffect Example"),n.createElement("div",{className:"blurb"},"useEffect is a hook that's called after each render. You can include an array of variables and/or functions as a second argument so that useEffect is only called when those variables are updated. Leaving it empty means useEffect will not be called on re-renders."),n.createElement("form",null,n.createElement("input",{name:"firstName",placeholder:"First Name",value:t.firstName,onChange:a}),n.createElement("input",{name:"lastName",placeholder:"Last Name",value:t.lastName,onChange:a}),n.createElement("input",{name:"email",placeholder:"Email",value:t.email,onChange:a}),n.createElement("input",{name:"password",type:"password",placeholder:"Password",value:t.password,onChange:a}))),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Clean-up/Unmount"),n.createElement("div",{className:"blurb"},'useEffect can also return a function that handles the "clean-up" logic of a component when it unmounts.'),n.createElement("button",{onClick:function(){return h((function(e){return!e}))}},"Toggle show"),d&&n.createElement(c,null)),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"API fetch example."),n.createElement("div",{className:"blurb"},"useEffect can be a good spot to fetch data from APIs as well. API used: ",n.createElement("a",{href:"https://numbersapi.com/",target:"_blank"},"Numbers API")),n.createElement("div",null,m?"fun fact loading...":i)),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Local Storage Example"),n.createElement("div",{className:"blurb"},"useEffect can also be useful for persisting data, in this case making a call to localStorage to save each time the count is updated."),n.createElement("div",null,"The count is: ",""+p),n.createElement("button",{onClick:function(){return g((function(e){return e+1}))}},"Increase it!"))))}}}]);
//# sourceMappingURL=component---src-pages-use-effect-js-5bdc61c13b931e0a7253.js.map