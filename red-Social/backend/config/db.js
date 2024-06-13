let mysql= require("mysql");
let conexion=mysql.createConnection({
    host:"localhost",
    database:"dedsec",
    user:"root",
    password:"",
});

conexion.connect(funcion(err){
    if(err){
        throw err;
    } else {
        console.log("exito");
}
});

