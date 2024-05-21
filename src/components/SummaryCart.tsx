import { useContext, useEffect, useState } from "react";
import { SummaryCartPropsType } from "../interfaces";
import ThanksSection from "./ThanksSection";
import { GlobalState } from "../App";




const SummaryCart = ({ summeryCartItem, setIsLogged, isLogged, registerData , isChecked}: SummaryCartPropsType) => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { setCartItems } = context;

    const [summeryTotal, setSummeryTotal] = useState<number>(0);



    useEffect(() => {
        let total = 0;
        let units = 0;
        let sum = 0;
        summeryCartItem.forEach((el) => {
            total += el.price * el.quantity;
            units += el.quantity;
        });
        sum = total;
        setSummeryTotal(sum)
    }, [summeryCartItem]);

    return (
        <>
            {summeryCartItem.map((item) => (
                <div className='cart w-full flex flex-row items-center justify-between' key={item.cartItemName}>
                    <div className='flex flex-row items-center gap-4'>
                        <img className='w-[64px] h-[64px] rounded-[8px]' src={item.img} alt="" />
                        <div>
                            <p className='name text-[15px] leading-[1.66] font-bold text-[black]'>{item.cartItemName}</p>
                            <p className='price text-[15px] leading-[1.66] text-[#9b9393] font-medium'>$ {item.price}</p>
                        </div>
                    </div>
                    <p className='count text-[15px] leading-[1.66] text-[#9b9393] font-medium'>x{item.quantity}</p>
                </div>
            ))}

            <div className='Total w-full flex flex-col gap-6'>
                <div className='flex flex-col gap-1'>
                    <div className='flex flex-row items-center justify-between'>
                        <p className='total uppercase font-medium text-[15px] leading-[1.66] text-[#9b9393] '>TOTAL</p>
                        <span className='total-price font-bold text-[18px]  text-black '>$ {summeryTotal} </span>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                        <p className='total uppercase font-medium text-[15px] leading-[1.66] text-[#9b9393]'>SHIPPING</p>
                        <span
                            style={{ color: summeryTotal >= 6000 ? 'green' : 'black' }}
                            className='total-price font-bold text-[18px]  text-black text-left'>
                            {summeryTotal >= 6000 ? 'FREE' : '$ 50'}
                        </span>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                        <p className='total uppercase font-medium text-[15px] leading-[1.66] text-[#9b9393]'>VAT (INCLUDED)</p>
                        <span className='total-price font-bold text-[18px]  text-black '>${(summeryTotal * 0.20).toFixed(2)} </span>
                    </div>
                </div>

                <div className='flex flex-row items-center justify-between'>
                    <p className='total uppercase font-medium text-[15px] leading-[1.66] text-[#9b9393] '>GRAND TOTAL</p>
                    <span className='total-price font-bold text-[18px]  text-[#D87D4A] '>$ {summeryTotal < 6000 ? (summeryTotal + 50) : summeryTotal} </span>
                </div>
            </div>

            <button
                onClick={() => {
                    setIsLogged(!isLogged)
                    setCartItems([])
                }}

                className='w-full bg-[#D87D4A] text-white py-[15px] font-bold text-[13px] tracking-[1px] hover:bg-[#fbaf85]'
                type='submit'
            >CONTINUE & PAY</button>
            {registerData && isChecked && (
                <ThanksSection summeryCartItem={summeryCartItem} />
            )}
        </>
    )
}

export default SummaryCart;
