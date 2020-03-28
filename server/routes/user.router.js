const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// handles request to update user orofile information
router.post('/editProfile', (req, res)=>{
  //call to update title and description from DB for movie selected to edit
  let updates = req.body;
  let queryText = `UPDATE "user" SET "username" = $1, "description" = $2, "zip" = $3 WHERE "id" = $4`;
  let queryValues = [
      updates.newUsername,
      updates.newDescription,
      updates.newZip,
      updates.userId
  ];
  pool.query(queryText, queryValues).then((results)=>{
      console.log(results)
      res.sendStatus(200)
  }).catch((error)=>{
      console.log('error updating user info', error);
      res.sendStatus(500);
  })
})

//returns the list of all users
router.get('/allusers', (req, res) => {
  console.log('in get', req.user.username);

  const queryText = 'SELECT * FROM "user";';
  pool.query(queryText)
  .then((result) => {res.send(result.rows)})
  
  .catch((err) => res.sendStatus(500));
  
});

//get req to view the user profile that was selected
router.get('/viewProfile/:id', (req, res)=>{
  console.log("user id", req.user.id);
  console.log("user id", req.params.id);
  //call to get info from DB for user that was selected
  let queryText = `SELECT "user"."id" "userid","user"."username", "user"."dob", "user"."description", 
  "user"."zip", "zodiac"."sign_name" 
  FROM "user" JOIN "zodiac" 
  ON "user"."sign" = "zodiac"."id" WHERE "user".id = $1`;
  pool.query(queryText, [req.user.id])
  .then((result)=>{
      //sends back the user results packaged in an object
      res.send(result.rows[0]);
  }).catch((error)=>{
      console.log('error getting user', error);
      res.sendStatus(500);
  })
})
// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const dob = req.body.dob; 
  const sign = req.body.sign;
  const zip = req.body.zip;

  const queryText = 'INSERT INTO "user" (username, password, dob, sign, zip) VALUES ($1, $2, $3, $4, $5) RETURNING id';
  pool.query(queryText, [username, password, dob, sign, zip])
    .then(() => res.sendStatus(201))
    .catch(() => res.sendStatus(500));
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
  let reqId = req.params.id;
  console.log('delete request for id', reqId);
  let sqlText = `DELETE FROM "user" WHERE id=$1;`;
  pool.query(sqlText, [req.id])
    .then((result) => {
      console.log('user deleted');
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log('error deleting user', err);
      res.sendStatus(500);
    })
})

module.exports = router;
