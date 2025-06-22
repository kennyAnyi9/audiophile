interface FormInputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  error,
  value,
  onChange,
  className = "",
}: FormInputProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label 
        htmlFor={name}
        className={`block text-xs font-bold ${
          error ? "text-red-500" : "text-black"
        }`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-6 py-[18px] border rounded-lg text-sm font-bold placeholder:text-black/40 focus:outline-none focus:ring-2 transition-all ${
          error
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:border-primary focus:ring-primary/20"
        }`}
      />
      
      {error && (
        <p className="text-xs font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}