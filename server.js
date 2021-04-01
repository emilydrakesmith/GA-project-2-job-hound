/*******  START: EXPRESS.JS MIDDLEWARE IMPORTS  *******/
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");
/*******  END: EXPRESS.JS MIDDLEWARE IMPORTS  *******/


/*******  START: LOAD .env VARIABLES FOR DATABASE CONFIG  *******/
require("dotenv").config();
require("./config/database");
/*******  END: LOAD .env VARIABLES  *******/


/*******  START: CREATE THE EXPRESS APP  *******/
const app = express();
/*******  END: CREATE THE EXPRESS APP  *******/


/*******  START: LOAD PASSPORT  *******/
require("./config/passport");
/*******  END: LOAD PASSPORT  *******/


/*******  START: CREATE ROUTERS  *******/
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const applicationsRouter = require('./routes/applications');
const followsRouter = require('./routes/follows');
/*******  START: CREATE ROUTERS  *******/


/*******  START: VIEW ENGINE SETUP  *******/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/*******  END: VIEW ENGINE SETUP  *******/


/*******  START: ATTACH ADDITIONAL MIDDLEWARE TO APP  *******/
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
/*******  END: ATTACH ADDITIONAL MIDDLEWARE TO APP  *******/


/*******  START: ATTACH SESSION MIDDLEWARE TO APP  *******/
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {sameSite: "lax"},
  })
);
/*******  END: ATTACH SESSION MIDDLEWARE TO APP  *******/


/*******  START: ATTACH PASSPORT MIDDLEWARE TO APP  *******/
app.use(passport.initialize());
app.use(passport.session());
/*******  END: ATTACH PASSPORT MIDDLEWARE TO APP  *******/


/*******  START: ATTACH ROUTERS TO APP  *******/
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/applications", applicationsRouter);
app.use('/follows', followsRouter);
/*******  END: ATTACH ROUTERS TO APP  *******/


/*******  START: 404 AND ERROR HANDLING  *******/
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
/*******  END: 404 AND ERROR HANDLING  *******/

module.exports = app;
