(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6cYQ":function(e,a,n){"use strict";var t=n("q1tI"),c=n.n(t),r=n("Wbzz"),o=n("Ho6p"),l=n.n(o);a.a=function(e){var a=e.sectionname;return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"navbar"},c.a.createElement(r.Link,{to:"/"},c.a.createElement(l.a,{className:"navbar__LeftButton"})),c.a.createElement("h1",{className:"navbar__section"},a)))}},"73oJ":function(e,a,n){"use strict";var t=n("q1tI"),c=n.n(t),r=n("6cYQ");a.a=function(e){var a=e.children,n=e.sectionname;return c.a.createElement("div",{className:"layoutSections"},c.a.createElement(r.a,{sectionname:n}),c.a.createElement("main",null,a))}},FmyC:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return l})),n.d(a,"query",(function(){return i}));var t=n("q1tI"),c=n.n(t),r=n("73oJ"),o=n("cDup");function l(e){var a=e.data;e.location;return c.a.createElement(r.a,{sectionname:"CARTA"},a.allGoogleSheetCopasRow.edges.map((function(e,a){var n=e.node;return c.a.createElement(o.a,{key:a,node:n})})))}var i="2360985120"},Ho6p:function(e,a,n){var t=n("q1tI");function c(e){return t.createElement("svg",e,t.createElement("polygon",{fillRule:"evenodd",points:"6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13"}))}c.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=c,c.default=c},cDup:function(e,a,n){"use strict";var t=n("q1tI"),c=n.n(t),r=function(e){var a=e.ingrediente;return null!=a?c.a.createElement("li",{className:"copa__ingrediente"},c.a.createElement("img",{className:"copa__bola-ingrediente",src:"../../icons/2x/"+a+"_2x.png",alt:"Ingrediente"}),c.a.createElement("p",{className:"copa__texto-ingrediente"},a)):null},o=function(e){var a=e.precio;if(null!=a[0]){console.log(a);var n=/(.*)\,/.exec(a),t=n[0],r=n[1];return console.log(t),c.a.createElement("div",{className:"copa__precio"},r,c.a.createElement("span",{className:"copa__precioComa"}),c.a.createElement("span",{className:"copa__precioMoneda"},"€"))}return null};a.a=function(e){var a=e.node,n=e.index;return c.a.createElement("div",{className:"copa",key:n},c.a.createElement("h1",{className:"copa__nombre"},a.nombre),c.a.createElement("p",{className:"copa__descripcion"},a.descripcion),c.a.createElement("div",{className:"copa__piwrapper"},c.a.createElement("ul",{className:"copa__ingredientes"},c.a.createElement(r,{ingrediente:a.bola1}),c.a.createElement(r,{ingrediente:a.bola2}),c.a.createElement(r,{ingrediente:a.bola3}),c.a.createElement(r,{ingrediente:a.bola4}),c.a.createElement(r,{ingrediente:a.bola5})),c.a.createElement("ul",{className:"copa__ingredientes"},c.a.createElement(r,{ingrediente:a.complemento1}),c.a.createElement(r,{ingrediente:a.complemento2}),c.a.createElement(r,{ingrediente:a.complemento3})),c.a.createElement(o,{precio:a.precio})))}}}]);
//# sourceMappingURL=component---src-pages-carta-copas-js-16d1f70069f426b1443b.js.map