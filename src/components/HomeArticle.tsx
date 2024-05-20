import { useContext } from "react";
import { GlobalState } from "../App";



const HomeArticle = () => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { screenWidth } = context;



    return (
        <section className="w-full flex flex-col gap-6 mt-[30px] md:mt-0">
            <div className='HomeArticle relative w-full h-[600px] bg-[#D87D4A] rounded-[8px] md:h-[720px] lg:h-[560px] overflow-hidden '
                style={{
                    backgroundImage: screenWidth > 768 ? `url('/assets/medium.png')`
                        : screenWidth > 1110 ? `url('/assets/large.png')`
                            : `url('/assets/small.png')`,
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="w-full py-[55px] px-[24px] flex flex-col items-center justify-center gap-8  text-white md:gap-[64px] lg:flex-row lg:pl-[10.58%] lg:gap-[138.28px] lg:pt-[81px] ">
                    <div className="w-[172.25px] h-[207px] lg:w-[410.23px] lg:h-[493px]">
                        <img className="w-[172.25px] h-[207px] lg:w-[410.23px] lg:h-[493px]" src="/assets/home/mobile/image-speaker-zx9.png" alt="" />
                    </div>
                    <div className="text flex flex-col items-center gap-6 text-center  md:w-[349px] lg:items-start ">
                        <h2 className="font-bold text-[36px] leading-[1.11]  ">ZX9 SPEAKER</h2>
                        <p className="font-normal text-[15px] leading-[1.66]  lg:text-left">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <button className="py-[15px] px-[31px] uppercase bg-black cursor-pointer">See Product</button>
                    </div>
                </div>
            </div>

            <div className="homeSection2-box-2 rounded-[8px] h-[320px] w-full pt-[89px] p-6 md:pl-[62px] lg:pl-[92px]"
                style={{
                    backgroundImage:
                        screenWidth < 375 ? `url('/assets/home/mobile/image-speaker-zx7.jpg')`
                            : screenWidth < 768 ? `url('/assets/home/tablet/image-speaker-zx7.jpg')`
                                : `url('/assets/home/desktop/image-speaker-zx7.jpg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div
                    className="flex flex-col gap-8 items-start justify-center text-[black]">
                    <h2 className="font-bold text-[28px] tracking-[2px] uppercase text-[black]">zx7 speaker</h2>
                    <button className="border border-[black] bg-transparent uppercase font-bold text-[13px] tracking-[1px] py-[15px] px-[30px] hover:bg-[black] hover:text-[white]">See Product</button>
                </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:gap-[11px] lg:gap-[30px] text-[black]">
                <div className="w-full h-[200px] md:h-[320px] lg:h-[320px] rounded-[8px] md:flex-1"
                    style={{
                        backgroundImage:
                            screenWidth < 375 ? `url('/assets/home/mobile/image-earphones-yx1.jpg')`
                                : screenWidth < 768 ? `url('/assets/home/tablet/image-earphones-yx1.jpg')`
                                    : `url('/assets/home/desktop/image-earphones-yx1.jpg')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                </div>

                <div className="rounded-[8px] bg-[#F1F1F1]  py-[41px] pl-6 md:flex-1 md:pl-[42px] md:pt-[95px] ">
                    <h2 className="font-bold text-[28px] tracking-[2px] uppercase mb-8">yx1 earphones</h2>
                    <button className="border border-[black] bg-transparent uppercase font-bold text-[13px] tracking-[1px] py-[15px] px-[30px] hover:bg-[black] hover:text-[white]">See Product</button>
                </div>
            </div>
        </section>
    )
}

export default HomeArticle;


