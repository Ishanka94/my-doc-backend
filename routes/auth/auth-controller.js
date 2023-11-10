const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';
const sendResponse = require('../../utils/response');
const httpStatus = require('http-status');

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
}

const registerUser = async (req, res) => {
  const user = User(req.body);
  const savedData = await user.save();
  if (savedData) {
      return sendResponse(res, httpStatus.OK , savedData);
  }
};

module.exports = { loginUser, registerUser };