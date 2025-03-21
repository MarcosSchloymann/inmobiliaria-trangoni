import {
    Navigate,
    Route,
    Routes
} from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import HomePage from '../pages/HomePage'
import ComprasPage from '../pages/ComprasPage'
import AlquileresPage from '../pages/AlquileresPage'
import { useState } from 'react'
import Contact from '../elements/Contact'
import PropertyModal from "./../data/PropertyModal"

const DashboardRoutes = () => {

    const [selectedProperty, setSelectedProperty] = useState(null)

    return (
        <>
            <Header />

            {selectedProperty && (<PropertyModal properties={[selectedProperty]} onClose={() => setSelectedProperty(null)} />)}

            <div>
                <Routes>
                    <Route path="/inicio"
                        element={<HomePage />}
                    />
                    <Route exact path="/compras"
                        element={<ComprasPage />}
                    />
                    <Route exact path="/alquileres"
                        element={<AlquileresPage />}
                    />
                    <Route
                        path="*"
                        element={<Navigate to="/inicio" replace />}
                    />
                </Routes>
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default DashboardRoutes