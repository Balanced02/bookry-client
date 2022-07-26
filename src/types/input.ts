import { ReactNode, ChangeEvent } from 'react';

export type InputType = {
  value: string | number;
  label: string;
  type: string;
  name: string;
  error?: string;
  className?: string;
  max?: number;
  min?: number;
  disabled?: boolean;
  icon?: ReactNode;
  onIcon?: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
