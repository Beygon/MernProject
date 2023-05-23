import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

//Middlwares
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server has started at port ${port}`));

// - **POST /api/users** - Register a user
// - **POST /api/users/auth** - Authenticate a user
// - **POST /api/users/logout** - Logout  a user
// - **GET /api/users/profile** - Get a user profile
// - **PUT /api/users/profile** - Update user profile
