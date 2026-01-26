
import React, { useState } from 'react';
import { PGC_GROUPS_DETAILED, BRAND_CONFIG } from '../constants';
import { explainAccount } from '../services/geminiService';

const PGCGuide: React.FC = () => {
  const [openGroup, setOpenGroup] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAccount, setSelectedAccount] = useState<any>(null);
  const [loadingAccount, setLoadingAccount] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent, forceQuery?: string) => {
    e.preventDefault();
    const query = (forceQuery || searchQuery).trim();
    if (!query) return;

    setLoadingAccount(true);
    setError(null);
    setSelectedAccount(null);
    
    try {
      const data = await explainAccount(query);
      if (data) {
        setSelectedAccount({
          name: query.match(/^\d+$/) ? `Cuenta ${query}` : query,
          ...data
        });
      } else {
        setError(`No tenemos detalles específicos para "${query}".`);
      }
    } catch (err) {
      setError("Error al conectar con el servidor.");
    } finally {
      setLoadingAccount(false);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="bg-darkCard p-8 rounded-[40px] border border-gray-800 shadow-xl">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-black mb-2 tracking-tight">Diccionario Maestro PGC</h2>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Autoría: {BRAND_CONFIG.author_display}</p>
        </div>

        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-4">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">search</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Código PGC (ej. 430, 100, 600)..."
              className="w-full bg-darkBg border border-gray-700 rounded-3xl py-4 px-6 text-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-bold"
            />
          </div>
          <button 
            type="submit"
            disabled={loadingAccount}
            className="bg-primary hover:bg-primary/90 text-white font-black px-8 rounded-3xl shadow-lg transition-all active:scale-95 disabled:opacity-50 uppercase tracking-widest text-xs min-w-[120px]"
          >
            {loadingAccount ? 'Buscando...' : 'Consultar'}
          </button>
        </form>

        {selectedAccount && !loadingAccount && (
          <div className="mt-8 p-8 bg-primary/5 border border-primary/20 rounded-[32px] animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-black text-primary flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">verified</span>
                {selectedAccount.name}
              </h3>
              <button onClick={() => setSelectedAccount(null)} className="size-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Descripción Técnica</h4>
                  <p className="text-sm text-gray-300 leading-relaxed font-medium">{selectedAccount.definition}</p>
                </div>
                
                <div className="bg-darkBg border border-gray-800 rounded-2xl overflow-hidden">
                  <div className="bg-gray-800/50 p-3 flex justify-between items-center border-b border-gray-700 px-5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">Esquema en Diario</span>
                  </div>
                  <div className="flex min-h-[140px]">
                    <div className="flex-1 border-r border-gray-700 p-5 relative">
                      <span className="absolute top-2 left-3 text-[10px] font-black text-accountingGreen uppercase">Debe (+)</span>
                      <p className="text-xs text-gray-300 mt-6 italic font-bold">{selectedAccount.debe}</p>
                    </div>
                    <div className="flex-1 p-5 relative text-right">
                      <span className="absolute top-2 right-3 text-[10px] font-black text-red-500 uppercase">Haber (-)</span>
                      <p className="text-xs text-gray-300 mt-6 italic font-bold">{selectedAccount.haber}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-darkBg/50 p-4 rounded-2xl border border-gray-800">
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Naturaleza</h4>
                    <span className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/30 text-accent text-[11px] font-black rounded-full uppercase">
                      {selectedAccount.nature}
                    </span>
                  </div>
                  <div className="bg-darkBg/50 p-4 rounded-2xl border border-gray-800">
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Destino</h4>
                    <span className="text-[11px] font-black text-white uppercase">{selectedAccount.statement}</span>
                  </div>
                </div>

                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/20">
                  <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Modelo Fiscal</h4>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">account_balance</span>
                    <span className="text-sm font-black text-white">{selectedAccount.fiscalModel || 'No afecta a liquidación directa'}</span>
                  </div>
                </div>

                <div className="p-6 bg-accent/5 border border-accent/20 rounded-3xl relative mt-4">
                  <div className="absolute -top-3 left-6 bg-accent text-darkBg text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                    Nota del Mentor
                  </div>
                  <p className="text-xs italic text-gray-300 leading-relaxed mt-2">{selectedAccount.tips}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {PGC_GROUPS_DETAILED.map((group) => (
          <div 
            key={group.id} 
            className={`border rounded-[32px] transition-all duration-300 overflow-hidden ${
              openGroup === group.id ? 'bg-darkCard border-primary/30 shadow-2xl' : 'bg-darkCard/50 border-gray-800 hover:border-gray-700'
            }`}
          >
            <button 
              onClick={() => setOpenGroup(openGroup === group.id ? null : group.id)}
              className="w-full px-8 py-6 flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-6">
                <div className={`size-12 rounded-2xl flex items-center justify-center font-black transition-all ${
                  openGroup === group.id ? 'bg-primary text-white' : 'bg-gray-800 text-gray-500'
                }`}>
                  {group.id}
                </div>
                <div>
                  <h3 className={`text-xl font-black ${openGroup === group.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {group.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 font-medium">{group.description}</p>
                </div>
              </div>
              <span className={`material-symbols-outlined transition-transform duration-300 ${openGroup === group.id ? 'rotate-180 text-primary' : 'text-gray-600'}`}>
                expand_more
              </span>
            </button>

            {openGroup === group.id && (
              <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                  {group.subgroups.map((sub) => (
                    <button 
                      key={sub.code}
                      onClick={() => {
                        setSearchQuery(sub.code);
                        handleSearch({ preventDefault: () => {} } as any, sub.code);
                      }}
                      className="bg-darkBg border border-gray-800 p-4 rounded-2xl text-left hover:border-primary/50 transition-all group/sub"
                    >
                      <span className="text-primary font-black text-lg block mb-1">{sub.code}</span>
                      <span className="text-[10px] font-bold text-gray-400 leading-tight block uppercase tracking-tighter">{sub.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PGCGuide;
