import { ReactNode } from 'react';

export type ButtonProps = {
  text: string;
  onPress: () => void;
  type?: string;
  icon?: ReactNode;
  loading?: boolean;
  disabled?: boolean;
};
