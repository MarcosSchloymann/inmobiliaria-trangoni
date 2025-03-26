import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import properties from "../data/properties";
import { useState } from "react";
import PropertyModal from "../data/PropertyModal";
import { FaBath, FaBed, FaLocationDot, FaRuler } from "react-icons/fa6";
PropertyModal

const SearchScreen = () => {

    const [selectedProperty, setSelectedProperty] = useState(null)

    const navigate = useNavigate( );

    const [searchParams] = useSearchParams();

    const bus= searchParams.get('q')

    const [formValues, handleInputChange] = useForm({
        searchText: bus
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    
    const propertiesFilters = properties.filter(property => property.location.toLowerCase().includes(searchText))
    return (
        <div>
            <section className="flex flex-col max-w-7xl mx-auto py-16 px-4">
                <form action=""
                    onSubmit={handleSearch}
                >
                    <div className="flex flex-col md:flex-row gap-3 p-3">
                        <input
                            className="text-center flex-1 px-6 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus_ring-red-500 hover:border-red-500 hover:bg-red-50
                             focus:bg-white text-black transition-colors duration-200"
                            type="text"
                            placeholder="buscar por ubicación"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button type="submit" className="bg-red-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-900">Buscar...</button>
                    </div>
                </form>


                <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 gap-8">
                    {propertiesFilters.map((property) => (
                        <div key={property.id}
                            className="bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer"
                            onClick={() => setSelectedProperty(property)}>
                            <div className="relative">
                                <img src={property.image} alt="img" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-gray-500 text-sm mb-3">
                                    <FaLocationDot className="text-red-800" />
                                    <span>{property.location}</span>
                                </div>
                                <div className="text-2xl font-bold text-red-800 mb-2">
                                    {property.price}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-gray-800">{property.title}</h3>

                                <div className="flex justify-between intems-center p-3 bg-red-50 rouded-lg">
                                    <div className="flex items-center gap-2">
                                        <FaBed className="text-red-800" />
                                        <span className="text-gray-600">{property.beds} Habitaciones</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaBath className="text--600" />
                                        <span className="text-gray-600">{property.baths} Baños</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <FaRuler className="text-red-800" />
                                        <span className="text-gray-600">{property.sqft} m2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {selectedProperty && (<PropertyModal properties={[selectedProperty]} onClose={() => setSelectedProperty(null)} />)}


            </section>
        </div>
    )
}

export default SearchScreen