const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireMoney = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin, requireMoney, (req, res) => {
        const {title, subject, body, recipients} = req.body;

        const survey = new Survey({
           title,
           subject,
           body,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
        });

        //emailo siuntimas
        const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send();
    });
};