
import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import LevelSelector from './components/LevelSelector';
import GameView from './components/GameView';
import AuthView from './components/AuthView';
import PGCGuide from './components/PGCGuide';
import TutorialModal from './components/TutorialModal';
import { Level, UserState, GameSession } from './types';
import { INITIAL_ACHIEVEMENTS, BRAND_CONFIG } from './constants';
import { export_to_json } from './services/exportService';

const LOCAL_STORAGE_KEY = 'patocontable_user_data_v2';

const App: React.FC = () => {
  const [user, setUser] = useState<UserState | null>(null);
  const [view, setView] = useState<'auth' | 'landing' | 'dashboard' | 'game' | 'profile' | 'chart' | 'result'>('auth');
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);
  const [lastResult, setLastResult] = useState<GameSession | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      try {
        const parsed: UserState = JSON.parse(savedData);
        setUser(parsed);
        if (parsed.name) setView('landing');
      } catch (e) { console.error(e); }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const handleLogin = (name: string, email: string) => {
    const newUser: UserState = {
      name, email, xp: 0, level: Level.JUNIOR,
      achievements: INITIAL_ACHIEVEMENTS,
      history: [], unlockedLevels: [Level.JUNIOR, Level.SENIOR, Level.EXECUTIVE],
      streak: 1
    };
    setUser(newUser);
    setView('landing');
    setShowTutorial(true);
  };

  const handleGameFinish = (score: number, correct: number) => {
    const session: GameSession = {
      id: Date.now().toString(),
      level: activeLevel!,
      score, correctAnswers: correct,
      totalQuestions: 5, date: new Date().toISOString()
    };
    setLastResult(session);
    setUser(prev => prev ? {
      ...prev,
      xp: prev.xp + score,
      history: [session, ...prev.history],
      lastPlayed: session.date
    } : null);
    setView('result');
  };

  const handleExportData = () => {
    if (user) export_to_json(user, lastResult || undefined);
  };

  const renderContent = () => {
    if (!user && view !== 'auth') return <AuthView onLogin={handleLogin} />;
    switch (view) {
      case 'auth': return <AuthView onLogin={handleLogin} />;
      case 'landing': return (
        <div className="flex flex-col items-center py-16 text-center animate-in fade-in zoom-in duration-700">
          <div className="relative size-40 md:size-56 bg-darkCard border-4 border-primary/30 rounded-[40px] flex items-center justify-center shadow-2xl mx-auto group">
            <span className="material-symbols-outlined text-[100px] text-primary filled-icon transition-transform duration-700 group-hover:scale-125">school</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mt-8 mb-6 tracking-tighter leading-none uppercase">
            {BRAND_CONFIG.author_display}
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mb-12 font-medium italic">"Donde el Plan General Contable cobra vida"</p>
          <div className="flex flex-col gap-4">
            <button onClick={() => setView('dashboard')} className="bg-primary hover:bg-primary/90 text-white font-black py-6 px-12 rounded-3xl shadow-2xl transition-all hover:-translate-y-1 text-lg uppercase tracking-widest">ENTRAR AL CAMPUS</button>
            <a href={BRAND_CONFIG.repo_url} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-primary text-xs font-bold transition-colors">VER REPOSITORIO OFICIAL</a>
          </div>
        </div>
      );
      case 'dashboard': return <LevelSelector onSelectLevel={(l) => { setActiveLevel(l); setView('game'); }} unlockedLevels={user?.unlockedLevels || []} />;
      case 'game': return activeLevel ? <GameView level={activeLevel} onFinish={handleGameFinish} onCancel={() => setView('dashboard')} /> : null;
      case 'result': return (
        <div className="max-w-3xl mx-auto flex flex-col items-center py-10">
           <div className="bg-darkCard w-full p-12 rounded-[56px] border-4 border-accountingGreen shadow-2xl text-center">
             <h2 className="text-4xl font-black mb-10 uppercase tracking-tighter">SESIÓN COMPLETADA</h2>
             <div className="grid grid-cols-2 gap-6 mb-12">
               <div className="bg-darkBg p-6 rounded-3xl border border-gray-800">
                  <span className="text-[10px] font-black text-primary uppercase block mb-2 tracking-widest">Aciertos</span>
                  <span className="text-4xl font-black">{lastResult?.correctAnswers} / 5</span>
               </div>
               <div className="bg-darkBg p-6 rounded-3xl border border-gray-800">
                  <span className="text-[10px] font-black text-accent uppercase block mb-2 tracking-widest">Capital XP</span>
                  <span className="text-4xl font-black">+{lastResult?.score}</span>
               </div>
             </div>
             <div className="flex flex-col gap-4">
               <button onClick={() => setView('dashboard')} className="w-full bg-primary py-6 rounded-3xl font-black uppercase text-sm">CONTINUAR</button>
               <button onClick={handleExportData} className="w-full bg-darkBg border border-gray-700 py-4 rounded-3xl font-black text-xs flex items-center justify-center gap-2">
                 <span className="material-symbols-outlined text-sm">download</span> EXPORTAR REPORTE (JSON)
               </button>
               <p className="text-[9px] text-gray-600 mt-2">Source: {BRAND_CONFIG.repo_url}</p>
             </div>
           </div>
        </div>
      );
      case 'profile': return <div className="p-10 text-center">Perfil de {user?.name} en construcción...</div>;
      case 'chart': return <PGCGuide />;
      default: return null;
    }
  };

  return (
    <Layout 
      userXP={user?.xp || 0} 
      userLevel={Math.floor((user?.xp || 0) / 500) + 1} 
      onNavigate={setView} activeView={view}
    >
      {renderContent()}
      {showTutorial && <TutorialModal onClose={() => setShowTutorial(false)} />}
    </Layout>
  );
};

export default App;
