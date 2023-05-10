import React, { FC } from "react";
import { AppContainer } from "./styles";

type AppType = {
  children?: React.Component;
};

const App: FC<AppType> = ({ children }) => {
  return <AppContainer>Columns will go here</AppContainer>;
};

export default App;
