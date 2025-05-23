"use client";

import { modalProp } from "../../types/modal";
import { createPortal } from "react-dom";
import ModalContainer from "./ModalContainer";
import ModalButton from "./ModalButton";

export default function Modal({
  title,
  width,
  height,
  setIsClose,
  setIsComplete,
  children,
  className,
  showCancelButton,
  showCompleteButton,
}: modalProp & {
  setIsClose?: (val: boolean) => void;
  setIsComplete?: <T>(val?: T) => void;
}) {
  return createPortal(
    <ModalContainer
      title={title}
      width={width}
      height={height}
      setIsClose={setIsClose}
      className={className}
    >
      {children}
      <ModalButton
        visibility={showCancelButton}
        setIsClose={setIsClose}
        setIsComplete={setIsComplete}
      />
    </ModalContainer>,
    document.body
  );
}
