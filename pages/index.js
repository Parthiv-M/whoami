import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'

import { motion } from "framer-motion"

export default function Home() {

  const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden md:px-8">
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
        className="w-full min-h-screen flex justify-center items-center"
      >
        <div className="w-4/5 h-96 bg-gray-100 flex md:flex-row flex-col md:justify-between justify-end items-center md:px-20 px-12 md:py-14 py-20">
          <div className="md:flex hidden z-20">
            <div className="flex flex-col mx-4">
              <p className="text-2xl spline font-bold text-gray-300">Web Developer</p>
              <p className="text-2xl spline font-bold text-gray-300">Web Developer</p>
              <Link href="/websites">
                <p className="text-2xl spline font-bold text-cyan-400 cursor-pointer hover:-translate-x-1 duration-100">Web Developer</p>
              </Link>
              <p className="text-2xl spline font-bold text-gray-300">Web Developer</p>
              <p className="text-2xl spline font-bold text-gray-300">Web Developer</p>
              <p className="text-2xl spline font-bold text-gray-300">Web Developer</p>
              <p className="text-2xl spline font-bold text-gray-300">Web Developer</p>
            </div>
            <div className="flex flex-col mx-4">
              <p className="text-2xl spline font-bold text-gray-300">Designer</p>
              <p className="text-2xl spline font-bold text-gray-300">Designer</p>
              <p className="text-2xl spline font-bold text-gray-300">Designer</p>
              <p className="text-2xl spline font-bold text-gray-300">Designer</p>
              <Link href="/design">
                <p className="text-2xl spline font-bold text-orange-500 cursor-pointer hover:translate-y-1 duration-100">Designer</p>
              </Link>
              <p className="text-2xl spline font-bold text-gray-300">Designer</p>
            </div>
            <div className="flex flex-col mx-4">
              <Link href="/writing">
                <p className="text-2xl spline font-bold text-indigo-500 cursor-pointer hover:-translate-y-1 duration-100">Creative Writer</p>
              </Link>
              <p className="text-2xl spline font-bold text-gray-300">Creative Writer</p>
              <p className="text-2xl spline font-bold text-gray-300">Creative Writer</p>
              <p className="text-2xl spline font-bold text-gray-300">Creative Writer</p>
              <p className="text-2xl spline font-bold text-gray-300">Creative Writer</p>
              <p className="text-2xl spline font-bold text-gray-300">Creative Writer</p>
              <p className="text-2xl spline font-bold text-gray-300">Creative Writer</p>
            </div>
            <div className="flex flex-col mx-4">
              <p className="text-2xl spline font-bold text-gray-300">Artist</p>
              <p className="text-2xl spline font-bold text-gray-300">Artist</p>
              <p className="text-2xl spline font-bold text-gray-300">Artist</p>
              <Link href="/artwork">
                <p className="text-2xl spline font-bold text-pink-500 cursor-pointer hover:translate-x-1 duration-100">Artist</p>
              </Link>
              <p className="text-2xl spline font-bold text-gray-300">Artist</p>
            </div>
          </div>
          <div className="text-right self-end">
            <p className="spline text-3xl my-4 tracking-widest text-left">I AM</p>
            <p className="spline md:text-8xl text-5xl font-bold">
              Parthiv
            </p>
            <p className="spline md:text-7xl text-4xl font-bold">
              Menon
            </p>
          </div>
        </div>
        <div className="w-full min-h-screen overflow-x-hidden absolute bottom-0">
          <div className="w-screen h-screen flex flex-col justify-end items-end">
            <div className="md:w-96 w-48 bottom-0 justify-self-end self-end" style={{ height: "fit-content" }}>
              <Image src="/assets/parthiv.png" width={200} height={300} layout="responsive" />
            </div>
          </div>
        </div>
      </motion.main>
      
      <div className="h-40 bg-black w-screen flex justify-center items-center">
        <i className="lni lni-basketball text-white mx-1 text-2xl animate-bounce"></i>
        <h4 className="text-white spline text-2xl lob mx-1">A bit more about me down here</h4>
      </div>

      <div className="w-screen min-h-screen bg-neutral-900">
        <div className="container my-12 p-4 mx-auto flex md:flex-row flex-col md:justify-center items-start md:items-center">
          <div className="md:w-1/3 w-full text-left md:px-0 px-1">
            <h2 className="md:text-7xl text-5xl spline font-bold text-white"><span className="text-green-400">Who</span> Am I?</h2>
          </div>
          <div className="md:w-2/3 w-full md:my-0 my-4">
            <p className="md:px-8 px-2 md:text-xl text-md text-gray-100 spline">
              I am Parthiv, a 20 year old living in Kerala. I had a childhood filled with a generous mix of at least four languages. Consequently, when I 
              am not immersed in some book or the other, I muse quietly about the plethora of reasons that make people tick. I absolutely love traveling—the 
              journey being more important than the destination. I'm passionate about anything that involves creativity and am enthusiastic about working on 
              any project or idea that can get me thinking. A big fan of Sherlock Holmes, I am a keen observer and a fast learner, willing to pick up anything 
              that interests me, which, more often than not, happens to be everything. Also, I love puns...especially ones that are pun-ishingly bad.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:px-0 px-4 py-4">
          <div className="container md:my-4 md:p-4 mx-auto flex md:flex-row flex-col justify-center items-center md:order-1 order-2">
            <SkillCard icon="html5" isCustom={false} name="Javascript" text="Markup with HTML was probably one of the first tech things I ever learnt" mdorder={1} order={1}/>
            <SkillCard icon="css3" isCustom={false} name="HTML" text="Hand in hand with HTML, I learnt the art of styling my markup with CSS" mdorder={2} order={2}/>
            <SkillCard icon="javascript" isCustom={false} name="CSS" text="Interactivity, more complex code, and a lot of fun came with learning JavaScript" mdorder={3} order={3}/>
          </div>
          <div className="container md:my-4 md:p-4 mx-auto flex md:flex-row flex-col justify-center items-center md:order-2 order-1">
            <SkillCard icon="java" isCustom={false} name="Java" text="Java is what I prefer when I need to code at times when I am not doing development work" mdorder={1} order={2}/>
            <div className="md:w-96 w-full py-8 px-2 flex md:justify-center justify-start items-center md:order-2 order-1">
              <div className="md:text-6xl text-4xl spline font-bold">
                <span className="text-white">My</span> <span className="text-green-400">Skills</span>
              </div>
            </div>
            <SkillCard icon="python" isCustom={false} name="Python" text="Forays into data science, research and scripting made me failiar with Python" mdorder={3} order={3}/>
          </div>
          <div className="container md:my-4 md:p-4 mx-auto flex md:flex-row flex-col justify-center items-center md:order-3 order-3">
            <SkillCard icon="nodejs" isCustom={false} name="NodeJS" text="NodeJS became the go-to for almost any project that involved Javascript" mdorder={1} order={1}/>
            <SkillCard iconPath="/assets/icons/ux.svg" isCustom={true} name="UI/UX" text="Clean design and an aesthetic outlook towards everything I did helped hone my UI/UX skills" mdorder={2} order={2}/>
            <SkillCard iconPath="/assets/icons/flutter.svg" isCustom={true} name="Flutter" text="Cross platform app development became easier with Flutter and Dart to help me" mdorder={3} order={3}/>  
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen w-screen">
        <div className="container my-12 p-4 mx-auto">
          <h2 className="md:text-7xl text-4xl text-left spline font-bold text-neutral-900">My <span className="text-green-400">Projects</span></h2>
          <div className="container w-full grid md:grid-cols-3 grid-cols-1 gap-2 my-8">
            <ProjectCard 
              image="https://ik.imagekit.io/vk9h2knt4xe/Projects/seashell_QiZoxZffQ?updatedAt=1641928871296"
              name="Sea Shell"
              tech={["Python", "Linux", "OS"]}
              icon="github-original"
              link="https://github.com/Parthiv-M/sea-shell"
              description="A custom Lost at Sea themed Linux shell that contains several default Linux commands as well as a few custom commands"
            />
            <ProjectCard 
              image="https://ik.imagekit.io/vk9h2knt4xe/Projects/handouter_GMo7DB5uzBr?updatedAt=1641928750985"
              name="Handouter"
              tech={["Handlebars", "Nodemailer", "HBS"]}
              icon="github-original"
              link="https://github.com/Parthiv-M/the-hand-outer"
              description="A hand-outer application that does what it claims—hand out newsletters in this case"
            />
            <ProjectCard 
              image="https://ik.imagekit.io/vk9h2knt4xe/Projects/tcp_Y1j47ou4lbC?updatedAt=1641929003378"
              name="TCP Flag Filter"
              tech={["Python", "Networking", "TCP/IP"]}
              link="https://github.com/Parthiv-M/tcp-flag-filter"
              icon="github-original"
              description="A simple command line application that lets a user obtain information about packets filtered according to any of the TCP header flags"
            />
            <ProjectCard 
              image="https://ik.imagekit.io/vk9h2knt4xe/Projects/cli_AlCOGul9b?updatedAt=1641929003010"
              name="CLI Portfolio"
              tech={["NPM Package", "CLI", "Ink"]}
              icon="npm"
              link="https://www.npmjs.com/package/cli-parthiv"
              description="A Command Line Interface Portfolio built with Ink."
            />
            <ProjectCard 
              image="https://ik.imagekit.io/vk9h2knt4xe/Projects/dotfood_3Zuz6eIU40t?updatedAt=1641929118771"
              name="Dotfood"
              tech={["Startup", "Android", "ReactJS", "Firebase"]}
              icon="play-store"
              link="https://play.google.com/store/apps/details?id=com.dot.food&hl=en_IN&gl=US"
              description="Co-founder of a startup that dealt with delivery of food to hostels within the MIT campus with the help of a mobile app"
            />
          </div>
          <h2 className="md:text-5xl text-3xl md:text-left text-center spline font-bold text-green-400 border-b-8 border-b-green-400" style={{ width: "fit-content" }}>Research</h2>
          <div className="flex my-4 md:flex-row flex-col justify-center items-center">
            <div className="md:w-2/5 w-full">
              <div className="w-full border-2">
                <Image src="https://ik.imagekit.io/vk9h2knt4xe/Projects/IEEE_iWmhg29va.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642355891699" height={200} width={300} layout="responsive"/>
              </div>
            </div>
            <div className="md:w-3/5 w-full flex flex-col md:p-4 p-1">
              <h4 className="text-neutral-900 md:text-3xl text-xl spline font-black">
                Building a Calendar of Events Database by Analyzing Financial Spikes
              </h4>
              <div className="flex flex-wrap my-2">
                {
                    ["Python", "Beautiful Soup"].map((tag, index) => {
                        return <p key={index} className="px-2 mr-1 md:mt-0 mt-1 text-lg text-white bg-green-400 rounded-lg cursor-pointer hover:scale-105">{tag}</p>
                    })
                }
              </div>
              <h6 className="text-neutral-800 text-xl">
                I am the fourth author of the research paper titled <strong> Building a Calendar of Events Database by Analyzing Financial Spikes</strong>. It dealt with <em>events</em>, 
                defined as pieces of news that triggered a change in stock prices. The objective of my portion of the whole project was to collect relevant news 
                data from multiple news websites, clean the data, and create a usable database out of it. I also performed sentiment analysis on the collected data 
                to determine the effect the news would have on the stock price of particular companies. The paper eventually got published in IEEE Access.  
              </h6>
              <div className="flex my-2">
                <Link href="https://github.com/Parthiv-M/scraper">
                  <div className="md:px-4 px-3 md:py-2 py-1 mr-1 flex items-center text-xl text-gray-600 border-2 border-gray-500 rounded-sm hover:bg-gray-800 hover:text-white hover:border-gray-800 cursor-pointer">
                    <i className="lni lni-github-original mx-1"></i>
                    <p>GitHub</p>
                  </div>
                </Link>
                <Link href="https://ieeexplore.ieee.org/document/9505602">
                  <div className="md:px-4 px-3 md:py-2 py-1 ml-1 flex items-center text-xl text-gray-600 border-2 border-gray-500 rounded-sm hover:bg-gray-800 hover:text-white hover:border-gray-800 cursor-pointer">
                    <i className="lni lni-book mx-1 font-bold"></i>
                    <p>IEEE Access</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black w-screen">
        <div className="container md:w-1/2 my-12 p-4 mx-auto flex flex-col justify-center items-center">
          <h5 className="text-white spline text-2xl text-center font-bold md:px-0 px-2">When I am not making puns, I work on my other passions</h5>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-3 md:w-3/4 w-full h-2/3 my-4 py-4 md:px-0 px-2">
            <Link href="/websites">
              <button className="bg-transparent py-2 text-cyan-500 border-2 border-cyan-500 rounded-lg spline font-bold text-2xl hover:bg-cyan-500 hover:text-white">Websites</button>
            </Link>
            <Link href="/design">
              <button className="bg-transparent py-2 text-orange-500 border-2 border-orange-500 rounded-lg spline font-bold text-2xl hover:bg-orange-500 hover:text-white">Designs</button>
            </Link>
            <Link href="/writing">
              <button className="bg-transparent py-2 text-indigo-500 border-2 border-indigo-500 rounded-lg spline font-bold text-2xl hover:bg-indigo-500 hover:text-white">Writing</button>
            </Link>
            <Link href="/artwork">
              <button className="bg-transparent py-2 text-pink-500 border-2 border-pink-500 rounded-lg spline font-bold text-2xl hover:bg-pink-500 hover:text-white">Artwork</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-screen min-h-screen bg-neutral-900">
        <div className="container my-12 p-4 mx-auto">
          <h2 className="md:text-7xl text-4xl text-left spline font-bold text-white">My <span className="text-green-400">Certificates</span></h2>
          <div className="container grid md:grid-cols-2 grid-cols-1 gap-3 w-full my-4">
              <div className="w-full grayscale hover:grayscale-0">
                <Image src="https://ik.imagekit.io/vk9h2knt4xe/Certificates/telangana_N_k_QSymC" height={200} width={300} layout="responsive" />
              </div>
              <div className="flex flex-col">
                <div className="w-full grayscale hover:grayscale-0">
                  <Image src="https://ik.imagekit.io/vk9h2knt4xe/Certificates/vizag_U9rvBQ8KL" height={200} width={300} layout="responsive" />
                </div>
              </div>
          </div>
          <div className="container grid md:grid-cols-2 grid-cols-1 gap-3 w-full my-4">
            <div className="flex flex-col">
              <div className="w-full grayscale hover:grayscale-0">
                <Image src="https://ik.imagekit.io/vk9h2knt4xe/Certificates/ml_eegA49gYnt6F?updatedAt=1641926653429" height={200} width={300} layout="responsive" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full grayscale hover:grayscale-0">
                <Image src="https://ik.imagekit.io/vk9h2knt4xe/Certificates/manipalhack_fB_3FDPwz?updatedAt=1641926648703" height={200} width={300} layout="responsive" />
              </div>
            </div>
          </div>
          <div className="container grid md:grid-cols-4 grid-cols-2 gap-3 w-full my-4">
            <div className="flex flex-col">
              <div className="w-full grayscale hover:grayscale-0">
                <Image src="https://ik.imagekit.io/vk9h2knt4xe/Certificates/Coursera_QP3T2RDXUYSA_page-0001_rBnnnrAvA.jpg?updatedAt=1641929593840" height={200} width={300} layout="responsive" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full grayscale hover:grayscale-0">
                <Image src="https://ik.imagekit.io/vk9h2knt4xe/Certificates/Coursera_C8YA7UCTUDRX_page-0001_ck41i4Qnn.jpg?updatedAt=1641929592760" height={200} width={300} layout="responsive" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full grayscale hover:grayscale-0">
                <Image src="https://ik.imagekit.io/vk9h2knt4xe/Certificates/Coursera_4UBXFELURD97_page-0001_v9WWvP2Vv9k.jpg?updatedAt=1641929591318" height={200} width={300} layout="responsive" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full grayscale hover:grayscale-0">
                <Image src="https://ik.imagekit.io/vk9h2knt4xe/Certificates/Coursera_56BV8Q3KGAKT_page-0001_hJ2ZmF0aT.jpg?updatedAt=1641929589864" height={200} width={300} layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
