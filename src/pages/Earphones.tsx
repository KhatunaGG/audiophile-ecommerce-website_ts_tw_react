import HomeDescription from "../components/HomeDescription";
import MiniGallery from "../components/MiniGallery";
import PageItem from "../components/PageItem";
import { useContext } from "react";
import { GlobalState } from "../App";
import { IData } from "../interfaces";



const Earphones = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { data } = context;
  const earphonesData = data.filter((item) => item.category === 'earphones')


  return (
    <>
      <div className="Headphones w-full bg-[black] text-center text-[28px] uppercase font-bold tracking-[2px] pt-[121.75px] pb-[79px] absolute t-0 -z-10 left-0 h-[156px]">Speakers
      </div>
      <div className="w-full px-[6.44%] md:px-[5.20%] lg:px-[11.45%] mt-[160px] md:mt-[200px] lg:mt-[240px]  ">
        <div className="w-full flex flex-col items-center justify-center gap-[120px]   ">
          {earphonesData.map((item: IData) => (
            <PageItem
              key={item.id}
              filtredData={item}
            />
          ))}
          <MiniGallery />
          <HomeDescription />
        </div>
      </div>
    </>
  )
}

export default Earphones