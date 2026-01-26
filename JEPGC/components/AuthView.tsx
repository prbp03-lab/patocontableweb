
import React, { useState } from 'react';

interface AuthViewProps {
  onLogin: (name: string, email: string) => void;
}

const AuthView: React.FC<AuthViewProps> = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      onLogin(name, email);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-12 lg:gap-24 p-6">
      <div className="hidden lg:flex flex-col items-center justify-center w-full max-w-lg text-center animate-in slide-in-from-left duration-700">
        <div className="relative size-72 bg-primary/10 rounded-[60px] flex items-center justify-center border-4 border-primary/20 shadow-[0_0_80px_rgba(13,147,242,0.15)] mb-10">
           <span className="material-symbols-outlined text-[150px] text-primary filled-icon">school</span>
           <div className="absolute -top-4 -right-4 bg-accent size-24 rounded-3xl flex items-center justify-center shadow-2xl rotate-12">
              <span className="material-symbols-outlined text-5xl text-darkBg font-black">menu_book</span>
           </div>
        </div>
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">Campus Virtual PatoContable</h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
          Domina el Plan General Contable y conviértete en un experto del balance con ayuda de nuestra IA.
        </p>
      </div>

      <div className="w-full max-w-md bg-darkCard p-12 rounded-[56px] border border-gray-800 shadow-2xl">
        <div className="text-center mb-10">
          <div className="lg:hidden size-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <span className="material-symbols-outlined text-primary text-4xl">school</span>
          </div>
          <h2 className="text-3xl font-black mb-3 tracking-tighter uppercase">Tu camino al éxito</h2>
          <p className="text-gray-400">Identifícate para guardar tu progreso y desbloquear logros académicos.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Nombre del Estudiante / Contable</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Manuel Soler"
              className="w-full bg-darkBg border border-gray-700 rounded-3xl py-4 px-6 text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg font-bold"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">Tu Correo de Aprendizaje</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nombre@estudiante.com"
              className="w-full bg-darkBg border border-gray-700 rounded-3xl py-4 px-6 text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-lg font-bold"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-[30px] shadow-2xl shadow-primary/30 transition-all active:scale-95 text-xl tracking-wider uppercase"
          >
            ¡EMPEZAR MI FORMACIÓN!
          </button>
        </form>
        <p className="mt-8 text-center text-[10px] text-gray-500 font-bold uppercase tracking-widest italic">
          Aprende el PGC de manera interactiva y divertida
        </p>
      </div>
    </div>
  );
};

export default AuthView;
