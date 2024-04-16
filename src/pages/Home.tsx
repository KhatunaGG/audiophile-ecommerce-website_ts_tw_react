import MiniGallery from '../components/MiniGallery'
import HomeArticle from '../components/HomeArticle'
import HomeDescription from '../components/HomeDescription';
import { useContext } from "react";
import { GlobalState } from "../App";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


const Home = () => {

  const context = useContext(GlobalState);
  if (!context) return null;

  const title = 'NEW PRODUCT'
  const newTitle = title.split(' ')

  const letters = 'XX99 Mark II'
  const newLetters = Array.from(letters);

  const letters2 = 'HeadphoneS'
  const newLetters2 = Array.from(letters2 )



  const variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.9 * i },
    }),
  };


  const child = {
    visible: {
      opacity: 1,
      // y: 0,
      x: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 }
    },
    hidden: {
      opacity: 0,
      // y: -20,
      x: -20,
      transition: { type: 'spring', damping: 12, stiffness: 100 }
    }
  }




  return (
    <>
      <section className='header absolute top-[-1px]  -z-10 text-white flex flex-col items-center '>
        <div className='border-t pt-[197.67px] md:border-none md:pt-[215.67px] lg:pt-[217.67px] md:w-[379px] lg:w-full flex flex-col items-center '>
        </div>
      </section>

      <div className='container px-[6.44%] md:px-[5.20%] lg:px-[11.45%] flex flex-col items-center justify-center text-center 
              bg-transparent mt-[108px] lg:items-start
              absolute z-10 top-[2.5%] md:mt-[126px] lg:text-left lg:mt-[128px] '>
        <div className='text-block lg:w-[379px] lg:text-left    flex flex-col items-center lg:items-start'>
          <motion.h3
            variants={variants}
            initial='hidden'
            animate='visible'
            className='font-normal text-[14px] leading-[1.19] tracking-[10px] text-[#9b9393] mb-4 flex gap-[10px]'>
            {newTitle.map((word, i) => (
              <motion.span
                variants={child}
                key={i}>{word}</motion.span>
            ))}</motion.h3>
          {/* <h1 className='font-bold text-4xl leading-[1.11] tracking-[1.29px] mb-6 md:text-[56px] md:leading-[1.03] md:tracking-[2px] uppercase'>XX99 Mark II HeadphoneS</h1> */}


          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className='font-bold text-4xl leading-[1.11] tracking-[1.29px] mb-6 md:text-[56px] md:leading-[1.03] md:tracking-[2px] flex uppercase'>
            {newLetters.map((letter, i) => (
              <motion.span
                variants={child}
                key={i}>
                {letter === ' ' ? "\u00A0" : letter}
              </motion.span>
            ))}</motion.div>


          <motion.div
            variants={variants}
            initial='hidden'
            animate='visible'
            className='font-bold text-4xl leading-[1.11] tracking-[1.29px] mb-6 md:text-[56px] md:leading-[1.03] md:tracking-[2px] flex uppercase'>
            {newLetters2.map((letter, i) => (
              <motion.span
                variants={child}
                key={i}>
                {letter === ' ' ? "\u00A0" : letter}
              </motion.span>
            ))}</motion.div>
          <p className='font-normal text-[15px] leading-[1.66] text-[#918b8b] mb-[28px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

          <Link to={'/headphones/:productdetail'}>
            <div>
              <button className='uppercase font-bold text-[13px] leading-[1.17] tracking-[1px] py-[15px] px-[30px] bg-[#D87D4A] hover:bg-[#fbaf85]  cursor-pointer'>See Product</button>
            </div>
          </Link>
        </div>
      </div>

      <div className='px-[6.44%] md:px-[5.20%] lg:px-[11.45%] mt-[600px] md:mt-[729px] mx-auto gap-[120px]'>
        <div className='aaaa w-full pt-0 pb-[92px] flex flex-col items-center justify-center  md:gap-[96px] lg:gap-[168px] md:py-[92px] md:pb-0'>
          <MiniGallery />
          <HomeArticle />
          <HomeDescription />
        </div>
      </div>
    </>
  )
}

export default Home






