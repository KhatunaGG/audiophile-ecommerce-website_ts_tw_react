import { useContext } from "react";
// import { HomePropsType } from "../pages/Home";
import { GlobalState } from "../App";

const HomeDescription = () => {

    const context = useContext(GlobalState);
    if (!context) return null;
    const { screenWidth } = context;



    return (
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[125px] md:mb-[120px] lg:mb-0 ">

            <div className="w-full h-[300px] md:h-[300px] lg:h-[588px] lg:flex-1 lg:order-2">
                <img
                    src={screenWidth < 768
                        ? '/assets/shared/mobile/image-best-gear.jpg'
                        : screenWidth < 1110 ? '/assets/shared/tablet/image-best-gear.jpg'
                            : '/assets/shared/desktop/image-best-gear.jpg'
                    }
                    alt="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-8 lg:flex-1 lg:order-1 lg:justify-center lg:w-[445px] lg:items-center">
                <h2 className="font-bold text-[28px] tracking-[1px] uppercase  text-center lg:text-left lg:text-[40px] text-[black]">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h2>
                <p className="font-medium text-[15px] leading-[1.66] text-[#9b9393] text-center md:px-[58px] lg:px-0 lg:text-left">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </div>
    )
}

export default HomeDescription