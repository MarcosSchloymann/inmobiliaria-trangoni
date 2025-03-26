// import React from 'react'

import { useState } from "react"
import FeaturedProperties from "../data/FeaturedProperties"
import PropertyModal from "../data/PropertyModal"

const HomePage = () => {

  const [selectedProperty, setSelectedProperty] = useState(null)

  return ( 
    <div className="max-w-7xl mx-auto py-16 px-4">

      <h2 className="text-center text-3xl font-bold mb-8">Propiedades Recomendadas</h2>

      <FeaturedProperties setSelectedProperty={setSelectedProperty} />


      {selectedProperty && (<PropertyModal properties={[selectedProperty]} onClose={() => setSelectedProperty(null)} />)}


    </div>
  )
}

export default HomePage