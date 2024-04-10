import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../App";

const MiniGalery = () => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { screenWidth, setSidebar  } = context;




    return (
        <div className=" flex flex-col items-center justify-center gap-[68px] md:flex-row md:gap-[10px]">

            <Link to={'/headphones'}>
                <div

                    onClick={() => setSidebar ? setSidebar(false) : undefined}

                    className="item relative flex flex-col items-center justify-center bg-[#F1F1F1] px-[108px] pb-[22px] pt-[88px] rounded-lg md:px-[56px] lg:pb-[30px] lg:pt-[116px] lg:px-[108.5px]  ">
                    <img className="absolute top-[-39px] legt-0 w-[79.92px] h-[104px] lg:w-[122.95px] lg:h-[160px] lg:top-[-63px]" src="/assets/shared/desktop/image-category-thumbnail-headphones.png" alt="" />
                    <div className="flex flex-col items-center justify-center gap-[17px]">
                        <h4 className="font-bold text-[15px] tracking-[1.07px] leading-[1.36] text-[black]">HEADPHONES</h4>
                        <button className="flex flex-row justify-center items-center gap-[13.32px] font-bold text-[13px] leading-[1.17] tracking-[1px]">
                            <span className="uppercase text-[#918b8b] hover:text-[#D87D4A]">Shop</span>
                            <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
                        </button>
                    </div>

                </div>
            </Link>

            <Link to={'/speakers'}>
                <div
                    onClick={() => setSidebar ? setSidebar(false) : undefined}
                    className="item relative flex flex-col items-center justify-center bg-[#F1F1F1] px-[108px] pb-[22px] pt-[88px] rounded-lg md:px-[56px] lg:pb-[30px] lg:pt-[116px] lg:px-[108.5px] ">
                    <img className="absolute top-[-39px] legt-0 w-[84.04px] h-[101px] lg:w-[121.49px] lg:h-[146px] lg:top-[-55px]" src="/assets/shared/desktop/image-category-thumbnail-speakers.png" alt="" />
                    <div className="flex flex-col items-center justify-center gap-[17px]">
                        <h4 className="font-bold text-[15px] tracking-[1.07px] leading-[1.36] text-[black]">SPEAKERS</h4>
                        <button className="flex flex-row justify-center items-center gap-[13.32px] font-bold text-[13px] leading-[1.17] tracking-[1px]">
                            <span className="uppercase text-[#918b8b] hover:text-[#D87D4A]">Shop</span>
                            <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
                        </button>
                    </div>
                </div>


            </Link>




            <Link to={'/earphones'}>
                <div
                    onClick={() => setSidebar ? setSidebar(false) : undefined}
                    className="item relative flex flex-col items-center justify-center bg-[#F1F1F1] px-[108px] pb-[22px] pt-[88px] rounded-lg md:px-[56px] lg:pb-[30px] lg:pt-[116px] lg:px-[108.5px] ">
                    <img className="absolute top-[-39px] legt-0 w-[103px] h-[104px] md:top-[-30px]  lg:w-[125px] lg:h-[125px] lg:top-[-40px]" src="/assets/shared/desktop/image-category-thumbnail-earphones.png" alt="" />
                    <div className="flex flex-col items-center justify-center gap-[17px]">
                        <h4 className="font-bold text-[15px] tracking-[1.07px] leading-[1.36] text-[black]">EARPHONES</h4>
                        <button className="flex flex-row justify-center items-center gap-[13.32px] font-bold text-[13px] leading-[1.17] tracking-[1px]">
                            <span className="uppercase text-[#918b8b] hover:text-[#D87D4A]">Shop</span>
                            <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
                        </button>
                    </div>
                </div>
            </Link>






        </div>
    )
}

export default MiniGalery