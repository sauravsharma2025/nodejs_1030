import jwttoken from "jsonwebtoken";
const secretKey = "studenthumai";
const secretKey1 = "erty";
export const sentToken = (req, res) => {
  const { id, pass } = req.body;
  console.log("SK@", req.body.pass);
  try {
    if (id === 1 && pass === "123") {
      console.log("SK@", process.env.SECRETKEY);
      const result = jwttoken.sign(
        { name: "saurav", age: 28 },
        process.env.SECRETKEY,
        {
          expiresIn: 60 * 60,
        }
      );
      const refreshToken = jwttoken.sign({ name: "saurav" }, secretKey1, {
        expiresIn: "3d",
      });
      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({
        token: result,
      });
    } else {
      res.status(401).json({
        msg: "tu pgl hai ky",
      });
    }
  } catch (err) {
    res.json({
      msg: "daya kuch to gadbad hai",
    });
  }
};
export const refreshToken = (req, res) => {
  if (req.cookies?.jwt) {
    const refreshToken = req.cookie.jwt;
    jwttoken.verify(refreshToken, secretKey1, (err, decode) => {
      if (err) res.status(406).json({ msg: "Unauthorised" });
      else {
        const token = jwttoken.sign({ name: "saurav", age: 28 }, secretKey, {
          expiresIn: "10m",
        });
        res.json({ token: token });
      }
    });
  } else {
    res.status(406).json({ msg: "Unauthorised" });
  }
};

export const studentVerify = (req, res, next) => {
  try {
    console.log("SK@", req.headers);
    const { authorization } = req.headers;
    const verification = jwttoken.verify(authorization, process.env.SECRETKEY);

    console.log("SK@", verification);
    res.json({
      msg: "Token Provided Successfully",
    });
  } catch (err) {
    res.json({
      message: "Student is not authenicated",
    });
  }
};
