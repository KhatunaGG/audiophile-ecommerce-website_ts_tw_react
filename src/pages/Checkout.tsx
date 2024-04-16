import { useLocation, useNavigate } from 'react-router-dom'
import { GlobalState } from '../App';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import SummaryCart from '../components/SummaryCart';
import { CheckoutDataType } from '../interfaces';
import { schema } from '../schema';




const Checkout = () => {
  const location = useLocation()
  const [checkBox, setCheckBox] = useState(1)
  const [isChecked, setIsChecked] = useState(false)


  const context = useContext(GlobalState);
  if (!context) return null;

  const [isLogged, setIsLogged] = useState(false)


  const navigate = useNavigate();
  const returnToHome = () => {
    navigate('checkout')
  }


  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutDataType>({
    resolver: yupResolver(schema)
  })


  // const noErrors = Object.keys(errors).length === 0;
  // console.log(noErrors)



  return (
    <>
      <div className="Headphones w-full bg-[black] text-center text-[28px] uppercase font-bold tracking-[2px] pt-[0] pb-[0] absolute t-0 -z-10 left-0 h-[92px]">
      </div>

      <div className='w-full bg-[#F2F2F2] pb-[97px]'>

        <div className='checkout className="w-full px-[6.44%] md:px-[5.20%] lg:px-[11.45%] mx-auto"'>
          <button
            onClick={returnToHome}
            className="mt-4 mb-6 md:mt-[48px] lg:mt-[73px]  text-[black] font-bold hover:text-[#D87D4A]">
            Go Back</button>

          <form
            onSubmit={handleSubmit(() => { })}
            className='flex w-full flex-col items-center gap-8 text-[black] lg:flex lg:flex-row lg: lg:items-start lg:justify-between'>
            <div className='chekout-block w-full rounded-[8px] px-6 py-8 bg-white md:px-[27px] lg:px-[48px] lg:w-[65.76%]' >
              <h2 className='uppercase font-bold text-[28px] tracking-[1px] text-black mb-8 md:mb-[41px] md:text-[32px] md:leading-[1.12] md:tracking-[1.14px] '>checkout</h2>
              <div className='flex flex-col items-center gap-8 md:gap-[53px]'>
                <div className='shipping-info-block w-full'>
                  <h3 className='font-bold text-[13px] leading-[1.92] mb-4 tracking-[0.93px] text-[#D87D4A] uppercase'>billing details</h3>
                  <div className='input-block flex flex-col gap-6'>
                    <div className='flex flex-col gap-6 md:flex-row md:gap-4 '>
                      <div className='input-left md:w-[50%] flex flex-col text-left gap-[9px] relative'>
                        <label className='font-bold text-[12px] tracking-[-0.21px]'>Name</label>
                        <input
                          {...register('name')}
                          className={`border rounded-[8px] text-[14px] font-bold tracking-[-0.25px] py-[18px] pl-6 ${errors.name ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='Alexei Ward' />
                        {errors.name && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px] '>{errors.name.message}</span>}
                      </div>

                      <div className='input-right md:w-[50%] flex flex-col text-left gap-[9px] relative'>
                        <label className='font-bold text-[12px] tracking-[-0.21px]'>Email Address</label>
                        <input
                          {...register('email')}
                          className={`border rounded-[8px] text-[14px] font-bold tracking-[-0.25px] py-[18px] pl-6 ${errors.email ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='alexei@mail.com' />
                        {errors.email && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px]'>{errors.email.message}</span>}
                      </div>

                    </div>

                    <div className='input-down md:w-[50%] flex flex-col text-left gap-[9px] relative'>
                      <label className='font-bold text-[12px] tracking-[-0.21px]'>Phone Number</label>
                      <input
                        {...register('phone')}
                        className={`border rounded-[8px] text-[14px] font-bold  tracking-[-0.25px] py-[18px] pl-6 ${errors.phone ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='+1 202-555-0136' />
                      {errors.phone && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px]'>{errors.phone.message}</span>}
                    </div>
                  </div>
                </div>

                <div className='shipping-info-block w-full'>
                  <h3 className='font-bold text-[13px] leading-[1.92] mb-4 tracking-[0.93px] text-[#D87D4A] uppercase'>shipping info</h3>
                  <div className='input-block w-full flex flex-col gap-6'>
                    <div className='address w-full  flex flex-col text-left gap-[9px] relative'>
                      <label className='font-bold text-[12px] tracking-[-0.21px]'>Address</label>
                      <input
                        {...register('address')}
                        className={`border rounded-[8px] text-[14px] font-bold  tracking-[-0.25px] py-[18px] pl-6 ${errors.address ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='1137 Williams Avenue' />
                      {errors.address && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px]'>{errors.address.message}</span>}
                    </div>
                    <div className='flex flex-col gap-6 md:flex-row md:gap-4 '>
                      <div className='input-left md:w-[50%] flex flex-col text-left gap-[9px] relative'>
                        <label className='font-bold text-[12px] tracking-[-0.21px]'>ZIP Code</label>
                        <input
                          {...register('zip')}
                          className={`border rounded-[8px] text-[14px] font-bold  tracking-[-0.25px] py-[18px] pl-6 ${errors.zip ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='10001' />
                        {errors.zip && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px]'>{errors.zip.message}</span>}
                      </div>
                      <div className='input-right md:w-[50%] flex flex-col text-left gap-[9px] relative'>
                        <label className='font-bold text-[12px] tracking-[-0.21px]'>City</label>
                        <input
                          {...register('city')}
                          className={`border rounded-[8px] text-[14px] font-bold  tracking-[-0.25px] py-[18px] pl-6 ${errors.city ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='New York' />
                        {errors.city && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px]'>{errors.city.message}</span>}
                      </div>
                    </div>
                    <div className='input-down md:w-[50%] flex flex-col text-left gap-[9px] relative'>
                      <label className='font-bold text-[12px] tracking-[-0.21px]'>Country</label>
                      <input
                        {...register('country')}
                        className={`border rounded-[8px] text-[14px] font-bold  tracking-[-0.25px] py-[18px] pl-6 ${errors.country ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='United States' />
                      {errors.country && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px]'>{errors.country.message}</span>}
                    </div>
                  </div>
                </div>

                <div className='w-full flex flex-col'>
                  <h3 className='font-bold text-[13px]  leading-[1.92] mb-4 tracking-[0.93px] text-[#D87D4A] uppercase'>payment details</h3>
                  <div className='shipping-info-block w-full flex flex-col gap-6'>
                    <div className='flex flex-col gap-6 md:flex-row md:gap-4 '>
                      <div className='input-left md:w-[50%] flex flex-col text-left gap-[9px]'>
                        <h3 className='font-bold text-[12px] tracking-[-0.21px]'>Payment Method</h3>
                      </div>
                      <div className='input-right md:w-[50%] flex flex-col text-left gap-[9px]'>
                        <div
                          onClick={() => {
                            setCheckBox(1)
                            if (checkBox === 1) {
                              setIsChecked(!isChecked)
                            }
                          }}
                          className={`${isChecked ? 'border-[1px] border-[#D87D4A]' : ''} w-full h-14 pl-6  rounded-[8px] text-[14px] font-bold cursor-pointer text-black  
                                border-[1px] flex items-center justify-start gap-4 `}>
                          <input
                            {...register('checkMony')}
                            type="checkbox"
                            id=""
                            className={`${isChecked === false && checkBox !== 1 ? '' : isChecked === true && checkBox === 1 ? 'checked' : ''} checkbox w-5 h-5  border-[1px] rounded-full cursor-pointer relative`}
                          />
                          <span className='text-[14px] font-bold  tracking-[-0.25px]'>e-Money</span>
                        </div>
                        <div
                          onClick={() => {
                            setCheckBox(2)
                            if (checkBox === 2) {
                              setIsChecked(!isChecked)
                            }
                          }}
                          className={`${isChecked && checkBox === 2 ? 'border-[1px] border-[#D87D4A]' : ''} 
                           w-full h-14 pl-6  rounded-[8px] text-[14px] font-bold cursor-pointer text-black border-[1px] flex items-center justify-start gap-4 `}>

                          <input
                            {...register('checkDelivery')}
                            type="checkbox"
                            id=""
                            className={`${isChecked === false && checkBox !== 2 ? '' : isChecked === true && checkBox === 2 ? 'checked' : ''} checkbox w-5 h-5  border-[1px] rounded-full cursor-pointer relative`}
                          />
                          <span className='text-[14px] font-bold  tracking-[-0.25px] '>Cash on Delivery</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-col gap-6 md:flex-row md:gap-4 '>
                      <div className='input-left md:w-[50%] flex flex-col text-left gap-[9px] relative'>
                        <label className='font-bold text-[12px] tracking-[-0.21px]'>e-Money Number</label>
                        <input
                          {...register('num')}
                          className={`border rounded-[8px] text-[14px] font-bold  tracking-[-0.25px] py-[18px] pl-6 ${errors.num ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='10001' />
                        {errors.num && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px]'>{errors.num.message}</span>}
                      </div>

                      <div className='input-right md:w-[50%] flex flex-col text-left gap-[9px] relative'>
                        <label className='font-bold text-[12px] tracking-[-0.21px]'>e-Money PIN</label>
                        <input
                          {...register('pin')}
                          className={`border rounded-[8px] text-[14px] font-bold  tracking-[-0.25px] py-[18px] pl-6 ${errors.pin ? 'border-[1px] border-[#CD2C2C]' : 'border-[#CFCFCF] border-[1px]'}`} type="text" placeholder='New York' />
                        {errors.pin && <span className='absolute bottom-[-18px] right-[5px] italic text-[#CD2C2C] font-medium text-[12px] tracking-[-0.21px]'>{errors.pin.message}</span>}
                      </div>
                    </div>
                    {checkBox === 2 &&
                      <div className='w-full  flex flex-row gap-8 items-center mt-[10px]'>
                        <img className='w-[48px] h-[48px]' src="/assets/checkout/icon-cash-on-delivery.svg" alt="" />
                        <p className='text-[13px] font-medium leading-[1.66] text-[#9b9393]'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='summery w-full flex flex-col gap-8 items-start rounded-[8px] px-6 py-8 bg-white md:px-[27px] lg:px-[48px] lg:w-[31.53%] lg:max-w-[612px] lg:justify-between'>
              <h3 className='font-bold text-[18px] tracking-[1.29px] text-black uppercase'>summary</h3>
              <SummaryCart summeryCartItem={location.state[0]} isChecked={isChecked}
                setIsLogged={setIsLogged} isLogged={isLogged}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Checkout