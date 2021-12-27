import * as React from 'react'
import Image from 'next/image'
import useInView from 'react-cool-inview'
import { motion, AnimatePresence } from 'framer-motion'

export default function AnimationImage({ imageURL, width, height, threshold = 0.5 }) {

     const { observe, inView } = useInView({
          threshold: threshold,
          // unobserveOnEnter: true,

          //           onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
          //             // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]

          //             unobserve(); // To stop observing the current target element
          //             observe(); // To re-start observing the current target element
          //           },
          // onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
          //   // Triggered when the target enters the viewport
          // },
                                   // onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
                                     // Triggered when the target leaves the viewport
          // console.log(scrollDirection)
          // unobserve()
                                   // },
          //           // More useful options...
     })

     return (
          <div ref={observe} style={{ height, width }}>
               <AnimatePresence>
                    {inView && (
                         <motion.div
                              initial={{ opacity: 0, pathLength: 0, y: 0 }}
                              animate={{ opacity: 1, pathLength: 1, y: 0 }}
                              transition={{ delay: 0, duration: 0.5, ease: 'linear' }}
                              exit={{ opacity: 0 }}


                         >
                              <Image
                                   src={imageURL}
                                   alt={imageURL}
                                   width={width}
                                   height={height}
                              />
                         </motion.div>
                    )}
               </AnimatePresence>
          </div>
     )
}
