import React, {
  ForwardedRef,
  ReactElement,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { vars } from "@/token";
import { mediaQueryScreenAndMinWidth } from "@/utils";
import { FiChevronDown } from "react-icons/fi";
import uuid from "react-uuid";

import { Flex, Label } from "@components/Atoms";

interface SelectContext {
  selectedValue: string | null;
  selectedOption: React.ReactNode;
  isOpen: boolean;
  selectId: string;
  handleToggle: () => void;
  handleClose: () => void;
  handleChangeValue: (value: string, option: React.ReactNode) => void;
}

const SelectContext = createContext<SelectContext>({
  selectedValue: null,
  selectedOption: null,
  isOpen: false,
  selectId: "",
  handleToggle: () => {},
  handleClose: () => {},
  handleChangeValue: () => {},
});

interface SelectProps {
  children: React.ReactNode;
  label?: string;
  placeholder?: string;
  id?: string;
  fontSize?: number;
  onChange: (value: string) => void;
}

export const Select = ({
  children,
  label,
  placeholder,
  id = uuid(),
  fontSize = 14,
  onChange,
}: SelectProps) => {
  const selectRef = useRef<HTMLDivElement | null>(null);
  const firstChild = React.Children.toArray(children)[0] as ReactElement;
  const firstOptionValue = firstChild.props.value;

  const [selectedValue, setSelectedValue] = useState<string>(
    placeholder ? null : firstOptionValue
  );
  const [selectedOption, setSelectedOption] = useState<React.ReactNode>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectId] = useState<string>(id);

  const handleChangeValue = (value: string, option: React.ReactNode) => {
    setSelectedValue(value);
    setSelectedOption(option);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (isOpen && selectRef.current && !selectRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleLabelClick = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <SelectContext.Provider
      value={{
        selectedValue,
        selectedOption,
        isOpen,
        selectId,
        handleChangeValue,
        handleClose,
        handleToggle,
      }}
    >
      <Flex.Column ref={selectRef} css={{ fontSize, gap: "5px" }}>
        <Label htmlFor={id} fontSize={fontSize} onClick={handleLabelClick}>
          {label}
        </Label>
        {children}
      </Flex.Column>
    </SelectContext.Provider>
  );
};

interface SelectTriggerProps {
  children: React.ReactNode;
}

Select.Trigger = React.forwardRef(
  (
    { children, ...props }: SelectTriggerProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { handleToggle, selectedOption, selectId, isOpen } =
      useContext(SelectContext);

    const handleClick = () => {
      handleToggle();
    };

    return (
      <Flex.Row
        id={selectId}
        onClick={handleClick}
        justify="space-between"
        css={{
          borderRadius: vars.borderRadius.default,
          border: `1px solid ${
            isOpen ? vars.colors.primary : vars.colors.lightGray
          }`,
          boxShadow: isOpen ? `0 0 0 2px ${vars.colors.primary}20` : "none",
          cursor: "pointer",
          paddingRight: "8px",
          [mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)]: {
            "&:hover": {
              border: `1px solid ${vars.colors.primary}`,
              boxShadow: `0 0 0 2px ${vars.colors.primary}20`,
            },
          },
        }}
        ref={ref}
        {...props}
      >
        <SelectItem>
          {selectedOption ? (
            selectedOption
          ) : (
            <span
              css={{
                color: vars.colors.gray,
              }}
            >
              {children}
            </span>
          )}
        </SelectItem>
        <FiChevronDown color={vars.colors.gray} size={20} />
      </Flex.Row>
    );
  }
);

interface SelectOptionListProps {
  children: React.ReactNode;
}

Select.OptionList = React.forwardRef(
  ({ children }: SelectOptionListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const context = useContext(SelectContext);

    if (!context.isOpen) {
      return null;
    }

    return (
      <Flex.Column
        css={{
          position: "relative",
          borderRadius: "5px",
          border: `1px solid ${vars.colors.lightGray}`,
        }}
        ref={ref}
      >
        {children}
      </Flex.Column>
    );
  }
);

interface SelectOptionProps {
  value: string;
  children: React.ReactNode;
}

Select.Option = React.forwardRef(
  (
    { value, children, ...props }: SelectOptionProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { handleChangeValue, handleClose } = useContext(SelectContext);

    const handleClick = () => {
      handleChangeValue(value, children);
      handleClose();
    };
    return (
      <SelectItem
        onClick={handleClick}
        css={{
          cursor: "pointer",
          [mediaQueryScreenAndMinWidth(vars.breakpoints.desktop)]: {
            "&:hover": {
              backgroundColor: vars.colors.pastel,
            },
          },
        }}
        ref={ref}
        {...props}
      >
        {children}
      </SelectItem>
    );
  }
);

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const SelectItem = forwardRef(
  (
    { children, ...props }: SelectItemProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Flex.Row
        css={{
          padding: "8px 12px",
          fontSize: "inherit",
          fontWeight: "500",
          lineHeight: "1.4",
        }}
        {...props}
        ref={ref}
      >
        {children}
      </Flex.Row>
    );
  }
);
