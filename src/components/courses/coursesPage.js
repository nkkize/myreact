import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseAction";
import * as authorAction from "../../redux/actions/authorAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./courseList";

class CoursesPage extends React.Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("loading courses failed: " + error);
      });
    }

    if (courses.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("loading authors failed: " + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses}></CourseList>
      </>
    );
  }
}

//this ensure dispatch is provided by connect
CoursesPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorAction.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
