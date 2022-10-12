import { ReactNode } from 'react';

export type ButtonProps = {
  text: string;
  onPress?: (e: any) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  type?: 'dark' | 'light';
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};
