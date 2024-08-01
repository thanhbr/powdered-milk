"use client";
import { ReactNode, useEffect, useRef } from "react";
import { Margins } from "../styling/styling";

export type ButtonType = "primary" | "submit" | "secondary" | "tertiary" | "start";
export type ButtonSize = "compact" | "normal";
export type ButtonVariant = "normal" | "destructive";

interface WCProps extends Margins {
  type?: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
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
  id?: string;
  type?: ButtonType;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function Button({
  id,
  disabled = false,
  type = "primary",
  size,
  variant,
  leadingIcon,
  trailingIcon,
  children,
  onClick,
  mt,
  mr,
  mb,
  ml,
}: ButtonProps): JSX.Element {
  const el = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!el.current) {
      return;
    }
    if (!onClick) {
      return;
    }
    const current = el.current;
    const listener = () => {
      onClick();
    };

    current.addEventListener("_click", listener);
    return () => {
      current.removeEventListener("_click", listener);
    };
  }, [el, onClick]);

  return (
    <na-button
      data-id={id}
      ref={el}
      type={type}
      size={size}
      variant={variant}
      disabled={disabled}
      leadingIcon={leadingIcon}
      trailingIcon={trailingIcon}
      mt={mt}
      mr={mr}
      mb={mb}
      ml={ml}
    >
      {children}
    </na-button>
  );
}
