import { FaFacebook, FaInstagram } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">
            N y R Inmobiliarios
          </h3>
          <p className="text-gray-400">
            Tu mejor compañero para encontrar tu lugar perfecto
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Accesos Rápidos</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Inicio</li>
            <li>Propiedades</li>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Información de Contacto</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Calle 19 1244</li>
            <li>Saenz Peña Chaco</li>
            <li>manocambiada@gmail.com</li>
            <li>(555) - 555555</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Seguinos</h4>
          <div className="flex space-x-4">
            <a href="">
              <FaFacebook className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer"/>
            </a>
            <a href="">
              <FaInstagram className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer"/>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer