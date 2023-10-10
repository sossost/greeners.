import { colors } from "@/constants/colors";
import {
  Children,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
} from "react";
import uuid from "react-uuid";

import Label from "@/components/Atoms/Label";
import TextField from "@/components/Atoms/TextField";
import { Flex } from "@/components/Atoms/Flex";

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
}

const Input = ({ label, bottomText, children, ...props }: InputProps) => {
  const child = Children.only(children);
  const generatedId = uuid();
  const id: string = child.props.id ?? generatedId;
  const isError = child.props.isError ?? false;
  const inputFontSize = child.props.fontSize ?? 16;

  return (
    <Flex.Column {...props}>
      <Label id={id} fontSize={inputFontSize}>
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
            fontSize: inputFontSize - 4,
            marginTop: 5,
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
