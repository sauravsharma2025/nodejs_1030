import jwt from "jsonwebtoken";
import clientModel from "./client.model.js";

const secretKey = "gfgf";

export const createNewClient = async (req, res, next) => {
  console.log("SK@", req.body);
  const { name, description, price } = req.body;
  const client = new clientModel({ name, description, price });
  const result = await client.save();
  console.log("SK@", result);
  res.send({ message: "Client Successfully Created" });
  next();
};
const getAllClient = (req, res) => {
  try {
    console.log("SK@", req.query.id);
    res.status(200).send({ message: "This is msg from Client" });
  } catch (err) {
    res.status(400).send("Invalid");
  }
};
export const autheticateClient = (req, res) => {
  const client = {
    name: "gaurav",
    age: 33,
    gender: "M",
  };
  jwt.sign({ client }, { secretKey }, { expiresIn: "300s" }, (err, token) => {
    if (err) {
      res.end("error", err);
    }
    res.send({
      token,
    });
  });
};

export const getClientToken = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  console.log("SK@", bearerHeader);
  if (typeof bearerHeader !== "undefined") {
    req.token = bearerHeader;
    next();
  } else {
    res.send({
      result: "Invalid token",
    });
  }
};

export const verifyClientToken = (req, res, next) => {
  jwt.verify(req.token, secretKey, (err, oAuthenicateData) => {
    if (err) {
    } else {
      res.json({
        result: "Successfull raho",
        oAuthenicateData,
      });
    }
  });
};
export const knowClient = async (req, res, next) => {
  try {
    const knowClientQuery = await clientModel.find({ name: "saurav" });
    res.json({ knowClientQuery });
  } catch (err) {
    res.json({ msg: "Error Found" });
  }
};
export const updateClient = async (req, res, next) => {
  const { name } = req.body;

  try {
    let updateRecord = {
      name: name,
    };
    const updateClientQuery = await clientModel.findByIdAndUpdate(
      "6414443781ee689de4fe392d",
      { $set: updateRecord }
    );
    res.json({
      mesg: "Update record successfully",
    });
  } catch (err) {
    res.json("Error Found while update");
  }
};
export const deleteClient = async (req, res, next) => {
  try {
    const deleteClientQuery = await clientModel.findOneAndRemove(
      "641458fd7efea5733e86dcf4"
    );
    res.json({
      msg: "meene record udha dia",
    });
  } catch (err) {
    res.json("failed to remove record");
  }
};
export default getAllClient;
