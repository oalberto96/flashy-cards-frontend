/**
 *
 * CreateAndUpdateLesson
 *
 */

import React from "react";
import LessonFormContainer from "./LessonFormContainer";

class CreateAndUpdateLesson extends React.Component {
  constructor(props) {
    super(props);
    const isANewLesson = this.props.location.pathname.includes("new");
    this.state = { isANewLesson };
  }

  render() {
    return (
      <div className="container">
        <LessonFormContainer {...this.props} />
      </div>
    );
  }
}

export default CreateAndUpdateLesson;
