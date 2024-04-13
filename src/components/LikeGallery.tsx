import { useContext } from "react";
import { GlobalState } from "../App";
import { LikeGalleryPropsType } from "../interfaces";



const LikeGallery = ({ others }: LikeGalleryPropsType) => {

    const context = useContext(GlobalState);
    if (!context) return null;
    const { screenWidth } = context;
   


    return (
        <div className="likeGallery flex flex-col items-center gap-10  lg:gap-[64px] ">
            <h2 className="uppercase font-bold text-[32px] leading-[1.12] tracking-[1.14px] text-center">you may also like</h2>

            <div className="flex flex-col md:flex-row gap-[30px]">
                {others.map((el) => (
                    <div className="flex flex-col gap-8 lg:gap-10">
                           <img
                            src={screenWidth < 768
                                ? el.image.mobile.slice(1)
                                : screenWidth < 1110 ? el.image.tablet.slice(1)
                                    : el.image.desktop.slice(1)
                            }
                            alt="" className="w-full h-full rounded-[8px]" />
                        <div className="flex flex-col items-center gap-8 ">
                            <h3 className="font-bold text-[24px] tracking-[1.71px]">{el.name}</h3>
                            <button className="uppercase font-bold text-[13px] leading-[1.17] tracking-[1px] py-[15px] px-[30px] bg-[#D87D4A] hover:bg-[#fbaf85]">See Product</button>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default LikeGallery