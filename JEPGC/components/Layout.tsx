
import React from 'react';
import { BRAND_CONFIG } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  userXP: number;
  userLevel: number;
  onNavigate: (view: any) => void;
  activeView: string;
}

const Layout: React.FC<LayoutProps> = ({ children, userXP, userLevel, onNavigate, activeView }) => {
  const isAuth = activeView === 'auth';

  return (
    <div className="flex flex-col min-h-screen bg-darkBg text-white">
      <header className="sticky top-0 z-50 bg-darkCard border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => !isAuth && onNavigate('landing')}
        >
          <div className="size-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-2xl">account_balance</span>
          </div>
          <div>
            <h1 className="text-xl font-black leading-tight tracking-tight">{BRAND_CONFIG.author_display}</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">© 2026 {BRAND_CONFIG.author_display}</p>
          </div>
        </div>

        {!isAuth && (
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: 'dashboard', label: 'Inicio', icon: 'home' },
              { id: 'chart', label: 'Guía PGC', icon: 'menu_book' },
              { id: 'profile', label: 'Mi Perfil', icon: 'person' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 text-sm font-bold transition-colors ${
                  activeView === item.id ? 'text-primary' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          {!isAuth && (
            <>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Estudiante</span>
                <span className="text-sm font-bold text-accent">Nivel {userLevel}</span>
              </div>
              <div className="bg-primary/10 border border-primary/30 px-4 py-2 rounded-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm filled-icon">stars</span>
                <span className="text-primary font-black">{userXP} XP</span>
              </div>
            </>
          )}
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-6">
        {children}
      </main>

      <footer className="py-10 px-6 border-t border-gray-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">
            Copyright (c) 2026 {BRAND_CONFIG.author_display} • TODOS LOS DERECHOS RESERVADOS
          </p>
          <div className="text-[9px] text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto space-y-2">
            <p>
              Arquitectura y Estructura de Datos del PGC para Entornos de Software Educativo.
              Registrado en Safe Creative con el ID de registro: <b>{BRAND_CONFIG.safe_creative_id}</b>.
            </p>
            <p>
              Queda prohibida la reproducción, distribución o transformación de cualquier parte de este código o de su arquitectura 
              de datos sin la autorización previa, expresa y por escrito de la titular del copyright.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
