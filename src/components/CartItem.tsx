import { useContext, useState } from "react";
import {  GlobalState } from "../App";
import { ItemPropsType } from "../interfaces";


const CartItem = ({ cartitem }: ItemPropsType) => {

    const context = useContext(GlobalState);
    if (!context) return null;
    const { cartItems, setCartItems } = context;

    const [count, setCount] = useState(cartitem.quantity)


    const increaseCount = () => {
        setCount((prev) => prev + 1)
        cartToUpdate(count + 1)
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1)
            cartToUpdate(count - 1)
        } 
    }

    const cartToUpdate = (updatedCount: number) => {
        const newCartItem = cartItems.map((item) => {
            if (item.id === cartitem.id) {
                return {
                    ...item, quantity: updatedCount, totalPrice: updatedCount * cartitem.price
                }
            }
            return item
        })
        setCartItems(newCartItem)
    }


    return (
        <div className='flex flex-row items-center justify-between gap-4 '>
            <img className='w-[64px] h-[64px] rounded-[8px]' src={cartitem.img.slice(1)} alt="" />
            <div className='text-[black] text-left  w-[62%]'>
                <p className='text-[15px] leading-[1.66] font-bold text-[black]'>{cartitem.cartItemName}</p>
                <p className='text-[15px] leading-[1.66] text-[#9b9393] font-medium'>$ {cartitem.totalPrice}</p>
            </div>
            <div className="count-block flex flex-row   bg-[#F1F1F1] text-left">
                <span
                    onClick={decreaseCount}
                    className="font-bold text-[13px] px-[15px] py-[3px] tracking-[1px] text-black cursor-pointer ">-</span>
                <span className="font-bold text-[13px] py-[3px]  tracking-[1px] text-black cursor-pointer ">{cartitem.quantity}</span>
                <span
                    onClick={increaseCount}
                    className="font-bold text-[13px] px-[15px] py-[3px] tracking-[1px] text-black cursor-pointer ">+</span>
            </div>
        </div>
    )
}

export default CartItem