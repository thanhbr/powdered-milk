import { Margins } from "../styling/styling";

interface WCProps extends Margins {
  ref: React.RefObject<HTMLElement>;
  id?: string;
  name: string;
  checked: boolean;
  disabled?: boolean;
  error?: boolean;
  text?: string;
  value?: string | number | boolean;
  arialabel?: string;
  description?: string | React.ReactNode;
  maxWidth?: string;
  onChange?: (name: string, checked: boolean, value: string) => void;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "goa-checkbox": WCProps & React.HTMLAttributes<HTMLElement>;
    }
  }
}
