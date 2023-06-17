import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SPA from "./SPA.js";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<SPA />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
