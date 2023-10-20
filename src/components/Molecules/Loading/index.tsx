import { Flex } from "@components/Atoms";
import { MoonLoader } from "react-spinners";

export const Loading = () => {
  return (
    <Flex.RowCenter
      css={{
        width: "100%",
        height: "100%",
      }}
    >
      <MoonLoader color="#66A07D" size={30} />
    </Flex.RowCenter>
  );
};
