const mongoose = require("mongoose")

 const Connect  = async (uri) => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to the local MongoDB database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
}

module.exports = Connect