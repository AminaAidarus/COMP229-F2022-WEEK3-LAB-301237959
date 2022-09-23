/* 
Name: Amina Aidarus
Student number: 301237959
COURSE: COMP229
SEM: 3
LAB : 2
DESCRIPTION: Create a new Node.Js Application that listens to http requests on port 3000 and return 3 different HTTP responses
*/

//import express 
import express from "express";
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session";

// ES Modules fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from "url";
const ___dirname = dirname(fileURLToPath(import.meta.url));

// Import Router 
import indexRouter from './app/routes/index.route.server.js';


//instantiate app-server
const app = express();

//setup ViewEngine EJS
app.set('views', path.join(___dirname,'/views'));
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
//custom middleware
function helloPlain(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end("Hello from NodeJS Application");
}

//custom middleware
function helloHtml(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.end("<h1>Hello from NodeJS Application as html</h1>");
}

//custom middleware
function helloJson(req, res, next){
    res.setHeader('Content-Type','application/json');
    res.end('{"message":"Hello from NodeJS Application as json}');
}

//add middleware to connect application
app.use('/html', helloHtml);
app.use('/json', helloJson);
app.use(indexRouter);

//run app
app.listen(3000);

console.log('Server running at http://localhost:3000');
