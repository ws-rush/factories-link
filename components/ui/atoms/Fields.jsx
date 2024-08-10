import clsx from "clsx";

const formClasses =
  "block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm";

function Label({ id, children, className }) {
  return (
    <label
      htmlFor={id}
      className={clsx(
        "mb-2 block text-sm font-semibold text-gray-900",
        className,
      )}
    >
      {children}
    </label>
  );
}

export function TextField({
  id,
  label,
  type = "text",
  className,
  rootClassName,
  labelClassName,
  ...props
}) {
  return (
    <div className={rootClassName}>
      {label && (
        <Label id={id} className={labelClassName}>
          {label}
        </Label>
      )}
      <input
        id={id}
        type={type}
        {...props}
        className={clsx(formClasses, className)}
      />
    </div>
  );
}

export function SelectField({
  id,
  label,
  className,
  rootClassName,
  labelClassName,
  ...props
}) {
  return (
    <div className={rootClassName}>
      {label && (
        <Label id={id} className={labelClassName}>
          {label}
        </Label>
      )}
      <select
        id={id}
        {...props}
        className={clsx(formClasses, "pr-8", className)}
      />
    </div>
  );
}
