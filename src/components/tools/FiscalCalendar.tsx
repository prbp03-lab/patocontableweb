import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import fiscalCalendar from '../../data/fiscal-calendar';
import { FiscalDeclaration } from '../../types';
import './FiscalCalendar.css';

const FiscalCalendar: React.FC = () => {
    const { t, i18n } = useTranslation();

    // Group declarations by category
    const groupedDeclarations = useMemo(() => {
        const groups: Record<string, FiscalDeclaration[]> = {
            IVA: [],
            IRPF: [],
            Sociedades: [],
            Informativa: [],
        };

        fiscalCalendar.forEach(declaration => {
            groups[declaration.category].push(declaration);
        });

        return groups;
    }, []);

    const getDeclarationName = (declaration: FiscalDeclaration) => {
        return i18n.language === 'ca' && declaration.nameCA ? declaration.nameCA : declaration.name;
    };

    const getDeclarationDescription = (declaration: FiscalDeclaration) => {
        return i18n.language === 'ca' && declaration.descriptionCA
            ? declaration.descriptionCA
            : declaration.description;
    };

    const formatDeadline = (deadline: FiscalDeclaration['deadlines'][0]) => {
        const monthName = t(`tools.calendar.months.${deadline.month - 1}`);
        return `${deadline.dayStart}-${deadline.dayEnd} ${monthName}`;
    };

    const getCategoryColor = (category: string) => {
        const colors: Record<string, string> = {
            IVA: '#0d93f2',
            IRPF: '#22c55e',
            Sociedades: '#fbbf24',
            Informativa: '#a855f7',
        };
        return colors[category] || '#64748b';
    };

    const getNextDeadline = (declaration: FiscalDeclaration) => {
        const now = new Date();
        const currentMonth = now.getMonth() + 1;

        for (const deadline of declaration.deadlines) {
            if (deadline.month >= currentMonth) {
                return deadline;
            }
        }
        return declaration.deadlines[0]; // Return first deadline if all have passed
    };

    return (
        <div className="fiscal-calendar">
            {/* Calendar Header */}
            <div className="calendar-header">
                <h2 className="calendar-title">{t('tools.calendar.title')}</h2>
                <p className="calendar-description">
                    Obligaciones fiscales para PYMES en España
                </p>
            </div>

            {/* Categories */}
            {Object.entries(groupedDeclarations).map(([category, declarations]) => (
                declarations.length > 0 && (
                    <div key={category} className="calendar-category">
                        <div className="category-header">
                            <div
                                className="category-indicator"
                                style={{ backgroundColor: getCategoryColor(category) }}
                            />
                            <h3 className="category-title">
                                {t(`tools.calendar.categories.${category.toLowerCase()}`)}
                            </h3>
                            <span className="category-count">
                                {declarations.length} {declarations.length === 1 ? 'modelo' : 'modelos'}
                            </span>
                        </div>

                        <div className="declarations-grid">
                            {declarations.map((declaration) => {
                                const nextDeadline = getNextDeadline(declaration);

                                return (
                                    <div
                                        key={declaration.model}
                                        className="declaration-card glass-card"
                                        style={{ borderLeftColor: getCategoryColor(category) }}
                                    >
                                        <div className="declaration-header">
                                            <div className="model-badge" style={{ backgroundColor: getCategoryColor(category) }}>
                                                {declaration.model}
                                            </div>
                                            <div className="declaration-type">
                                                {declaration.type === 'Trimestral' ? (
                                                    <span className="type-badge type-quarterly">
                                                        <span className="material-symbols-outlined">calendar_view_month</span>
                                                        {t('tools.calendar.quarterly')}
                                                    </span>
                                                ) : (
                                                    <span className="type-badge type-annual">
                                                        <span className="material-symbols-outlined">calendar_today</span>
                                                        {t('tools.calendar.annual')}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <h4 className="declaration-name">{getDeclarationName(declaration)}</h4>
                                        <p className="declaration-description">{getDeclarationDescription(declaration)}</p>

                                        <div className="declaration-details">
                                            <div className="detail-item">
                                                <label>
                                                    <span className="material-symbols-outlined">event</span>
                                                    {t('tools.calendar.deadline')}
                                                </label>
                                                <div className="deadlines-list">
                                                    {declaration.deadlines.map((deadline, index) => (
                                                        <span key={index} className="deadline-chip">
                                                            {formatDeadline(deadline)}
                                                            {deadline.quarter && ` (T${deadline.quarter})`}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {declaration.accounts.length > 0 && (
                                                <div className="detail-item">
                                                    <label>
                                                        <span className="material-symbols-outlined">account_balance</span>
                                                        {t('tools.calendar.accounts')}
                                                    </label>
                                                    <div className="accounts-list">
                                                        {declaration.accounts.map((account) => (
                                                            <code key={account} className="account-code">
                                                                {account}
                                                            </code>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )
            ))}

            {/* Timeline View */}
            <div className="timeline-section">
                <h3 className="timeline-title">
                    <span className="material-symbols-outlined">timeline</span>
                    Línea Temporal Anual
                </h3>

                <div className="timeline-container">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => {
                        const monthDeclarations = fiscalCalendar.filter(d =>
                            d.deadlines.some(deadline => deadline.month === month)
                        );

                        return (
                            <div key={month} className="timeline-month">
                                <div className="month-header">
                                    <span className="month-name">{t(`tools.calendar.months.${month - 1}`)}</span>
                                    {monthDeclarations.length > 0 && (
                                        <span className="month-badge">{monthDeclarations.length}</span>
                                    )}
                                </div>
                                {monthDeclarations.length > 0 && (
                                    <div className="month-declarations">
                                        {monthDeclarations.map(d => (
                                            <div
                                                key={d.model}
                                                className="timeline-item"
                                                style={{ backgroundColor: getCategoryColor(d.category) }}
                                                title={getDeclarationName(d)}
                                            >
                                                {d.model}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FiscalCalendar;
