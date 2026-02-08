import React from 'react';

const Input = ({ label, type = 'text', name, placeholder, required = false, rows }) => {
    const baseInputStyles = "w-full px-4 py-3 bg-gray-50 dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400";

    return (
        <div className="mb-4">
            {label && (
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {label} {required && <span className="text-primary">*</span>}
                </label>
            )}
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    rows={rows || 4}
                    className={baseInputStyles}
                    placeholder={placeholder}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    className={baseInputStyles}
                    placeholder={placeholder}
                    required={required}
                />
            )}
        </div>
    );
};

export default Input;
