import { Request, Response } from "express";
import { mensaje } from "../auxiliar/mensaje";
import { actualizar, encryptar } from "../database/database";
import { TABLA } from "../auxiliar/tabla";
import { Usuario } from "../auxiliar/type";

export async function actualizarUsuario( req: Request , res: Response ): Promise<Response> {
    if (!Object.keys(req.body).length) 
        return res.json({ mensaje: mensaje.ERROR_NO_DATOS, exito: false });
    const dato: Usuario = (req.body as Usuario);
    if ("contrasenia" in dato)
        dato.contrasenia = await encryptar(dato.contrasenia!);
    await actualizar(TABLA.USUARIO, dato, "id");
    return res.json({ mensaje: mensaje.SUCCESS_PUT_DATO , exito: true});
} 