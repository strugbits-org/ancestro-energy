'use client';

import { useRouter } from 'next/navigation';

export default function SunButton({
  children,
  className = "",
  onClick,
  href,
  redirect,
  target = "_self",
  disabled = false,
  type = "button",
  variant = "default",
  size = "default",
  text = "default",
  font = 'regular',
  textClassName = '',
  ...props
}) {
  const router = useRouter();

  // Handle different action types
  const handleClick = (e) => {
    if (disabled) return;

    // Custom onClick handler
    if (onClick) {
      onClick(e);
    }

    // Handle redirects
    if (href && !onClick) {
      if (target === "_blank") {
        window.open(href, "_blank");
      } else {
        router.push(href);
      }
    }

    // Handle redirects with router.push
    if (redirect && !onClick && !href) {
      router.push(redirect);
    }
  };

  // Size variants
  const sizeClasses = {
    small: "px-4 py-1 h-[40px] text-sm",
    default: "px-6 py-2",
    large: "px-8 py-3 h-[60px] text-lg"
  };

  // Variant styles
  const variantClasses = {
    default: "border-white text-white",
    primary: "border-yellow-500 text-yellow-500",
    secondary: "border-gray-300 text-gray-300"
  };

  // Sun circle sizes based on button size
  const sunSizes = {
    small: "w-[40px] h-[40px]",
    default: "w-[50px] h-[50px]",
    large: "w-[60px] h-[60px]"
  };

  // Sun translate positions for perfect alignment
  const sunPositions = {
    small: "group-hover:translate-y-[14px]",
    default: "group-hover:translate-y-[18px]",
    large: "group-hover:translate-y-[22px]"
  };

  const textColor = {
    override: "",
    default: "text-white",
  };


  const Component = href && target === "_blank" ? "a" : "button";

  return (
    <Component
      className={`relative group border ${sizeClasses[size]} ${variantClasses[variant]} rounded-full font-medium overflow-hidden transition-opacity active:bg-yellow-500 active:text-black transition duration-500 ease-in-out ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      type={Component === "button" ? type : undefined}
      href={Component === "a" ? href : undefined}
      target={Component === "a" ? target : undefined}
      rel={Component === "a" && target === "_blank" ? "noopener noreferrer" : undefined}
      {...props}
    >
      <span className={`relative z-10 ${textColor[text] || `text-${text}`} ${font === 'regular' ? 'font-[400]' : 'font-[600]'} ${textClassName} group-active:text-black`}>{children}</span>
      {/* sun circle rising */}
      <span className="absolute inset-0 flex items-end justify-center">
        <span className={`${sunSizes[size]} rounded-full bg-yellow-500 opacity-0 translate-y-full transition-all duration-500 ${sunPositions[size]} group-hover:opacity-100 blur-[2px]`}></span>
      </span>
    </Component>
  );
}
