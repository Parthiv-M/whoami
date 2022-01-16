import Head from 'next/head'
import Link from 'next/link'

export default function Writing() {
  return (
    <div 
        className="w-screen min-h-screen bg-indigo-500 flex items-center overflow-x-hidden md:px-16 px-4"
        style={{ 
            backgroundImage: "url('/assets/indigo.png')", 
            backgroundSize: "cover", 
            backgroundPosition: "fixed" 
        }}
    >
      <Head>
        <title>Parthiv Menon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-white md:text-left text-center spline md:w-3/5 w-full">
        <h3 className="font-black md:text-6xl text-4xl">YAY, glad you clicked!</h3>
        <h5 className="my-3 font-bold md:text-4xl text-2xl text-indigo-900">I'm putting together the writings page <span className="border-b-8 border-indigo-800">SOON!</span></h5>
        <Link href="/">
            <p className="w-36 text-center px-5 py-3 md:my-2 md:m-0 mx-auto my-6 text-xl text-indigo-900 spline font-bold border-4 border-indigo-800 rounded-lg cursor-pointer hover:translate-y-2 duration-500">GO BACK</p>
        </Link>
      </div>
    </div>
  )
}