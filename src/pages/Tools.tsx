import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PGCDatabase from '../components/tools/PGCDatabase';
import FiscalCalendar from '../components/tools/FiscalCalendar';
import './Tools.css';

const Tools: React.FC = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'pgc' | 'calendar'>('pgc');

    return (
        <div className="tools-page">
            <section className="tools-hero">
                <div className="container">
                    <h1 className="page-title">{t('tools.title')}</h1>
                </div>
            </section>

            <div className="container">
                {/* Tabs */}
                <div className="tools-tabs">
                    <button
                        className={`tab-button ${activeTab === 'pgc' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pgc')}
                    >
                        <span className="material-symbols-outlined">account_balance</span>
                        {t('tools.pgc.tab')}
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'calendar' ? 'active' : ''}`}
                        onClick={() => setActiveTab('calendar')}
                    >
                        <span className="material-symbols-outlined">calendar_month</span>
                        {t('tools.calendar.tab')}
                    </button>
                </div>

                {/* Tab Content */}
                <div className="tools-content">
                    {activeTab === 'pgc' && (
                        <div className="pgc-section">
                            <PGCDatabase />
                        </div>
                    )}

                    {activeTab === 'calendar' && (
                        <div className="calendar-section">
                            <FiscalCalendar />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tools;
