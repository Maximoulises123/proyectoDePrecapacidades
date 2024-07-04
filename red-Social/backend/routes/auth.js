const express = require('express'); // Importamos Express para manejar rutas
const authController = require('../controllers/authController'); // Importamos el controlador que maneja la lógica de autenticación
const router = express.Router(); // Creamos un enrutador para definir nuestras rutas

// Rutas relacionadas con la autenticación

// Ruta para el registro de usuarios
router.post('/register', authController.register);

// Ruta para el inicio de sesión de usuarios
router.post('/login', authController.login);

// Ruta para eliminar cuenta de usuario
router.delete('/delete', authController.deleteUser);

module.exports = router; // Exportamos el enrutador para que otras partes de la aplicación lo puedan usar

