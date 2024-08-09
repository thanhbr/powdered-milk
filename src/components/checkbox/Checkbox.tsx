"use client";

import { useEffect, useRef } from "react";

interface WCProps {
  ref: React.RefObject<HTMLElement>;
  id?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  text?: string;
  value?: string | number | boolean;
  arialabel?: string;
  description?: string | React.ReactNode;
  maxWidth?: string;
  class?: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "na-checkbox": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}

export interface CheckboxProps {
  id?: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  text?: string;
  value?: string | number | boolean;
  arialabel?: string;
  description?: string | React.ReactNode;
  maxWidth?: string;
  className?: string;
  children?: React.ReactNode;
  onChange?: (name: string, checked: boolean, value: string) => void;
}

export function Checkbox(props: CheckboxProps): JSX.Element {
  const el = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!el.current) {
      return;
    }
    const current = el.current;
    const listener = (e: unknown) => {
      const ce = e as CustomEvent;

      props.onChange?.(props.name, ce.detail.checked, ce.detail.value);
    };

    current.addEventListener("_change", listener);

    return () => {
      current.removeEventListener("_change", listener);
    };
  }, []);
  return (
    <na-checkbox
      ref={el}
      name={props.name}
      checked={props.checked}
      disabled={props.disabled}
      error={props.error}
      text={props.text}
      value={props.value}
      arialabel={props.arialabel}
      description={typeof props.description === "string" ? props.description : undefined}
      maxWidth={props.maxWidth}
      class={props.className}
      data-id={props.id}
    >
      {props.children}
    </na-checkbox>
  );
}
