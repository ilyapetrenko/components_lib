import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  disabled = false,
  onClick,
  size = 'medium',
  children,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
