"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  readonly?: boolean;
  error?: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  autoComplete?: string;
  disabled?: boolean;
  description?: string;
  required?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

const InputField: React.FC<InputProps> = ({
  placeholder,
  disabled,
  name,
  readonly,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  min,
  max,
  description,
  required = false,
  className = "",
  icon,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordView = () => {
    setShowPassword((prev) => !prev);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
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

  const getInputClasses = () => {
    let classes = `
      w-full px-4 py-3 text-base bg-[#fff] border rounded-full 
      transition-all duration-200 focus:outline-none focus:ring-2 
      placeholder:text-[#919191] placeholder:text-[14px] font-twk
      ${icon ? "pl-12" : ""}
      ${type === "password" ? "pr-12" : ""}
    `;

    if (error) {
      classes += "border-red-500 focus:border-red-500 focus:ring-red-200 text-red-600";
    } else if (isFocused) {
      classes += "border-[2px] border-[#FFDB7F] focus:border-[#FFDB7F] focus:ring-[#FFDB7F]/20";
   
   } else {
      classes += "border-[#C0C0C0] hover:border-gray-400 focus:border-[#C0C0C0] focus:ring-primary/20";
    }

    if (disabled) {
      classes += "bg-gray-50 text-gray-500 cursor-not-allowed opacity-60";
    }

    if (readonly) {
      classes += "bg-gray-50 cursor-default";
    }

    return classes;
  };

  return (
    <div className={`w-full ${className}`}>
      <label htmlFor={name} className={getLabelClasses()}>
        {label}
        {/* {required && <span className="text-red-500 ml-1">*</span>} */}
      </label>
      
      {description && (
        <p className="text-sm text-gray-600 mb-2">
          {description}
        </p>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        
        <input
          id={name}
          name={name}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          readOnly={readonly}
          min={min}
          max={max}
          required={required}
          className={getInputClasses()}
        />
        
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordView}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff size={20} />
            ) : (
              <Eye size={20} />
            )}
          </button>
        )}
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default InputField;