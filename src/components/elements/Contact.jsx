import { FaWhatsapp } from "react-icons/fa6"


const Contact = () => {
  return (
    <section className="bg-red-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para encontrar la casa de tus sueños?</h2>
        <p className="mb-8">Contactanos para un nuevo comienzo</p>
        <button className="bg-white text-red-800 px-8 py-3 rounded-3xl font-semibold hover:bg-red-200 transition-colors">
        
          <a href="https://wa.me/+5493644607777" target="_blank" className="flex">
          <FaWhatsapp/>
            Contacto
          </a>
        </button>
      </div>
    </section>
  )
}

export default Contact