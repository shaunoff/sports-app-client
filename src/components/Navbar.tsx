import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const LeftNavbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <img style={{ width: '64px', height: '64px' }} src="/logo.png" />
      <Typography variant="h6" style={{ marginLeft: '30px' }}>
        Shaun Hutch
      </Typography>
    </div>
  )
}

const CenterNavbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', color: 'black' }}>
      Hello
    </div>
  )
}

const RightNavbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '16px',
      }}
    >
      <Avatar>S</Avatar>
    </div>
  )
}

const Navbar = () => {
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Grid item xs={3}>
            <LeftNavbar />
          </Grid>
          <Grid item xs={6}>
            <CenterNavbar />
          </Grid>
          <Grid item xs={3}>
            <RightNavbar />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  )
}

export default Navbar
