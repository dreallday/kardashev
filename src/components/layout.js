/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./layout.css"

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}))

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  const classes = useStyles()
  const preventDefault = event => event.preventDefault()
  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `2rem 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            position: `absolute`,
            bottom: `0`,
            margin: `0 auto`,
            width: 500,
            padding: `0 3.0875rem 1.45rem`,
          }}
        >
          <Typography variant="caption" display="block">
            <Link
              href="https://github.com/dreallday/kardashev"
              // onClick={preventDefault}
              target="_new"
              color="textSecondary"
            >
              Contribute
            </Link>
          </Typography>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
