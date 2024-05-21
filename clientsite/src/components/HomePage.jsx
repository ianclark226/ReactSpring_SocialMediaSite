import React from 'react'
import { Grid  } from '@mui/material'
import Navigation from './Navigation'
import HomeSection from './HomeSection'
import RightSide from './RightSide'

const HomePage = () => {
  return (
    <Grid container xs={12} className="px-5 lg:px-36px justify-between" >
        <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigation />
        </Grid>
        <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
            <HomeSection />
        </Grid>
        <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
            <RightSide />
        </Grid>
    </Grid>
  )
}

export default HomePage