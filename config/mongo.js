const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Library')


mongoose.connection.on('connected', function(){
  console.log('Database mulai terhubung');
})

mongoose.connection.on('error', err => {
  console.log('Database mulai error');
})

mongoose.connection.on('disconnected', function() {
  console.log('Database tidak terhubung');
})

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
