"use client";

import { ReactNode, useEffect, useRef } from "react";

export type ButtonType = "default" | "button" | "submit";
export type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

interface WCProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
  class?: string;
  ref: React.RefObject<HTMLElement>;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "na-button": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface ButtonProps {
  type?: ButtonType;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  leadingIcon?: string;
  trailingIcon?: string;
  onClick?: () => void;
  id?: string;
  children?: ReactNode;
  className?: string;
}

export function Button(props: ButtonProps): JSX.Element {
  const el = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!el.current) return;
    if (!props.onClick) return;
    const current = el.current;
    const listener = () => {
      if (props.onClick) props.onClick()
    };

    current.addEventListener("_click", listener);

    return () => {
      current.removeEventListener("_click", listener);
    };
  }, [el, props.onClick]);

  return (
    <na-button
      ref={el}
      disabled={props.disabled}
      type={props.type}
      size={props.size}
      variant={props.variant}
      leadingIcon={props.leadingIcon}
      trailingIcon={props.trailingIcon}
      data-id={props.id}
      class={props.className}
    >
      {props.children}
    </na-button>
  );
}
