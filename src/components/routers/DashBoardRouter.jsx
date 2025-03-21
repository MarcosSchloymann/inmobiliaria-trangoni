// import React from 'react'
// import { Navbar } from '../components/ui/Navbar'
import { 
    Navigate,
     Route, 
     Routes } from 'react-router-dom'
// import CasaScreen from '../components/casas/CasaScreen'

// import DepartamentoScreen from '../components/deptos/DepartamentoScreen'
// import GalponScreen from '../components/galpones/GalponScreen'
// import NosotrosScreen from '../components/nosotros/NosotrosScreen'
// import { ContactoScreen } from '../components/contacto/ContactoScreen'
// import Header from '../components/header/Header'
// import Footer from '../components/footer/Footer'
import Home from '../pages/Home'

const DashboardRoutes = () => {
    return (

        <>
            {/* <Header/> */}
            <div>
                <Routes>
                    <Route path="/inicio"
                        element={<Home />}
                    />

                    {/* <Route exact path="/casas"
                        element={<CasaScreen />}
                    /> */}

                    {/* <Route exact path="/deptos"
                        element={<DepartamentoScreen />}
                    />

                    <Route exact path="/galpon"
                        element={<GalponScreen />}
                    />

                    <Route exact path="/nosotros"
                        element={<NosotrosScreen />}
                    />

                    <Route exact path="/contacto"
                        element={<ContactoScreen />}
                    /> */}

                    <Route
                        path="*"
                        element={<Navigate to="/inicio" replace />}
                    />

                </Routes>

            </div>
        {/* <Footer/> */}
        </>
    )
}

export default DashboardRoutes