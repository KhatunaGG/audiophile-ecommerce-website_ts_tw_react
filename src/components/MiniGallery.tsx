import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../App";



const MiniGalery = () => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { setSidebar, category, screenWidth } = context;


    return (
        <div className=" flex flex-col items-center justify-center gap-[68px] md:flex-row md:gap-[10px] ">

            {category.map((item, i) => (
                <Link to={`/${item}`} key={i}>
                    <div
                        onClick={() => setSidebar ? setSidebar(false) : undefined}
                        className="item relative flex flex-col items-center justify-center bg-[#F1F1F1] px-[108px] pb-[22px] pt-[88px] rounded-lg md:px-[56px] lg:pb-[30px] lg:pt-[116px] lg:px-[108.5px]  ">

                        {screenWidth < 768 ? (
                            <img className="absolute top-[-30px] legt-0 w-[93.92px] h-[100px] "

                                src={item === 'headphones' ? "/assets/shared/desktop/image-category-thumbnail-headphones.png"
                                    : item === 'speakers' ? "/assets/shared/desktop/image-category-thumbnail-speakers.png"
                                        : "/assets/shared/desktop/image-category-thumbnail-earphones.png"
                                }
                                alt="" />
                        ) : screenWidth < 1110 ? (
                            <img className="absolute top-[-35px] legt-0 w-[93.92px] h-[100px] "

                                src={item === 'headphones' ? "/assets/shared/desktop/image-category-thumbnail-headphones.png"
                                    : item === 'speakers' ? "/assets/shared/desktop/image-category-thumbnail-speakers.png"
                                        : "/assets/shared/desktop/image-category-thumbnail-earphones.png"
                                }
                                alt="" />

                        ) : (
                            <img className="absolute top-[-39px] legt-0  lg:w-[155.95px] lg:h-[150px] lg:top-[-52px]"

                                src={item === 'headphones' ? "/assets/shared/desktop/image-category-thumbnail-headphones.png"
                                    : item === 'speakers' ? "/assets/shared/desktop/image-category-thumbnail-speakers.png"
                                        : "/assets/shared/desktop/image-category-thumbnail-earphones.png"
                                }
                                alt="" />
                        )}

                        <div className="flex flex-col items-center justify-center gap-[17px]">
                            <h4 className="font-bold text-[15px] tracking-[1.07px] leading-[1.36] text-[black]">{item}</h4>
                            <button className="flex flex-row justify-center items-center gap-[13.32px] font-bold text-[13px] leading-[1.17] tracking-[1px]">
                                <span className="uppercase text-[#918b8b] hover:text-[#D87D4A]">Shop</span>
                                <img src="/assets/shared/desktop/icon-arrow-right.svg" alt="" />
                            </button>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    )
}

export default MiniGalery


