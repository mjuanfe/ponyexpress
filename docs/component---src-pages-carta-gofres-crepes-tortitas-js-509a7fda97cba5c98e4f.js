(self.webpackChunkpony_express_web=self.webpackChunkpony_express_web||[]).push([[613],{7606:function(e,t,n){"use strict";function o(e,t,n,o){return e.filter((function(e,n){if(e.node.categoria==t)return!0})).map((function(e){return e.node})).slice(n,o)}n.d(t,{V:function(){return o}})},5433:function(e,t,n){"use strict";var o=n(7294),r=n(1812);t.Z=function(e){var t=e.children,n=e.sectionname;return o.createElement("div",{className:"layoutSections"},o.createElement(r.Z,{sectionname:n,urlBack:"/carta"}),o.createElement("main",null,t))}},1812:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(1721),r=n(7294),a=n(1597),c=n(5831),l=n.n(c),i=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={show:!0,scrollPos:0},n.handleScroll=n.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.handleScroll=function(){var e=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e})},n.render=function(){var e=this.props,t=e.urlBack,n=e.sectionname;return r.createElement("div",{className:"navigation--"+(this.state.show?"active":"hidden")},r.createElement("div",{className:"navbar"},r.createElement(a.Link,{to:t},r.createElement(l(),{className:"navbar__LeftButton"})),r.createElement("h1",{className:"navbar__section"},n)))},t}(r.Component)},1190:function(e,t,n){"use strict";var o=n(7294);t.Z=function(e){var t=e.precio;if(null!=t[0]){var n=/\,(\d)/.exec(t),r=(n[0],n[1]),a=/(.*)\,/.exec(t),c=(a[0],a[1]);return o.createElement("div",{className:"producto__precio"},c,o.createElement("span",{className:"producto__precioComa"},"0"==r?"":"' "+r),o.createElement("span",{className:"producto__precioMoneda"},"€"))}return null}},8843:function(e,t,n){"use strict";var o=n(7294),r=n(1190);t.Z=function(e){var t=e.className,n=e.productos;return o.createElement("div",{className:t},n.map((function(e,t){return o.createElement("div",{key:t,className:"productoBig"},o.createElement("div",{className:"productoBig_iconoWrapper"},o.createElement("img",{className:(n=e.nombre,"Grande"===n?"productoBig_icono productoBig_icono--grande":"Cucurucho"===n||"Cucurucho<br>dos bolas"===n||"Cucurucho<br>Turrón<br>Artesano"===n?"productoBig_icono productoBig_icono--grandeCucu":"Un Sabor"===n||"Sabor+<br>Nata"===n||"Sabor+<br>Nata+<br>Helado"===n?"productoBig_icono productoBig_icono--dulce":"productoBig_icono"),src:"../../icons/Productos/3x/"+e.nombreImagen+"_3x.png",alt:"icono producto"})),o.createElement("li",{className:"productoBig__nombre",dangerouslySetInnerHTML:{__html:e.nombre}}),o.createElement(r.Z,{precio:e.precio}));var n})))}},7743:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var o=n(7294),r=n(5433),a=n(8843),c=n(7606);function l(e){var t=e.data;e.location;return o.createElement(r.Z,{sectionname:"Gofres, Crepes, Tortitas"},o.createElement("div",{className:"eligeTuSabor"},o.createElement("div",{className:"eligeTuSabor__iconos"},o.createElement("img",{className:"eligeTuSabor__icono",src:"../../icons/Productos/3x/Gofre_3x.png",alt:"Gofre"}),o.createElement("img",{className:"eligeTuSabor__icono",src:"../../icons/Productos/3x/Crepe_3x.png",alt:"Gofre"}),o.createElement("img",{className:"eligeTuSabor__icono",src:"../../icons/Productos/3x/Tortita_3x.png",alt:"Gofre"})),o.createElement("div",{className:"eligeTuSabor__textWrapper"},o.createElement("h1",{className:"eligeTuSabor__titulo"},"Elige tu sabor!"),o.createElement("ul",{className:"eligeTuSabor__lista"},o.createElement("li",null,"Chocolate caliente"),o.createElement("li",null,"Nutella"),o.createElement("li",null,"Chocolate blanco"),o.createElement("li",null,"Caramelo")))),o.createElement(a.Z,{className:"gofres_crepes_tortitas",productos:(0,c.V)(t.allGoogleTarricugofSheet.edges,"GofreCrepeTortita")}))}},5831:function(e,t,n){var o=n(7294);function r(e){return o.createElement("svg",e,o.createElement("polygon",{fillRule:"evenodd",points:"6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13"}))}r.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-carta-gofres-crepes-tortitas-js-509a7fda97cba5c98e4f.js.map