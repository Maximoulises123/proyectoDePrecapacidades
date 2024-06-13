const dedsec = require('../config/db.js');

const user = {
  // Método para buscar un usuario por su correo electrónico
  buscarEmail: async (gmail) => {
    const [resultado] = await redsocial.execute('SELECT * FROM users WHERE gmail = ?', [gmail]);
    return resultado;
  },

  // Método para registrar un nuevo usuario
  registrarUsuario: async (id,userName,gmail,contrasenia) => {
    const [registro] = await dedsec.execute(
      'INSERT INTO user (userName,gmail,contrasenia) VALUES (?, ?, ?)',
      [username, gmail, contrasenia]
    );
    return registro;
  }
};

module.exports = usuario;

