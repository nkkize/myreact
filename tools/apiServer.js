const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewarwes = jsonServer.defaults({
  static: "node_modules/json-server/dist",
});

server.use(middlewarwes);

server.use(jsonServer.bodyParser);

// Simulate the delays on all requests
server.use(function (req, res, next) {
  setTimeout(next, 0);
});

// declare custom routes here

//at createdAt to each request
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  //continue
  next();
});

server.post("/courses/", function (req, res, next) {
  const error = validateCourses(req.body);

  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.title); // generate a slug for new courses
    next();
  }
});

//use default router
server.use(router);

//start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON server is running on port: ${port}`);
});

function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function validateCourses() {
  if (!courseReducer.title) return "title is mandatory";
  if (!courseReducer.authorId) return "Author is required";
  if (!courseReducer.category) return "Category is requred";
}
