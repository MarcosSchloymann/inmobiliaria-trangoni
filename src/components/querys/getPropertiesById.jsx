// import React from 'react'
import properties from "../data/properties"

const getPropertiesById = (id) => {

  return properties.find(property => property.id === id)
  
}

export default getPropertiesById