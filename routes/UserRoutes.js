import * as UserController from  '../controllers/UserController.js';
import express from "express";

const userRoutes = express.Router();

userRoutes.post('/register', UserController.register);
userRoutes.post('/login', UserController.login);


export default userRoutes;







// {
//     "name": "joy",
//     "birthdate": "2004-01-01",
//     "address": "Balayn",
//     "program": "Computer Science",
//     "studentStatus": "Active",
//     "email": "jOY@example.com",
//     "password": "StrongP@ssw0rd!"
// }
