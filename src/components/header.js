import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./navigation"
//import logo from "../images/Logo_pony.svg"
import Logo1 from "../svg/Logo_pony.svg";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#383838`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Logo1 className="logoSvg"></Logo1>
    </div>
    <Navigation></Navigation>
    <h4>hey</h4>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


/*

      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}

    */