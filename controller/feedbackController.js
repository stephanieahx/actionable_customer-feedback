const feedbackRepository = require('../repositories/feedbackRepository');
// const moment = require('moment');

// const addFormattedDate = users => users.map(user => {
//     if (user.date) user.FormattedDate = moment(user.date).format('ddd, MMMM Do YYYY, h:mm:ss a');
// });

module.exports = {
    async getAll(req, res) {
        const feedback = await feedbackRepository.getAll();
        // addFormattedDate(feedback);
        res.render('feedback/index', { feedback });
    },
    getForm(req, res) {
        res.render('feedback / new ', { date: moment().format('YYY - MM - DDTHH: mm') });
    },
    async create(req, res) {
        try {
            const feedback = await feedbackRepository.create(req.body);
            httpResponseFormatter.formatOkResponse(req, user);
        } catch (err) {
            console.log('error', err);
            httpResponseFormatter.formatErrorResponse(res, err);
        }
    }
};