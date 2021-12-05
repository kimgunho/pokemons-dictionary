import React from "react";
import GlobalStyle from "./shared/styles/reset";
import { UserPokemonProvider } from "./context/pokemonContext";
import BgContainer from "./Bg";

function App() {
  return (
    <UserPokemonProvider>
      <GlobalStyle />
      <BgContainer />
    </UserPokemonProvider>
  );
}

export default App;
