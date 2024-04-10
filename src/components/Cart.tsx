// import { useContext, useState } from "react";
// import { GlobalState } from "../App";


// const Cart = () => {

//     const context = useContext(GlobalState);
//     if (!context) return null;
//     const { cartItems } = context;
//     console.log(cartItems)


//     const [removeAll, setRemoveAll] = useState(cartItems.length)
//     const handleRemove = () => {
//         setRemoveAll(cartItems.length = 0)
//     }




//     let totalprice = 0
//     cartItems.map((item) => {
//         totalprice = totalprice + item.price * item.quantity
//     })





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

//                         {cartItems.map((item) => (
//                             <div key={item.id} className='flex flex-row items-center justify-between gap-4 '>
//                                 {/* <img className='w-[64px] h-[64px] rounded-[8px]' src={item.cartImg} alt="" /> */}
//                                 <img className='w-[64px] h-[64px] rounded-[8px]' src={item.img.slice(1)} alt="" />
//                                 <div className='text-[black] text-left  w-[62%]'>
//                                     <p className='text-[15px] leading-[1.66] font-bold text-[black]'>{item.cartItemName}</p>
//                                     <p className='text-[15px] leading-[1.66] text-[#9b9393] font-medium'>$ {item.totalPrice}</p>
//                                 </div>

//                                 <div className="count-block flex flex-row   bg-[#F1F1F1] text-left">
//                                     <span

//                                         className="font-bold text-[13px] px-[15px] py-[3px] tracking-[1px] text-black cursor-pointer ">-</span>
//                                     <span className="font-bold text-[13px] py-[3px]  tracking-[1px] text-black cursor-pointer ">{item.quantity}</span>
//                                     <span




//                                         className="font-bold text-[13px] px-[15px] py-[3px] tracking-[1px] text-black cursor-pointer ">+</span>
//                                 </div>

//                                 {/* <Counter
//                                 minusCount={minusCount}
//                                 plusCount={plusCount}
//                                 count={count}
//                                 // totalprice={totalprice}
//                             /> */}

//                             </div>
//                         ))}





//                         <div className='w-full totla flex flex-col items-center gap-6'>
//                             <div className='w-full flex flex-row items-center justify-between'>
//                                 <p className='uppercase  font-medium text-[15px] leading-[1.66] text-[#9b9393]'>total</p>
//                                 <p className='price font-bold text-[15px] leading-[1.66] text-[black]'>
//                                    ${totalprice}
//                                 </p>
//                             </div>
//                             <button className='w-full bg-[#D87D4A] uppercase py-[13px] font-bold tracking-[1px]'>checkout</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart



import { useContext, useState } from "react";
import {  GlobalState } from "../App";
import CartItem from "./CartItem";
import { CartItemType } from "../interfaces";


const Cart = () => {

    const context = useContext(GlobalState);
    if (!context) return null;
    const { cartItems } = context;



    const [removeAll, setRemoveAll] = useState(cartItems.length)
    const handleRemove = () => {
        setRemoveAll(cartItems.length = 0)
    }


    let totalprice = 0
    cartItems.map((item) => {
        totalprice = totalprice + item.price * item.quantity
    })


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
                            // <div key={item.id} className='flex flex-row items-center justify-between gap-4 '>
                            //     {/* <img className='w-[64px] h-[64px] rounded-[8px]' src={item.cartImg} alt="" /> */}
                            //     <img className='w-[64px] h-[64px] rounded-[8px]' src={item.img.slice(1)} alt="" />
                            //     <div className='text-[black] text-left  w-[62%]'>
                            //         <p className='text-[15px] leading-[1.66] font-bold text-[black]'>{item.cartItemName}</p>
                            //         <p className='text-[15px] leading-[1.66] text-[#9b9393] font-medium'>$ {item.totalPrice}</p>
                            //     </div>

                            //     <div className="count-block flex flex-row   bg-[#F1F1F1] text-left">
                            //         <span

                            //             className="font-bold text-[13px] px-[15px] py-[3px] tracking-[1px] text-black cursor-pointer ">-</span>
                            //         <span className="font-bold text-[13px] py-[3px]  tracking-[1px] text-black cursor-pointer ">{item.quantity}</span>


                            //         <span

                            //             onClick={() => increase(item)}




                            //             className="font-bold text-[13px] px-[15px] py-[3px] tracking-[1px] text-black cursor-pointer ">+</span>
                            //     </div>

                            //     {/* <Counter
                            //     minusCount={minusCount}
                            //     plusCount={plusCount}
                            //     count={count}
                            //     // totalprice={totalprice}
                            // /> */}

                            // </div>

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
                            <button className='w-full bg-[#D87D4A] uppercase py-[13px] font-bold tracking-[1px]'>checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart





