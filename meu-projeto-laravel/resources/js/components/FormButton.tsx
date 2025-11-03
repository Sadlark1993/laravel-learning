import { ButtonHTMLAttributes } from 'react';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;
  variant?: 'primary' | 'secondary' | 'danger';
  fullWidth?: boolean;
}

const FormButton = ({
  children,
  loading = false,
  loadingText,
  variant = 'primary',
  fullWidth = false,
  disabled,
  className = '',
  ...buttonProps
}: FormButtonProps) => {
  const baseClasses = 'rounded-md px-4 py-2 font-medium focus:ring-2 focus:ring-offset-2 focus:outline-none transition-colors';

  const variantClasses = {
    primary: loading || disabled ? 'cursor-not-allowed bg-gray-400 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: loading || disabled ? 'cursor-not-allowed bg-gray-400 text-white' : 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500',
    danger: loading || disabled ? 'cursor-not-allowed bg-gray-400 text-white' : 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const buttonClassName = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;

  return (
    <button className={buttonClassName} disabled={loading || disabled} {...buttonProps}>
      {loading ? loadingText || 'Loading...' : children}
    </button>
  );
};

export default FormButton;
