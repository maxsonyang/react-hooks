(self.webpackChunkreact_hooks=self.webpackChunkreact_hooks||[]).push([[161],{4385:function(e,t,n){"use strict";n.d(t,{ib:function(){return l},nl:function(){return r},B$:function(){return o}});var a=n(7294);function l(e){var t=(0,a.useState)({data:null,loading:!0}),n=t[0],l=t[1];return(0,a.useEffect)((function(){l((function(e){return{data:e.data,loading:!0}})),fetch(e).then((function(e){return e.text()})).then((function(e){l({data:e,loading:!1})}))}),[e,l]),n}function r(){var e,t,n,l,r=(e="http://numbersapi.com/42/trivia",t=(0,a.useState)({data:null,loading:!0}),n=t[0],l=t[1],(0,a.useEffect)((function(){l((function(e){return{data:e.data,loading:!0}})),fetch(e).then((function(e){return e.text()})).then((function(e){setTimeout((function(){l({data:e,loading:!1})}),4e3)}))}),[e,l]),n),o=r.data,c=r.loading;return a.createElement("div",null,a.createElement("div",null,c?"loading very slowly...":o))}function o(){var e,t,n,l,r,o=(e="http://numbersapi.com/42/trivia",t=(0,a.useRef)(!0),n=(0,a.useState)({data:null,loading:!0}),l=n[0],r=n[1],(0,a.useEffect)((function(){return function(){t.current=!1}})),(0,a.useEffect)((function(){r((function(e){return{data:e.data,loading:!0}})),fetch(e).then((function(e){return e.text()})).then((function(e){setTimeout((function(){t.current||r({data:e,loading:!1})}),4e3)}))}),[e,r]),l),c=o.data,u=o.loading;return a.createElement("div",null,a.createElement("div",null,u?"loading very slowly...":c))}},6638:function(e,t,n){"use strict";n.d(t,{c:function(){return l}});var a=n(7294);function l(e){var t=(0,a.useState)(e),n=t[0],l=t[1];return[n,function(e){var t;l(Object.assign({},n,((t={})[e.target.name]=e.target.value,t)))}]}t.Z=function(){var e=l({email:"",password:""}),t=e[0],n=e[1];return a.createElement("form",{onSubmit:function(){return alert("email: "+t.email+" password: "+t.password)}},a.createElement("input",{name:"email",placeholder:"email",value:t.email,onChange:n}),a.createElement("input",{name:"password",placeholder:"password",type:"password",value:t.password,onChange:n}),a.createElement("input",{name:"submit",type:"submit",value:"submit"}))}},9092:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),l=n(6638),r=n(4385);var o=function(){return(0,a.useEffect)((function(){return console.log("Hi, I exist!"),console.log("Child components are mounted first."),function(){console.log("Good bye!")}}),[]),a.createElement("div",null,"Hello! I exist!")};var c=function(){var e=function(e){return Math.floor(Math.random()*e)},t=(0,l.c)({firstName:"",lastName:"",email:"",password:""}),n=t[0],c=t[1],u=(0,a.useState)((function(){return e(100)})),s=u[0],i=u[1],m=(0,r.ib)("http://numbersapi.com/"+s+"/trivia"),f=m.data,d=m.loading,h=(0,a.useState)(!0),E=h[0],p=h[1],v=(0,a.useState)(0),g=v[0],b=v[1],y=(0,a.useState)(""),N=y[0],w=y[1],k=(0,a.useRef)(),S=(0,a.useRef)();(0,a.useEffect)((function(){var e=localStorage.getItem("count");e&&b(JSON.parse(e))}),[]),(0,a.useEffect)((function(){return console.log("Only called when email is updated."),function(){}}),[n.email]),(0,a.useEffect)((function(){console.log("Multiple useEffects can be added, and they fire in order."),localStorage.setItem("count",JSON.stringify(g))}),[g]);var C=function(e,t){var n=(0,a.useState)({}),l=n[0],r=n[1];return(0,a.useLayoutEffect)((function(){r(e.current.getBoundingClientRect())}),t),l}(S,[f]);return a.createElement(a.Fragment,null,a.createElement("div",{className:"container-fluid"},a.createElement("div",{className:"page-header"},a.createElement("h1",null,"useEffect"),a.createElement("div",{className:"page-subheader"},"Hook that's called after each render. Most of these examples log something to console, so you'll want to open that up.")),a.createElement("div",{className:"hooks-content"},a.createElement("h2",null,"Basic useEffect Example"),a.createElement("div",{className:"blurb"},"useEffect is a hook that's called after each render. You can include an array of variables and/or functions as a second argument so that useEffect is only called when those variables are updated. Leaving it empty means useEffect will not be called on re-renders."),a.createElement("form",null,a.createElement("input",{name:"firstName",placeholder:"First Name",value:n.firstName,onChange:c}),a.createElement("input",{name:"lastName",placeholder:"Last Name",value:n.lastName,onChange:c}),a.createElement("input",{name:"email",placeholder:"Email",value:n.email,onChange:c}),a.createElement("input",{name:"password",type:"password",placeholder:"Password",value:n.password,onChange:c}))),a.createElement("div",{className:"hooks-content"},a.createElement("h2",null,"Clean-up/Unmount"),a.createElement("div",{className:"blurb"},'useEffect can also return a function that handles the "clean-up" logic of a component when it unmounts.'),a.createElement("button",{onClick:function(){return p((function(e){return!e}))}},"Toggle show"),E&&a.createElement(o,null)),a.createElement("div",{className:"hooks-content"},a.createElement("h2",null,"API fetch example."),a.createElement("div",{className:"blurb"},"useEffect can be a good spot to fetch data from APIs as well. API used: ",a.createElement("a",{href:"https://numbersapi.com/",target:"_blank"},"Numbers API")),a.createElement("div",{style:{display:"flex"}},d?"fun fact loading...":f),a.createElement("button",{onClick:function(){i((function(){return e(100)}))}},"Give me another.")),a.createElement("div",{className:"hooks-content"},a.createElement("h2",null,"Local Storage Example"),a.createElement("div",{className:"blurb"},"useEffect can also be useful for persisting data, in this case making a call to localStorage to save each time the count is updated."),a.createElement("div",null,"The count is: ",""+g),a.createElement("button",{onClick:function(){return b((function(e){return e+1}))}},"Increase it!")),a.createElement("div",{className:"page-header"},a.createElement("h1",null,"useLayoutEffect"),a.createElement("div",{className:"page-subheader"},'Very similar to useEffect apparently, but has a more niche use case. Not really sure what that\'s all about yet. According to the docs, it "fires synchronously after all DOM mutations."')),a.createElement("div",{className:"hooks-content"},a.createElement("h2",null,"Basic example of useLayoutEffect."),a.createElement("div",{className:"blurb"},"Using this to get the input's rect. Note that this has been commented out."),a.createElement("div",null,a.createElement("input",{ref:k,name:"layoutInput",value:N,onChange:function(e){return w((function(){return e.target.value}))}}))),a.createElement("div",{className:"hooks-content"},a.createElement("h2",null,"Revisiting numbers API"),a.createElement("div",{className:"blurb"},"Showing how useLayoutEffect can be used in a more practical way."),a.createElement("div",null,a.createElement("div",{style:{display:"flex"}},a.createElement("div",{ref:S},d?"fun fact loading...":f)),a.createElement("div",null,"Measurements of the fun fact div above."),a.createElement("pre",null,JSON.stringify(C,null,2)),a.createElement("button",{onClick:function(){i((function(){return e(100)}))}},"Give me another."))),a.createElement("div",{className:"hooks-content"},a.createElement("h2",null,"Conclusion (sort of)"),a.createElement("div",{className:"blurb"},"It seems the gist/pattern that you'd use this is if you want to apply any effects after the everything has finished rendering? It's still not clear to me so I'll apply an incremental approach as suggested in the docs."))))}}}]);
//# sourceMappingURL=component---src-pages-use-effect-js-d7a43b0a4c6730b3d3c0.js.map