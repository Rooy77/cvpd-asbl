'use client';
import Image from "next/image";
import StorySection from "@/components/story";
import MobilT from "@/components/mobilT";
import AboutaSuite from "@/components/AboutSuite";

export default function About(){
    return(
        <section>
            <div className="relative w-full h-[40vh]">
                <div
                className="absolute top-0 left-0 w-full h-full transition-opacity duration-1000 opacity-100 z-10"
                >
                    <Image
                        src="/img/back.png"
                        fill
                        className="object-cover"
                        sizes="100vw" alt={""} />
                    <div className="absolute bg-gray-800/30 inset-0 flex items-center justify-left text-white text-center">
                        <div  className="max-w-6xl mx-auto px-4 py-16">
                        <div className="max-w-3xl flex md:text-5xl font-semibold text-xl cursor-pointer">
                            <div className="col col-xs-12 mt-8">
                                <p className="mb-4 inline-flex items-center rounded-full bg-yellow-200/20 px-5 py-2 text-[#017dbf] font-light">
                                        <span className="mr-2 block h-1.5 w-1.5 rounded-full bg-orange-200"></span>
                                        <span className="text-xs font-bold text-orange-200">Qui nous sommes</span>
                                </p>
                                <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100">
                                    Nous <span className="text-white">découvrire.</span>
                                </h2>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <StorySection />
            <AboutaSuite />
            <MobilT />
        </section>
    )
}