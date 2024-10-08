import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
const App = () => {
   return (
      <>
         <Header />
         <Container>
            <Outlet />
         </Container>
      </>
   );
};

export default App;
