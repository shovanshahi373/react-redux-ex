import { useMediaQuery } from "@mui/material";

const useWidth = () => {
  const matches = useMediaQuery(`(max-width:600px)`);
  return matches;
};

export default useWidth;
