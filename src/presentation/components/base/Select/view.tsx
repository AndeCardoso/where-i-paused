import React, { useState } from "react";
import { IconButton, TextInput, useTheme } from "react-native-paper";
import { TouchableOpacity, View } from "react-native";
import { Text } from "../Text/view";
import { Modal } from "../Modal/view";
import { Button } from "../Button/view";
import { ISelectOption, ISelectProps } from "./model";

export const Select = ({
  mode = "outlined",
  modalTitle,
  onSelect,
  options,
  value: valueProp,
  ...rest
}: ISelectProps) => {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSelect = (option: ISelectOption) => {
    onSelect(option);
    handleClose();
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.6} onPress={handleOpen}>
        <TextInput
          mode={mode}
          outlineStyle={{
            borderRadius: 8,
            backgroundColor: colors.transparent,
          }}
          onPress={handleOpen}
          right={
            <TextInput.Icon
              icon={open ? "chevron-up" : "chevron-down"}
              onPress={handleOpen}
              size={24}
            />
          }
          editable={false}
          value={valueProp?.label}
          {...rest}
        />
      </TouchableOpacity>
      <Modal visible={open} onDismiss={handleClose}>
        <View className="justify-center align-baseline w-full rounded-lg bg-white">
          {modalTitle ? (
            <View className="flex-row py-2 px-4 justify-between w-max rounded-t-md bg-primary">
              <Text
                size={24}
                weight="600"
                className="self-center w-fit"
                color={colors.onPrimary}
              >
                {modalTitle}
              </Text>
              <IconButton
                icon="close"
                onPress={handleClose}
                className="m-0 p-0"
                iconColor={colors.onPrimary}
              />
            </View>
          ) : null}
          {options?.map(({ label, value }) => {
            const selected = value === valueProp?.value;
            return (
              <Button
                key={value}
                mode="text"
                onPress={() => handleSelect({ label, value })}
                textColor={selected ? colors.white : colors.primary}
                buttonColor={selected ? colors.primaryContainer : undefined}
                labelStyle={{ textTransform: "uppercase", width: "100%" }}
              >
                {label}
              </Button>
            );
          })}
        </View>
      </Modal>
    </>
  );
};
