import {
  Children,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
} from "react";
import uuid from "react-uuid";
import { coerceValueToCssPixel } from "@/utils";
import { colors } from "@/constants";

import { Flex, Label, TextField } from "@/components/Atoms";

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
  const inputFontSize = child.props.fontSize ?? 16;

  return (
    <Flex.Column {...props}>
      <Label id={id} fontSize={inputFontSize + 4}>
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

export default Input;

interface TextFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  isError?: boolean;
}

Input.TextField = ({ isError, ...props }: TextFieldProps) => (
  <TextField isError={isError} {...props} />
);