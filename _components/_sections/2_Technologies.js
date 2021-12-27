import { Hidden } from '@mui/material'
import AnimationImage from './helpers/AnimationImage'


export default function Technologies({ state, min_width_600px, Ref_2, Ref_2b,
     theme, animationTransition, isRef_2_Visible, animation }) {
    
     const { backgroundColor, hrColorMain } = state


     const styleContainer = {

          backgroundColor: state.backgroundColor_2,
          paddingTop: min_width_600px ? 48 : 46,
          paddingBottom: min_width_600px ? 12 : 34,

          borderTop: `${theme === 'light' ? 0 : 1}px solid ${state.hrColorMain + 11}`,
          borderBottom: `${theme === 'light' ? 0 : 1}px solid ${state.hrColorMain + 11}`,
          transition: `background-color ${animationTransition} ease, 
                                                  color ${animationTransition} ease`,
          // background: `radial-gradient(at 50% top, #4A0A6A, #4A0A6A, #040F1B, #040F1B, #040F1B)`,
          // backgroundColor: 'red'
     }

     const style_h2_ = {
          fontSize: 35,
          letterSpacing: 2.5,
          color: backgroundColor,
          transition: `color ${animationTransition} ease`
     }

     const style_hr_ = {
          'background-color': hrColorMain,
          transition: `background-color ${animationTransition} ease`
     }

     return (
          <div className='page-body' style={styleContainer}>
               <div className='page-body-left '>
                    <div className='container-content-left'>
                         <div className='content-left' >
                              <div ref={Ref_2b} >

                                   <Hidden smUp >
                                        {animation(isRef_2_Visible, 0.02,
                                             <div style={{ margin: `24px 0 52px` }}>
                                                  <h2 style={style_h2_}>
                                                       Tech stack
                                                  </h2>
                                                  <hr style={style_hr_} />
                                             </div>
                                        )}
                                   </Hidden>
                              </div>
                              <div style={{ marginTop: min_width_600px ? 13 : -16, }}>
                                   {animation(isRef_2_Visible, 0.1, <p>ReactJS</p>)}
                              </div>
                              {animation(isRef_2_Visible, 0.14, <p>Hook</p>)}
                              {animation(isRef_2_Visible, 0.18, <p>NextJS</p>)}
                              {animation(isRef_2_Visible, 0.22, <p>Javascript</p>)}
                              {animation(isRef_2_Visible, 0.26, <p>Material</p>)}
                              {animation(isRef_2_Visible, 0.3, <p>CSS</p>)}
                              {animation(isRef_2_Visible, 0.34, <p>SASS</p>)}
                              {animation(isRef_2_Visible, 0.38, <p>HTML</p>)}
                              {animation(isRef_2_Visible, 0.42, <p>Framer Motion</p>)}
                              {animation(isRef_2_Visible, 0.46, <p>SVG Animations</p>)}
                              {animation(isRef_2_Visible, 0.5, <p>Adobe Illustrator</p>)}
                              {animation(isRef_2_Visible, 0.54, <p>Autodesk Graphic</p>)}
                              {animation(isRef_2_Visible, 0.58, <p>GIMP</p>)}
                              {animation(isRef_2_Visible, 0.62, <p>Adobe Photoshop</p>)}
                         </div>
                    </div>
               </div>

               <div className='page-body-right' >
                    <div className='container-content-right'>
                         <div
                              className='content-right'
                              style={{
                                   marginTop: min_width_600px ? 0 : -53,
                                   marginBottom: min_width_600px ? 0 : -8
                              }}
                         >
                              <div ref={Ref_2} >
                                   <Hidden smDown >

                                        {animation(isRef_2_Visible, 0.02,
                                             <div style={{ margin: `20px 0 38px` }}>
                                                  <h2 style={style_h2_} >
                                                       Tech stack
                                                  </h2>
                                                  <hr style={style_hr_} />
                                             </div>
                                        )}
                                   </Hidden>
                              </div>

                              {animation(isRef_2_Visible, min_width_600px ? 0.22 : 0.66, <p>Typescript</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.26 : 0.7, <p>NodeJS</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.3 : 0.74, <p>Express</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.34 : 0.78, <p>Git Github Bitbucket</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.38 : 0.82, <p>Sourcetree</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.42 : 0.84, <p>Jira</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.46 : 0.88, <p>Jenkins</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.5 : 0.92, <p>Storybook</p>)}
                              {animation(isRef_2_Visible, min_width_600px ? 0.54 : 0.96,
                                   <AnimationImage
                                        imageURL={'/tech1.svg'}
                                        width={140}
                                        height={110}
                                        threshold={0.5}
                                   // Y_position={Y_position}
                                   />
                              )}
                         </div>
                    </div>
               </div>
          </div>
     )
}


