import { useContext, useState } from "react";
import {  GlobalState } from "../App";
import CartItem from "./CartItem";
import { CartItemType } from "../interfaces";
import {  useNavigate } from "react-router-dom";


const Cart = () => {
    const context = useContext(GlobalState);
    if (!context) return null;
    const { cartItems, setCart } = context;

    const [removeAll, setRemoveAll] = useState(cartItems.length)
    const handleRemove = () => {
        setRemoveAll(cartItems.length = 0)
    }


    let totalprice = 0
    cartItems.map((item) => {
        totalprice = totalprice + item.price * item.quantity
    })

    const navigate = useNavigate();
    const getNavigateData = () => {
        if(cartItems.length > 0) {
            return navigate(
                '/checkout',
                {
                    state:
                        [cartItems,
                            setCart(false)]
                }
            )
        }
    }




    return (
        <div className='w-full h-[650px] bg-[#00000081] absolute top-[90px] left-0 right-0 z-20 flex items-center justify-center md:h-[calc(100%-90px)] lg:h-[calc(100%-90px)]'>
            <div className='cart  absolute  md:right-[89px] z-30 bg-[white] w-[327px] top-6 rounded-[8px] px-[28px] py-[31px] md:w-[377px] lg:right-[140px]'>
                <div className='flex flex-col items-center justify-center gap-8'>
                    <div className=' w-full  flex flex-row justify-between items-center'>
                        <div className='uppercase font-bold text-[18px] tracking-[1.29px] text-[black]'>cart (<span>{removeAll}</span>)</div>
                        <button
                            onClick={() => handleRemove()}
                            className='font-medium text-[15px] leading-[1.66] text-[#9b9393] underline'>Remove all</button>
                    </div>

                    <div className='w-full flex flex-col gap-6'>
                        {cartItems.map((item: CartItemType) => (
                            <CartItem
                            key={item.id}
                            cartitem={item}
                            
                            />
                        ))}
                        <div className='w-full totla flex flex-col items-center gap-6'>
                            <div className='w-full flex flex-row items-center justify-between'>
                                <p className='uppercase  font-medium text-[15px] leading-[1.66] text-[#9b9393]'>total</p>
                                <p className='price font-bold text-[15px] leading-[1.66] text-[black]'>
                                    ${totalprice}
                                </p>
                            </div>
                            <button
                            onClick={getNavigateData}
                            className='w-full bg-[#D87D4A] uppercase py-[13px] font-bold tracking-[1px] hover:bg-[#fbaf85]'>checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart




// import { useContext, useState } from "react";
// import {  GlobalState } from "../App";
// import CartItem from "./CartItem";
// import { CartItemType } from "../interfaces";
// import {  useNavigate, useParams } from "react-router-dom";


// const Cart = () => {
//     const context = useContext(GlobalState);
//     if (!context) return null;
//     const { cartItems, setCart } = context;

//     const [removeAll, setRemoveAll] = useState(cartItems.length)
//     const handleRemove = () => {
//         setRemoveAll(cartItems.length = 0)
//     }


//     let totalprice = 0
//     cartItems.map((item) => {
//         totalprice = totalprice + item.price * item.quantity
//     })

//     const navigate = useNavigate();
//     const getNavigateData = () => {
//         if(cartItems.length > 0) {
//             return navigate(
//                 '/checkout',
//                 {
//                     state:
//                         [cartItems,
//                             setCart(false)]
//                 }
//             )
//         }
//     }



//     return (
//         <div className='w-full h-[650px] bg-[#00000081] absolute top-[90px] left-0 right-0 z-20 flex items-center justify-center md:h-[calc(100%-90px)] lg:h-[calc(100%-90px)]'>
//             <div className='cart  absolute  md:right-[89px] z-30 bg-[white] w-[327px] top-6 rounded-[8px] px-[28px] py-[31px] md:w-[377px] lg:right-[140px]'>
//                 <div className='flex flex-col items-center justify-center gap-8'>
//                     <div className=' w-full  flex flex-row justify-between items-center'>
//                         <div className='uppercase font-bold text-[18px] tracking-[1.29px] text-[black]'>cart (<span>{removeAll}</span>)</div>
//                         <button
//                             onClick={() => handleRemove()}
//                             className='font-medium text-[15px] leading-[1.66] text-[#9b9393] underline'>Remove all</button>
//                     </div>

//                     <div className='w-full flex flex-col gap-6'>
//                         {cartItems.map((item: CartItemType) => (
//                             <CartItem
//                             key={item.id}
//                             cartitem={item}

//                             />
//                         ))}
//                         <div className='w-full totla flex flex-col items-center gap-6'>
//                             <div className='w-full flex flex-row items-center justify-between'>
//                                 <p className='uppercase  font-medium text-[15px] leading-[1.66] text-[#9b9393]'>total</p>
//                                 <p className='price font-bold text-[15px] leading-[1.66] text-[black]'>
//                                     ${totalprice}
//                                 </p>
//                             </div>
//                             <button
//                             onClick={getNavigateData}
//                             className='w-full bg-[#D87D4A] uppercase py-[13px] font-bold tracking-[1px] hover:bg-[#fbaf85]'>checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart







