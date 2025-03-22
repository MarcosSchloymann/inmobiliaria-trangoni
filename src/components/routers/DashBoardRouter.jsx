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
import Contact from '../elements/Contact'

const DashboardRoutes = () => {

    return (
        <>
            <Header />

            <div>
                <Routes>
                    <Route path="/inicio"
                        element={<HomePage />}
                    />
                    <Route exact path="/compras"
                        element={<ComprasPage tipo="venta"/>}
                    />
                    <Route exact path="/alquileres"
                        element={<AlquileresPage tipo="alquiler"/>}
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