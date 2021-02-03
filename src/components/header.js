import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#6eb8af`,
      marginBottom: `1.45rem`,
      backgroundImage: `/images/header.png`,
    }}
  >
  <div className="row"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <div className="col">
      <h3 style={{ margin: 2 }}> T. Durgin: Rings
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
     
        </Link>
      </h3>
      </div>
      <div className="col">
        <nav>
          <ul style={{ display: "flex", flex: 1 }}>
            {menuLinks.map(link => (
              <li
                key={link.name}
                style={{
                  listStyleType: `none`,
                  padding: `1rem`,
                }}
              >
                <Link style={{ color: `white` }} to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
   </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header