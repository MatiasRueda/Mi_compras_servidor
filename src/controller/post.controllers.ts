import { Response, Request } from "express";
import { Usuario } from "../../../auxiliar/type";
import { Condicion, UsuarioLogin } from "../auxiliar/type";
import { agregar, comparar, obtener } from "../database/database";
import { mensaje } from "../auxiliar/mensaje";
import { TABLA } from "../auxiliar/tabla";

export async function ingresarUsuario( req: Request, res: Response ): Promise<Response> {
    if (!Object.keys(req.body).length) 
        return res.json({ mensaje: mensaje.ERROR_NO_DATOS , exito: false }); 
    const usuario: UsuarioLogin = req.body;
    const condicion: Condicion = {columna: "nombre", valor: usuario.nombre};
    const resultado: Usuario[] = await obtener(TABLA.USUARIO, [], condicion);
    if (!resultado.length)
        return res.json({ mensaje: mensaje.ERROR_LOGIN , exito: false });
    const [usuarioEncontrado]: Usuario[] = resultado;
    if (!comparar(usuario.contrasenia, usuarioEncontrado.contrasenia!)) 
        return res.json({ mensaje: mensaje.ERROR_CONTRASENIA , exito: false });
    const { contrasenia , ...datosUsuario } = usuarioEncontrado; 
    return res.json({ mensaje: mensaje.SUCCESS_LOGIN ,  exito: true , dato: datosUsuario });
}

export async function agregarUsuario( req: Request, res: Response ): Promise<Response> {
    if (!Object.keys(req.body).length) return res.json({ mensaje: mensaje.ERROR_NO_DATOS ,  exito: false }); 
    const { confirContrasenia , ...usuario } = req.body;
    const condicion: Condicion = {columna: "nombre", valor: usuario.nombre};
    const resultado: Usuario[] = await obtener(TABLA.USUARIO, [], condicion);
    if (!!resultado.length) 
        return res.json({ mensaje: mensaje.ERROR_REGISTER , exito: false });
    await agregar(TABLA.USUARIO, usuario);
    return res.json({ mensaje: mensaje.SUCCESS_REGISTER , exito: true });
}