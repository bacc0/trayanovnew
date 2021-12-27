import { useEffect, useState, Fragment } from 'react'

import HomePage from '../_components/__HomePage'

import { useViewportScroll } from 'framer-motion'
import { detect } from 'detect-browser'


var temp = 0
export default function Home() {

    
     var tempWindowWidth = 0
     var tempWindowHeight = 0

     const [scrollDirection, setScrollDirection] = useState('down')

     const [W_screenSize, set_W_screenSize] = useState(tempWindowWidth)
     const [H_screenSize, set_H_screenSize] = useState(tempWindowHeight)
     const [theme, setTheme] = useState('light')
     const { scrollYProgress } = useViewportScroll(0)
     const [Y_position, set_Y_position] = useState(0)
     // const [currentBrowser, setCurrentBrowser] = useState(0)
     let currentBrowser = ''

     // ---------------------------------    Detect window Size
     if (typeof window !== 'undefined') {
          var win = window,
               doc = document,
               docElem = doc.documentElement,
               body = doc.getElementsByTagName('body')[0],
               tempWindowWidth = win.innerWidth || docElem.clientWidth || body.clientWidth,
               tempWindowHeight = win.innerHeight || docElem.clientHeight || body.clientHeight;
     }

     // ---------------------------------    Detect window scrolling Directions (UP DOWN)
     
     useEffect(() => {
          var scrollableElement = document.body
          scrollableElement.addEventListener('wheel', checkScrollDirection)
          function checkScrollDirection(event) {

               if (checkScrollDirectionIsUp(event)) {
                    setScrollDirection('down')
               }
               else {
                    setScrollDirection('up')
               }
          }
          function checkScrollDirectionIsUp(event) {

               if (event.wheelDelta) return event.wheelDelta > 0
               return event.deltaY < 0
          }


     }, [])
     // ---------------------------------    Mobile Detect window scrolling Directions (UP DOWN)

     let oldValue = 0
     let newValue = 0

     useEffect(() => {
          window.addEventListener('scroll', (e) => {
               newValue = window.pageYOffset;
               if (oldValue < newValue) {



                    setScrollDirection('up')


               } else if (oldValue > newValue) {


                    setScrollDirection('down')

               }
               oldValue = newValue;
          });


     }, [])

     useEffect(() => {
          if (Y_position === 0) {
               console.log(0)
               setScrollDirection('down')
          }
     }, [Y_position])

     //-------------------

     useEffect(() => {

          scrollYProgress.onChange((v) => set_Y_position(v))
     }, [scrollYProgress])


     // ---------------------------------    Detect Browser Name
     const browser = detect()


     if (browser.name === 'firefox') {
          currentBrowser = 'firefox'
     }



     if (typeof window !== 'undefined') {
          window.addEventListener('resize', () => {

               set_W_screenSize(window.innerWidth)
               set_H_screenSize(window.innerHeight)
          })
     }
     // ---------------------------------    scroll to the top on reload

     useEffect(() => {
          window.scrollTo(0, 0)
     }, [])


     return (
          <section className='pages-wrapper'>

               < HomePage
                    W_screenSize={W_screenSize} theme={theme}
                    setTheme={setTheme} scrollDirection={scrollDirection}
                    Y_position={Y_position}
                    currentBrowser={currentBrowser}
               />


          </section>
     )
}
