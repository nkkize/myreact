import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseAction";
import { loadAuthors } from "../../redux/actions/authorAction";
import PropTypes from "prop-types";

function ManageCoursePage({ courses, authors, loadAuthors, loadCourses }) {
  useEffect(() => {
    if (courses.length === 0) {
      loadCourses().catch((error) => {
        alert("loading courses failed: " + error);
      });
    }

    if (courses.length === 0) {
      loadAuthors().catch((error) => {
        alert("loading authors failed: " + error);
      });
    }
  }, []); // empty array is same as componentDidMount

  return (
    <>
      <h2>Manage Course</h2>
    </>
  );
}

//this ensure dispatch is provided by connect
ManageCoursePage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
