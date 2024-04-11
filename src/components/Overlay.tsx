
// type OverLayPropsType = {
//     activeProductPage: string;
//     setSidebar: (volue: boolean) => void;
//   }
  

import MiniGallery from "./MiniGallery";

  
  
  const Overlay = () => {
    return (
  
      <div className="overlay w-screen  h-screen  bg-[#00000071] pb-[1000px] md:pb-0 absolute z-30 top-[92px] left-0 right-0">
  
        <div className=' w-screen bg-[white]  rounded-b-[8px]  absolute z-40 '>
          <div className="px-[6.44%] md:px-[5.20%] py-10 mt-10 md:mt-[45px] md:mb-[40px]">
            <MiniGallery />
          </div>
        </div>
      </div>
  
  
    )
  }
  
  export default Overlay