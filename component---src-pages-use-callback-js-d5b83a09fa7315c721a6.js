(self.webpackChunkreact_hooks=self.webpackChunkreact_hooks||[]).push([[372],{5830:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(7294);function c(){var e=(0,r.useRef)(0);return console.log("renders: ",e.current++),e}var a=r.memo((function(e){var n=e.increment;return c(),r.createElement("button",{onClick:function(){return n(2)}},"boop.")})),l=r.memo((function(e){var n=e.n,t=e.increment;return c(),r.createElement("button",{onClick:function(){return t(n)}},n)}));var u=function(){var e=(0,r.useState)(0),n=e[0],t=e[1],c=(0,r.useCallback)((function(e){t((function(n){return n+e}))}),[t]);return r.createElement("div",{className:"container-fluid"},r.createElement("div",{className:"page-header"},r.createElement("h1",null,"useCallback"),r.createElement("div",{className:"page-subheader"},"I wish I had callbacks.")),r.createElement("div",{className:"hooks-content"},r.createElement("h2",null,"Basic example."),r.createElement("div",{className:"blurb"},"Basic example where we increment a counter with useCallback. This implementation helps us reduce the amount of component renders whenever we increment the count."),r.createElement("div",null,r.createElement("div",null,"Counter: ",n),r.createElement(a,{increment:c}),[1,2,5,10].map((function(e){return r.createElement(l,{n:e,onClick:function(){return c(e)},increment:c,key:e})})))))}}}]);
//# sourceMappingURL=component---src-pages-use-callback-js-d5b83a09fa7315c721a6.js.map