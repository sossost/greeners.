import { vars } from "@/token";
import { ToastBar, Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          fontSize: "16px",
          fontWeight: "500",
          padding: "12px 16px",
          color: vars.colors.primary,
          backgroundColor: vars.colors.pastel,
        },
        success: {
          iconTheme: {
            primary: vars.colors.primary,
            secondary: vars.colors.pastel,
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
