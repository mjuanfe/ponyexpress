import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//mport Image from "../components/image"
import SEO from "../components/seo"
import Header_logo from "../components/header_logo"
//import Helmet from "react-helmet"
//import ListaCarta from "./carta"
//import CartaTest from "./carta"

const IndexPage = () => (
  <div >

    <Layout>
      <SEO title="Munera" />
      <Header_logo></Header_logo>
      <div className="navIndexWrapper">
        <nav className="navIndex">
          <Link className="navIndex__item" to="/bienvenido" state={{modal: true}}>BIENVENIDO</Link>
          <Link className="navIndex__item" to="/nosotros" state={{modal: true}}>NOSOTROS</Link>
          <Link className="navIndex__item" to="/carta" state={{modal: true}}>VER CARTA</Link>
        </nav>
      </div>
    </Layout>
  </div>
)

export default IndexPage
