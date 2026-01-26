import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import pgcData from '../../data/pgc-data';
import { PGCAccount } from '../../types';
import './PGCDatabase.css';

interface PGCDatabaseProps {
    onAccountSelect?: (account: PGCAccount) => void;
}

const PGCDatabase: React.FC<PGCDatabaseProps> = ({ onAccountSelect }) => {
    const { t, i18n } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGroup, setSelectedGroup] = useState<number | 'all'>('all');
    const [selectedNature, setSelectedNature] = useState<string>('all');
    const [selectedStatement, setSelectedStatement] = useState<string>('all');
    const [selectedAccount, setSelectedAccount] = useState<PGCAccount | null>(null);

    // Filter accounts based on search and filters
    const filteredAccounts = useMemo(() => {
        return pgcData.filter(account => {
            const matchesSearch =
                searchQuery === '' ||
                account.code.includes(searchQuery) ||
                account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (account.nameCA && account.nameCA.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesGroup = selectedGroup === 'all' || account.group === selectedGroup;
            const matchesNature = selectedNature === 'all' || account.nature === selectedNature;
            const matchesStatement = selectedStatement === 'all' || account.financialStatement === selectedStatement;

            return matchesSearch && matchesGroup && matchesNature && matchesStatement;
        });
    }, [searchQuery, selectedGroup, selectedNature, selectedStatement]);

    const handleAccountClick = (account: PGCAccount) => {
        setSelectedAccount(account);
        onAccountSelect?.(account);
    };

    const handleCloseModal = () => {
        setSelectedAccount(null);
    };

    const getAccountName = (account: PGCAccount) => {
        return i18n.language === 'ca' && account.nameCA ? account.nameCA : account.name;
    };

    const getAccountDescription = (account: PGCAccount) => {
        return i18n.language === 'ca' && account.descriptionCA ? account.descriptionCA : account.description;
    };

    const handleExportCSV = () => {
        const headers = [
            t('tools.pgc.table.code'),
            t('tools.pgc.table.name'),
            t('tools.pgc.table.nature'),
            t('tools.pgc.table.group'),
            t('tools.pgc.table.statement')
        ];

        const csvRows = filteredAccounts.map(account => [
            account.code,
            `"${getAccountName(account)}"`,
            t(`tools.pgc.nature.${account.nature.toLowerCase()}`),
            `"${t(`tools.pgc.groups.${account.group}`)}"`,
            t(`tools.pgc.statement.${account.financialStatement.toLowerCase()}`)
        ].join(','));

        const csvContent = [headers.join(','), ...csvRows].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `PGC_Export_${i18n.language.toUpperCase()}_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="pgc-database">
            {/* Search and Filters */}
            <div className="pgc-controls">
                <div className="search-box">
                    <span className="material-symbols-outlined">search</span>
                    <input
                        type="text"
                        placeholder={t('tools.pgc.search')}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                    {searchQuery && (
                        <button
                            className="clear-button"
                            onClick={() => setSearchQuery('')}
                            aria-label="Clear search"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    )}
                </div>

                <div className="filters">
                    <select
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                        className="filter-select"
                    >
                        <option value="all">{t('tools.pgc.filters.all')} - {t('tools.pgc.filters.group')}</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(group => (
                            <option key={group} value={group}>
                                {t(`tools.pgc.groups.${group}`)}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedNature}
                        onChange={(e) => setSelectedNature(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">{t('tools.pgc.filters.all')} - {t('tools.pgc.filters.nature')}</option>
                        <option value="Deudora">{t('tools.pgc.nature.deudora')}</option>
                        <option value="Acreedora">{t('tools.pgc.nature.acreedora')}</option>
                        <option value="Variable">{t('tools.pgc.nature.variable')}</option>
                    </select>

                    <select
                        value={selectedStatement}
                        onChange={(e) => setSelectedStatement(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">{t('tools.pgc.filters.all')} - {t('tools.pgc.filters.statement')}</option>
                        <option value="Balance">{t('tools.pgc.statement.balance')}</option>
                        <option value="PyG">{t('tools.pgc.statement.pyg')}</option>
                        <option value="ECPN">{t('tools.pgc.statement.ecpn')}</option>
                    </select>
                </div>
            </div>

            {/* Results Count and Export */}
            <div className="results-info">
                <p className="results-count">
                    {filteredAccounts.length} {filteredAccounts.length === 1 ? 'cuenta encontrada' : 'cuentas encontradas'}
                </p>
                {filteredAccounts.length > 0 && (
                    <button className="export-button" onClick={handleExportCSV}>
                        <span className="material-symbols-outlined">download</span>
                        {t('tools.pgc.export')}
                    </button>
                )}
            </div>

            {/* Accounts Table */}
            <div className="pgc-table-container">
                {filteredAccounts.length === 0 ? (
                    <div className="no-results">
                        <span className="material-symbols-outlined">search_off</span>
                        <p>{t('tools.pgc.noResults')}</p>
                    </div>
                ) : (
                    <table className="pgc-table">
                        <thead>
                            <tr>
                                <th>{t('tools.pgc.table.code')}</th>
                                <th>{t('tools.pgc.table.name')}</th>
                                <th>{t('tools.pgc.table.nature')}</th>
                                <th>{t('tools.pgc.table.group')}</th>
                                <th>{t('tools.pgc.table.statement')}</th>
                                <th>{t('tools.pgc.table.actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAccounts.map((account) => (
                                <tr key={account.code} onClick={() => handleAccountClick(account)}>
                                    <td className="code-cell">
                                        <code>{account.code}</code>
                                    </td>
                                    <td className="name-cell">{getAccountName(account)}</td>
                                    <td className="nature-cell">
                                        <span className={`nature-badge nature-${account.nature.toLowerCase()}`}>
                                            {t(`tools.pgc.nature.${account.nature.toLowerCase()}`)}
                                        </span>
                                    </td>
                                    <td className="group-cell">
                                        <span className="group-badge">
                                            Grupo {account.group}
                                        </span>
                                    </td>
                                    <td className="statement-cell">
                                        {t(`tools.pgc.statement.${account.financialStatement.toLowerCase()}`)}
                                    </td>
                                    <td className="actions-cell">
                                        <button
                                            className="view-button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAccountClick(account);
                                            }}
                                        >
                                            <span className="material-symbols-outlined">visibility</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Account Detail Modal */}
            {selectedAccount && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2 className="modal-title">
                                <code>{selectedAccount.code}</code> - {getAccountName(selectedAccount)}
                            </h2>
                            <button className="modal-close" onClick={handleCloseModal}>
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="detail-grid">
                                <div className="detail-item">
                                    <label>{t('tools.pgc.table.nature')}</label>
                                    <span className={`nature-badge nature-${selectedAccount.nature.toLowerCase()}`}>
                                        {t(`tools.pgc.nature.${selectedAccount.nature.toLowerCase()}`)}
                                    </span>
                                </div>

                                <div className="detail-item">
                                    <label>{t('tools.pgc.table.group')}</label>
                                    <span className="group-badge">
                                        {t(`tools.pgc.groups.${selectedAccount.group}`)}
                                    </span>
                                </div>

                                <div className="detail-item">
                                    <label>{t('tools.pgc.table.statement')}</label>
                                    <span>{t(`tools.pgc.statement.${selectedAccount.financialStatement.toLowerCase()}`)}</span>
                                </div>
                            </div>

                            {getAccountDescription(selectedAccount) && (
                                <div className="detail-section">
                                    <h3>{t('tools.pgc.detail.description')}</h3>
                                    <p>{getAccountDescription(selectedAccount)}</p>
                                </div>
                            )}

                            {selectedAccount.fiscalModels && selectedAccount.fiscalModels.length > 0 && (
                                <div className="detail-section">
                                    <h3>{t('tools.pgc.detail.fiscalModels')}</h3>
                                    <div className="fiscal-models">
                                        {selectedAccount.fiscalModels.map((model) => (
                                            <span key={model} className="fiscal-model-badge">
                                                Modelo {model}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {selectedAccount.journalExample && (
                                <div className="detail-section">
                                    <h3>{t('tools.pgc.detail.journalExample')}</h3>
                                    <div className="journal-entry-card">
                                        <div className="journal-header">
                                            <span className="journal-desc">
                                                {i18n.language === 'ca' && selectedAccount.journalExample.descriptionCA
                                                    ? selectedAccount.journalExample.descriptionCA
                                                    : selectedAccount.journalExample.description}
                                            </span>
                                        </div>
                                        <div className="journal-table">
                                            <div className="journal-row journal-labels">
                                                <span>{t('tools.pgc.detail.debe')}</span>
                                                <span>{t('tools.pgc.detail.haber')}</span>
                                            </div>
                                            <div className="journal-row journal-values">
                                                <div className="journal-col debe">
                                                    <code>{selectedAccount.journalExample.debe}</code>
                                                </div>
                                                <div className="journal-arrow">
                                                    <span className="material-symbols-outlined">double_arrow</span>
                                                </div>
                                                <div className="journal-col haber">
                                                    <code>{selectedAccount.journalExample.haber}</code>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {selectedAccount.commonCounterparts && selectedAccount.commonCounterparts.length > 0 && (
                                <div className="detail-section">
                                    <h3>{t('tools.pgc.detail.counterparts')}</h3>
                                    <div className="counterparts">
                                        {selectedAccount.commonCounterparts.map((code) => (
                                            <code key={code} className="counterpart-code">
                                                {code}
                                            </code>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PGCDatabase;
