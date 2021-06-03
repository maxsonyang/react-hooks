(self.webpackChunkreact_hooks=self.webpackChunkreact_hooks||[]).push([[161],{6638:function(e,t,a){"use strict";a.d(t,{c:function(){return l}});var n=a(7294);function l(e){var t=(0,n.useState)(e),a=t[0],l=t[1];return[a,function(e){var t;l(Object.assign({},a,((t={})[e.target.name]=e.target.value,t)))}]}t.Z=function(){var e=l({email:"",password:""}),t=e[0],a=e[1];return n.createElement("form",{onSubmit:function(){return alert("email: "+t.email+" password: "+t.password)}},n.createElement("input",{name:"email",placeholder:"email",value:t.email,onChange:a}),n.createElement("input",{name:"password",placeholder:"password",type:"password",value:t.password,onChange:a}),n.createElement("input",{name:"submit",type:"submit",value:"submit"}))}},8178:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),l=a(5444),o=a(6638);var r=function(){return(0,n.useEffect)((function(){return console.log("Hi, I exist!"),console.log("Child components are mounted first."),function(){console.log("Good bye!")}}),[]),n.createElement("div",null,"Hello! I exist!")};var c=function(){var e=function(e){return Math.floor(Math.random()*e)},t=(0,o.c)({firstName:"",lastName:"",email:"",password:""}),a=t[0],c=t[1],s=(0,n.useState)((function(){return e(100)})),u=s[0],i=s[1],m=function(e){var t=(0,n.useState)({data:null,loading:!0}),a=t[0],l=t[1];return(0,n.useEffect)((function(){l((function(e){return{data:e.data,loading:!0}})),fetch(e).then((function(e){return e.text()})).then((function(e){l({data:e,loading:!1})}))}),[e,l]),a}("http://numbersapi.com/"+u+"/trivia"),f=m.data,d=m.loading,h=(0,n.useState)(!0),p=h[0],E=h[1],g=(0,n.useState)(0),v=g[0],b=g[1];return(0,n.useEffect)((function(){var e=localStorage.getItem("count");e&&b(JSON.parse(e))}),[]),(0,n.useEffect)((function(){return console.log("Only called when email is updated."),function(){}}),[a.email]),(0,n.useEffect)((function(){console.log("Multiple useEffects can be added, and they fire in order."),localStorage.setItem("count",JSON.stringify(v))}),[v]),n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"page-header"},n.createElement("h1",null,"useEffect"),n.createElement("div",{className:"page-subheader"},"Hook that's called after each render. Most of these examples log something to console, so you'll want to open that up.")),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Basic useEffect Example"),n.createElement("div",{className:"blurb"},"useEffect is a hook that's called after each render. You can include an array of variables and/or functions as a second argument so that useEffect is only called when those variables are updated. Leaving it empty means useEffect will not be called on re-renders."),n.createElement("form",null,n.createElement("input",{name:"firstName",placeholder:"First Name",value:a.firstName,onChange:c}),n.createElement("input",{name:"lastName",placeholder:"Last Name",value:a.lastName,onChange:c}),n.createElement("input",{name:"email",placeholder:"Email",value:a.email,onChange:c}),n.createElement("input",{name:"password",type:"password",placeholder:"Password",value:a.password,onChange:c}))),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Clean-up/Unmount"),n.createElement("div",{className:"blurb"},'useEffect can also return a function that handles the "clean-up" logic of a component when it unmounts.'),n.createElement("button",{onClick:function(){return E((function(e){return!e}))}},"Toggle show"),p&&n.createElement(r,null)),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"API fetch example."),n.createElement("div",{className:"blurb"},"useEffect can be a good spot to fetch data from APIs as well. API used: ",n.createElement(l.rU,{to:"http://numbersapi.com/",target:"_blank"},"Numbers API")),n.createElement("div",null,d?"fun fact loading...":f),n.createElement("button",{onClick:function(){return i((function(){return e(100)}))}},"Get a new fact!")),n.createElement("div",{className:"hooks-content"},n.createElement("h2",null,"Local Storage Example"),n.createElement("div",{className:"blurb"},"useEffect can also be useful for persisting data, that is updating values that we'd like to persist."),n.createElement("div",null,"The count is: ",""+v),n.createElement("button",{onClick:function(){return b((function(e){return e+1}))}},"Increase it!")))}}}]);
//# sourceMappingURL=component---src-pages-use-effect-js-4e878a9ec5f6f6dc8e46.js.map