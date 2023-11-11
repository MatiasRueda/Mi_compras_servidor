import { Request, Response } from "express";
import { obtener, obtenerTablas } from "../database/database";
import { Canje, FilaSuscripcion, Novedad, Suscripcion, Usuario } from "../auxiliar/type";
import { TABLA } from "../auxiliar/tabla";
import { ERROR, EXITO } from "../auxiliar/mensaje";

function listaSuscripciones(filas: FilaSuscripcion[]): Suscripcion[] {
    const map  = new Map<String, Suscripcion>();
    filas.forEach((filaSuscripcion: FilaSuscripcion) => {
        if (map.has(filaSuscripcion.titulo)) {
            const suscripcion: Suscripcion = map.get(filaSuscripcion.titulo)!;
            suscripcion.beneficios.push(filaSuscripcion.descripcion);
            map.set(suscripcion.titulo, suscripcion);
            return;
        }
        const { descripcion, ...nuevaSuscripcion } = filaSuscripcion; 
        const suscripcion: Suscripcion = { 
            ...nuevaSuscripcion,
            beneficios: [filaSuscripcion.descripcion]
        }
        map.set(filaSuscripcion.titulo, suscripcion);
    });
    return Array.from(map.values());
}
export async function canjes(req: Request ,res: Response): Promise<Response> {
    try {
        const canjes: Canje[] = await obtener(TABLA.CANJE);
        return res.json({ mensaje: EXITO.OBTENER , exito: true , dato: canjes });
    } catch {
        return res.json({ mensaje: ERROR.SERVER , exito: false });
    }
}

export async function novedades(req: Request ,res: Response): Promise<Response> {
    try {
        const novedades: Novedad[] = await obtener(TABLA.NOVEDAD);
        return res.json({ mensaje: EXITO.OBTENER , exito: true, dato: novedades });
    } catch {
        return res.json({ mensaje: ERROR.SERVER , exito: false });
    }
}

export async function suscripciones(req: Request ,res: Response): Promise<Response> {
    try {
        const tabla1 = {
            nombre: TABLA.SUSCRIPCION,
            columnas: [],
            condicion: "titulo",
        }

        const tabla2 = {
            nombre: TABLA.BENEFICIO,
            columnas: ["descripcion"],
            condicion: "titulo_suscripcion"
        }
        const resultado = await obtenerTablas({ tabla1 , tabla2 });
        return res.json({ mensaje: EXITO.OBTENER, exito: true, dato: listaSuscripciones(resultado) });
    } catch {
        return res.json({ mensaje: ERROR.SERVER , exito: false });
    }
}