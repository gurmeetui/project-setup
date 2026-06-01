import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box>
      <Typography variant='h1' sx={{fontSize: 'var(--font-size-base)'}}>
        About Page
      </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit quidem eaque ab minima nisi pariatur voluptatem, a architecto adipisci veniam eum ea praesentium error sequi mollitia, voluptatum fuga ut reiciendis ducimus, iure earum inventore dolorem. Corrupti deserunt dolorem voluptas inventore.
      </Typography>
    </Box>
  )
}

export default About