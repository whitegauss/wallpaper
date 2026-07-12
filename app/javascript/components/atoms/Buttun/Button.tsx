import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'afk';

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ 
  label = 'Button', 
  onClick, 
  variant = 'primary' 
}) => {
  
  const baseStyles = "px-4 py-2 rounded-lg font-bold transition-colors duration-200 shadow-md active:scale-95";
  
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-700 text-gray-100 hover:bg-gray-600",
    afk: "bg-purple-600 text-white hover:bg-purple-500 animate-pulse",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;