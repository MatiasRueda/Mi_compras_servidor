import { Response, Request } from "express";
import { Condicion, Usuario, UsuarioLogin } from "../auxiliar/type";
import { agregar, comparar, obtener } from "../database/database";
import { EXITO , ERROR } from "../auxiliar/mensaje";
import { TABLA } from "../auxiliar/tabla";

export async function ingresarUsuario( req: Request, res: Response ): Promise<Response> {
    try {
        if (!Object.keys(req.body).length) 
            return res.json({ mensaje: ERROR.NO_DATOS , exito: false }); 
        const usuario: UsuarioLogin = req.body;
        const condicion: Condicion = {columna: "nombre", valor: usuario.nombre};
        const resultado: Usuario[] = await obtener(TABLA.USUARIO, [], condicion);
        if (!resultado.length)
            return res.json({ mensaje: ERROR.INGRESAR , exito: false });
        const [usuarioEncontrado]: Usuario[] = resultado;
        if (!comparar(usuario.contrasenia, usuarioEncontrado.contrasenia!)) 
            return res.json({ mensaje: ERROR.CONTRASENIA , exito: false });
        const { contrasenia , ...datosUsuario } = usuarioEncontrado; 
        return res.json({ mensaje: EXITO.INGRESAR ,  exito: true , dato: datosUsuario });
    } catch {
        return res.json({ mensaje: ERROR.SERVER , exito: false });
    }
}

export async function agregarUsuario( req: Request, res: Response ): Promise<Response> {
    try {
        if (!Object.keys(req.body).length) return res.json({ mensaje: ERROR.NO_DATOS ,  exito: false }); 
        const { confirContrasenia , ...usuario } = req.body;
        const condicion: Condicion = {columna: "nombre", valor: usuario.nombre};
        const resultado: Usuario[] = await obtener(TABLA.USUARIO, [], condicion);
        if (!!resultado.length) 
            return res.json({ mensaje: ERROR.REGISTRAR , exito: false });
        await agregar(TABLA.USUARIO, usuario);
        return res.json({ mensaje: EXITO.REGISTRAR , exito: true });
    } catch {
        return res.json({ mensaje: ERROR.SERVER , exito: false });
    }
}