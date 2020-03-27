
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "dob" DATE NOT NULL,
    "zip" VARCHAR (5) NOT NULL,
    "profile_description" VARCHAR (1000)
);

-- starter dummy data
INSERT INTO "user" (
    "username",
    "password", 
    "dob",
    "sign",
    "zip", 
    "profile_description"
    )
VALUES (
    'kit', 
    '1234', 
    '04/29/1984', 
    '55409', 
    'snuggling a cat and listening to techno are two of my favorite things.'
    ),
    ('the_butchelor', 
    '1234',
    '01/23/1983', 
    '98661', 
    'Handsome, genderqueer Butchelor hoping to marry rich. Must love cats.'
    );

-- DROP TABLE "user";


SELECT * FROM "user";

CREATE TABLE "messages" (
	"id" SERIAL PRIMARY KEY,
    "sender_id" INT REFERENCES "user",
	"message_text" VARCHAR (1000) NOT NULL,
    "timestamp" TIME
	);
-- create a conversation_id reference column

	
CREATE TABLE "conversations" (
	"id" SERIAL PRIMARY KEY,
	"sender_id" INT REFERENCES "user",
	"recipient_id" INT REFERENCES "user",
	"message_id" INT REFERENCES "messages"
	);
-- remove message_ id column








    