import { FaLocationDot } from "react-icons/fa6"
import homeImage from "/homeImage.jpg"

const Home = () => {
    return (
        <div className="relative h-[100vh]">
            <img src={homeImage} className="w-full h-full object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via black/30 to-black/50 flex items-center justify-center">
                <div className="text-center text-white max-w-5xl px-4">
                    <h1 className="text-7xl sm:text-6xl md:text-6xl font-bold mb-4 p-3 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent tracking-tight">
                        N y R <br /> Negocios Inmobiliarios
                    </h1>
                    <p className="text-lg md:text-2xl mb-8 text-gray-200">
                        La mejor opción para tu negocio inmobiliario
                    </p>
                    <div className="bg-white/30 p-8 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-3">
                            <input type="text" placeholder="buscar por ubicación" className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus_ring-blue-500 hover:border-blue-500 hover:bg-blue-50
                        focus:bg-white text-black transition-colors duration-200"/>
                            <select name="" id="" className="px-4 py-3 rounded-lg text-gray-700 border border-gray-300 focus:online-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Casas</option>
                                <option value="">Departamento</option>
                                <option value="">Otro</option>
                            </select>

                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover_bg-blue-700">Buscar</button>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            <div className="flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                                <FaLocationDot className="text-blue-600 mb-2" />
                                <span className="font-semibold text-white">Centro</span>
                            </div>

                            <div className="flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                                <FaLocationDot className="text-blue-600 mb-2" />
                                <span className="font-semibold text-white">Oro Blanco</span>
                            </div>

                            <div className="flex flex-col items-center bg-slate-50/20 rounded-lg transition-transform hover:scale-105 cursor-pointer">
                                <FaLocationDot className="text-blue-600 mb-2" />
                                <span className="font-semibold text-white">San Martín</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home