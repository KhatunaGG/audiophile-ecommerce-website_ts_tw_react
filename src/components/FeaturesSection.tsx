import { FeaturesSectionPropsType } from "../interfaces"



const FeaturesSection = ({features, includes}: FeaturesSectionPropsType) => {
    return (
        <div className="features w-full flex flex-col gap-[88px] lg:flex-row lg:gap-[11.26%] md:gap-[120px] ">
            <div className="lg:w-[57.20%] flex flex-col gap-8">
                <h2 className="uppercase font-bold text-[black] text-4xl leading-[1.25] traking-[1.14px]">FEATURES</h2>
                <p className="font-medium text-[15px] leading-[1.66] text-[#9b9393]">{features}</p>
            </div>
            <div className="includes  lg:w-[31.53%] flex flex-col gap-8 md:flex-row lg:flex-col">
                <h2 className="uppercase font-bold text-[black] text-4xl leading-[1.25] traking-[1.14px] md:flex-1 lg:flex-none">in the box</h2>
                <ul className="md:flex-1 lg:flex-none">
                    {includes.map((item, i) => (
                        <div key={i} className="flex flex-row items-center justify-start gap-6">
                            <li className="font-bold text-[15px] leading-[1.66] text-[#D87D4A]">{item.quantity}x</li>
                            <li className="font-medium text-[15px] leading-[1.66] text-[#9b9393]">{item.item}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FeaturesSection