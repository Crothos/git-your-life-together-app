const mongoose = require('mongoose');

mongoose.connect(

  process.env.MONGODB_URI || 'mongodb+srv://michael-user:1234@classactivitescluster0.keplkus.mongodb.net/shelterDB',



  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
