import { useContext, useState } from "react";
import { ThanksSectionPropsType } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { GlobalState } from "../App";



const ThanksSection = ({ summeryCartItem }: ThanksSectionPropsType) => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const [show, setShow] = useState(false)
    const [arrLength, setArrLength] = useState(1)


    const navigate = useNavigate();
    const returnToHome = () => {
        navigate('/')
    }


    return (
        <div className="overlay w-screen   h-[calc(100%-89.67px)] bg-[#00000071] pb-[1000px] md:pb-0 absolute z-30 top-[90px] left-0 right-0 flex flex-col items-center justify-cente lg:pt-[79px] lg:pb-[170px]">
            <div className='w-full px-[6.44%] md:px-[14.84%] lg:mx-[31.25%] flex flex-col items-center justify-center absolute z-40 '>
                <div className='bg-[white]  rounded-[8px]    mt-[36px] lg:mt-0  lg:-w-[82.22%] md:max-w-[450px]'>
                    <div className='px-8 py-8 flex flex-col items-start justify-start text-left'>
                        <div className='w-full'>
                            <div className='w-[64px] h-[64px] rounded-full bg-[#D87D4A] flex items-center justify-center  mb-[23px]'>
                                <img src="/assets/Path 4.svg" alt="" />
                            </div>
                        </div>
                        <h2 className='uppercase font-bold text-[24px] leading-[1.16] tracking-[0.86px] mb-[16px] w-[60%]'>THANK YOU FOR YOUR ORDER</h2>
                        <p className='font-medium text-[15px] leading-[1.66] text-[#9b9393] mb-[33px]'>You will receive an email confirmation shortly.</p>
                        <div className='w-full rounded-[8px] flex flex-col md:flex-row mb-[48px] overflow-hidden'>
                            <div className='gray-block md:w-[55.40%] bg-[#F1F1F1] px-6 pt-6 pb-[18px]'>
                                <div className='checkout-cart w-full pb-4'>
                                    {summeryCartItem.slice(0, arrLength).map((item) => (
                                        <div className='cart w-full flex flex-row items-center justify-between gap-4' key={item.id}>
                                            <div className='flex flex-row items-center gap-4'>
                                                <img className='w-[64px] h-[64px] rounded-[8px]' src={item.img} alt="" />
                                                <div>
                                                    <p className='name text-[15px] leading-[1.66] font-bold text-[black]'>{item.cartItemName}</p>
                                                    <p className='price text-[14px] leading-[1.66] text-[#9b9393] font-medium'>$ {item.price}</p>
                                                </div>
                                            </div>
                                            <p className='count text-[15px] leading-[1.66] text-[#9b9393] font-medium'>x{item.quantity}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className='see-more-less  flex flex-col items-center justify-center '>
                                    <div className='w-full h-[1px] bg-[#e5e2e2]'></div>
                                    <button
                                        onClick={() => {
                                            setShow(!show)
                                            if (!show) {
                                                setArrLength(Number(summeryCartItem.length))
                                            } else {
                                                setArrLength(1)
                                            }
                                        }}
                                        className='mt-[13px] border-t-[#979797] font-bold text-[12px] tracking-[-0.21px] text-[#9b9393] '>
                                        {arrLength === 1 ? `and ${summeryCartItem.length - 1} other item(s)` : 'View less'}
                                    </button>
                                </div>
                            </div>
                            <div className='black-block md:w-[44.59%] bg-[black] flex items-end '>
                                <div className='flex flex-col  items-start justify-center gap-2 pl-[24px] pt-[15px] pb-[19px] lg:pb-[42px]'>
                                    <h3 className='text-[15px] font-medium leading-[1.66] text-[#9b9393] uppercase'>GRAND TOTAL</h3>
                                    <span className='font-bold text-[18px] text-white'>$ 5,446</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <button
                                onClick={returnToHome}
                                className='w-full text-white py-[15px] bg-[#D87D4A] hover:bg-[#FBAF85] uppercase text-[13px] font-bold tracking-[1px]'>BACK TO HOME</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThanksSection