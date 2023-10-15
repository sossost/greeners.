import { colors } from "@/constants";
import { ToastBar, Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          fontSize: "16px",
          fontWeight: "500",
          padding: "12px 16px",
          color: colors.primary,
          backgroundColor: colors.pastel,
        },
        success: {
          iconTheme: {
            primary: colors.primary,
            secondary: colors.pastel,
          },
        },
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
          }}
        />
      )}
    </Toaster>
  );
};
