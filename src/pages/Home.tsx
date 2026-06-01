import React from 'react'
import { Box, Typography } from '@mui/material'
const Home = () => {
  return (
    <Box sx={{
      background: 'var(--primary-color)',
      height: '100vh'
    }}>
      <Typography variant='h1'>
        Home Page
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quidem eaque ab minima nisi pariatur voluptatem, a architecto adipisci veniam eum ea praesentium error sequi mollitia, voluptatum fuga ut reiciendis ducimus, iure earum inventore dolorem. Corrupti deserunt dolorem voluptas inventore.
      </Typography>
    </Box>
  )
}

export default Home