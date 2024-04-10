
import MiniGallery from '../components/MiniGallery'
import HomeArticle from '../components/HomeArticle'
import HomeDescription from '../components/HomeDescription';
import { useContext } from "react";
import { GlobalState } from "../App";



const Home = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
 


  return (
    <>
      <section className='header absolute top-[-1px]  -z-10 text-white flex flex-col items-center '>
        <div className='border-t pt-[197.67px] md:border-none md:pt-[215.67px] lg:pt-[217.67px] md:w-[379px] lg:w-full flex flex-col items-center '>
          <div className='container px-[6.44%] md:px-[5.20%] lg:px-[11.45%] flex flex-col items-center justify-center text-center lg:items-start '>
             <div className='lg:w-[379px] lg:text-left '>
              <h3 className='font-normal text-[14px] leading-[1.19] tracking-[10px] text-[#9b9393] mb-4'>NEW PRODUCT</h3>
              <h1 className='font-bold text-4xl leading-[1.11] tracking-[1.29px] mb-6 md:text-[56px] md:leading-[1.03] md:tracking-[2px]'>XX99 Mark II HeadphoneS</h1>
              <p className='font-normal text-[15px] leading-[1.66] text-[#918b8b] mb-[28px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
              <div>
                <button className='uppercase font-bold text-[13px] leading-[1.17] tracking-[1px] py-[15px] px-[30px] bg-[#D87D4A] hover:bg-[#fbaf85]'>See Product</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='px-[6.44%] md:px-[5.20%] lg:px-[11.45%] mt-[600px] md:mt-[729px] mx-auto gap-[120px]'>
            <div className='aaaa w-full py-[92px]  flex flex-col items-center justify-center  md:gap-[96px] lg:gap-[168px] '>
          <MiniGallery  /> 
          <HomeArticle />
          <HomeDescription />
        </div>
      </div>
    </>
  )
}

export default Home






