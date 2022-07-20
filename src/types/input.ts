import { ReactNode } from 'react';

export type InputType = {
  value: string | number;
  label: string;
  type: string;
  name: string;
  error?: string;
  max?: number;
  min?: number;
  disabled?: boolean;
  icon?: ReactNode;
  onIcon?: () => void;
  handleChange: (event: { target: { value: React.SetStateAction<string> } }) => void;
};
