export interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  options?: {
    value: string;
    label: string;
  }[];
};

