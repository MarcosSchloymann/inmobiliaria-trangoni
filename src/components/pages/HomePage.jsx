// import React from 'react'

import { useState } from "react"
import FeaturedProperties from "../data/FeaturedProperties"

const HomePage = () => {

  const [selectedProperty, setSelectedProperty] = useState(null)

  console.log(selectedProperty)

  return (
    <div>
      <FeaturedProperties setSelectedProperty={setSelectedProperty} />
    </div>
  )
}

export default HomePage