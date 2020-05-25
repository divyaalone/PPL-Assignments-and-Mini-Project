var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  http = require("http");
socketio = require("socket.io");
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./src/utils/users");
const router = require("./router");
app = express();
app.use(router);
var PORT = process.env.PORT || 5000;
const server = http.createServer(app).listen(5001, () => {
  console.log("Server is running ");
});
const io = socketio(server);

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

mongoose.connect("mongodb://localhost/Auth_data", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Users = require("./routes/Users");

app.use("/users", Users);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, WELCOME to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});
// server.listen(PORT, () => console.log("Server started "));

app.listen(PORT, function () {
  console.log(`server started on ${PORT}`);
});
