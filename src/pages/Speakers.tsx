import { useContext } from "react";
import HomeDescription from "../components/HomeDescription";
import PageItem from "../components/PageItem";
import { GlobalState } from "../App";
import MiniGallery from "../components/MiniGallery";


const Speakers = () => {
  const context = useContext(GlobalState);
  if (!context) return null;
  const { data } = context;
  const speakersData = data.filter((item) => item.category === 'speakers')


  return (
    <>
      <div className="Headphones w-full bg-[black] text-center text-[28px] uppercase font-bold tracking-[2px] pt-[121.75px] pb-[79px] absolute t-0 -z-10 left-0 h-[156px]">Speakers
      </div>
      <div className="w-full px-[6.44%] md:px-[5.20%] lg:px-[11.45%] mt-[160px] md:mt-[200px] lg:mt-[240px] ">
        <div className="w-full flex flex-col items-center justify-center gap-[120px] ">
          {speakersData.map((item) => (
            <PageItem
              key={item.id}
              filtredData={item}
              status="ZX9 Speaker"
            />
          ))}
          <MiniGallery />
          <HomeDescription />
        </div>
      </div>
    </>
  )
}

export default Speakers