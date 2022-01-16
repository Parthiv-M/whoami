import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="w-screen md:h-96 bg-white flex items-center">
          <div className="container flex flex-col items-center justify-center mx-auto w-3/4 py-16">
            <h6 className="spline font-bold text-3xl my-4">Reach out to me</h6>
            <div className="grid grid-cols-3 gap-4">
              <Link href="mailto:parthivmenon01@gmail.com">
                <div className="h-16 w-16 flex justify-center items-center p-2 bg-gray-200 rounded-full hover:scale-125 cursor-pointer">
                  <i className="lni lni-envelope text-3xl font-bold text-neutral-500 mx-2"></i>
                </div>
              </Link>
              <Link href="https://instagram.com/_.parthiv_">
                <div className="h-16 w-16 flex justify-center items-center p-2 bg-gray-200 rounded-full hover:scale-125 cursor-pointer">
                  <i className="lni lni-instagram-original text-3xl text-neutral-500 mx-2"></i>
                </div>
              </Link >
              <Link href="https://github.com/Parthiv-M">
                <div className="h-16 w-16 flex justify-center items-center p-2 bg-gray-200 rounded-full hover:scale-125 cursor-pointer">
                  <i className="lni lni-github-original text-3xl text-neutral-500 mx-2"></i>
                </div>
              </Link>
              <Link href="https://linkedin.com/in/parthivmenon">
                <div className="h-16 w-16 flex justify-center items-center p-2 bg-gray-200 rounded-full hover:scale-125 cursor-pointer">
                  <i className="lni lni-linkedin-original text-3xl text-neutral-500 mx-2"></i>
                </div>
              </Link>
              <Link href="https://dribbble.com/theProton">
                <div className="h-16 w-16 flex justify-center items-center p-2 bg-gray-200 rounded-full hover:scale-125 cursor-pointer">
                  <i className="lni lni-dribbble text-3xl font-bold text-neutral-500 mx-2"></i>
                </div>
              </Link>
              <Link href="https://discordapp.com/users/446948320326451201/">
                <div className="h-16 w-16 flex justify-center items-center p-2 bg-gray-200 rounded-full hover:scale-125 cursor-pointer">
                  <i className="lni lni-discord text-3xl font-bold text-neutral-500 mx-2"></i>
                </div>
              </Link>
            </div>
          </div>
        </footer>
    )
}