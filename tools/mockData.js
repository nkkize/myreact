const courses = [
  {
    id: 1,
    title: "title of the bad",
    slug: "bad-course",
    authorId: 1,
    category: "stuff",
  },
  {
    id: 2,
    title: "title of the good",
    slug: "good-course",
    authorId: 2,
    category: "more stuff",
  },
];

const authors = [
  { id: 1, name: "narender" },
  { id: 2, name: "kavya" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

module.exports = {
  newCourse,
  courses,
  authors,
};
