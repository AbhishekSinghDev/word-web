import jwt from "jsonwebtoken";

const generateToken = (userid) => {
  const token = jwt.sign({ id: userid }, "siyan_op", { expiresIn: "2d" });
  return token;
};

export default generateToken;
