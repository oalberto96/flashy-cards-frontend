/**
 *
 * Dashboard
 *
 */

import React from "react";
import CollectionListContainer from "./CollectionListContainer";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="col-md-6">
        <CollectionListContainer />
      </div>
    </div>
  );
};

export default Dashboard;
