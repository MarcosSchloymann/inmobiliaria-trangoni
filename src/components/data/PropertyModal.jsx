import { useState } from "react"
import { FaBath, FaBed, FaChevronLeft, FaChevronRight, FaLocationDot, FaRuler, FaWhatsapp, FaX } from "react-icons/fa6";

const PropertyModal = ({ onClose, properties }) => {

  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(setCurrentPropertyIndex);

  if (!properties || properties.length === 0) {
    return null
  }

  const currentProperty = properties[currentPropertyIndex];
  const images = currentProperty.images || [];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <div className="fixed inset-0 bg-blak/70 backdrop-blur-md flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="relative bg-white rounded-3xl max-w-xl w-full md:max-h-[90vh] md:max-w-[70vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative h-[300px] md:h-[300px]">
          <img src={images[currentImageIndex]} alt="img"
            className="w-full h-full object-cover" />
          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
            <FaChevronLeft size={20} />
          </button>

          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
            <FaChevronRight size={20} />
          </button>

          <button onClick={onClose} className="absolute text-white top-10 right-5 -translate-y-1/2 bg-red-500 p-2 rounded-full">
            <FaX size={20} />
          </button>

          <div className="absolute bottom-4 right-4 flex items-center gap-4">
            <div className="bg-black/50 text-white px-3 py-1 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 text-gray-500 text-sm mb-1">
          <FaLocationDot className="text-red-800" />
          <span>{currentProperty.location}</span>

        </div>
        <h2 className="ml-4 text-xl font-bold text-gray-800">{currentProperty.title}</h2>
        <div className="ml-4 text-lg font-bold text-red-800 mb-1">{currentProperty.price}</div>

        <div className="flex justify-center gap-6 mb-1 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <FaBed className="text-red-800" />
            <span className="text-gray-600">{currentProperty.beds} Habitaciones</span>
          </div>

          <div className="flex items-center gap-2">
            <FaBath className="text-red-800" />
            <span className="text-gray-600">{currentProperty.baths} Baños</span>
          </div>

          <div className="flex items-center gap-2">
            <FaRuler className="text-red-800" />
            <span className="text-gray-600">{currentProperty.sqft} m2</span>
          </div>
        </div>
        <div className="mb-1">
          <h3 className="text-center font-semibold mb-1">Descripción</h3>
          <p className="ml-2 text-gray-600">{currentProperty.description}</p>
        </div>
        <button className="w-full bg-red-800 text-white py-2 rounded-2xl font-semibold hover:bg-red-900 transition-colors mb-4" >
          <a  href="https://wa.me/+5493644607777" target="_blank" className="flex items-center justify-center">
          <FaWhatsapp/>
        Contacto
          </a>
        </button>
      </div>
    </div>
  )
}

export default PropertyModal