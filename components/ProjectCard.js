import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard (props) {
    return (
      <Link href={props.link}>
        <div className="w-full flex items-center bg-gray-100 cursor-pointer hover:bg-transparent p-2 rounded-md">
          <div className="w-1/3 hover:scale-95 self-start">
            <Image className="rounded-t-lg" src={props.image} height={240} width={400} layout="responsive" />
            <div className="w-full md:h-20 h-14 bg-gray-900 rounded-b-lg flex items-center justify-center">
              <i className={`lni lni-${props.icon} text-3xl text-white`}></i>
            </div>
          </div>
          <div className="w-2/3 flex flex-col px-2">
            <h5 className="spline text-2xl text-gray-900 font-black">{props.name}</h5>
            <div className="flex flex-wrap">
                {
                    props.tech.map((tag, index) => {
                        return <p key={index} className="px-1 mr-1 md:mt-0 mt-1 text-white bg-green-400 rounded-lg hover:scale-105">{tag}</p>
                    })
                }
            </div>
            <p className="spline my-2 text-gray-900">{props.description}</p>
          </div>
        </div>
      </Link>
    )
}  