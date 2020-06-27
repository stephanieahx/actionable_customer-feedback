const feedbackRepository = require('../repositories/feedbackRepository');
const sessionController = require('./sessionController')
const db = require('../db');

module.exports = {
    async getAll(req, res) {
        const feedback = await feedbackRepository.getAll();
        res.render('feedback/index', { feedback });
    },

    async getForm(req, res) {
        res.render('feedback/submission');
    },

    async create(req, res) {
        try {
            const feedback = await feedbackRepository.create(req.body);
            // httpResponseFormatter.formatOkResponse(req, user);
            res.redirect('/feedback');
        } catch (err) {
            console.log('error', err);
            httpResponseFormatter.formatErrorResponse(res, err);
        }
    },

    async show(req, res) {
        const index = req.params.index;
        const feedback = await feedbackRepository.getAll();
        const selectedFeedback = feedback[index];
        console.log(selectedFeedback);
        return res.render('feedback/show', {
            selectedFeedback: selectedFeedback,
            currentUser: req.session.currentUser,
            index: index
        });
    },

    async update(req, res) {
        try {
            const updatedData = req.body.actionItem;
            console.log("request body");
            console.log(req.body);
            await feedbackRepository.update(req.params.id, updatedData);
            res.redirect('/feedback/' + req.body.index) // TO MAKE IT GO BACK TO THE SAME FEEDBACK INDEX PAGE
        } catch (err) {
            console.log('error', err);
        }
    },

    async delete(req, res) {
        try {
            const id = await feedbackRepository.delete(req.params.id);
            res.redirect('/feedback');
        } catch (err) {
            console.log('error', err);
        }
    },

};