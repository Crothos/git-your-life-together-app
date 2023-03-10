const mongoose = require('mongoose');

mongoose.connect(

  process.env.MONGODB_URI || 'mongodb+srv://',

  process.env.MONGODB_URI || 'mongodb+srv://',

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
