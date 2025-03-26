import properties from "../data/properties"

// import React from 'react'

const getPropertiesByLocation = ({searchText=''}) => {
    console.log("ubi:",searchText)
    if (searchText===''){
        return properties
    }

  location = searchText;
  
  
    return properties.filter(property => property.location.includes(location))
}

export default getPropertiesByLocation