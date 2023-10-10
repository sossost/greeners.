import { colors } from "@/constants/colors";

interface ProgressBarProps {
  percent: number;
}

export const ProgressBar = ({ percent }: ProgressBarProps) => {
  return (
    <div
      css={{
        width: "100%",
        height: "20px",
        backgroundColor: colors.pastel,
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div
        css={{
          width: `${percent}%`,
          height: "100%",
          backgroundColor: colors.primary,
          borderRadius: "20px",
          transition: "all 0.5s ease-in-out",
        }}
      />
    </div>
  );
};
