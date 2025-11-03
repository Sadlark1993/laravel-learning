import { SelectHTMLAttributes } from 'react';

interface Option {
  value: string | number;
  label: string;
}

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: Option[];
  error?: string;
  required?: boolean;
  placeholder?: string;
}

const FormSelect = ({
  label,
  name,
  options,
  error,
  required = false,
  placeholder = 'Select an option',
  className = '',
  ...selectProps
}: FormSelectProps) => {
  const selectClassName = `w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none ${
    error ? 'border-red-500' : 'border-gray-300'
  } ${className}`;

  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
        {label} {required && '*'}
      </label>
      <select id={name} name={name} className={selectClassName} {...selectProps}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormSelect;
