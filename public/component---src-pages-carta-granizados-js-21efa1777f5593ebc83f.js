(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"6cYQ":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),c=n("Ho6p"),i=n.n(c);var l=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={show:!0,scrollPos:0},n.handleScroll=n.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=a.prototype;return c.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},c.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},c.handleScroll=function(){var e=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e})},c.render=function(){var e=this.props,t=e.urlBack,n=e.sectionname;return r.a.createElement("div",{className:"navigation--"+(this.state.show?"active":"hidden")},r.a.createElement("div",{className:"navbar"},r.a.createElement(o.Link,{to:t},r.a.createElement(i.a,{className:"navbar__LeftButton"})),r.a.createElement("h1",{className:"navbar__section"},n)))},a}(a.Component);t.a=l},"73oJ":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("6cYQ");t.a=function(e){var t=e.children,n=e.sectionname;return r.a.createElement("div",{className:"layoutSections"},r.a.createElement(o.a,{sectionname:n,urlBack:"/carta"}),r.a.createElement("main",null,t))}},Ho6p:function(e,t,n){var a=n("q1tI");function r(e){return a.createElement("svg",e,a.createElement("polygon",{fillRule:"evenodd",points:"6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13"}))}r.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=r,r.default=r},dvVg:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=function(e){var t=e.ingrediente;return null!=t?r.a.createElement("li",{className:"producto__ingrediente"},r.a.createElement("img",{className:"producto__bola-ingrediente",src:"../../icons/2x/"+t+"_2x.png",alt:"Ingrediente"}),r.a.createElement("p",{className:"producto__texto-ingrediente"},t)):null},c=n("rLA7"),i=function(e){var t=e.node,n=e.index;return r.a.createElement("div",{className:"producto",key:n},r.a.createElement("h1",{className:"producto__nombre"},t.nombre),r.a.createElement("p",{className:"producto__descripcion"},t.descripcion),r.a.createElement("div",{className:"producto__piwrapper"},r.a.createElement("ul",{className:"producto__ingredientes"},r.a.createElement(o,{ingrediente:t.bola1}),r.a.createElement(o,{ingrediente:t.bola2}),r.a.createElement(o,{ingrediente:t.bola3}),r.a.createElement(o,{ingrediente:t.bola4}),r.a.createElement(o,{ingrediente:t.bola5})),r.a.createElement("ul",{className:"producto__ingredientes"},r.a.createElement(o,{ingrediente:t.complemento1}),r.a.createElement(o,{ingrediente:t.complemento2}),r.a.createElement(o,{ingrediente:t.complemento3})),r.a.createElement(c.a,{precio:t.precio})))};t.a=function(e){var t=e.categoria,n=e.productos;return r.a.createElement("div",{className:t},n.map((function(e,t){return r.a.createElement(i,{key:t,node:e.node})})))}},ffNV:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"query",(function(){return s}));var a=n("q1tI"),r=n.n(a),o=n("73oJ"),c=n("dvVg");function i(e){var t=e.data;e.location;return r.a.createElement(o.a,{sectionname:"GRANIZADOS"},r.a.createElement(c.a,{categoria:"Granizados",productos:l(t,"Granizados")}))}function l(e,t){return e.allGoogleSheetPrincipalRow.edges.filter((function(e,n){if(e.node.categoria==t)return e.node}))}var s="990166694"},rLA7:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.precio;if(null!=t[0]){var n=/\,(\d)/.exec(t),a=(n[0],n[1]),o=/(.*)\,/.exec(t),c=(o[0],o[1]);return r.a.createElement("div",{className:"producto__precio"},c,r.a.createElement("span",{className:"producto__precioComa"},"0"==a?"":"' "+a),r.a.createElement("span",{className:"producto__precioMoneda"},"€"))}return null}}}]);
//# sourceMappingURL=component---src-pages-carta-granizados-js-21efa1777f5593ebc83f.js.map