import React from "react";
import styled from "@emotion/styled";
//import { observer } from "mobx-react";
import { observer } from "mobx-react-lite";
import TextField from "@mui/material/TextField";

import store from "../store";

const Input = styled.input``;

const PokemonFilter = () => {
  return (
    
      <TextField
        id="outlined-basic"
        label="Pokemon Search"
        variant="outlined"
        value={store.filter}
        onChange={(evt) => store.setFilter(evt.target.value)}
      />
  );
};

export default observer(PokemonFilter);
