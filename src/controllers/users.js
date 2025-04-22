const users = [
  {id: 1, name: "Gama"},
  {id: 2, name: "Bartolomiau"},
  {id: 3, name: "Palta"},
  {id: 4, name: "Tota"},
  {id: 5, name: "Milaneso"},
];

const getAllUsersDB = async () => users;

const getUserDB = async (id) => {
  const user = users.find((user) => user.id === parseInt(id));
  return user
    ? user
    : (() => {
        throw Error("Usuario no encontrado");
      })();
};

const createUserDB = async (user) => {
  !user
    ? (() => {
        throw Error("Error de la Base de Datos: Falta informacion");
      })()
    : users.push(user);

  const newUser = {id: users.length, name: user};
  users.push(newUser);
  return newUser;
};

module.exports = {
  getAllUsersDB,
  getUserDB,
  createUserDB,
};
