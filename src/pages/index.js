import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header_logo from "../components/header_logo"
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


/*
   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

*/

/*

   
    <h1>Bienvenido a Pony Express</h1>
    <p>La auténtia heladería-cafetería</p>
    <p>Now go build something great.</p>
 
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>

    */