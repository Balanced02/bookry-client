export type ButtonProps = {
  text: string;
  onPress: () => void;
  type?: string;
  loading?: boolean;
  disabled?: boolean;
};
