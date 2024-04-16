// import MiniGallery from "./MiniGallery";
// import {motion} from 'framer-motion'


// const Overlay = () => {
//   return (
//     <div className="overlay w-screen  h-screen  bg-[#00000071] pb-[1000px] md:pb-0 absolute z-30 top-[92px] left-0 right-0">
//       <div className=' w-screen bg-[white]  rounded-b-[8px]  absolute z-40 '>
//         <div className="px-[6.44%] md:px-[5.20%] py-10 mt-10 md:mt-[45px] md:mb-[40px]">
//           <MiniGallery />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Overlay



import MiniGallery from "./MiniGallery";
import {motion} from 'framer-motion'



const Overlay = () => {
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.04 }}
    className="overlay w-screen  h-screen  bg-[#00000071] pb-[1000px] md:pb-0 absolute z-30 top-[92px] left-0 right-0">
      <div className=' w-screen bg-[white]  rounded-b-[8px]  absolute z-40 '>
        <div className="px-[6.44%] md:px-[5.20%] py-10 mt-10 md:mt-[45px] md:mb-[40px]">
          <MiniGallery />
        </div>
      </div>
    </motion.div>
  )
}

export default Overlay