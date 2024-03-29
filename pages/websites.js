import Head from 'next/head'

import WebCard from "./../components/WebCard"

import { motion } from "framer-motion"

export default function Websites() {
  
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <div className="w-screen flex flex-col items-center min-h-screen overflow-x-hidden">
      <Head>
        <title>Parthiv Menon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants} 
        className="w-screen flex items-end bg-gray-900 pass-header"
      >
        <div className="h-96 w-96 md:block hidden absolute top-10 -m-32 rotate-45 rounded-b-xl bg-purple-500 opacity-20"></div>
        <div className="h-96 w-52 absolute top-20 md:-m-32 -m-16 md:right-0 rotate-45 rounded-xl bg-red-500 opacity-70"></div>
        <div className="h-96 w-52 absolute top-40 md:-m-32 -m-16 md:right-0 rotate-45 rounded-xl bg-orange-400 opacity-10"></div>
        <div className="h-52 w-52 md:block hidden absolute top-40 left-40 rotate-45 rounded-full bg-blue-700 opacity-80 hover:animate-ping"></div>
        <div className="h-16 w-16 absolute top-40 left-40 mx-32 rotate-45 rounded-full bg-yellow-500 animate-bounce"></div>
        <div className="w-full flex flex-col md:justify-end justify-center md:p-20 p-6 z-20">
            <h2 className="text-white spline font-bold md:text-7xl text-5xl">
                Websites
            </h2>
            <p className="text-white md:text-xl text-lg">I am a <span className="text-cyan-400">Full Stack Developer</span> and I love the art of putting together websites from scratch</p>
        </div>
      </motion.main>

      <div className="bg-gray-200 w-full py-16 md:px-20 px-8">
        <h4 className="spline text-3xl text-gray-500 font-bold md:text-left text-center">Tech Stack</h4>
        <div className="flex flex-wrap my-3 md:justify-start justify-center">
          {
            [
              {icon: "html5", isCustom: false}, 
              {icon: "css3", isCustom: false},
              {icon: "javascript", isCustom: false},
              {icon: "nodejs", isCustom: false},
              {icon: "/assets/icons/mongo.svg", isCustom: true},
              {icon: "react", isCustom: false},
              {icon: "bootstrap", isCustom: false},
              {icon: "aws", isCustom: false}
            ].map((stack, index) => {
              return (
                stack.isCustom 
                ?
                <div className="w-12 mx-2 md:my-0 my-2 cursor-pointer hover:scale-105" key={index}>
                  <img src={stack.icon} /> 
                </div>
                :
                <i key={index} className={`lni lni-${stack.icon} text-5xl mx-2 md:my-0 my-2 cursor-pointer hover:scale-105`}></i>
              )
            })
          }
        </div>
      </div>

      <div className="w-full md:px-20 px-8 pb-8">
        <div className="mx-auto my-8 py-8">
          <p className="text-gray-400 text-center md:text-xl">These are websites I have built, some alone and some as part of a team</p>
        </div>
        <div className="container mx-auto w-full grid md:grid-cols-3 grid-cols-1 gap-2">
          <WebCard 
            name="News Website"
            link="http://ourheadlines.herokuapp.com"
            image="https://ik.imagekit.io/vk9h2knt4xe/Websites/news.png?updatedAt=1641900786148"
            year="2020"
          />
          <WebCard 
            name="MIST Events Portal"
            link="https://events.wearemist.in"
            image="https://ik.imagekit.io/vk9h2knt4xe/Websites/events.png?updatedAt=1641900799874"
            year="2021"
          />
          <WebCard 
            name="The Faceless Website"
            link="https://faceless.wearemist.in"
            image="https://ik.imagekit.io/vk9h2knt4xe/Websites/faceless.png?updatedAt=1641900799874"
            year="2021"
          />
          <WebCard 
            name="The Entrepreneurship Cell"
            link="https://ecellmit.com"
            image="https://ik.imagekit.io/vk9h2knt4xe/Websites/ecell.png?updatedAt=1641900799874"
            year="2021"
          />
          <WebCard 
            name="BookSpeak"
            link="https://bookspeak.parthivmenon.com"
            image="https://ik.imagekit.io/vk9h2knt4xe/Websites/quotes.png?updatedAt=1641900799874"
            year="2021"
          />
          <WebCard 
            name="Team Manipal Racing"
            link="https://teammanipalracing.in"
            image="https://ik.imagekit.io/vk9h2knt4xe/Websites/tmr.png?updatedAt=1641901432404"
            year="2021"
          />
        </div>
      </div>
    </div>
  )
}