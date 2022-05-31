import { FC, useEffect, useState } from "react"; // FC stands for functional components it will return JSX
import {
  createTheme,
  CssBaseline,
  ListItem,
  ThemeProvider,
  List,
} from "@mui/material";
import { getWishes, Wish } from "./services/wishes";

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
  const [wishes, setWishes] = useState<Wish[]>([]);

  useEffect(() => {
    getWishes().then(setWishes);
  }, []);
  console.log(wishes);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <List>
        {wishes.map((wish) => {
          return <ListItem key={wish.name}></ListItem>;
        })}
      </List>
    </ThemeProvider>
  );
};
