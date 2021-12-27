import { useState, useEffect } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

import { Stack, IconButton, Typography, Toolbar, AppBar, Box, Hidden } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound'

import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp'
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function MenuAppBar({ state, theme, setTheme, Y_position, scrollDirection, min_width_600px }) {

     const { hrColor, hrColorMain, AppBackgroundColor, animationTransition, secLettersColor } = state

     const [heightAppBar, setHeightAppBarl] = useState(0)
     const [appBarIsVisible, setAppBarIsVisible] = useState(true)

     useEffect(() => {
          setTimeout(() => {
               setHeightAppBarl(65)
          }, 2000);
     }, []);

     useEffect(() => {
          if (Y_position < 0.02) {
               setAppBarIsVisible(true)
               // console.log('Y_position < 0.05')
          } else {

               scrollDirection === 'up' ? setAppBarIsVisible(false) : setAppBarIsVisible(true)

               // console.log('NO')
          }
     }, [Y_position]);




     const handleThemeChange = () => {
          setTheme(theme === 'light' ? 'dark' : 'light')
     }

     const AppBarStyle = {
          // backgroundColor: currentBrowser === 'firefox' ? 'red' : 'transparent',
          backgroundColor: `${AppBackgroundColor}77`,
          '-webkit-backdrop-filter': `blur(10px)`,
          ' backdrop-filter': `blur(10px)`,
          color: hrColorMain,
          boxShadow: '0 0 0',
          borderBottom: `1px solid ${hrColor}99`,
          fontSize: 10,
          // height: scrollDirection === 'up' ? 0 : 65, change the navigation animation

          height: appBarIsVisible ? 65 : 0,
          transition: `height 800ms ease`,

     }
     const ToolbarContainer = {
          borderBottom: `1px solid blck`,
          position: 'relative',
          // top: scrollDirection === 'up' ? -65 : 0,
          top: appBarIsVisible ? 0 : -65,
          transition: `top 600ms ease`
     }
     const underAppBAr = {
          height: heightAppBar,
          'background-color': AppBackgroundColor,
          transition: `background-color 350ms ease, 
          height 800ms ease`,
     }

     const titleStyle = {
          fontSize: 12,
          letterSpacing: 1.2,
          fontWeight: '100',
          color: secLettersColor
     }
     const iconsStackStyle = {
          display: min_width_600px ? 'block' : 'flex',
          justifyContent: 'space-between',
          width: min_width_600px ? 'auto' : '100%'
     }
     const iconsStyle = {
          color: hrColorMain,
          transition: `color ${animationTransition} ease`,
     }


     return (
          <Box>
               <div>
                    <motion.div
                         initial={{ opacity: 0, pathLength: 0, y: -65 }}
                         animate={{ opacity: 1, pathLength: 1, y: 0 }}
                         transition={{ delay: 1.8, duration: 1, ease: 'easeInOut' }}
                    // exit={{ opacity: 0, y: -6 }}
                    >
                         <AppBar style={AppBarStyle} position='fixed'>
                              <motion.div
                                   initial={{ opacity: 0, y: -65 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   transition={{ delay: 2, duration: 1, ease: 'easeInOut' }}
                                   style={ToolbarContainer}
                              >
                                   <Toolbar
                                        style={{
                                             maxWidth: min_width_600px ? 730 : 360,
                                             margin: '0 auto'
                                        }}
                                   >
                                        <Hidden smDown>
                                             <Typography style={titleStyle}
                                                  sx={{ flexGrow: 1 }}>
                                                  Veselin Trayanov
                                             </Typography>
                                        </Hidden>
                                        <Stack
                                             direction='row'
                                             spacing={1}

                                             style={iconsStackStyle}
                                        >

                                             <IconButton
                                                  href={'https://www.linkedin.com/in/veselin-trayanov-219506171/'} aria-label='LinkedIn Icon' style={iconsStyle}
                                             >
                                                  <LinkedInIcon />
                                             </IconButton>

                                             <IconButton
                                                  href={`tel: 00447590010066`}
                                                  aria-label='Phone Icon' style={iconsStyle}
                                             >
                                                  <PhoneEnabledSharpIcon />
                                             </IconButton>

                                             <IconButton
                                                  href={`mailto: bacco23@gmail.com`}
                                                  aria-label='Local Icon' style={iconsStyle}
                                             >
                                                  <LocalPostOfficeSharpIcon />
                                             </IconButton>

                                             <IconButton
                                                  href={'https://www.google.com/maps/@51.4764334,-0.1572618,16.21z'}
                                                  aria-label='Location Icon' style={iconsStyle}
                                             >
                                                  <LocationOnSharpIcon />
                                             </IconButton>

                                             <IconButton
                                                  href={'https://github.com/bacc0'}
                                                  aria-label='GitHub Icon' style={iconsStyle}
                                             >
                                                  <GitHubIcon />
                                             </IconButton>

                                             <IconButton
                                                  onClick={() => handleThemeChange()}
                                                  aria-label='theme icon' style={iconsStyle}
                                             >
                                                  {theme === 'light'
                                                       ? <NightlightRoundIcon />
                                                       : <LightModeIcon />
                                                  }
                                             </IconButton>
                                        </Stack>
                                   </Toolbar>
                              </motion.div>
                         </AppBar>
                         <div style={underAppBAr} />
                         {/* <hr style={progressLineStyle} /> */}
                    </motion.div>
               </div>

          </Box >
     )
}
