const feedbackRepository = require('../repositories/feedbackRepository');
const sessionController = require('./sessionController')
const db = require('../db');
const fetch = require('node-fetch');
const url = "https://api.typeform.com/forms/skNk5r/responses";
const accessKey = process.env.ACCESS_KEY || "ZWin8QmYEu5T65X6dTmm66uN1U8EwUCprkYrKXFBi4g";

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
            await feedbackRepository.update(req.params.id, updatedData);
            console.log('moo moo');
            res.redirect('/feedback/' + req.body.index);
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

    async refreshFeedback(req, res) {
        const existingFeedback = await feedbackRepository.getAll();
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessKey}`
            }
        })
        const newFeedback = response.json();
        console.log('newFeedback', newFeedback);
    },

};