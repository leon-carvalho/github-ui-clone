import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Repo from '../pages/Repo';
import Profile from '../pages/Profile';

const routes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/:username" element={<Profile />} />
      <Route path="/:username/:reponame" element={<Repo />} />
    </Routes>
  );
};

export default routes;
