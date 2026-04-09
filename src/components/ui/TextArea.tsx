"use client";

import { useState } from "react";

interface TextAreaProps {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  readonly?: boolean;
  error?: string | null;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  description?: string;
  required?: boolean;
  className?: string;
  rows?: number;
  cols?: number;
  minLength?: number;
  maxLength?: number;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  disabled,
  name,
  readonly,
  label,
  value,
  onChange,
  onBlur,
  error,
  description,
  required = false,
  className = "",
  rows = 4,
  cols,
  minLength,
  maxLength,
  resize = 'none',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const getLabelClasses = () => {
    let classes = "block text-black text-sm font-medium mb-2 transition-colors duration-200";
    
    if (error) {
      classes += " text-red-600";
    } else if (isFocused) {
      classes += " text-primary";
    } else {
      classes += " text-gray-700";
    }
    
    return classes;
  };

  const getTextAreaClasses = () => {
    let classes = `
      w-full px-4 py-3 text-base bg-[#fff] border rounded-lg 
      transition-all duration-200 focus:outline-none focus:ring-2 
      placeholder:text-[#919191] placeholder:text-[14px] font-twk
    `;

    if (error) {
      classes += " border-red-500 focus:border-red-500 focus:ring-red-200 text-red-600";
    } else if (isFocused) {
      classes += "border-[2px] border-[#FFDB7F] focus:border-[#FFDB7F] focus:ring-[#FFDB7F]/20";
    } else {
      classes += " border-gray-300 hover:border-gray-400 focus:border-primary focus:ring-primary/20";
    }

    if (disabled) {
      classes += " bg-gray-50 text-gray-500 cursor-not-allowed opacity-60";
    }

    if (readonly) {
      classes += " bg-gray-50 cursor-default";
    }

    // Add resize styles
    switch (resize) {
      case 'none':
        classes += " resize-none";
        break;
      case 'horizontal':
        classes += " resize-x";
        break;
      case 'both':
        classes += " resize";
        break;
      case 'vertical':
      default:
        classes += " resize-y";
        break;
    }

    return classes;
  };

  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={name} className={getLabelClasses()}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      {description && (
        <p className="text-sm text-gray-600 mb-2">
          {description}
        </p>
      )}
      
      <div className="relative">
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          readOnly={readonly}
          rows={rows}
          cols={cols}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          className={getTextAreaClasses()}
        />
        
        {maxLength && (
          <div className="absolute bottom-2 right-2 text-xs text-gray-400">
            {value.length}/{maxLength}
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;