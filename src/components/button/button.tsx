"use client";

import { ReactNode, useEffect, useRef } from "react";
import { Margins } from "../styling/styling";

export type ButtonType = "default" | "button" | "submit";
export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

interface WCProps extends Margins {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
  ref: React.RefObject<HTMLElement>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "na-button": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface ButtonProps extends Margins {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
  onClick?: () => void;
  id?: string;
  children?: ReactNode;
}

export function Button({
  disabled,
  type,
  size,
  variant,
  leadingIcon,
  trailingIcon,
  id,
  onClick,
  mt,
  mr,
  mb,
  ml,
  children,
}: ButtonProps): JSX.Element {
  const el = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!el.current) return;
    if (!onClick) return;
    const current = el.current;
    const listener = () => onClick();

    current.addEventListener("_click", listener);

    return () => {
      current.removeEventListener("_click", listener);
    };
  }, [el, onClick]);

  return (
    <na-button
      ref={el}
      disabled={disabled}
      type={type}
      size={size}
      variant={variant}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      data-id={id}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      {children}
    </na-button>
  );
}
