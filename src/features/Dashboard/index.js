/**
 *
 * Dashboard
 *
 */

import React from "react";
import CollectionListContainer from "./CollectionListContainer";
import CreateCollectionButton from "./CreateCollectionButton";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <CollectionListContainer />
        </div>
        <div className="col-md-6">
          <CreateCollectionButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
