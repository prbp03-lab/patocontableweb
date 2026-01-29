import React from 'react';
import { useTranslation } from 'react-i18next';
import pgcData from '../../data/pgc-data';
import { PGCAccount } from '../../types';
import './AccountModal.css';

interface AccountModalProps {
    accountCode: string;
    onClose: () => void;
}

const AccountModal: React.FC<AccountModalProps> = ({ accountCode, onClose }) => {
    const { t, i18n } = useTranslation();

    // Find the account in the database
    const account = pgcData.find(acc => acc.code === accountCode);

    if (!account) {
        return null;
    }

    const getAccountName = (account: PGCAccount) => {
        return i18n.language === 'ca' && account.nameCA ? account.nameCA : account.name;
    };

    const getAccountDescription = (account: PGCAccount) => {
        return i18n.language === 'ca' && account.descriptionCA ? account.descriptionCA : account.description;
    };

    return (
        <div className="account-modal-overlay" onClick={onClose}>
            <div className="account-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="account-modal-header">
                    <h3 className="account-modal-title">
                        <code>{account.code}</code> - {getAccountName(account)}
                    </h3>
                    <button className="account-modal-close" onClick={onClose}>
                        ✕
                    </button>
                </div>

                <div className="account-modal-body">
                    <div className="account-detail-grid">
                        <div className="account-detail-item">
                            <label>{t('tools.pgc.table.nature')}</label>
                            <span className={`nature-badge nature-${account.nature.toLowerCase()}`}>
                                {t(`tools.pgc.nature.${account.nature.toLowerCase()}`)}
                            </span>
                        </div>

                        <div className="account-detail-item">
                            <label>{t('tools.pgc.table.group')}</label>
                            <span className="group-badge">
                                {t(`tools.pgc.groups.${account.group}`)}
                            </span>
                        </div>

                        <div className="account-detail-item">
                            <label>{t('tools.pgc.table.statement')}</label>
                            <span>{t(`tools.pgc.statement.${account.financialStatement.toLowerCase()}`)}</span>
                        </div>
                    </div>

                    {getAccountDescription(account) && (
                        <div className="account-detail-section">
                            <h4>{t('tools.pgc.detail.description')}</h4>
                            <p>{getAccountDescription(account)}</p>
                        </div>
                    )}

                    {account.fiscalModels && account.fiscalModels.length > 0 && (
                        <div className="account-detail-section">
                            <h4>{t('tools.pgc.detail.fiscalModels')}</h4>
                            <div className="fiscal-models">
                                {account.fiscalModels.map((model) => (
                                    <span key={model} className="fiscal-model-badge">
                                        Modelo {model}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {account.journalExample && (
                        <div className="account-detail-section">
                            <h4>{t('tools.pgc.detail.journalExample')}</h4>
                            <div className="journal-entry-card">
                                <div className="journal-header">
                                    <span className="journal-desc">
                                        {i18n.language === 'ca' && account.journalExample.descriptionCA
                                            ? account.journalExample.descriptionCA
                                            : account.journalExample.description}
                                    </span>
                                </div>
                                <div className="journal-table">
                                    <div className="journal-row journal-labels">
                                        <span>{t('tools.pgc.detail.debe')}</span>
                                        <span>{t('tools.pgc.detail.haber')}</span>
                                    </div>
                                    <div className="journal-row journal-values">
                                        <div className="journal-col debe">
                                            <code>{account.journalExample.debe}</code>
                                        </div>
                                        <div className="journal-arrow">
                                            <span className="material-symbols-outlined">double_arrow</span>
                                        </div>
                                        <div className="journal-col haber">
                                            <code>{account.journalExample.haber}</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {account.commonCounterparts && account.commonCounterparts.length > 0 && (
                        <div className="account-detail-section">
                            <h4>{t('tools.pgc.detail.counterparts')}</h4>
                            <div className="counterparts">
                                {account.commonCounterparts.map((code) => (
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
    );
};

export default AccountModal;
