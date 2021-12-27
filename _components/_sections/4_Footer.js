import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';
import LocalPostOfficeSharpIcon from '@mui/icons-material/LocalPostOfficeSharp'
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'


export default function Footer({ state }) {
     
     const { footerColor, footerTextColor } = state
  
     return (
          <div className="container-footer" style={{ backgroundColor: footerColor }}>
               <div className="footer">

                    <div className="footer-left">
                         <a
                              className='footer-items-container'
                              style={{ color: footerTextColor, textDecoration: 'none', margin: '0 0 7px' }}
                              href={'https://www.linkedin.com/in/veselin-trayanov-219506171/'}
                         >
                              <div >
                                   <LinkedInIcon  fontSize='small'/>
                              </div>
                              <div
                                   className='footer-icon-text'
                              >
                                   <div> LinkedIn </div>
                              </div>
                         </a>
                         <a
                              className='footer-items-container'
                              style={{ color: footerTextColor, textDecoration: 'none', marginBottom: 7 }}
                              href={`mailto: bacco23@gmail.com`}
                         >
                              <div >
                                   <LocalPostOfficeSharpIcon  fontSize='small'/>
                              </div>
                              <div
                                   className='footer-icon-text'
                              >
                                   <div> bacco23@gmail.com </div>
                              </div>
                         </a>
                         <a
                              className='footer-items-container'
                              style={{ color: footerTextColor, textDecoration: 'none', marginBottom: 7 }}
                              href={`tel: 00447590010066`}
                         >
                              <div >
                                   <PhoneEnabledSharpIcon   fontSize='small'/>
                              </div>
                              <div className='footer-icon-text'>
                                   <div> +44 (0) 7590 010066</div>
                              </div>
                         </a>
                    </div>
                    <div className="footer-right">
                         <a
                              className='footer-items-container '
                              style={{ color: footerTextColor, margin: '0px 0 7px', textDecoration: 'none' }}
                              href={'https://github.com/bacc0'}
                         >
                              <div >
                                   <GitHubIcon   fontSize='small'/>
                              </div>
                              <div className='footer-icon-text'>
                                   <div> GitHub </div>
                              </div>
                         </a>
                         <a
                              className='footer-items-container'
                              style={{ color: footerTextColor, textDecoration: 'none', }}
                              href={'https://www.google.com/maps/@51.4764334,-0.1572618,16.21z'}
                         >
                              <div >
                                   <LocationOnSharpIcon  fontSize='small'/>
                              </div>
                              <div >
                                   <div
                                        className='footer-icon-text'>
                                        Battersea, London, UK
                                   </div>
                              </div>
                         </a>
                    </div>
               </div>
          </div>
     )
}