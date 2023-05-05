import React from "react";
import Sidenav from "./Components/Navbar/Sidenav";
import { NavbarPage, StorePage, CheckoutPage } from "./Pages/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        {/* <CharacterCounter /> */}

        <div className="main-body">
          <Sidenav />
        </div>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
