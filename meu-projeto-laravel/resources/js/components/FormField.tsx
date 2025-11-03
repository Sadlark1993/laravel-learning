import { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
}

const FormField = ({ label, name, error, required = false, className = '', ...inputProps }: FormFieldProps) => {
  const inputClassName = `w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
    error ? 'border-red-500' : 'border-gray-300'
  } ${className}`;

  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
        {label} {required && '*'}
      </label>
      <input id={name} name={name} className={inputClassName} {...inputProps} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormField;
