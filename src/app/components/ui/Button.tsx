import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-purple-600 text-white px-6 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
