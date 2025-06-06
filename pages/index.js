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
            <h1 className="text-[45px] font-bold z-10">Master Plus Pipes</h1>
            <p className="text-[22px] mt-3 max-w-[50vw] mx-auto">
              Ensuring seamless flow and long-lasting performance with premium-grade PVC pipes, trusted by professionals.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <section className="bg-white dark:bg-gray-900 max-w-[80%]">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-0 xl:gap-8 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Trusted PVC Pipe Solutions for Every Need</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Master Plus is a trusted manufacturer of high-quality PVC pipes, delivering durable and efficient solutions for plumbing, agriculture, and infrastructure needs.</p>
                <h2 className="text-left text-[36px] font-bold font-manrope leading-normal lg:text-start text-center">Master Plus Pipes Manufacture</h2>
                  <p className="text-base font-bold leading-relaxed text-justify">●  PVC PIPES<br/>
● PVC PIPES FITTINGS<br/>
● PPRC PIPES<br/>
● PPRC PIPES FITTINGS
</p>
                {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
              </a> */}
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img className="rounded-3xl h-[85vh]" src="/home/img-1.png" />
              </div>
            </div>
          </section>
        </div>
        <section className="py-24 relative md:max-w-[85%]">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-[36px] font-bold font-manrope leading-normal lg:text-start text-center">Master Plus Pipes</h2>
                  <p className="text-base font-normal leading-relaxed text-justify">Master Plus Pipes Industry is a leading manufacturer and provider
                    of premium PVC and PPRC piping solutions. Master Plus
                    established with a vision to deliver excellence, reliability, and
                    sustainability. We use high quality materials and advanced
                    technology to ensure that our products meet the highest standards</p>
                  <h2 className="text-[36px] font-bold font-manrope leading-normal lg:text-start text-center">Mission Statement</h2>
                  <p className="text-base font-normal leading-relaxed text-justify">Master Plus Pipes Industry is a leading manufacturer and provider
                    of premium PVC and PPRC piping solutions. Master Plus
                    established with a vision to deliver excellence, reliability, and
                    sustainability. We use high quality materials and advanced
                    technology to ensure that our products meet the highest standards</p>
                </div>
                {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                                </button> */}
              </div>
              <img className="lg:mx-0 mx-auto w-full md:h-[75vh] rounded-3xl object-cover overflow-hidden" src="/home/img-2.png" alt="about Us image" />
            </div>
          </div>
        </section>
        <section className="py-24 relative md:max-w-[85%] mb-24">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <img className="lg:mx-0 mx-auto w-full md:h-[80vh] rounded-3xl object-cover overflow-hidden" src="/home/img-3.png" alt="about Us image" />
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Mastering Flow with Integrity and Innovation</h2>
                  <p className="text-base font-normal text-justify"><h1 className="font-bold text-[25px]">Why Choose Us?</h1>
                    <br />
                    <p>Master Plus Pipes implement stringent quality control measures at every stage of production,
                      from raw material sourcing to final product inspection, ensuring that our pipes adhere to
                      international standards and exceed customer expectations
                    </p>
                    <br />
                    <p>Our state-of-the-art manufacturing facilities are equipped with advanced machinery, and a
                      skilled workforce.
                    </p>
                    <br />
                    <p>
                      Master Plus Pipes prioritize eco-friendly manufacturing practices, resource efficiency, and
                      recycling initiatives to minimize our carbon footprint and contribute to a greener future.
                    </p><br />
                    {/* <h1 className="font-bold text-[25px]">Our Services Include:</h1>
                                        <br />
                                        <p>Hajj & Umrah Packages: Carefully crafted to ensure comfort and convenience, our packages are designed for a fulfilling spiritual experience.
                                        </p><br />
                                        <p>Airline Ticketing: Utilizing GDS services, we provide the best airline options at competitive prices, ensuring a smooth journey.
                                        </p><br />
                                        <p>Nationwide Transport Solutions: We offer reliable transportation across Pakistan to make your travel as hassle-free as possible.
                                        </p><br />
                                        <p>At Al-Mashood Munazzam Pvt Ltd, we are deeply committed to delivering exceptional services while you embark on your sacred pilgrimage. With the support of our vast network of 31 companies, we ensure every step of your journey is handled with care, allowing you to focus solely on the spiritual journey of Hajj & Umrah.</p><br /> */}
                  </p>
                </div>
                {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                    <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                                </button> */}
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
