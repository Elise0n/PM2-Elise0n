const {
  getAllUsersDB,
  getUserDB,
  createUserDB,
} = require("../controllers/users");

const getUsers = async (req, res) => {
  const users = await getAllUsersDB();
  res.status(200).json(users);
};

const getUserByID = async (req, res) => {
  const {id} = req.params;
  const user = await getUserDB(id);
  res.status(200).json(user);
};

const createUser = async (req, res) => {
  const user = req.body;
  const newUser = await createUserDB(user);
  res.status(201).json(newUser);
};

module.exports = {
  getUsers,
  getUserByID,
  createUser,
};
