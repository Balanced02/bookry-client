export type ChekboxProps = {
  label: string;
  isChecked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};
