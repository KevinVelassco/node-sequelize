const  express = require("express");
const morgan = require("morgan");
const handlingErrors = require("./middlewares/handling-errors");
const users = require("./routes/users");
const tasks = require("./routes/tasks");
const app = express();

//settings
app.set("port", 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(morgan("tiny"));

//Routes
app.use("/users", users);
app.use("/tasks", tasks)

//middleware errors
app.use(handlingErrors);

app.listen(app.get("port"));