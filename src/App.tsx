import { FC } from "react"; // FC stands for functional components it will return JSX
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 600,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#131924",
    },
    primary: {
      main: "#4d88ff",
    },
    secondary: {
      main: "#a9a9a9",
    },
  },
});

export const App: FC = () => {
  return <></>;
};
