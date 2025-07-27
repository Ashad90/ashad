import { forwardRef } from "react";

const Button = forwardRef(({ text, className = "", id, onClick, icon, ...props }, ref) => {
  return (
    <button
      ref={ref}
      id={id}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg bg-black-200 px-6 py-4 text-white-50 transition-all duration-300 hover:bg-black-50 flex items-center justify-center ${className}`}
      {...props}
    >
      <div className="bg-circle"></div>
      <span className="text relative z-10 font-semibold flex items-center gap-2 whitespace-nowrap">
        {icon && icon}
        {text}
      </span>
      <div className="arrow-wrapper">
        <img src="/images/arrow-right.svg" alt="arrow" />
      </div>
    </button>
  );
});

Button.displayName = "Button";

export default Button;
