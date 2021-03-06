import * as types from "../actions/ActionType";
import initialsState from "./initialsState";

export default function courseReducer(state = initialsState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
