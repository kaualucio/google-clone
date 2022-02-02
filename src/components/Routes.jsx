import React from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom'

import Results from './Results';

function Routes() {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route exact path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Switch>
    </div>
  )
}

export default Routes;
