const feedbackRepository = require('../repositories/feedbackRepository');
const sessionController = require('./sessionController')
const db = require('../db');
const fetch = require('node-fetch');
const { fileLoader } = require('ejs');
const url = "https://api.typeform.com/forms/skNk5r/responses";
const accessKey = process.env.ACCESS_KEY || "ZWin8QmYEu5T65X6dTmm66uN1U8EwUCprkYrKXFBi4g";

module.exports = {
    async refresh(req, res) {
        const existingFeedback = await feedbackRepository.getAll();
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessKey}`
            }
        })
        const surveyResponses = await response.json();
        const latestFeedback = surveyResponses.items;
        const newFeedback = [];
        await latestFeedback.forEach(element => {
            const newSurveyFeedback = element.answers[5].text;
            const surveyResponseID = element.response_id;
            if (newSurveyFeedback) {
                const newFeedbackItem = {
                    feedback: newSurveyFeedback,
                    responseID: surveyResponseID
                };
                newFeedback.push(newFeedbackItem);
                for (let i = 0; i++; i < existingFeedback.length) {
                    if (surveyResponseID !== existingFeedback[i].response_id || !existingFeedback[i].response_id) {
                        feedbackRepository.create(newFeedbackItem);
                    }
                }
            }
            console.log(newFeedback);
        })
        res.render('feedback/latest', { newFeedback });
    },

    async getAll(req, res) {
        const feedback = await feedbackRepository.getAll();
        console.log(feedback);
        res.render('feedback/index', { feedback });
    },

    async getForm(req, res) {
        res.render('feedback/submission');
    },

    async create(req, res) {
        try {
            await feedbackRepository.create(req.body);
            // httpResponseFormatter.formatOkResponse(req, user);
            res.redirect('/feedback');
        } catch (err) {
            console.log('error', err);
            // httpResponseFormatter.formatErrorResponse(res, err);
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


};