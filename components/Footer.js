import Link from 'next/link'
import { socialData } from "./../utils/constants" 

export default function Footer() {

  return (
      <footer className="w-screen bg-white flex flex-col justify-center">
        <div className="container flex flex-col items-center justify-center mx-auto w-3/4 py-16">
          <h6 className="spline font-bold md:text-3xl text-2xl my-4">Reach out to me</h6>
          <div className="grid grid-cols-3 gap-4">
            {
              socialData.map((data, index) => {
                return (
                  <Link href={`${data.link}`} key={index}>
                    <div className="md:h-16 md:w-16 h-12 w-12 flex justify-center items-center p-2 bg-gray-200 rounded-full hover:scale-125 cursor-pointer">
                      <i className={`lni lni-${data.icon} md:text-3xl text-xl text-neutral-500 mx-2`}></i>
                    </div>
                  </Link>
                )
              })  
            }
          </div>
        </div>
        <div className="md:w-1/5 w-full md:px-0 px-6 my-2 mx-auto flex text-gray-400 justify-between">
            <Link href="/websites">Websites</Link>
            <p>|</p>
            <Link href="/writing">Writing</Link>
            <p>|</p>
            <Link href="/design">Design</Link>
            <p>|</p>
            <Link href="/artwork">Artwork</Link>
        </div>
        <p className="mx-auto my-4 text-gray-400">ⓒ Parthiv Menon • 2022</p>
      </footer>
  )
}