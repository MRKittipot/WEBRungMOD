const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const URI = "mongodb://localhost:27017/Rungmod";
const cors = require("cors");

// user
const CreateUserRouter = require("./router/User/CreateUser");
const GetUserRouter = require("./router/User/GetUser");
const LoginUserRouter = require("./router/User/LoginUser");
const DeleteUserRouter = require("./router/User/DeleteUser");
const UpdateUserRouter = require("./router/User/UpdateUser");

const AddCollectionRouter = require("./router/User/AddCollection");
const RemoveCollectionRouter = require("./router/User/RemoveCollection");

// document

const GetDocumentRouter = require("./router/Document/GetDocument");
const CreateDocumentRouter = require("./router/Document/CreateDocument");
const DeleteDocumentRouter = require("./router/Document/DeleteDocument");
const GetAllDocumentRouter = require("./router/Document/GetAllDocument");
const GetDocuemntByIdRouter = require("./router/Document/GetDocumentByID");

// jwt
const jwtRouter = require("./router/Jwt/jwtRouter");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const main = async () => {
  try {
    await mongoose.connect(URI);

    //user
    app.use(CreateUserRouter);
    app.use(GetUserRouter);
    app.use(LoginUserRouter);
    app.use(DeleteUserRouter);
    app.use(UpdateUserRouter);

    app.use(AddCollectionRouter);
    app.use(RemoveCollectionRouter);

    //document
    app.use(CreateDocumentRouter);
    app.use(GetDocumentRouter);
    app.use(DeleteDocumentRouter);
    app.use(GetAllDocumentRouter);
    app.use(GetDocuemntByIdRouter);

    //jwt
    app.use(jwtRouter);

    app.listen(8080, () => {
      console.log("connected successfully");
    });
  } catch (err) {
    console.log(err);
  }
};

main();
