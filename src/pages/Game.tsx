import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import type { Coin } from '../logic/gameLogic';
import { LEVELS } from '../logic/gameLogic';
import './Game.css';

interface JournalEntry {
    id: string;
    value: number;
    side: 'debe' | 'haber';
    concept: string;
}

const Game: React.FC = () => {
    const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
    const [tableCoins, setTableCoins] = useState<Coin[]>([]);
    const [currentBalance, setCurrentBalance] = useState(0);
    const [pacoState, setPacoState] = useState<'idle' | 'happy' | 'thinking' | 'error'>('idle');
    const [message, setMessage] = useState('');
    const [feedbacks, setFeedbacks] = useState<{ id: string; text: string; x: number; y: number; side: string }[]>([]);
    const [journal, setJournal] = useState<JournalEntry[]>([]);
    const [journalOpen, setJournalOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 767);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const currentLevel = LEVELS[currentLevelIdx];

    useEffect(() => {
        initLevel(currentLevelIdx);
    }, [currentLevelIdx]);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    // Spawn new coin continuously
    useEffect(() => {
        if (pacoState === 'happy' || pacoState === 'error') return;

        const spawnInterval = setInterval(() => {
            const level = LEVELS[currentLevelIdx];
            const randomVal = level.allowedCoins[Math.floor(Math.random() * level.allowedCoins.length)];
            const side = level.isMixed && Math.random() > 0.5 ? 'haber' : 'debe';

            const newCoin: Coin = {
                id: `coin-${Date.now()}-${Math.random()}`,
                value: randomVal,
                x: 45 + Math.random() * 45,
                y: -10,
                side: side
            };

            setTableCoins(prev => [...prev, newCoin]);

            // Remove coin after it falls off screen
            setTimeout(() => {
                setTableCoins(prev => prev.filter(c => c.id !== newCoin.id));
            }, 9000);
        }, 1000); // Spawn a new coin every 1000ms

        return () => clearInterval(spawnInterval);
    }, [currentLevelIdx, pacoState]);

    const initLevel = (idx: number) => {
        const level = LEVELS[idx];

        setTableCoins([]);
        setCurrentBalance(0);

        // Seed journal with initial debt/target in Haber
        const initialEntry: JournalEntry = {
            id: `initial-${idx}`,
            value: level.targetAmount,
            side: 'haber',
            concept: level.id === 1 ? 'Deuda Nutria' : 'Factura Pendiente'
        };
        setJournal([initialEntry]);

        setMessage(level.pacoMessage);
        setPacoState('thinking');
    };

    const handleCoinClick = (coin: Coin) => {
        // Play cash register sound
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // Cash register "cha-ching" sound
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);

        setTableCoins(prev => prev.filter(c => c.id !== coin.id));

        const valueChange = coin.side === 'debe' ? coin.value : -coin.value;
        const nextBalance = Number((currentBalance + valueChange).toFixed(2));
        setCurrentBalance(nextBalance);

        const newEntry: JournalEntry = {
            id: `entry-${Math.random()}`,
            value: coin.value,
            side: coin.side,
            concept: coin.side === 'debe' ? 'Ingreso monetario' : 'Pago / Gasto'
        };
        setJournal(prev => [newEntry, ...prev]);

        const feedbackId = Math.random().toString();
        const feedbackText = `${coin.side === 'debe' ? '+' : '-'}${coin.value.toFixed(2)}€ (${coin.side.toUpperCase()})`;
        setFeedbacks(prev => [...prev, { id: feedbackId, text: feedbackText, x: coin.x, y: coin.y, side: coin.side }]);
        setTimeout(() => {
            setFeedbacks(prev => prev.filter(f => f.id !== feedbackId));
        }, 2000);

        if (nextBalance === currentLevel.targetAmount) {
            setPacoState('happy');
            setMessage('¡Exacto! ¡Excelente trabajo contable!');
            confetti();
            setTimeout(() => {
                if (currentLevelIdx < LEVELS.length - 1) {
                    setCurrentLevelIdx(prev => prev + 1);
                } else {
                    setMessage('¡Has completado todos los niveles! ¡Eres un experto en Paco Contador!');
                }
            }, 5000);
        } else if (!currentLevel.isMixed) {
            if (nextBalance > currentLevel.targetAmount) {
                setPacoState('error');
                setMessage('¡Cuac! Te has pasado del total. Prueba otra vez.');
                setTimeout(() => initLevel(currentLevelIdx), 4000);
            }
        } else {
            if (tableCoins.length === 1 && nextBalance !== currentLevel.targetAmount) {
                setPacoState('error');
                setMessage('¡Cuac! El balance final no es correcto. Repasemos las cuentas.');
                setTimeout(() => initLevel(currentLevelIdx), 4000);
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>Paco Contador - Juego Educativo de Contabilidad | Pato Contable</title>
                <meta name="description" content="Aprende contabilidad de forma divertida con Paco Contador. Practica conceptos contables básicos mientras juegas." />
            </Helmet>

            <div className="game-container">
                {/* Background */}
                <div className="game-background" />

                {/* Floating Feedbacks */}
                {feedbacks.map(f => (
                    <div
                        key={f.id}
                        className={`float-feedback ${f.side}`}
                        style={{
                            left: `${f.x}%`,
                            top: `${f.y}%`,
                            animation: 'floatUp 2s ease-out forwards'
                        }}
                    >
                        {f.text}
                    </div>
                ))}

                {/* Header */}
                <div className="game-header">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        key={currentLevel.id}
                        className="game-concept-container-top"
                    >
                        <p className="game-concept">{currentLevel.concept}</p>
                    </motion.div>

                    {/* Mobile Journal Toggle */}
                    <button
                        className="journal-toggle"
                        onClick={() => setJournalOpen(!journalOpen)}
                        aria-label="Toggle journal"
                    >
                        <span className="material-symbols-outlined">menu_book</span>
                    </button>
                </div>

                {/* Main Table Area */}
                <div className="table-area">
                    <AnimatePresence>
                        {tableCoins.map((coin) => {

                            return (
                                <motion.div
                                    key={coin.id}
                                    className={`coin-element ${coin.side}`}
                                    initial={{
                                        scale: 1,
                                        opacity: 1,
                                        rotate: -180,
                                        left: `${coin.x}%`,
                                        top: `${coin.y}%`
                                    }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        left: `${coin.x}%`,
                                        top: '110%',
                                        rotate: 360
                                    }}
                                    transition={{
                                        duration: 8,
                                        ease: 'linear'
                                    }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    onClick={() => handleCoinClick(coin)}
                                    style={{ position: 'absolute' }}
                                    whileHover={{ scale: 1.2, boxShadow: '0 10px 20px rgba(0,0,0,0.4)' }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    {coin.value < 1 ? `${(coin.value * 100).toFixed(0)}c` : `${coin.value}€`}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                {/* Paco and Speech Bubble */}
                <motion.img
                    src="/img/img-pato.webp"
                    alt="Paco el Pato"
                    className="paco-duck"
                    animate={{
                        y: pacoState === 'happy' ? [0, -20, 0] : 0,
                        rotate: pacoState === 'error' ? [0, -5, 5, -5, 5, 0] : 0
                    }}
                    transition={{ repeat: pacoState === 'happy' ? Infinity : 0, duration: 0.5 }}
                />

                <AnimatePresence>
                    {message && (
                        <motion.div
                            className="speech-bubble"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            {message}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Journal Panel */}
                <motion.div
                    className={`journal-panel ${journalOpen ? 'open' : ''}`}
                    initial={isMobile ? { y: '100%', opacity: 1 } : { x: 300, opacity: 0 }}
                    animate={{
                        x: isMobile ? 0 : 0,
                        y: isMobile ? (journalOpen ? 0 : '100%') : 0,
                        opacity: 1
                    }}
                    transition={{ type: 'spring', damping: 30, stiffness: 250 }}
                >
                    <div className="journal-header">
                        LIBRO DIARIO
                        <button
                            className="journal-close"
                            onClick={() => setJournalOpen(false)}
                            aria-label="Close journal"
                        >
                            <span className="material-symbols-outlined">remove</span>
                        </button>
                    </div>
                    <div className="journal-table-container">
                        <table className="journal-table">
                            <thead>
                                <tr>
                                    <th>Concepto</th>
                                    <th className="col-debe">Debe</th>
                                    <th className="col-haber">Haber</th>
                                </tr>
                            </thead>
                            <tbody>
                                {journal.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} style={{ textAlign: 'center', opacity: 0.5, padding: '20px' }}>
                                            Esperando transacciones...
                                        </td>
                                    </tr>
                                ) : (
                                    <AnimatePresence>
                                        {journal.map((entry, index) => (
                                            <motion.tr
                                                key={entry.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0 }}
                                                style={{
                                                    background: index === 0 && entry.id.startsWith('entry') ? 'rgba(255,255,255,0.05)' : 'none',
                                                    borderLeft: entry.id.startsWith('initial') ? '4px solid #FF7043' : 'none'
                                                }}
                                            >
                                                <td>{entry.concept}</td>
                                                <td className="entry-debe">{entry.side === 'debe' ? `${entry.value.toFixed(2)}€` : ''}</td>
                                                <td className="entry-haber">{entry.side === 'haber' ? `${entry.value.toFixed(2)}€` : ''}</td>
                                            </motion.tr>
                                        ))}
                                    </AnimatePresence>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="journal-footer">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>TOTAL DEBE</span>
                            <span>{journal.reduce((acc, e) => acc + (e.side === 'debe' ? e.value : 0), 0).toFixed(2)}€</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                            <span style={{ fontSize: '0.7rem', opacity: 0.7 }}>TOTAL HABER</span>
                            <span>{journal.reduce((acc, e) => acc + (e.side === 'haber' ? e.value : 0), 0).toFixed(2)}€</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Game;
