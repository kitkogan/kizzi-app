const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route to get the messages from database that matches
 * the selected user IDs. I thought this was working but now it is showing the messages
 * to everyone, not just the selected users
 */
router.get('/:id', (req, res) => {
    console.log('in get messages', req.params.id);
    let queryText = `SELECT m.message_text, c.sender_id, c.recipient_id, u1.username FROM conversations c
    JOIN "user" u1 on u1.id = c.recipient_id
    JOIN "user" u2 on u2.id = c.sender_id
    JOIN messages m on m.id = c.message_id
    WHERE u1.id = $1 OR u2.id = $1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log(`Error making query ${queryText}`, err);
        res.sendStatus(504);
    });
});

/**
 * POST route for new messages, need to add db query still
 */
router.post('/', (req, res) => {
    let newMessage = req.body;
    console.log(`Adding message:`, newMessage);
    
    let queryText = `INSERT INTO "messages" ("message_text")
                        VALUES ($1);`;
    pool.query(queryText, [newMessage.message_text])
        .then(result => {
        res.sendStatus(201);
        })
        .catch(error => {
        console.log(`Error adding a new message`, error);
        res.sendStatus(500);
        });
});

module.exports = router;