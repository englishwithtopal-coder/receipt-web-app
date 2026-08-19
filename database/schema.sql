CREATE TABLE users(
id INTEGER PRIMARY KEY,
username TEXT,
password TEXT,
role TEXT
);

CREATE TABLE receipts(
id INTEGER PRIMARY KEY,
invoice TEXT,
customer TEXT,
date TEXT,
total REAL
);

CREATE TABLE products(
id INTEGER PRIMARY KEY,
name TEXT
);
