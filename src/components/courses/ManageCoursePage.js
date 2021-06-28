import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCourses } from "../../redux/actions/courseAction";
import { loadAuthors } from "../../redux/actions/authorAction";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

function ManageCoursePage({
  courses,
  authors,
  loadAuthors,
  loadCourses,
  ...props
}) {
  const [course, setCourese] = useState({ ...props.course });
  const [error, setErrors] = useState({});
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
    <CourseForm course={course} error={error} authors={authors}></CourseForm>
  );
}

//this ensure dispatch is provided by connect
ManageCoursePage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  loadCourses: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    course: newCourse,
    courses: state.courses,
    authors: state.authors,
  };
}

const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
