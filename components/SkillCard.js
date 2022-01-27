import Image from "next/image"

export default function SkillCard (props) {
    return (
        <div className={`md:w-96 w-full py-8 grid grid-cols-3 items-center text-white md:order-${props.morder} order-${props.order} hover:border-neutral-800 hover:border-2 hover:shadow-xl cursor-pointer rounded-lg`}>
            {
                props.isCustom 
                ?
                <div className="mx-auto md:w-12 w-10 flex justify-center items-center">
                    <img src={props.iconPath}/> 
                </div>
                :
                <i className={`lni lni-${props.icon} md:text-6xl text-5xl text-center`}></i>
            }
            <div className="col-span-2 px-2 spline"> 
                <p className="md:text-lg text-sm">{props.text}</p>
            </div>
        </div>
    )
}