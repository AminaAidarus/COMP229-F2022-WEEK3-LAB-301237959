/* 
Name: Amina Aidarus
Student number: 301237959
COURSE: COMP229
SEM: 3
LAB : 2
DESCRIPTION: Create a new Node.Js Application that listens to http requests on port 3000 and return 3 different HTTP responses
*/

//Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const ___dirname = dirname(fileURLToPath(import.meta.url));

// Import Router 
import indexRouter from './app/routes/index.route.server.js';


//instantiate app-server
const app = express();

//setup ViewEngine EJS
app.set('views', path.join(___dirname,'/app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(___dirname, '../public')));
app.use(session({
    secret: 'MySecret' ,
    saveUninitialized: false ,
    resave: false
}));
// Use Routes
app.use('/', indexRouter);

// run app
app.listen(3000);

console.log('Server running at http://localhost:3000');
