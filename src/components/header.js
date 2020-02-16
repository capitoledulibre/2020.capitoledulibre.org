import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header id="header" class="header">
    <div class="header-content">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-container">
              <h1>BUSINESS <span id="js-rotating">TEMPLATE, SERVICES, SOLUTIONS</span></h1>
              <p class="p-heading p-large">Aria is a top consultancy company specializing in business growth using online marketing and conversion optimization tactics</p>
              <a class="btn-solid-lg page-scroll" href="#intro">DISCOVER</a>
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
