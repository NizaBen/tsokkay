const userModel = require('../../models/user');
const passwordHash = require('password-hash');
const pino = require('pino');
const logger = pino();

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = passwordHash.generate(password);

    const newUser = new userModel({ username, email, password: hashedPassword });
    await newUser.save();

    const response = { success: true, message: 'User created successfully' };
    logger.info(response);

    return res.status(200).json(response);
  } catch (error) {
    const response = { success: false, message: error.message };
    logger.error(response);

    return res.status(400).json(response);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();

    const response = {
      success: false,
      message: 'Users list retrieved successfully',
    };
    logger.info(response);

    return res.status(200).json(Object.assign(response, { data: users }));
  } catch (error) {
    logger.error({ success: false, message: error.message });
    return res.status(502).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.find({ username: username });
    if (user) {
      //check if password matches
      const result = passwordHash.verify(password, user[0].password);

      if (result) {
        const response = {
          success: false,
          message: 'User logged in successfully',
        };
        logger.info(response);

        return res.status(200).json(Object.assign(response, { secret: 'secret' }));
      } else {
        const response = {
          success: false,
          message: "Password doesn't match",
        };
        logger.error(response);

        return res.status(400).json(response);
      }
    } else {
      const response = {
        success: false,
        message: "User doesn't exist",
      };
      logger.error(response);

      return res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { getUsers, createUser, login };
