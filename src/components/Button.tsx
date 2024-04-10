// type ButtonPropsType = {
//     producteName: string;
//     getNavigateData: () => void;
//     singlProduct: IData;
// }


import { IData } from "../interfaces";

type ButtonPropsType = {
    filtredData: IData;
    filtredName: string;
}




const Button = ({filtredData, filtredName}: ButtonPropsType) => {
    console.log(filtredName)



    return (
        <>
            <div

            >
                <button className='uppercase font-bold text-[13px] leading-[1.17] tracking-[1px] py-[15px] px-[30px] bg-[#D87D4A] hover:bg-[#fbaf85]'>See Product</button>
            </div>

        </>


    )
}

export default Button