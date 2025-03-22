// import React from 'react'



import { FaBath, FaBed, FaLocationDot, FaRuler } from "react-icons/fa6";
import getPropertiesByTipo from "../querys/getPropertiesByTipo"
import { useState } from "react";
import PropertyModal from "../data/PropertyModal";


const AlquileresPage = ({tipo}) => {
  const properties = getPropertiesByTipo(tipo);
  const [selectedProperty, setSelectedProperty] = useState(null)

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
    <h2 className="text-center text-3xl font-bold mb-8">Alquileres</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
      {properties.map((property) => (
        <div key={property.id} 
        className="bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
        onClick={()=>setSelectedProperty(property)}>
          <div className="relative">
            <img src={property.image} alt="img" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"/>
          </div>

          <div className="p-6">
            <div className="flex items-center text-gray-500 text-sm mb-3">
              <FaLocationDot className="text-orange-600"/>
              <span>{property.location}</span>
            </div>
            <div className="text-2xl font-bold text-orange-600 mb-2">
              {property.price}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{property.title}</h3>

            <div className="flex justify-between intems-center p-3 bg-orange-50 rouded-lg">
              <div className="flex items-center gap-2">
                <FaBed className="text-orange-600"/>
                <span className="text-gray-600">{property.beds} Habitaciones</span>
              </div>

              <div className="flex items-center gap-2">
                <FaBath className="text-orange-600"/>
                <span className="text-gray-600">{property.baths} Baños</span>
              </div>

              <div className="flex items-center gap-2">
                <FaRuler className="text-orange-600"/>
                <span className="text-gray-600">{property.sqft} m2</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {selectedProperty && (<PropertyModal properties={[selectedProperty]} onClose={() => setSelectedProperty(null)} />)}

  </section>
  )
}

export default AlquileresPage