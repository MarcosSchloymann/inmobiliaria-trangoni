import { FaHandHoldingDollar, FaHouse, FaHouseUser } from "react-icons/fa6"
import homeImage from "/homeImage.jpg"
import logo from "/logo.png"
import logoInmo from "/logoInmo2.png"

import { NavLink } from "react-router-dom"
import { FaSearch } from "react-icons/fa"

const Header = () => {
    return (
        <div className="relative h-[100vh] mb-7">
            <img src={homeImage} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via black/30 to-black/50 flex items-center justify-center">
                <div className="text-center text-white max-w-5xl px-4 flex flex-col items-center">
                <img src={logoInmo} alt="img" className="w-auto h-24"/>
                    <h1 className="text-4xl lg:text-7xl sm:text-5xl md:text-6xl font-bold mb-4 p-3 bg-gradient-to-r from-yellow-300 to-red-800 bg-clip-text text-transparent tracking-tight">
                        Negocios Inmobiliarios
                    </h1>
                    <p className="text-lg lg:text-2xl md:text-xl mb-8 text-gray-200">
                        La mejor opción para tu negocio inmobiliario
                    </p>
                    <div className="bg-white/30 p-6 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto">

                        <div className="grid grid-cols-4 gap-3 mt-3">

                        <NavLink
                            to="/"
                            >
                                <div className="p-1 flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">

                                    <FaHouse className="text-red-800 text-xl mb-1" />
                                    <span className="font-semibold text-white">Inicio</span>
                                </div>
                            </NavLink>

                            <NavLink
                            to="/alquileres"
                            >
                                <div className="p-1 flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">

                                    <FaHouseUser className="text-red-800 text-xl mb-1" />
                                    <span className="font-semibold text-white">Alquileres</span>
                                </div>
                            </NavLink>

                            <NavLink
                            to="/compras">
                            <div className="p-1 flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                                <FaHandHoldingDollar className="text-red-800 text-xl mb-1" />
                                <span className="font-semibold text-white">Ventas</span>
                            </div>
                            </NavLink>

                            <NavLink
                            to="/search">
                            <div className="p-1 flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                                <FaSearch className="text-red-800 text-xl mb-1" />
                                <span className="font-semibold text-white">Buscar</span>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center h-10 lg:h-20 md-h20 sm:h-20 bg-orange-200">
            <img src={logo} className="w-auto h-auto object-cover"/>
            </div>
        </div>
    )
}



export default Header