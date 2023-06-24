const User = require("../models/User");
const bcrypt = require("bcrypt");

const verifyAdmin = async (req, res, next) => {
  if (!req.body.user.username || !req.body.user.password)
    return res
      .status(403)
      .send({ success: false, message: "Missing admin username or password" });

  const user = await User.findOne({
    userName: req.body.user.username,
  }).exec();

  const isValidPass = await bcrypt.compare(
    req?.body?.user.password,
    user?.password
  );

  if (!isValidPass) {
    res.status(403).send({ success: false, message: "Wrong password" });
  }

  if (user?.roles?.Admin) {
    next();
  } else {
    res
      .status(403)
      .send({ success: false, message: "Forbidden - Access denied" });
  }
};

module.exports = verifyAdmin;
