// import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { useState } from "react";
import DashboardRoutes from "./DashBoardRouter";

const AppRouter = () => {

    const [selectedProperty, setSelectedProperty] = useState(null)
    console.log(selectedProperty)

    return (
        <>
        <Router>
        
            <div>
            

                <Routes>
                    <Route path="/*"
                        element={<DashboardRoutes setSelectedProperty={setSelectedProperty}/>}
                    />
                </Routes>
            </div>
        </Router>

        </>
    )
}

export default AppRouter