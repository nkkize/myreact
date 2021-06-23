import * as types from "./ActionType";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
