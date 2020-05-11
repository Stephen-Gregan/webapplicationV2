const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(
            db, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false
            }
        );

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

 module.exports = connectDB;

// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

// // mongoose options
// const options = {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//   autoIndex: false,
//   poolSize: 10,
//   bufferMaxEntries: 0
// };

// // mongodb environment variables
// const {
//     MONGO_HOSTNAME,
//     MONGO_DB,
//     MONGO_PORT
// } = process.env;

// const dbConnectionURL = {
//     'LOCALURL': `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`
// };
// console.log(dbConnectionURL);
// mongoose.connect(dbConnectionURL.LOCALURL, options);
// console.log(dbConnectionURL, '1');
// const db = mongoose.connection;
// console.log(db);
// db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL));
// db.once('open', () => {
//      // we're connected !
//      console.log('Mongodb Connection Successful');
// });