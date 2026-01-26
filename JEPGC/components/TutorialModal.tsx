
import React, { useState } from 'react';

interface TutorialModalProps {
  onClose: () => void;
}

const TutorialModal: React.FC<TutorialModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-darkBg/95 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-darkCard w-full max-w-3xl rounded-[48px] border-2 border-primary/30 shadow-[0_0_80px_rgba(13,147,242,0.2)] overflow-hidden flex flex-col max-h-[90vh]">
        
        <div className="flex justify-between items-center p-8 border-b border-gray-800 bg-gray-800/20">
          <div className="flex items-center gap-4">
            <div className="size-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary shadow-inner">
              <span className="material-symbols-outlined text-3xl filled-icon">school</span>
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tighter uppercase">Hoja de Ruta del Contable</h2>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Tu plan de formación interactiva</p>
            </div>
          </div>
          <button onClick={onClose} className="size-12 rounded-2xl hover:bg-white/5 text-gray-500 hover:text-white transition-all">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black mb-4 tracking-tight">¡Bienvenido al Campus!</h3>
            <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium">
              Aquí no solo memorizarás números, aprenderás la lógica real detrás de cada asiento contable.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                step: "01", 
                title: "Analiza el Asiento", 
                desc: "Cada ejercicio presenta una situación real. Identifica qué cuentas intervienen (Activo, Pasivo, Patrimonio, Gasto o Ingreso) según el cuadro de cuentas del PGC.", 
                icon: "menu_book",
                color: "text-primary",
                bg: "bg-primary/10"
              },
              { 
                step: "02", 
                title: "Consulta al Mentor", 
                desc: "¿Te falla el balance? Pide una pista. Nuestro Pato Mentor te dará claves técnicas sin revelarte la solución para que tu cerebro haga 'clic'.", 
                icon: "psychology",
                color: "text-accent",
                bg: "bg-accent/10"
              },
              { 
                step: "03", 
                title: "Sube de Rango", 
                desc: "Acierta para ganar Capital de Conocimiento (XP). Desbloquea niveles expertos donde verás IVA, amortizaciones y asientos de cierre complejos.", 
                icon: "trending_up",
                color: "text-accountingGreen",
                bg: "bg-accountingGreen/10"
              }
            ].map((item, i) => (
              <div key={i} className="group bg-darkBg/50 p-6 rounded-[32px] border border-gray-800 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-primary/30 transition-all">
                <div className={`size-16 shrink-0 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner`}>
                  {item.step}
                </div>
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className={`material-symbols-outlined text-sm ${item.color}`}>{item.icon}</span>
                    <h4 className="text-lg font-black uppercase tracking-tighter">{item.title}</h4>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-primary/5 rounded-3xl border border-primary/20 flex items-center gap-4">
            <span className="material-symbols-outlined text-primary text-3xl">info</span>
            <p className="text-xs text-gray-400 font-medium">
              Recuerda que puedes consultar la <span className="text-primary font-bold">Guía PGC</span> en el menú superior para ver la dinámica de cualquier cuenta antes de responder.
            </p>
          </div>
        </div>

        <div className="p-8 bg-gray-800/10 border-t border-gray-800 flex justify-center">
          <button 
            onClick={onClose}
            className="bg-primary hover:bg-primary/90 text-white font-black py-5 px-16 rounded-[24px] shadow-2xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-[0.2em] text-sm"
          >
            ¡ENTRAR A CLASE!
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;
