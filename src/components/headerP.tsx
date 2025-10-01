import React from 'react';
export default function HeaderP() {
    return (
        <section className="w-full  bg-[#017dbf]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-gray-100  flex justify-between items-center text-sm font-light">
                {/* Langue et Espace donateur */}
                <div className="flex items-center space-x-4">
                    <a href="#" className="flex items-center hover:underline transition-all">
                        <svg
                            className="mr-2 h-4 w-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 3900 3900"
                            >
                            <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                            <path
                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                stroke="#fff"
                                strokeWidth="300"></path>
                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                        <g fill="#fff">
                            <g id="d">
                            <g id="c">
                                <g id="e">
                                <g id="b">
                                    <path
                                    id="a"
                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                    ></path>
                                    <use xlinkHref="#a" y="420"></use>
                                    <use xlinkHref="#a" y="840"></use>
                                    <use xlinkHref="#a" y="1260"></use>
                                </g>
                                <use xlinkHref="#a" y="1680"></use>
                                </g>
                                <use xlinkHref="#b" x="247" y="210"></use>
                            </g>
                            <use xlinkHref="#c" x="494"></use>
                            </g>
                            <use xlinkHref="#d" x="988"></use>
                            <use xlinkHref="#c" x="1976"></use>
                            <use xlinkHref="#e" x="2470"></use>
                        </g>
                        </svg>

                        <span>English</span>
                    </a>
                    <span className="text-gray-100">|</span>
                    <a href="#" className="hover:underline transition-all underline">Espace donateur</a>
                </div>

                {/* Bouton de recherche */}
                <button className="flex items-center p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer">
                    {/* Icône de recherche (SVG) */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-100" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </section>
    );
}