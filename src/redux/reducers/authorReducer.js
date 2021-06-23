import * as types from "../actions/ActionType";
import initialsState from "./initialsState";

export default function courseReducer(state = initialsState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
