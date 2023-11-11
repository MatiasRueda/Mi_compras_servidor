import { Request, Response } from "express";
import { EXITO , ERROR } from "../auxiliar/mensaje";
import { actualizar, encryptar } from "../database/database";
import { TABLA } from "../auxiliar/tabla";
import { Usuario } from "../auxiliar/type";

export async function actualizarUsuario( req: Request , res: Response ): Promise<Response> {
    try {
        if (!Object.keys(req.body).length) 
            return res.json({ mensaje: ERROR.NO_DATOS , exito: false });
        const dato: Usuario = (req.body as Usuario);
        if ("contrasenia" in dato)
            dato.contrasenia = await encryptar(dato.contrasenia!);
        await actualizar(TABLA.USUARIO, dato, "id");
        return res.json({ mensaje: EXITO.ACTUALIZAR , exito: true });
    } catch {
        return res.json({ mensaje: ERROR.SERVER , exito: false });
    }
} 