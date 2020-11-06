import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styled from "styled-components"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

import { Link } from "gatsby"

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const baseValue = 18.4 //Total TW Usage as of 2018, according to wikipedia, need a remote source for this, probably sources of different energy consumption(solar, wind, oil, gas, etc)

const convertTeraWattsToWatts = terawatts => terawatts * 1000000000000
const calculateKardashevRating = watts => (Math.log10(watts) - 6) / 10
const IndexPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Kardashev Scale" />
      <CssBaseline />
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Kardashev Scale
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Кардашёв
            </Typography>
            <Typography variant="body2" component="p">
              Kardashev scale is a method of measuring a civilization's level of
              technological advancement based on the amount of energy they are
              able to use.
              <br />
              We are currently at{" "}
              {calculateKardashevRating(convertTeraWattsToWatts(baseValue))}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to="https://en.wikipedia.org/wiki/Kardashev_scale"
              target="_new"
            >
              <Button size="small">Learn More</Button>
            </Link>
          </CardActions>
        </Card>
      </Container>
    </Layout>
  )
}

export default IndexPage
