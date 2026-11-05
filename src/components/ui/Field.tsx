import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClasses =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-charcoal">
      {children}
      {required && <span className="text-accent"> *</span>}
    </label>
  );
}

export function Input({
  label,
  id,
  required,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string; id: string; error?: string }) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <input id={id} required={required} className={fieldClasses} {...props} />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

export function Textarea({
  label,
  id,
  required,
  error,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; id: string; error?: string }) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <textarea id={id} required={required} className={fieldClasses} {...props} />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

export function Select({
  label,
  id,
  required,
  error,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { label: string; id: string; error?: string }) {
  return (
    <div>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <select id={id} required={required} className={fieldClasses} {...props}>
        {children}
      </select>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
