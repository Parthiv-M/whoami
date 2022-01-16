import Image from 'next/image'
import Link from 'next/link'

export default function WebCard (props) {
    return (
        <div className="flex flex-col web-card hover:-translate-y-2">
          <div className="border-0 shadow-xl">
            <Image src={props.image} className="rounded-xl" height={300} width={450} layout="responsive" objectFit="cover" />
          </div>
          <div className="bg-gray-900 w-full flex flex-col items-center rounded-xl -my-8 py-4 z-20">
            <h5 className="spline text-white text-2xl">{props.name}</h5>
            <a href={props.link} target="_blank" className="spline text-pink-500 hover:underline">{props.link}</a>
            <div className="flex my-2 h-14 w-48 py-1 bg-gray-800 shadow-xl rounded-2xl">
              <div className="w-1/2 flex justify-center items-center border-r-2 border-gray-900">
                <p className="text-gray-500 hover:text-pink-200">{props.year}</p>
              </div>
              <Link href={props.link}>
                <div className="w-1/2 flex justify-center items-center cursor-pointer">
                    <i className="lni lni-world text-gray-500 hover:text-pink-500 hover:scale-125 text-2xl"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
    )
}