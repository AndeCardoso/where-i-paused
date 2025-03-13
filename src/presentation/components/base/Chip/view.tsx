import React from "react";
import { Chip as PaperChip } from "react-native-paper";
import { Text } from "../Text/view";
import { IChipProps } from "./model";

export const Chip = ({ children, ...rest }: IChipProps) => {
  return (
    <PaperChip style={{ borderRadius: 50, marginVertical: 0 }} {...rest}>
      <Text size={11}>{children}</Text>
    </PaperChip>
  );
};
