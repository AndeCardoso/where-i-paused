import React from "react";
import { Portal, Modal as PaperModal } from "react-native-paper";
import { IModalProps } from "./model";

export const Modal = ({
  children,
  visible,
  onDismiss,
  ...rest
}: IModalProps) => {
  return (
    <Portal>
      <PaperModal
        visible={visible}
        onDismiss={onDismiss}
        style={{ alignItems: "center", margin: 24 }}
        {...rest}
      >
        {children}
      </PaperModal>
    </Portal>
  );
};
