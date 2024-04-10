import HomeDescription from "../components/HomeDescription";
import MiniGallery from "../components/MiniGallery";
import PageItem from "../components/PageItem";


import { useContext } from "react";
import { GlobalState } from "../App";


const Headphones = () => {

  const context = useContext(GlobalState);
  if (!context) return null;
  const { screenWidth, data } = context;

  const headphonesData = data.filter((item) => item.category === 'headphones')
  

  return (
    <>
      <div className="Headphones w-full bg-[black] text-center text-[28px] uppercase font-bold tracking-[2px] pt-[121.75px] pb-[79px] absolute t-0 -z-10 left-0 h-[156px]">headphones
      </div>


      <div className="w-full px-[6.44%] md:px-[5.20%] lg:px-[11.45%] mt-[160px] md:mt-[200px] lg:mt-[240px] ">
        <div className="w-full flex flex-col items-center justify-center gap-[120px]">

          {headphonesData.map((item) => (
            <PageItem 
            key={item.id} 
            filtredData={item}
            status='XX99 Mark I Headphones'
           
            />
           
          ))}

          <MiniGallery />
          <HomeDescription />
        </div>

      </div>


    </>
  )
}

export default Headphones