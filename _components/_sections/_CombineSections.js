import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Experience from './1_Experience'
import Technologies from './2_Technologies'
import AboutMe from './3_AboutMe'
import Footer from './4_Footer'
import { Typewriter } from 'react-simple-typewriter'

import useInView from 'react-cool-inview'

export default function _CombineSections({
     state, theme, min_width_600px, animationTransition, onAnimationEnd }) {

     const { observe, unobserve, inView, scrollDirection, entry } =
          useInView(
               {
                    threshold: 0.05, // Default is 0
                    //           onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
                    //             // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

                    //             unobserve(); // To stop observing the current target element
                    //             observe(); // To re-start observing the current target element
                    //           },
                    //           onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
                    //             // Triggered when the target enters the viewport

                    //           },
                    // onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
                    //   // Triggered when the target leaves the viewport
                    // },
                    //           // More useful options...
               }
          )
     // console.log(inView)

     const [isRef_0_Visible, setIsRef_0_Visible] = useState(true)
     const [isRef_05_Visible, setIsRef_05_Visible] = useState(true)
     const [isRef_1_Visible, setIsRef_1_Visible] = useState(true)
     const [isRef_2_Visible, setIsRef_2_Visible] = useState(true)
     const [isRef_3_Visible, setIsRef_3_Visible] = useState(true)

     const Ref_0 = useRef()
     const Ref_05 = useRef()
     const Ref_1 = useRef()
     const Ref_2 = useRef()
     const Ref_2b = useRef()
     const Ref_3 = useRef();

     const typeWriter = (sentence) => {
          return (
               onAnimationEnd && (
                    <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 1.3 }}
                    >
                         <Typewriter
                              words={[sentence]}
                              loop={1}
                              cursor
                              cursorStyle=''
                              typeSpeed={75}
                              deleteSpeed={50}
                              delaySpeed={2000}
                         />
                    </motion.div>
               )
          )
     }

     useEffect(() => {

          window.addEventListener('scroll', scrollHandler);
          return () => window.removeEventListener('scroll', scrollHandler);
     }, []);


     const scrollHandler = () => {

          if (window.pageYOffset + window.innerHeight - 44 >= Ref_0.current.offsetTop) {
               setIsRef_0_Visible(true)
          } else {
               setIsRef_0_Visible(false)
          }

          if (window.pageYOffset + window.innerHeight - 44 >= Ref_05.current.offsetTop) {
               setIsRef_05_Visible(true)
          } else {
               setIsRef_05_Visible(false)
          }

          if (window.pageYOffset + window.innerHeight - 44 >= Ref_1.current.offsetTop) {
               setIsRef_1_Visible(true)
          } else {
               setIsRef_1_Visible(false)
          }

          if ((window.pageYOffset + window.innerHeight - 44 >= Ref_2.current.offsetTop) ||
               (window.pageYOffset + window.innerHeight - 44 >= Ref_2b.current.offsetTop)) {

               setIsRef_2_Visible(true)
          } else {
               setIsRef_2_Visible(false)
          }

          if (window.pageYOffset + window.innerHeight - 44 >= Ref_3.current.offsetTop) {
               setIsRef_3_Visible(true)
          } else {
               setIsRef_3_Visible(false)
          }
     }

     const animation = (is_Ref_Visible, delay, html) => {


          return (
               <AnimatePresence>
                    {is_Ref_Visible == 1 && (
                         <motion.div exit={{ opacity: 0.3, y: -10 }}>
                              <motion.div
                                   initial={{ scale: 0.99, y: 50, opacity: 0 }}
                                   animate={{ scale: 1, y: 0, opacity: 1 }}
                                   transition={{ type: 'spring', ease: 'anticipate', duration: 0.9, delay: delay }}
                              >
                                   {html}
                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence >
          )
     }


     return (

          <div>
               <Experience
                    state={state}
                    min_width_600px={min_width_600px}
                    typeWriter={typeWriter}
                    Ref_0={Ref_0}
                    isRef_0_Visible={isRef_0_Visible}
                    Ref_05={Ref_05}
                    isRef_05_Visible={isRef_05_Visible}
                    Ref_1={Ref_1}
                    isRef_1_Visible={isRef_1_Visible}
                    animation={animation}
               />

               <Technologies
                    theme={theme}
                    min_width_600px={min_width_600px}
                    Ref_2={Ref_2}
                    Ref_2b={Ref_2b}
                    isRef_2_Visible={isRef_2_Visible}
                    animation={animation}
                    state={state}
                    animationTransition={animationTransition} 
               />

               <AboutMe
                    state={state}
                    Ref_3={Ref_3}
                    isRef_3_Visible={isRef_3_Visible}
                    min_width_600px={min_width_600px}
                    animation={animation}
                    animationTransition={animationTransition}
               />

               <div
                    ref={observe}
                    style={{ height: 200 }}
               >

                    {inView && (
                         <motion.div
                              initial={{ opacity: 0.8, y: 0 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                         >
                              <Footer
                                   state={state}
                              />
                         </motion.div>
                    )}
               </div>
          </div>
     )
}