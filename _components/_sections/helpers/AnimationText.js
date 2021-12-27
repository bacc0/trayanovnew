import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
// import { useDimensions } from "./use-dimensions";


export const AnimationText = ({ text }) => {

     const menuItem = (index) => {
          return (
               <motion.li
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    variants={{
                         open: {
                              y: 0,
                              opacity: 1 
                         }
                    }}
               >
                    {index}
               </motion.li>
          )
     }


     const containerRef = useRef(null);
     // const { height } = 'auto';

     return (
          <motion.ul
               style={{
                    'list-style-type': 'none',
                    margin: 0,
                    padding: 0
               }}
               initial={true}
               animate={"open"}
               ref={containerRef}
               variants={{
                    open: {
                         transition: { staggerChildren: 0.04, delayChildren: 0.3 }
                    },
                    // closed: {
                    //      transition: { staggerChildren: 0.05, staggerDirection: 10 }
                    // }
               }}
          >
               {text.map((index) => (
                    <>
                         {menuItem(index)}
                    </>
               ))}
          </motion.ul>
     )
}
