import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/AppRoutes"; // ✅ Import the array
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./App.css"; // Custom styles
// @ts-ignore
import ProtectedRoute from "./routes/ProtectedRoute"; // ✅ Import ProtectedRoute
import React, { Key } from "react";

interface RouteObject {
    path: string;
    Component: React.ComponentType;
    protected?: boolean;
}

function App() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <Router>
            <div className="container text-center py-5">
                <h1 className="mb-4">Vite + React + Bootstrap</h1>
                <Routes>
                    {routes.map(({path, Component, protected: isProtected}: RouteObject, index: Key | null | undefined) => (
                        <Route
                            key={index}
                            path={path}
                            element={isProtected ? <ProtectedRoute element={<Component />} /> : <Component />}
                        />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
