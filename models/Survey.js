const mongoose = require('mongoose');
const {Shema} = mongoose;
const RecipinetSchema = require('./Recipient');

const surveySchema = new Shema({
    title: String,
    body: String,
    subject: String,
    recipiens: [RecipinetSchema],
    yes: {type: Number, default: 0},
    no: {type: number, default: 0}
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    dateSent: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);
