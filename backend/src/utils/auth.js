import config from "../config";
import { User } from "../resources/user/user.model";
import jwt from "jsonwebtoken";

export const newToken = user => {
  return jwt.sign({ id: user.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  });
};

export const verifyToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) reject(err);
      resolve(payload);
    });
  });
};

export const signup = async (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.username) {
    return res.status(400).send({ message: "missing values" });
  }

  try {
    const userExist = await User.findOne({ email: req.body.email }).lean().exec();

    if (!userExist) {
      const user = await User.create(req.body);
      const token = newToken(user);

      return res.status(201).send({ user, token });
    }

    return res.status(400).send({ message: "User already exists" });
  } catch (e) {
    return res.status(400).send({ message: "User already exists" });
  }
};

export const signin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: "need email and password" });
  }
  const invalid = { message: "Invalid email and password combination" };

  try {
    const user = await User.findOne({ email: req.body.email })
      .select("email password username")
      .exec();

    if (!user) {
      return res.status(401).send(invalid);
    }

    const match = await user.checkPassword(req.body.password);
    if (!match) {
      return res.status(401).send(invalid);
    }

    const token = newToken(user);
    return res.status(200).send({ user, token });
  } catch (e) {
    console.error(e);
    return res.status(500).end();
  }
};

export const protect = async (req, res, next) => {
  const unauthorized = { message: "Unauthorized, missing token" };
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).send(unauthorized);
  }

  const token = bearer.split("Bearer ")[1].trim();
  let payload;

  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).end();
  }

  const user = await User.findById(payload.id).select("-password").lean().exec();

  if (!user) {
    return res.status(401).end();
  }

  req.user = user;
  next();
};
