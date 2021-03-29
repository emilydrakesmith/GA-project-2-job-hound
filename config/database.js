const mongoose = require("mongoose");
const db = mongoose.connection;

/**   config/database.js notes
 *    
 *        mongoose.connect
 *          1st arg:  uses data in the .env file DATABASE.URL line to 
 *                    connect to the cloud server
 *          2nd arg:  settings for mongoose to use to configure the
 *                    connection (DO NOT TOUCH)
 * 
 *        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 * 
 *        db.on   
 *          1st arg:  looks to see if database connection status is equal
 *                    to value of string (ie if the database is connected)
 *          2nd arg:  callback function, when mongoose connects to the
 *                    database, it'll log a string in the console details
 *                    about the active connection
 */

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

db.on("connected", () => console.log(`Mongoose connected to MongoDB ${db.name} on ${db.host}:${db.port}.`));

module.exports = mongoose;