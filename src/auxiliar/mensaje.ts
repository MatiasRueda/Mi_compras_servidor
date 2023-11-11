//Enum que representan los mensajes que se enviaran al front

export enum EXITO {
    INGRESAR = "Usuario logueado exitosamente",
    REGISTRAR = "Usuario registrado exitosamente",
    ACTUALIZAR = "Datos actualizados",
    OBTENER = "Devolviendo datos"
}

export enum ERROR {
    INGRESAR = "Usuario no registrado",
    REGISTRAR = "Usuario ya registrado",
    CONTRASENIA = "La contrasenia es incorrecta",
    NO_DATOS = "Introducir datos porfavor",
    SERVER = "Ocurrio un error en el servidor"
}