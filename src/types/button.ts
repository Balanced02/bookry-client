import { ReactNode } from 'react';

export type ButtonProps = {
  text: string;
  onPress: () => void;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};
