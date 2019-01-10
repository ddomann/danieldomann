import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/scss/bootstrap.scss'
import '../assets/scss/home.scss'
import '../assets/scss/global.scss'
import '../assets/scss/custom_mixins.scss'
import '../assets/scss/variables.scss'
import '../assets/scss/menu.scss'
import '../assets/fonts/icons/style.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div  className="global_wrapper">
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
