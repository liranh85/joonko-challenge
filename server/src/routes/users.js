const express = require('express');
const {OPEN_JOBS} = require('../constants/jobs');
const USERS = require('../constants/users');

const router = express.Router();

router.post('/register', (req, res) => {
    res.status(201).send();
});

router.post('/login', (req, res, next) => {
    const {email, password: pwd} = req.body;
    const user = USERS.find(user => user.email === email);

    if (!user) {
        return res.status(404).send();
    }

    if (user.password !== pwd) {
        return res.status(401).send();
    }

    res.cookie('_user_session', {email});
    res.status(200).send();
});

router.get('/jobs', (req, res, next) => {
    const userCookie = req.cookies['_user_session'];

    if (!userCookie?.email) {
        return res.status(401).send();
    }

    const {departments} = USERS.find(user => user.email === userCookie.email);
    const jobs = OPEN_JOBS.filter(job => departments.includes(job.department));

    res.status(200).send({jobs});
});

module.exports = router;