(self.webpackChunkpony_express_web=self.webpackChunkpony_express_web||[]).push([[669],{1812:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(1721),r=n(7294),o=n(1597),l=n(5831),c=n.n(l),s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={show:!0,scrollPos:0},n.handleScroll=n.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},n.handleScroll=function(){var e=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e})},n.render=function(){var e=this.props,t=e.urlBack,n=e.sectionname;return r.createElement("div",{className:"navigation--"+(this.state.show?"active":"hidden")},r.createElement("div",{className:"navbar"},r.createElement(o.Link,{to:t},r.createElement(c(),{className:"navbar__LeftButton"})),r.createElement("h1",{className:"navbar__section"},n)))},t}(r.Component)},6076:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),r=n(1597),o=n(1812),l=function(e){var t=e.children,n=e.sectionname;return a.createElement("div",{className:"layoutSections"},a.createElement(o.Z,{sectionname:n,urlBack:"/"}),a.createElement("main",null,t))};function c(e){e.data,e.location;return a.createElement(l,{sectionname:"CARTA"},a.createElement("p",{className:"carta__mensaje"},"Con el buen tiempo ponemos en marcha nuestra famosa heladería, ",a.createElement("br",null),"explora aquí la gran oferta de ",a.createElement("strong",null,"helados.")," ",a.createElement("br",null)," ",a.createElement("br",null),"Como siempre tienes disponible el habitual servicio de ",a.createElement("strong",null,"cafetería y bar"),". ",a.createElement("br",null),"Pregunta a nuestros camareros!"),a.createElement("ul",{className:"carta__lista"},s.map((function(e,t){return a.createElement(r.Link,{to:e.route,key:t},a.createElement("li",{className:"carta__itemLista"},e.name))}))))}var s=[{route:"/carta_copas",name:"COPAS"},{route:"/carta_especialidades",name:"ESPECIALIDADES"},{route:"/carta_granizados",name:"GRANIZADOS"},{route:"/carta_tarrinas_cucuruchos",name:"TARRINAS Y CUCURUCHOS"},{route:"/carta_gofres_crepes_tortitas",name:"GOFRES, CREPES, TORTITAS"},{route:"/carta_sabores_helado",name:"SABORES HELADO"}]},5831:function(e,t,n){var a=n(7294);function r(e){return a.createElement("svg",e,a.createElement("polygon",{fillRule:"evenodd",points:"6.414 13 12.707 19.293 11.293 20.707 2.586 12 11.293 3.293 12.707 4.707 6.414 11 21 11 21 13"}))}r.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-carta-js-d9cf23e41d9179795c7c.js.map