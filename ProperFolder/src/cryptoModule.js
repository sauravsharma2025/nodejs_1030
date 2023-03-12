import crypto from "crypto";
// console.log("SK@", crypto.getHashes());
// console.log("SK@", crypto.getCiphers());
crypto.randomBytes(16, () => {
  console.log("SK@making function async");
});
let iv = crypto.randomBytes(16);
//creating hash
let hash = crypto.createHash("sha1").update("saurav sharma").digest("hex");
console.log("SK@", hash);
let secretMsg = ":)";
let key = "12345678123456781234567812345678";
let cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted = cipher.update(secretMsg, "utf-8", "hex");
encrypted += cipher.final("hex");
console.log("SK@Encrypted:", encrypted);

// decypher
let decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted += decipher.final("utf-8");
console.log("SK@", decrypted);
