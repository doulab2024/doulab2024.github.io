import { useState, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import("./pages/Homepage.js"));
const People = lazy(() => import("./pages/People.js"));
const Publication = lazy(() => import( "./pages/Publication"));

function App() {
    return (
        <BrowserRouter>
            <div id={'routes'}>
                {/* Wrap your lazy-loaded routes in Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/*'} element={<Home />} />
                        <Route path={'/people'} element={<People />} />
                        <Route path={'/publication'} element={<Publication />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;