"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Loader2 } from "lucide-react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  placeId?: string; // Added for Google Places
}

interface SelectFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  readonly?: boolean;
  error?: string | null;
  onChange: (value: string) => void;   // 👈 simplified
  onBlur?: (e: React.FocusEvent<HTMLSelectElement | HTMLInputElement>) => void;
  onSelect?: (option: SelectOption) => void;
  disabled?: boolean;
  description?: string;
  required?: boolean;
  className?: string;
  options: SelectOption[];
  icon?: React.ReactNode;
  isSearchable?: boolean;
  isLoading?: boolean;
  inputRef?: React.RefObject<HTMLInputElement | null>;
}

const SelectField: React.FC<SelectFieldProps> = ({
  placeholder,
  disabled,
  name,
  readonly,
  label,
  value,
  onChange,
  onBlur,
  onSelect,
  error,
  description,
  required = false,
  className = "",
  options,
  icon,
  isSearchable = false,
  isLoading = false,
  inputRef, // Added for Google Places
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef<HTMLDivElement>(null);
  const internalInputRef = useRef<HTMLInputElement>(null);
  
  // Use external ref if provided, otherwise use internal ref
  const activeInputRef = inputRef || internalInputRef;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when dropdown opens for searchable fields
  useEffect(() => {
    if (isOpen && isSearchable && activeInputRef.current && !inputRef) {
      // Only auto-focus if we're not using external ref (Google Places handles its own focus)
      activeInputRef.current.focus();
    }
  }, [isOpen, isSearchable, inputRef,activeInputRef]);

  // Update search term when value changes externally
  useEffect(() => {
    if (isSearchable && value !== searchTerm) {
      setSearchTerm(value);
    }
  }, [value, isSearchable, searchTerm]);

  const handleFocus = () => {
    setIsFocused(true);
    if (isSearchable) {
      setIsOpen(true);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement | HTMLInputElement>) => {
    // Don't blur immediately if clicking on dropdown options
    setTimeout(() => {
      if (!selectRef.current?.contains(document.activeElement)) {
        setIsFocused(false);
        setIsOpen(false);
        onBlur?.(e);
      }
    }, 100);
  };

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const newValue = e.target.value;
  setSearchTerm(newValue);

  if (isSearchable && onChange) {
    onChange(newValue); // ✅ always string
  }

  if (!isOpen && !inputRef) {
    setIsOpen(true);
  }
};

const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  onChange(e.target.value); // ✅ pass only the value
};

const handleOptionSelect = (option: SelectOption) => {
  setSearchTerm(option.label);
  setIsOpen(false);
  setIsFocused(false);

  if (onSelect) {
    onSelect(option);
  } else if (onChange) {
    onChange(option.value); // ✅ always string
  }
};

//   const toggleDropdown = () => {
//     if (!disabled && !readonly && isSearchable) {
//       setIsOpen(!isOpen);
//       setIsFocused(!isOpen);
//     }
//   };

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
      transition-all duration-200 focus:outline-none focus:ring-[1px] 
      font-twk placeholder:text-[#919191] placeholder:text-[14px]
      ${icon ? "pl-12" : ""}
      pr-12
    `;

    if (error) {
      classes += " border-red-500 focus:border-red-500 focus:ring-red-200 text-red-600";
    } else if (isFocused) {
      classes += "border-[1px] border-[#C0C0C0] focus:border-[#C0C0C0] focus:ring-[#C0C0C0]/20";
    } else {
      classes += " border-gray-300 hover:border-gray-400 focus:border-primary focus:ring-primary/20";
    }

    if (disabled) {
      classes += " bg-gray-50 text-gray-500 cursor-not-allowed opacity-60";
    }

    if (readonly) {
      classes += " bg-gray-50 cursor-default";
    }

    return classes;
  };

  const getSelectClasses = () => {
    let classes = `
      w-full px-4 py-3 text-base bg-[#fff] border rounded-full 
      transition-all duration-200 focus:outline-none focus:ring-2 
      font-twk appearance-none cursor-pointer
      ${icon ? "pl-12" : ""}
      pr-12
    `;

    if (error) {
      classes += " border-red-500 focus:border-red-500 focus:ring-red-200 text-red-600";
    } else if (isFocused) {
      classes += " border-primary focus:border-primary focus:ring-primary/20";
    } else {
      classes += " border-gray-300 hover:border-gray-400 focus:border-primary focus:ring-primary/20";
    }

    if (disabled) {
      classes += " bg-gray-50 text-gray-500 cursor-not-allowed opacity-60";
    }

    if (readonly) {
      classes += " bg-gray-50 cursor-default";
    }

    // Handle placeholder styling
    if (!value && placeholder) {
      classes += " text-gray-400";
    }

    return classes;
  };

  const displayValue = isSearchable ? searchTerm : value;
//   const displayIcon = isSearchable ? (icon || <Search size={20} />) : icon;

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
      
      <div className="relative" ref={selectRef}>
        {/* {displayIcon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10">
            {displayIcon}
          </div>
        )} */}
        
        {isSearchable ? (
          <>
            <input
              ref={activeInputRef}
              type="text"
              id={name}
              name={name}
              value={displayValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={disabled || readonly}
              required={required}
              placeholder={placeholder}
              className={getInputClasses()}
              autoComplete="off"
            />
            
            {/* Only show custom dropdown if not using Google Places */}
            {isOpen && !inputRef && (
              <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-[#EBEBEB] border border-gray-300 shadow-lg">
                {options.length === 0 ? (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin" />
                        Loading locations...
                      </div>
                    ) : (
                      'No locations found'
                    )}
                  </div>
                ) : (
                  options.map((option, index) => (
                    <div
                      key={`${option.value}-${index}`}
                      className={`
                        px-4 py-3 cursor-pointer text-sm hover:bg-gray-50 transition-colors duration-150
                        ${option.disabled ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900'}
                        ${value === option.value ? 'bg-primary/10 text-primary' : ''}
                      `}
                      onClick={() => !option.disabled && handleOptionSelect(option)}
                    >
                      {option.label}
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        ) : (
          <select
            id={name}
            name={name}
            value={value}
            onChange={handleSelectChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled || readonly}
            required={required}
            className={getSelectClasses()}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        )}
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          {isLoading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <ChevronDown 
              size={20} 
              className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            />
          )}
        </div>
      </div>
      
      {error && (
        <p className="text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default SelectField;