import { PageItemPropsType } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalState } from "../App";



const PageItem = ({ filtredData, status }: PageItemPropsType) => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { screenWidth } = context;
    

    const navigate = useNavigate()

    const getNavigateData = () => {
        return navigate(
            `/${filtredData.category}/productdetail`,
             {
                state: [
                    filtredData
                ]
            }
        )
    }



    return (
        <>
            <div className="pageItem w-full flex flex-col gap-[52px] lg:flex-row lg:gap-[125px] lg:items-center">
                <div className={`${status === filtredData.name ? 'lg:order-2' : 'lg:order-1'} image  w-full flex items-center justify-center flex-1 `}>
                    <img
                        src={screenWidth < 768
                            ? filtredData.categoryImage.mobile.slice(1)
                            : screenWidth < 1110 ? filtredData.categoryImage.tablet.slice(1)
                                : filtredData.categoryImage.desktop.slice(1)
                        }
                        alt="" className="rounded-[8px] " />
                </div>
                <div className={`${status === filtredData.name ? 'lg:order-1' : 'lg:order-2'} image  w-full flex items-center justify-center flex-1 `}>
                    <div className='lg:w-[379px] text-center lg:text-left'>

                        <h3 className='font-normal text-[14px] leading-[1.19] tracking-[10px] text-[#D87D4A] mb-4'>
                            {filtredData.new === true && 'NEW PRODUCT'}
                        </h3>

                        <h1 className='font-bold text-4xl leading-[1.11] tracking-[1.29px] mb-6 md:text-[40px] md:leading-[1.1] md:tracking-[1.43px] text-[black]'>

                            {filtredData.name}</h1>

                        <p className='font-normal text-[15px] leading-[1.66] text-[#918b8b] mb-[28px] md:px-[58px] lg:px-0'>{filtredData.description}</p>
                        <div
                            onClick={getNavigateData}
                        >
                            <button className='uppercase font-bold text-[13px] leading-[1.17] tracking-[1px] py-[15px] px-[30px]
                             bg-[#D87D4A] hover:bg-[#fbaf85]'>See Product</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PageItem