const mongoose = require('mongoose');
const {Shema} = mongoose;

const recipientSchema = new Shema({
    email: String,
    responded: {type: Boolean, default: false}
});

module.exports = recipientSchema;