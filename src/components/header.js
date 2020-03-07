import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header" className="header">
    <div className="header-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-container">
              <h1>BUSINESS <span id="js-rotating">TEMPLATE, SERVICES, SOLUTIONS</span></h1>
              <p className="p-heading p-large">Aria is a top consultancy company specializing in business growth using online marketing and conversion optimization tactics</p>
              <a className="btn-solid-lg page-scroll" href="#intro">DISCOVER</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)
// <header
//   style={{
//     background: `rebeccapurple`,
//     marginBottom: `1.45rem`,
//   }}
// >
//   <div
//     style={{
//       margin: `0 auto`,
//       maxWidth: 960,
//       padding: `1.45rem 1.0875rem`,
//     }}
//   >
//     <h1 style={{ margin: 0 }}>
//       <Link
//         to="/"
//         style={{
//           color: `white`,
//           textDecoration: `none`,
//         }}
//       >
//         {siteTitle}
//       </Link>
//     </h1>
//   </div>
// </header>

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
