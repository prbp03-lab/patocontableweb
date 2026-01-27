import React from 'react';

const LoadingSpinner: React.FC = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/img/bb.jpeg" alt="Loading" className="w-8 h-8 rounded-full object-cover animate-bounce" />
                </div>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-400 font-medium animate-pulse">
                Cargando balance...
            </p>
        </div>
    );
};

export default LoadingSpinner;
