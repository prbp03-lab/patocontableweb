
import React, { useState, useEffect, useRef } from 'react';
import { Level, Question } from '../types';
// Fixed: Removed missing export getMentorHint from the import list
import { generateAccountingQuestions } from '../services/geminiService';
import { GestorFiscal } from '../services/fiscalEngine';

interface GameViewProps {
  level: Level;
  onFinish: (score: number, correctCount: number) => void;
  onCancel: () => void;
}

const GameView: React.FC<GameViewProps> = ({ level, onFinish, onCancel }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [displayedFeedback, setDisplayedFeedback] = useState<string>("");
  const [correctCount, setCorrectCount] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [fiscalAlert, setFiscalAlert] = useState<string | null>(null);

  useEffect(() => {
    // Simulamos un día de calendario fiscal al azar para el reto
    const randomMonth = [1, 4, 7, 10][Math.floor(Math.random() * 4)];
    const randomDay = 15;
    const oblig = GestorFiscal.verificar_obligacion(randomMonth, randomDay);
    if (oblig.length > 0) {
      setFiscalAlert(`HITO FISCAL: Periodo de presentación ${oblig[0].nombre} activo.`);
    }

    let mounted = true;
    const loadQuestions = async () => {
      const data = await generateAccountingQuestions(level);
      if (mounted) {
        setQuestions(data);
        setLoading(false);
      }
    };
    loadQuestions();
    return () => { mounted = false; };
  }, [level]);

  // ... lógica de manejo de opciones y feedback existente ...

  if (loading) return <div className="p-20 text-center font-black">Cargando retos fiscales...</div>;

  const currentQ = questions[currentIndex];

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8 pb-20 animate-in fade-in slide-in-from-bottom-4">
      {fiscalAlert && (
        <div className="bg-accent/10 border-2 border-accent p-4 rounded-2xl flex items-center gap-4 animate-bounce">
          <span className="material-symbols-outlined text-accent filled-icon">notifications_active</span>
          <span className="text-accent font-black text-xs uppercase tracking-widest">{fiscalAlert}</span>
        </div>
      )}
      
      {/* ... resto de la UI del juego ... */}
      <div className="bg-darkCard p-8 rounded-[48px] border border-gray-800 shadow-2xl">
         <h2 className="text-2xl font-black text-center mb-10">{currentQ.text}</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {currentQ.options.map((opt, i) => (
             <button 
               key={i}
               onClick={() => {
                 setSelectedOption(i);
                 if (i === currentQ.correctAnswer) {
                   setCorrectCount(c => c + 1);
                   setTotalScore(s => s + currentQ.points);
                 }
                 setDisplayedFeedback(currentQ.explanation);
               }}
               disabled={selectedOption !== null}
               className={`p-6 rounded-3xl border-2 text-left font-bold transition-all ${
                 selectedOption === null ? 'border-gray-800 hover:border-primary' : 
                 i === currentQ.correctAnswer ? 'border-accountingGreen bg-accountingGreen/10' :
                 i === selectedOption ? 'border-red-500 bg-red-500/10' : 'opacity-30'
               }`}
             >
               {opt}
             </button>
           ))}
         </div>
         {selectedOption !== null && (
           <div className="mt-10 p-6 bg-primary/5 rounded-3xl border border-primary/20">
             <p className="text-sm font-medium italic">"{displayedFeedback}"</p>
             <button 
               onClick={() => {
                 if (currentIndex < questions.length - 1) {
                   setCurrentIndex(c => c + 1);
                   setSelectedOption(null);
                 } else {
                   onFinish(totalScore, correctCount);
                 }
               }}
               className="mt-6 w-full bg-primary py-4 rounded-2xl font-black uppercase text-xs tracking-widest"
             >
               Siguiente Asiento
             </button>
           </div>
         )}
      </div>
    </div>
  );
};

export default GameView;
