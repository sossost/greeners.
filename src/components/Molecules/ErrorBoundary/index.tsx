import React, { ReactElement } from "react";

export type ErrorFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
};

export type ErrorFallbackType = <ErrorType extends Error>(
  props: ErrorFallbackProps<ErrorType>
) => JSX.Element;

type Props = {
  errorFallback: ErrorFallbackType;
  children: ReactElement;
  resetQuery?: () => void;
  keys?: unknown[];
};

type State = {
  hasError: boolean;
  error: Error | null;
};

const initialState = { hasError: false, error: null };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  resetErrorBoundary = () => {
    const { resetQuery } = this.props;
    resetQuery?.();
    this.setState(initialState);
  };

  changedArray = (
    prevArray: Array<unknown> = [],
    nextArray: Array<unknown> = []
  ) => {
    return (
      prevArray.length !== nextArray.length ||
      prevArray.some((item, index) => {
        return !Object.is(item, nextArray[index]);
      })
    );
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { error } = this.state;
    const { keys } = this.props;

    if (
      error !== null &&
      prevState.error !== null &&
      this.changedArray(prevProps.keys, keys)
    ) {
      this.resetErrorBoundary();
    }
  }

  render() {
    const { hasError, error } = this.state;
    const isErrExist = hasError && error !== null;

    if (isErrExist) {
      return this.props.errorFallback({
        error: error,
        reset: this.resetErrorBoundary,
      });
    }
    return this.props.children;
  }
}
