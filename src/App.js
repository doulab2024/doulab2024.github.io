import { useState, lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import("./pages/Homepage.js"));
const People = lazy(() => import("./pages/People.js"));
const Publication = lazy(() => import( "./pages/Publication.js"));
const Research = lazy(() => import("./pages/Research.js"))
const Positions = lazy(() => import("./pages/Positions"))
const News = lazy(() => import("./pages/News.js"))

function App() {
    return (
        <BrowserRouter>
            <div id={'routes'}>
                {/* Wrap your lazy-loaded routes in Suspense */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/*'} element={<Home />} />
                        <Route path={'/people'} element={<People />} />
                        <Route path={'/publications'} element={<Publication />} />
                        <Route path={'/research'} element={<Research />} />
                        <Route path={'/positions'} element={<Positions />} />
                        <Route path={'/news'} element={<News />} />
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;