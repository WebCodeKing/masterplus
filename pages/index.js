import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full h-[full] flex items-center justify-center">
        <Image
          src="/home/hero-section.png"
          width={1920}
          height={1080}
          className="h-[100vh]"
          alt="Home Page Image"
          priority
        />
        <div className="hidden md:block absolute text-center text-white md:mb-[50vh] bg-black/40 p-[25px] rounded-xl mt-[150px]">
          <h1 className="text-[45px] font-bold z-10">Master Plus</h1>
          <p className="text-[22px] mt-3 max-w-[50vw] mx-auto">
            Ensuring seamless flow and long-lasting performance with premium-grade PVC pipes, trusted by professionals.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <section className="bg-white dark:bg-gray-900 max-w-[80%]">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-26 xl:gap-26 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Trusted PVC Pipe Solutions for Every Need</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Master Plus is a trusted manufacturer of high-quality PVC pipes, delivering durable and efficient solutions for plumbing, agriculture, and infrastructure needs.</p>
              {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
              </a> */}
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img className="rounded-3xl h-[70vh]" src="/home/img-1.png" />
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}
