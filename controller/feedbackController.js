const feedbackRepository = require('../repositories/feedbackRepository');

module.exports = {
    async getAll(req, res) {
        const feedback = await feedbackRepository.getAll();
        res.render('feedback/index', { feedback });
    },
    getForm(req, res) {
        res.render('feedback/submission');
    },
    async create(req, res) {
        try {
            const feedback = await feedbackRepository.create(req.body);
            httpResponseFormatter.formatOkResponse(req, user);
            res.redirect('/');
        } catch (err) {
            console.log('error', err);
            httpResponseFormatter.formatErrorResponse(res, err);
        }
    },
    async show(req, res) {
        const index = req.params.index;
        const feedback = await feedbackRepository.getAll();
        const selectedFeedback = feedback[index].feedback;
        return res.render('feedback/show', { selectedFeedback });
    },
    async update(req, res) {
        try {
            const update = {
                'update': req.body.update
            };
            await feedbackRepository.updateByIndex(req.params.index, update);
            return res.send(update);
        } catch (err) {
            return res.render('error/404', { err });
        }
    }
};