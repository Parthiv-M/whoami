import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion" 

export default function Designs() {

  const variants = {
    hidden: { opacity: 0, x: 0, y: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <div 
      className="w-screen min-h-screen flex items-center overflow-x-hidden md:px-16 px-4" 
      style={{ 
        backgroundImage: "url('/assets/orange.png')", 
        backgroundSize: "cover", 
        backgroundPosition: "fixed" 
      }}
    >
      <Head>
        <title>Parthiv Menon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main 
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'spring' }}
        className="text-white md:text-left text-center spline md:w-3/5 w-full"
      >
        <h3 className="font-black md:text-6xl text-4xl">YAY, glad you clicked!</h3>
        <h5 className="my-3 font-bold md:text-4xl text-2xl text-orange-300">I'm putting together the design page <span className="border-b-8 border-orange-400">SOON!</span></h5>
        <Link href="/">
            <p className="w-36 text-center px-5 py-3 md:my-2 md:m-0 mx-auto my-6 text-xl text-orange-900 spline font-bold border-4 border-orange-800 rounded-lg cursor-pointer hover:translate-y-2 duration-500">GO BACK</p>
        </Link>
      </motion.main>
    </div>
  )
}