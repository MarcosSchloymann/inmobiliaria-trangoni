// import React from 'react'

import { useState } from "react"
import FeaturedProperties from "../data/FeaturedProperties"
import PropertyModal from "../data/PropertyModal"

const HomePage = () => {

  const [selectedProperty, setSelectedProperty] = useState(null)

  return (
    <div>
      <FeaturedProperties setSelectedProperty={setSelectedProperty} />

    
      {selectedProperty && (<PropertyModal properties={[selectedProperty]} onClose={() => setSelectedProperty(null)} />)}


    </div>
  )
}

export default HomePage