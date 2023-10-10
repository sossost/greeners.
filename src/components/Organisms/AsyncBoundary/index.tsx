import { ComponentProps, Suspense } from "react";
import {
  ErrorBoundary,
  ErrorFallback,
  ErrorFallbackType,
  Loading,
} from "@components/Molecules";

interface AsyncBoundaryProps {
  children: React.ReactNode;
  suspenseFallback?: ComponentProps<typeof Suspense>["fallback"];
  errorFallback?: ErrorFallbackType;
}

export const AsyncBoundary = ({
  children,
  suspenseFallback = <Loading />,
  errorFallback = ErrorFallback,
}: AsyncBoundaryProps) => {
  return (
    <ErrorBoundary errorFallback={errorFallback}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};
