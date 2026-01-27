import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LoadingSpinner from './components/ui/LoadingSpinner';
import './styles/global.css';
import './i18n';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Tools = lazy(() => import('./pages/Tools'));
const GameInfo = lazy(() => import('./pages/GameInfo'));
const LegalNotice = lazy(() => import('./pages/legal/LegalNotice'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));
const CookiesPolicy = lazy(() => import('./pages/legal/CookiesPolicy'));

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <div className="app">
                    <Header />
                    <main>
                        <Suspense fallback={<LoadingSpinner />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/tools" element={<Tools />} />
                                <Route path="/game-info" element={<GameInfo />} />
                                <Route path="/aviso-legal" element={<LegalNotice />} />
                                <Route path="/privacidad" element={<PrivacyPolicy />} />
                                <Route path="/cookies" element={<CookiesPolicy />} />
                                <Route path="*" element={<Navigate to="/" replace />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
};

export default App;
