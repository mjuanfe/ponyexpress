(self.webpackChunkpony_express_web=self.webpackChunkpony_express_web||[]).push([[407],{5433:function(e,t,n){"use strict";var a=n(7294),r=n(1812);t.Z=function(e){var t=e.children,n=e.sectionname;return a.createElement("div",{className:"layoutSections"},a.createElement(r.Z,{sectionname:n,urlBack:"/carta"}),a.createElement("main",null,t))}},1812:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(1721),r=n(7294),o=n(1597),c=n(5831),l=n.n(c),i=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={show:!0,scrollPos:0},n.handleScroll=n.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.handleScroll=function(){var e=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e})},n.render=function(){var e=this.props,t=e.urlBack,n=e.sectionname;return r.createElement("div",{className:"navigation--"+(this.state.show?"active":"hidden")},r.createElement("div",{className:"navbar"},r.createElement(o.Link,{to:t},r.createElement(l(),{className:"navbar__LeftButton"})),r.createElement("h1",{className:"navbar__section"},n)))},t}(r.Component)},1190:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.precio;if(null!=t[0]){var n=/\,(\d)/.exec(t),r=(n[0],n[1]),o=/(.*)\,/.exec(t),c=(o[0],o[1]);return a.createElement("div",{className:"producto__precio"},c,a.createElement("span",{className:"producto__precioComa"},"0"==r?"":"' "+r),a.createElement("span",{className:"producto__precioMoneda"},"€"))}return null}},8606:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7294),r=function(e){var t=e.ingrediente;return null!=t?a.createElement("li",{className:"producto__ingrediente"},a.createElement("img",{className:"producto__bola-ingrediente",src:"../../icons/2x/"+t+"_2x.png",alt:"Ingrediente"}),a.createElement("p",{className:"producto__texto-ingrediente"},t)):null},o=n(1190),c=function(e){var t=e.node,n=e.index;return a.createElement("div",{className:"producto",key:n},a.createElement("h1",{className:"producto__nombre"},t.nombre),a.createElement("p",{className:"producto__descripcion"},t.descripcion),a.createElement("div",{className:"producto__piwrapper"},a.createElement("ul",{className:"producto__ingredientes"},a.createElement(r,{ingrediente:t.bola1}),a.createElement(r,{ingrediente:t.bola2}),a.createElement(r,{ingrediente:t.bola3}),a.createElement(r,{ingrediente:t.bola4}),a.createElement(r,{ingrediente:t.bola5})),a.createElement("ul",{className:"producto__ingredientes"},a.createElement(r,{ingrediente:t.complemento1}),a.createElement(r,{ingrediente:t.complemento2}),a.createElement(r,{ingrediente:t.complemento3})),a.createElement(o.Z,{precio:t.precio})))},l=function(e){var t=e.categoria,n=e.productos;return a.createElement("div",{className:t},n.map((function(e,t){return a.createElement(c,{key:t,node:e.node})})))}},8686:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),r=n(5433),o=n(8606);function c(e){var t=e.data;e.location;return a.createElement(r.Z,{sectionname:"COPAS"},a.createElement("h1",{className:"carta__tituloSubseccion"},"Las clásicas"),a.createElement(o.Z,{categoria:"copas",productos:l(t,"Copas")}),a.createElement("h1",{className:"carta__tituloSubseccion"},"Para niños"),a.createElement(o.Z,{categoria:"Copas para niños",productos:l(t,"Copas para niños")}),a.createElement("h1",{className:"carta__tituloSubseccion"},"Con Alcohol"),a.createElement(o.Z,{categoria:"Copas con alcohol",productos:l(t,"Copas con alcohol")}),a.createElement("h1",{className:"carta__tituloSubseccion"},"Al gusto"),a.createElement(o.Z,{categoria:"Copas simples",productos:l(t,"Copas simples")}))}function l(e,t){return e.allGooglePrincipalSheet.edges.filter((function(e,n){if(e.node.categoria==t)return e.node}))}},5831:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("polygon",{fillRule:"evenodd",points:"6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13"}))}r.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-carta-copas-js-25afec2de9010d339e16.js.map