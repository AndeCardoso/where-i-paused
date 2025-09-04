import React from "react";
import { Chip as PaperChip } from "react-native-paper";
import { Text } from "../Text/view";
import { IChipProps } from "./model";

export const Chip = ({ textSize = 10, children, ...rest }: IChipProps) => {
  return (
    <PaperChip
      compact
      style={{ borderRadius: 50, marginVertical: 0 }}
      {...rest}
    >
      <Text testID="chip-text" size={textSize}>
        {children}
      </Text>
    </PaperChip>
  );
};
