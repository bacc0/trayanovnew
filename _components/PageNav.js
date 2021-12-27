

import { motion } from 'framer-motion'



import TitleSVG from './_illustratins/TitleSVG'

export default function MenuAppBar({ state, logo_W_H, strokeWidth, setOnAnimationEnd, animationTransition }) {


     return (

          <div className='vertical-center'>
               <motion.div
                    initial={{ scale: 1, y: -200, x: 10, opacity: 0 }}
                    animate={{ scale: 1, y: 0, x: 10, opacity: 1 }}
                    transition={{ type: 'spring', duration: 0.9, delay: 0 }}
                    className='title'
               >
                    <TitleSVG
                         state={state}
                         logo_W_H={logo_W_H}
                         strokeWidth={strokeWidth}
                         setOnAnimationEnd={setOnAnimationEnd}
                         animationTransition={animationTransition}
                    />
               </motion.div>
          </div>

     )
}
