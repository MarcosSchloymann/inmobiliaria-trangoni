import { FaHandHoldingDollar, FaHouse, FaHouseUser } from "react-icons/fa6"
import homeImage from "/homeImage.jpg"
import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <div className="relative h-[100vh]">
            <img src={homeImage} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via black/30 to-black/50 flex items-center justify-center">
                <div className="text-center text-white max-w-5xl px-4">
                    <h1 className="text-4xl lg:text-7xl sm:text-5xl md:text-6xl font-bold mb-4 p-3 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent tracking-tight">
                        N & R
                        <br />
                        Negocios Inmobiliarios
                    </h1>
                    <p className="text-lg lg:text-2xl md:text-xl mb-8 text-gray-200">
                        La mejor opción para tu negocio inmobiliario
                    </p>
                    <div className="bg-white/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-3">
                            <input type="text" placeholder="buscar por ubicación" className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus_ring-orange-500 hover:border-orange-500 hover:bg-orange-50
                        focus:bg-white text-black transition-colors duration-200"/>

                            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover_bg-orange-700">Buscar</button>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-6">

                        <NavLink
                            to="/"
                            >
                                <div className="flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">

                                    <FaHouse className="text-orange-600 text-2xl mb-1" />
                                    <span className="font-semibold text-white">Inicio</span>
                                </div>
                            </NavLink>

                            <NavLink
                            to="/alquileres"
                            >
                                <div className="flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">

                                    <FaHouseUser className="text-orange-600 text-2xl mb-1" />
                                    <span className="font-semibold text-white">Alquileres</span>
                                </div>
                            </NavLink>

                            <NavLink
                            to="/compras">
                            <div className="flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                                <FaHandHoldingDollar className="text-orange-600 text-2xl mb-1" />
                                <span className="font-semibold text-white">Ventas</span>
                            </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Header