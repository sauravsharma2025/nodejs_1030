import jwtToken from "jsonwebtoken";
const signToken = jwtToken.sign({ name: "saurav" }, "secureKey");
try {
  const verifyKey = jwtToken.verify(signToken, "secureKey");
  console.log("SK@", verifyKey);
} catch (err) {
  console.log("SK@", err);
}
