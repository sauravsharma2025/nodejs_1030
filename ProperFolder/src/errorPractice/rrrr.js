// Node.js program to demonstrate the
// cipher.final() method

// Importing crypto module
import crypto from "crypto";

// Creating and initializing algorithm and password
const algorithm = "aes-192-cbc";
const password = "Password used to generate key";

// Getting key for the cipher object
const key = crypto.scryptSync(password, "salt", 24);

// Creating and initializing the static iv
const iv = Buffer.alloc(16, 0);

// Creating and initializing the cipher object
const cipher = crypto.createCipheriv(algorithm, key, iv);

// Getting buffer value
// by using final() method
let value = cipher.final("hex");

// Display the result
console.log("buffer :- " + value);
