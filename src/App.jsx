import PropertyModal from "./components/PropertyModal";
import FeaturedProperties from "./components/FeaturedProperties"; 
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { useState } from "react";


function App() {

  const [selectedProperty, setSelectedProperty] = useState(null)

  return <div>
    <Home/>
    <FeaturedProperties setSelectedProperty={setSelectedProperty}/>
    <Contact/>
    <Footer/>

    {selectedProperty && (<PropertyModal properties={[selectedProperty]} onClose={()=> setSelectedProperty(null)}/>)}
  </div>;
}

export default App;
