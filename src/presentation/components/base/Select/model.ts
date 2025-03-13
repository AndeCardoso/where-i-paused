import { TextInputProps } from "react-native-paper";

export interface ISelectProps extends Omit<TextInputProps, "value"> {
  value?: ISelectOption;
  modalTitle?: string;
  onSelect: (option: ISelectOption) => void;
  options: ISelectOption[];
}

export interface ISelectOption<T = string> {
  value: T;
  label: string;
}
