import React from 'react';
import './AccountCodeLink.css';

interface AccountCodeLinkProps {
    text: string;
    onAccountClick?: (accountCode: string) => void;
}

/**
 * Component that detects account codes in text (format: (XXX) where X are digits)
 * and converts them into clickable buttons that trigger a callback
 */
const AccountCodeLink: React.FC<AccountCodeLinkProps> = ({ text, onAccountClick }) => {
    // Regex to match account codes like (213), (477), (4751), etc.
    const accountCodeRegex = /\((\d{3,4})\)/g;

    // Split text into parts, separating account codes from regular text
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;

    while ((match = accountCodeRegex.exec(text)) !== null) {
        const fullMatch = match[0]; // e.g., "(477)"
        const code = match[1]; // e.g., "477"
        const matchIndex = match.index;

        // Add text before the match
        if (matchIndex > lastIndex) {
            parts.push(text.substring(lastIndex, matchIndex));
        }

        // Add the clickable account code button
        parts.push(
            <button
                key={`account-${code}-${matchIndex}`}
                className="account-code-link"
                title={`Ver cuenta ${code} en la base de datos PGC`}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (onAccountClick) {
                        onAccountClick(code);
                    }
                }}
                type="button"
            >
                {fullMatch}
            </button>
        );

        lastIndex = matchIndex + fullMatch.length;
    }

    // Add remaining text after the last match
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    // If no matches found, return original text
    if (parts.length === 0) {
        return <>{text}</>;
    }

    return <>{parts}</>;
};

export default AccountCodeLink;
