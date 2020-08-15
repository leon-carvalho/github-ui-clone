import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Repo from "../pages/Repo";
import Profile from "../pages/Profile";

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
