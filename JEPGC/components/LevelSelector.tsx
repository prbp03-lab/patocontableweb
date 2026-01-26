
import React from 'react';
import { Level } from '../types';

interface LevelSelectorProps {
  onSelectLevel: (level: Level) => void;
  unlockedLevels: Level[];
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ onSelectLevel, unlockedLevels }) => {
  const levels = [
    {
      id: Level.JUNIOR,
      title: '1. Estudiante',
      subtitle: 'Iniciación al PGC',
      desc: 'Fundamentos: Aprende a identificar los grupos 1 al 5 y las cuentas básicas del balance.',
      icon: 'school',
      color: 'primary',
      gradient: 'from-blue-600/20 to-primary/30'
    },
    {
      id: Level.SENIOR,
      title: '2. Especialista',
      subtitle: 'Operativa de Diario',
      desc: 'Gestión: Clasificación por naturaleza, ingresos y gastos (grupos 6 y 7).',
      icon: 'edit_note',
      color: 'accountingGreen',
      gradient: 'from-green-600/20 to-accountingGreen/30'
    },
    {
      id: Level.EXECUTIVE,
      title: '3. Experto PGC',
      subtitle: 'Maestría Contable',
      desc: 'Avanzado: Subcuentas de 4 dígitos, operativa de IVA y asientos de cierre.',
      icon: 'military_tech',
      color: 'accent',
      gradient: 'from-yellow-600/20 to-accent/30'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
      {levels.map((lvl) => {
        const isLocked = !unlockedLevels.includes(lvl.id);
        const colorClass = lvl.color === 'primary' ? 'border-primary' : lvl.color === 'accountingGreen' ? 'border-accountingGreen' : 'border-accent';
        const textClass = lvl.color === 'primary' ? 'text-primary' : lvl.color === 'accountingGreen' ? 'text-accountingGreen' : 'text-accent';
        const bgClass = lvl.color === 'primary' ? 'bg-primary' : lvl.color === 'accountingGreen' ? 'bg-accountingGreen' : 'bg-accent';

        return (
          <div 
            key={lvl.id}
            className={`relative group bg-darkCard rounded-[48px] overflow-hidden border-2 transition-all hover:scale-[1.03] flex flex-col shadow-2xl ${
              isLocked 
              ? 'border-gray-800 opacity-60 grayscale cursor-not-allowed' 
              : `${colorClass} hover:shadow-${lvl.color}/20`
            }`}
          >
            <div className={`h-48 bg-gradient-to-br ${lvl.gradient} flex items-center justify-center relative overflow-hidden`}>
              <span className={`material-symbols-outlined text-[100px] ${textClass} opacity-60 filled-icon transform transition-transform group-hover:scale-110 duration-700`}>
                {lvl.icon}
              </span>
              <div className="absolute inset-0 bg-darkCard/10 pointer-events-none"></div>
            </div>
            
            <div className="p-10 flex flex-col flex-1">
              <div className="mb-6">
                <h3 className="text-3xl font-black tracking-tight">{lvl.title}</h3>
                <p className={`text-xs ${textClass} font-black uppercase tracking-widest mt-1`}>{lvl.subtitle}</p>
              </div>
              
              <p className="text-gray-400 text-base mb-10 leading-relaxed font-medium">{lvl.desc}</p>
              
              <div className="mt-auto">
                <button
                  disabled={isLocked}
                  onClick={() => onSelectLevel(lvl.id)}
                  className={`w-full py-5 rounded-3xl font-black transition-all flex items-center justify-center gap-4 text-lg shadow-xl ${
                    isLocked 
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                      : `${bgClass} hover:opacity-90 text-white shadow-lg shadow-${lvl.color}/20`
                  }`}
                >
                  {isLocked ? (
                    <><span className="material-symbols-outlined text-2xl">lock</span> BLOQUEADO</>
                  ) : (
                    <><span className="material-symbols-outlined text-2xl">auto_stories</span> EMPEZAR LECCIÓN</>
                  )}
                </button>
              </div>
            </div>

            {isLocked && (
              <div className="absolute inset-0 bg-darkBg/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
                 <div className="bg-darkCard/90 p-6 rounded-3xl border border-gray-700 shadow-2xl flex flex-col items-center gap-3">
                    <span className="material-symbols-outlined text-4xl text-gray-500">lock</span>
                    <span className="text-xs font-black uppercase text-gray-400 tracking-widest">Supera los niveles anteriores</span>
                 </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LevelSelector;
