// routes.js
import React from "react";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Rent } from "../pages/Rent";
import { Contact } from "../pages/Contact";
import { Success } from "../pages/Success";
import { Cancel } from "../pages/Cancel";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/rent" element={<Rent />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/success" element={<Success />} />
    <Route path="/cancel" element={<Cancel />} />
  </>
);

export default routes;
