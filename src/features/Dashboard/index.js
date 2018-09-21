/**
 *
 * Dashboard
 *
 */

import React from "react";
import LessonListContainer from "./LessonListContainer";
import CreateLessonButton from "./CreateLessonButton";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <LessonListContainer />
        </div>
        <div className="col-md-6">
          <CreateLessonButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
