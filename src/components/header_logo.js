import { Link } from "gatsby"
import React from "react"
import Logo1 from "../svg/Logo_pony.svg";

const HeaderLogo = ({ siteTitle }) => (
  <header className='headerLogo'>
      <Link to="/">
        <Logo1 className="logoSvg"></Logo1>
      </Link>
  </header>
)


export default HeaderLogo

