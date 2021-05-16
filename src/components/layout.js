/**
 *  Layout component that queries for data
 *  with Gatsby's useStaticQuery component
 *
 *  See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div>
        <main>{children}</main>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


/*

        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}

        */
/*
 <Header siteTitle={data.site.siteMetadata.title} />
<footer>
  © {new Date().getFullYear()}, Creado por 
  {` `}
  <a href="mailto:juanfe.monfort@gmail.com">Juan F. Monfort</a>
</footer>

*/