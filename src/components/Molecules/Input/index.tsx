import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
} from "react";
import uuid from "react-uuid";
import { coerceValueToCssPixel } from "@/utils";
import { colors } from "@/constants";

import { Flex, Label, TextField, TextFieldProps } from "@/components/Atoms";

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
}

export const Input = ({
  label,
  bottomText,
  children,
  ...props
}: InputProps) => {
  const child = Children.only(children);
  const generatedId = uuid();
  const id: string = child.props.id ?? generatedId;
  const isError = child.props.isError ?? false;
  const inputFontSize = child.props.fontSize ?? 15;

  return (
    <Flex.Column
      css={{
        width: "100%",
      }}
      {...props}
    >
      <Label htmlFor={id} fontSize={inputFontSize + 1}>
        {label}
      </Label>
      {cloneElement(child, {
        id,
        ...child.props,
      })}
      {bottomText && (
        <p
          css={{
            color: isError ? colors.warn : colors.secondary,
            fontSize: coerceValueToCssPixel(inputFontSize - 4),
            marginTop: "5px",
          }}
        >
          {bottomText}
        </p>
      )}
    </Flex.Column>
  );
};

interface InputTextFieldProps extends TextFieldProps {
  isError?: boolean;
}

Input.TextField = forwardRef<HTMLInputElement, InputTextFieldProps>(
  ({ isError, ...props }, ref) => (
    <TextField isError={isError} ref={ref} {...props} />
  )
);
