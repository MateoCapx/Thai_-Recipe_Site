require('dotenv').config()

const mongoose = require('mongoose');

 
// creates connection to Database
mongoose.connect(process.env.dbURI , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
}).then((result) => console.log('connected to db =]'))
  .catch((err) => console.log(err));
 

module.exports = mongoose.connection;