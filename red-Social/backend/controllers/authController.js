const User = require('../models/User');

const authController = {
  register: async (req, res) => {
    const { ID,userName, gmail, contrasenia } = req.body;
    try {
      const userExists = await User.buscarEmail(gmail);
      if (userExists) {
        return res.status(400).json({ message: 'El usuario ya existe' });
      }
      const userId = await User.registrarUsuario(ID, nombreDeUsuario, gmail, contraseña);
      res.status(201).json({ userId });
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },

  login: async (req, res) => {
    const { gmail, contraseña } = req.body;
    try {
      const user = await User.buscarEmail(gmail);
      if (!user || user.contraseña !== contraseña) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
      }
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};

module.exports = authController;

  
