/**
 *
 * CreateAndUpdateLesson
 *
 */

import React from "react";

class CreateAndUpdateLesson extends React.Component {
  constructor(props) {
    super(props);
    const isANewLesson = this.props.location.pathname.includes("new");
    this.state = { isANewLesson };
  }

  render() {
    return <h1>{this.state.isANewLesson ? "Create" : "Update"}</h1>;
  }
}

export default CreateAndUpdateLesson;
