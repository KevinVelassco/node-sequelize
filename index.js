const  express = require("express");
const morgan = require("morgan");
const handlingErrors = require("./middlewares/handling-errors");
const users = require("./routes/users");
const tasks = require("./routes/tasks");
const projects = require("./routes/projects");
const categories = require("./routes/categories");
const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("tiny"));

//Routes
app.use("/users", users);
app.use("/tasks", tasks);
app.use("/projects", projects);
app.use("/categories", categories);

//middleware errors
app.use(handlingErrors);

app.listen(app.get("port"));