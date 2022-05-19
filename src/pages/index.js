import React from "react"
import { Link } from "gatsby"

import { graphql } from "gatsby"
import Layout from "../components/layout"
//mport Image from "../components/image"
import SEO from "../components/seo"
import Header_logo from "../components/header_logo"
//  import Helmet from "react-helmet"
//  import ListaCarta from "./carta"
//  import CartaTest from "./carta"
// var datta;

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Munera" />
      <Header_logo></Header_logo>
      <div className="navIndexWrapper">
        <nav className="navIndex">
          <Link className="navIndex__item" to="/carta" state={{ modal: true }}>
            VER CARTA
          </Link>

          <div className="avisoPC">
            <h1>Aviso</h1>
            Para una mejor experiencia le recomendamos que utilize su smartphone
            para visualizar la carta
          </div>
        </nav>
      </div>
    </Layout>
  </div>
);

/*
{getProductsByCategory(data, "Copas").map((product, index) => {
  return <li key={index} node={product.node}></li>
})}

function getProductsByCategory(data, categoria){
  var products;
  
  products = data.allGoogleSheetPrincipalRow.edges.filter((product, index) => {
    if(product.node.categoria == categoria){
      //console.log(product.node);
      return product.node
    };
  });
  //console.log(products);
  return products
}
*/

export default IndexPage
