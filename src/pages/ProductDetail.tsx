import { useContext, useState } from "react";
import { GlobalState } from "../App";
import MiniGallery from "../components/MiniGallery";
import HomeDescription from "../components/HomeDescription";
import { useLocation, useNavigate } from "react-router-dom";
import { CartItemType, IData } from "../interfaces";
import LikeGallery from "../components/LikeGallery";
import FeaturesSection from "../components/FeaturesSection";



const ProductDetail = () => {
  const [count, setCount] = useState(0)

  const context = useContext(GlobalState);
  if (!context) return null;
  const { screenWidth, setCartItems, cartItems } = context;

  const location = useLocation()


  const navigate = useNavigate();
  const returnToHome = () => {
    navigate(`/${location.state[0].category}`)
  }


  return (
    <>
      <div className="Headphones w-full bg-[black] text-center text-[28px] uppercase font-bold tracking-[2px] pt-[0] pb-[0] absolute t-0 -z-10 left-0 h-[92px]">
      </div>
      <div className="w-full px-[6.44%] md:px-[5.20%] lg:px-[11.45%] mx-auto">
        <button
          onClick={returnToHome}
          className="mt-4 mb-6 md:mt-[33px] lg:mt-[79px] lg:mb-[56px] text-[black] font-bold hover:text-[#D87D4A]">Go Back</button>

        {location.state.map((item: IData) => (
          <div className="w-full flex flex-col items-center justify-center gap-[120px] text-[#1f1f1f] md:mb-[120px] lg:mb-[160px] ">
            <div className="pageItem w-full h-full flex flex-col gap-[52px]  md:flex-row  lg:flex-row lg:gap-[125px] lg:items-center">


              <div
                className={'image w-full flex items-center justify-center flex-1'}>
                <img
                  src={screenWidth < 768
                    ? item.categoryImage.mobile.slice(1)
                    : screenWidth < 1110 ? item.image.mobile.slice(1)
                      : item.categoryImage.desktop.slice(1)
                  }
                  alt="" className="w-full h-full rounded-[8px]" />
              </div>

              <div className='imageDesc flex-1 flex flex-col lg:gap-8 md:py-[45px]'>
                <div className='lg:w-[379px] text-center md:justify-start lg:text-left'>
                  <h3 className='font-normal text-[14px] leading-[1.19] tracking-[10px] text-[#D87D4A] mb-4'>
                    {item.new === true && 'NEW PRODUCT'}

                  </h3>
                  {/* <h1 className='font-bold text-[28px] leading-[1] tracking-[1px] mb-6  md:leading-[1.14]  text-[black] lg:text-[40px] lg:tracking-[1.43px] lg:leading-[1.1] md:text-left'>
                    {item.name}</h1> */}
                  <h1 className='font-bold text-[28px] leading-[1] tracking-[1px] mb-6  md:leading-[1.14]  text-[black] lg:text-[40px] lg:tracking-[1.43px] lg:leading-[1.1] md:text-left'>
                    {item.name}</h1>

                  <p className='font-normal text-[15px] leading-[1.66] text-[#918b8b] mb-[28px]  lg:px-0 md:text-left'>{item.description}</p>
                </div>

                <div className="counter flex flex-col md:gap-[31px] lg:gap-[47px]">
                  <div className="price font-bold text-[18px] tracking-[1.29px]">$ {item.price}</div>


                  <div className="flex flex-row items-center gap-4 md:w-full ">

                    <div className="count-block flex flex-row  gap-[35px]  py-[15px] px-[13px] bg-[#F1F1F1]">
                      <span
                        onClick={() => setCount(count === 0 ? count : count - 1)}
                        className="font-bold text-[13px] pr-[5px] tracking-[1px] text-black cursor-pointer ">-</span>
                      <span className="font-bold text-[13px] w-4  tracking-[1px] text-black cursor-pointer flex items-center justify-center">
                        {count}</span>
                      <span
                        onClick={() => setCount((prev) => prev + 1)}
                        className="font-bold text-[13px] pl-[5px] tracking-[1px] text-black cursor-pointer ">+</span>
                    </div>

                    <button
                      onClick={() => {
                        let cartItem: CartItemType = {
                          id: item.id,
                          price: item.price,
                          img: item.categoryImage.mobile,
                          quantity: count,
                          totalPrice: count * item.price,
                          cartItemName: item.name
                        }
                        if (count > 0) {
                          setCartItems([...cartItems, cartItem])
                        }
                      }}
                      className="uppercase bg-[#D87D4A] hover:bg-[#fbaf85] px-[33px] py-[15px] text-white font-bold text-[13px] tracking-[1px">
                      ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
            <FeaturesSection
              features={item.features}
              includes={item.includes}
            />
            <div className="pictures-3 flex flex-col md:flex-row gap-8">
              <div className="flex flex-col md:w-[40.14%] gap-8">
                <img className="rounded-[8px]    " src={item.gallery.second.desktop.slice(1)} alt="" />
                <img className=" rounded-[8px]  " src={item.gallery.first.desktop.slice(1)} alt="" />
              </div>
              <img className="third  rounded-[8px] md:w-[57.24%]  " src={item.gallery.third.desktop.slice(1)} alt="" />
            </div>
            <LikeGallery
              others={item.others}
            />
          </div>
        ))}
        <div className="mb-[120px]">
          <MiniGallery />
        </div>
        <HomeDescription />
      </div>
    </>
  )
}

export default ProductDetail