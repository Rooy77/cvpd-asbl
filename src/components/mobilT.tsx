'user client'
import { ArrowUpRight } from 'lucide-react'; 
import TypewriterText from "@/components/TypewriterText";
import Image from "next/image";

export default function About(){
    return(
        <section className="relative py-20 md:py-32 overflow-hidden">
            <section>
            <div className="absolute inset-0 h-[19rem]">
                <Image
                    src="https://images.pexels.com/photos/9841328/pexels-photo-9841328.jpeg"
                    alt="Main tendue en gros plan"
                    fill
                    className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-[#017dbf]/50"></div>
            </div>
            {/* Contenu principal */}
            <div className="relative max-w-6xl mx-auto px-4 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-100 mb-8">
                         <TypewriterText
                            texts={[
                            "Notre impact.",
                            ]}
                            speed={80}
                            delay={1500}
                            textColor="text-orange-200"
                            cursorColor="text-orange-200"
                            className=""
                        />
                        
                        </h2>
                    </div>
                </div>
            </div>
            
        </section>
        {/* Stats Section */}
            <div className="relative  z-10 mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-6xl mx-auto">
                {/* Stats */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 p-8">
                    <div className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105 border-r-2 border-[#017dbf]/10 pl-4">
                    <div className="text-4xl font-bold text-[#017dbf]">18M</div>
                    <p className="text-sm text-gray-600 mt-2">De bénéficiaires</p>
                    </div>
                    <div className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105 border-r-2 border-[#017dbf]/10 pl-4">
                    <div className="text-4xl font-bold text-[#017dbf]">52</div>
                    <p className="text-sm text-gray-600 mt-2">Projets en cours</p>
                    </div>
                    <div className="text-center group cursor-pointer transition-transform duration-300 hover:scale-105">
                    <div className="text-4xl font-bold text-[#017dbf]">14</div>
                    <p className="text-sm text-gray-600 mt-2">Pays d&apos;intervention</p>
                    </div>
                </div>
                
                {/* Operations Button */}
                <a href="#" className="bg-[#017dbf] text-white p-8 flex items-center justify-center transition-colors duration-300 hover:bg-[#0070ad]">
                    <div className="block text-left justify-start">
                    <p className="font-semibold text-lg mb-2">Découvrir <br /> nos opérations</p>
                    <span className="text-orange-200"><ArrowUpRight /></span>
                    </div>
                </a>
                </div>
            </div>
        </section>
    )
}