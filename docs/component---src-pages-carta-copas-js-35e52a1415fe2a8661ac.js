(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6cYQ":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wbzz"),c=a("Ho6p"),i=a.n(c);var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={show:!0,scrollPos:0},a.handleScroll=a.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},c.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},c.handleScroll=function(){var e=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e})},c.render=function(){var e=this.props,t=e.urlBack,a=e.sectionname;return o.a.createElement("div",{className:"navigation--"+(this.state.show?"active":"hidden")},o.a.createElement("div",{className:"navbar"},o.a.createElement(r.Link,{to:t},o.a.createElement(i.a,{className:"navbar__LeftButton"})),o.a.createElement("h1",{className:"navbar__section"},a)))},n}(n.Component);t.a=l},"73oJ":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("6cYQ");t.a=function(e){var t=e.children,a=e.sectionname;return o.a.createElement("div",{className:"layoutSections"},o.a.createElement(r.a,{sectionname:a,urlBack:"/carta"}),o.a.createElement("main",null,t))}},FmyC:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"query",(function(){return s}));var n=a("q1tI"),o=a.n(n),r=a("73oJ"),c=a("dvVg");function i(e){var t=e.data;e.location;return o.a.createElement(r.a,{sectionname:"COPAS"},o.a.createElement("h1",{className:"carta__tituloSubseccion"},"Las clásicas"),o.a.createElement(c.a,{categoria:"copas",productos:l(t,"Copas")}),o.a.createElement("h1",{className:"carta__tituloSubseccion"},"Para niños"),o.a.createElement(c.a,{categoria:"Copas para niños",productos:l(t,"Copas para niños")}),o.a.createElement("h1",{className:"carta__tituloSubseccion"},"Con Alcohol"),o.a.createElement(c.a,{categoria:"Copas con alcohol",productos:l(t,"Copas con alcohol")}),o.a.createElement("h1",{className:"carta__tituloSubseccion"},"Al gusto"),o.a.createElement(c.a,{categoria:"Copas simples",productos:l(t,"Copas simples")}))}function l(e,t){return e.allGoogleSheetPrincipalRow.edges.filter((function(e,a){if(e.node.categoria==t)return e.node}))}var s="990166694"},Ho6p:function(e,t,a){var n=a("q1tI");function o(e){return n.createElement("svg",e,n.createElement("polygon",{fillRule:"evenodd",points:"6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13"}))}o.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=o,o.default=o},dvVg:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=function(e){var t=e.ingrediente;return null!=t?o.a.createElement("li",{className:"producto__ingrediente"},o.a.createElement("img",{className:"producto__bola-ingrediente",src:"../../icons/2x/"+t+"_2x.png",alt:"Ingrediente"}),o.a.createElement("p",{className:"producto__texto-ingrediente"},t)):null},c=a("rLA7"),i=function(e){var t=e.node,a=e.index;return o.a.createElement("div",{className:"producto",key:a},o.a.createElement("h1",{className:"producto__nombre"},t.nombre),o.a.createElement("p",{className:"producto__descripcion"},t.descripcion),o.a.createElement("div",{className:"producto__piwrapper"},o.a.createElement("ul",{className:"producto__ingredientes"},o.a.createElement(r,{ingrediente:t.bola1}),o.a.createElement(r,{ingrediente:t.bola2}),o.a.createElement(r,{ingrediente:t.bola3}),o.a.createElement(r,{ingrediente:t.bola4}),o.a.createElement(r,{ingrediente:t.bola5})),o.a.createElement("ul",{className:"producto__ingredientes"},o.a.createElement(r,{ingrediente:t.complemento1}),o.a.createElement(r,{ingrediente:t.complemento2}),o.a.createElement(r,{ingrediente:t.complemento3})),o.a.createElement(c.a,{precio:t.precio})))};t.a=function(e){var t=e.categoria,a=e.productos;return o.a.createElement("div",{className:t},a.map((function(e,t){return o.a.createElement(i,{key:t,node:e.node})})))}},rLA7:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n);t.a=function(e){var t=e.precio;if(null!=t[0]){var a=/\,(\d)/.exec(t),n=(a[0],a[1]),r=/(.*)\,/.exec(t),c=(r[0],r[1]);return o.a.createElement("div",{className:"producto__precio"},c,o.a.createElement("span",{className:"producto__precioComa"},"0"==n?"":"' "+n),o.a.createElement("span",{className:"producto__precioMoneda"},"€"))}return null}}}]);
//# sourceMappingURL=component---src-pages-carta-copas-js-35e52a1415fe2a8661ac.js.map