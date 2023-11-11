import { Request, Response } from "express";
import { obtener, obtenerTablas } from "../database/database";
import { Usuario , Canje, Novedad, Suscripcion } from "../../../auxiliar/type";
import { FilaSuscripcion } from "../auxiliar/type";
import { TABLA } from "../auxiliar/tabla";

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

export async function usuarios(req: Request ,res: Response): Promise<Response> {
    const usuarios: Usuario[] = await obtener(TABLA.USUARIO);
    return res.json(usuarios);
}

export async function canjes(req: Request ,res: Response): Promise<Response> {
    const canjes: Canje[] = await obtener(TABLA.CANJE);
    return res.json(canjes);
}

export async function novedades(req: Request ,res: Response): Promise<Response> {
    const novedades: Novedad[] = await obtener(TABLA.NOVEDAD);
    return res.json(novedades);
}

export async function suscripciones(req: Request ,res: Response): Promise<Response> {
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
    return res.json(listaSuscripciones(resultado));
}