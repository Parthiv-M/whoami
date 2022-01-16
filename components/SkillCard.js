import Image from "next/image"

export default function SkillCard (props) {
    return (
        <div className={`w-96 py-8 grid grid-cols-3 items-center text-white md:order-${props.morder} order-${props.order} hover:border-neutral-800 hover:border-2 hover:shadow-xl cursor-pointer rounded-lg`}>
            {
                props.isCustom 
                ?
                <div className="mx-auto w-12 flex justify-center items-center">
                    <img src={props.iconPath}/> 
                </div>
                :
                <i className={`lni lni-${props.icon} text-6xl text-center`}></i>
            }
            <div className="col-span-2 px-2 spline">
              I am a keen observer and a fast learner, willing to pick up anything 
              that interests me
            </div>
        </div>
    )
}