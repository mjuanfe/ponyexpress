(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6cYQ":function(e,n,t){"use strict";var o=t("q1tI"),a=t.n(o),r=t("Wbzz"),c=t("Ho6p"),l=t.n(c);var i=function(e){var n,t;function o(n){var t;return(t=e.call(this,n)||this).state={show:!0,scrollPos:0},t.handleScroll=t.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}t=e,(n=o).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var c=o.prototype;return c.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},c.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},c.handleScroll=function(){var e=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e})},c.render=function(){var e=this.props,n=e.urlBack,t=e.sectionname;return a.a.createElement("div",{className:"navigation--"+(this.state.show?"active":"hidden")},a.a.createElement("div",{className:"navbar"},a.a.createElement(r.Link,{to:n},a.a.createElement(l.a,{className:"navbar__LeftButton"})),a.a.createElement("h1",{className:"navbar__section"},t)))},o}(o.Component);n.a=i},"73oJ":function(e,n,t){"use strict";var o=t("q1tI"),a=t.n(o),r=t("6cYQ");n.a=function(e){var n=e.children,t=e.sectionname;return a.a.createElement("div",{className:"layoutSections"},a.a.createElement(r.a,{sectionname:t,urlBack:"/carta"}),a.a.createElement("main",null,n))}},"9tZn":function(e,n,t){"use strict";function o(e,n,t,o){return e.filter((function(e,t){if(e.node.categoria==n)return!0})).map((function(e){return e.node})).slice(t,o)}t.d(n,"a",(function(){return o}))},Ho6p:function(e,n,t){var o=t("q1tI");function a(e){return o.createElement("svg",e,o.createElement("polygon",{fillRule:"evenodd",points:"6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13"}))}a.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=a,a.default=a},"e/Bt":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return i})),t.d(n,"query",(function(){return s}));var o=t("q1tI"),a=t.n(o),r=t("73oJ"),c=function(e){var n=e.producto,t=e.etiquetas;return console.log(t),a.a.createElement("div",{className:"productoCrema"},a.a.createElement("img",{className:"productoCrema__icono",src:"../../icons/2x/"+n.node.nombre+"_2x.png",alt:"icono producto"}),a.a.createElement("div",{className:"productoCrema__texto"},a.a.createElement("h1",{className:"productoCrema__nombre"},n.node.nombre),a.a.createElement("ul",{className:"productoCrema__etiquetas"},t.map((function(e,n){for(var t in e)if(null!=e[t])return a.a.createElement("li",{className:"productoCrema__etiqueta productoCrema__etiqueta--"+t},e[t])})))))},l=function(e){var n=e.className,t=e.productos;return a.a.createElement("div",{className:n},t.map((function(e,n){if("x"!=e.node.nodisponible)return a.a.createElement(c,{producto:e,etiquetas:[{nodisponible:null!=e.node.nodisponible?"No disponible":null},{sinazucar:null!=e.node.sinazucar?"Sin azúcar":null},{vegano:null!=e.node.vegano?"Vegano":null},{novedad:null!=e.node.novedad?"Novedad":null}]})})))};t("9tZn");function i(e){var n=e.data;e.location;return a.a.createElement(r.a,{sectionname:"Sabores Helado"},a.a.createElement(l,{className:"cremas",productos:n.allGoogleSheetSaboresRow.edges}))}var s="3625505831"}}]);
//# sourceMappingURL=component---src-pages-carta-sabores-helado-js-679b22ecceaf229fcde2.js.map