import React from 'react';
import styles from './Button.module.css';
import cn from 'classnames'

export interface ButtonProps {
  variant?: 'text' | 'contained' | 'outlined';
  disabled?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  title?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  disabled = false,
  onClick,
  size = 'medium',
  title = 'Button'

}) => {
  const mainCn = cn(
      styles.button,
      styles[variant],
      styles[size],
  )
  return (
    <button
      className={mainCn}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
