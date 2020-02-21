const mongoose = require('mongoose');

mongoose.connect(require('./dbconfig').AtlasConString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, (err) => {
    if(err) throw new Error('Cannot connect to database.');
});

module.exports = mongoose;