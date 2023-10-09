import {
  CSSProperties,
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
} from "react";

export type StringElementType = ElementType & string;

export type AsProps<T extends StringElementType> =
  ComponentPropsWithoutRef<T> & {
    as?: T;
  };

export interface FlexOptions {
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  direction?: CSSProperties["flexDirection"];
}

export type FlexProps<T extends StringElementType = "div"> = AsProps<T> &
  FlexOptions;

type FlexComponentType = <T extends StringElementType = "div">(
  props: FlexProps<T> & Partial<Pick<ComponentPropsWithRef<T>, "ref">>
) => JSX.Element | null;

const createFlexComponent = (flexOptions?: FlexOptions): FlexComponentType =>
  forwardRef(function Flex<T extends StringElementType>(
    props: FlexProps<T>,
    ref: ComponentPropsWithRef<T>["ref"]
  ) {
    const {
      as = "div",
      direction = flexOptions?.direction ?? "row",
      justify = flexOptions?.justify ?? "flex-start",
      align = flexOptions?.align ?? "stretch",
      ...rest
    } = props;
    const Component = as;
    return (
      <Component
        ref={ref}
        css={{
          display: "flex",
          flexDirection: direction,
          justifyContent: justify,
          alignItems: align,
        }}
        {...rest}
      />
    );
  });

type FlexType = FlexComponentType & {
  Row: FlexComponentType;
  RowCenter: FlexComponentType;
  Column: FlexComponentType;
  ColumnCenter: FlexComponentType;
};

export const Flex = createFlexComponent() as FlexType;
Flex.Row = createFlexComponent({ align: "center" });
Flex.RowCenter = createFlexComponent({ align: "center", justify: "center" });
Flex.Column = createFlexComponent({ direction: "column" });
Flex.ColumnCenter = createFlexComponent({
  direction: "column",
  align: "center",
  justify: "center",
});
