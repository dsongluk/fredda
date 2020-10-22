import React from 'react'
import Head from 'next/head'
import {Box, Container, Grid, makeStyles, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    section: {
        background: 'url("image/section1.jpg")',
        backgroundSize: "cover",
        backgroundPosition: 'right -200px top',
        height: '100vh',
        width: '100%',
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
    },
    content: {
        width: '100%',
        minHeight: '80vh',
        height: '100%',
    },
    leftSide: {
        color: '#fafafa',
        paddingLeft: '2rem',

        '& h2, h5': {
            fontFamily: 'Roboto Mono, monospace',
        },

    },
    rightSide: {
        color: '#fafafa',

        '& h2': {
            fontFamily: 'Kanit, sans-serif',
        }
    }

}))

export default function Index() {
  const c = useStyles()
  return (
      <>
          <Head>
              <title>fredda | home</title>
          </Head>
          <Box className={c.section}>
              <Box mt={8}>
                  <Container maxWidth={"xl"}>
                      <Grid  className={c.content} container justify={'center'} alignItems={"center"}>
                          <Grid item md={6} className={c.leftSide}>
                              <Typography variant={"h2"}>
                                  Work Anywhere
                              </Typography>
                              <Typography variant={"h5"} color={"secondary"}>
                                  Independent Designer
                              </Typography>
                          </Grid>
                          <Grid className={c.rightSide} item md={6}>
                              <Typography variant={"h2"}>
                              </Typography>
                          </Grid>
                      </Grid>
                  </Container>
              </Box>
          </Box>
      </>
  )
}
