import React from "react";
import UserStore from "../UserStore";
import Home from "../components/Home";
import About from "../components/About";

//import styled from "@emotion/styled";
import { styled } from "@mui/material/styles";
//import { CssBaseline } from "@material-ui/core";
import { grid, textAlign } from "@mui/system";
import Box from '@mui/material/Box';

import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";

const HomePage = () => {
  const store = new UserStore();
  return (
    <>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
      <div />
      <h1 style={{textAlign: "center" }}>My Pokemon Database</h1>
      <div />
      <div />
      <PokemonFilter />
      <div />
      </Box>
      <hr />
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
        <PokemonTable />
        <PokemonInfo />
      </Box>
    </>
  );
};

export default HomePage;
