// import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
// import { useParams } from "react-router-dom";

import { AlertsHome } from "../components/Alerts/AlertsHome";

const Home = () => {
  return (
    <div className="home col-10">
      <Container className="container d-flex">
        <div className="divInnerHome col-6">
          <p className="divTitle">Alertas</p>
          <AlertsHome />
        </div>
        <div className="divInnerHome col-6">
          <p className="divTitle">Agenda</p>
        </div>
      </Container>
      <Container className="d-flex container">
        <div className="divInnerHome col-6">
          <p className="divTitle">Alertas</p>
          <AlertsHome />
        </div>
        <div className="divInnerHome col-6">
          <p className="divTitle">Agenda</p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
