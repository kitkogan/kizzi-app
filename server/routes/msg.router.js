const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in get messages', req.messages.message_text);
    let queryText = `SELECT m.message_text, c.sender_id, c.recipient_id FROM conversations c
    JOIN "user" u1 on u1.id = c.recipient_id
    JOIN "user" u2 on u2.id = c.sender_id
    JOIN messages m on m.id = c.message_id
    WHERE u1.id = $1 OR u2.id = $1;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log(`Error making query ${queryText}`, err);
        res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/newMessage', (req, res) => {
 console.log('in new message post')
});

module.exports = router;