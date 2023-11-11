/**
 * @description arma un string con las columnas pasadas como argumento
 * @used unicamente en la funcion select.
 * @param columnas 
 * @returns un unico string con las columnas pasadas como argumento
 * @example crearColumnas(["nombre", "contrasenia", "DNI", "email"]) => "nombre,contrasenia,DNI,email"
 */

import { TablasElegidas } from "../auxiliar/type";

function crearColumnas(columnas: string[], tabla?: string): string {
    let columnasElegidas: string = "";
    if (!columnas.length) 
        return tabla? tabla + "." + "*" : "*";
    columnas.forEach((columna: string) => columnasElegidas += "," + (tabla? tabla +"."+ columna: columna));
    return columnasElegidas.slice(1);
} 

/**
 * @description arma la peticion del estilo SELECT.
 * @used para la funcion query.
 * @param tabla 
 * @param columnaElegida 
 * @param condicion 
 * @returns un string con el formato SELECT (dependiendo de los argumentos pasados).
 * @example select("usuario") => "SELECT * FROM usuario".
 * @example select("usuario", "nombre") => "SELECT nombre FROM usuario".
 * @example select("usuario", "nombre", "email") => "SELECT nombre FROM usuario WHERE email = ?".
*/

export function select(tabla: string, columnas?: string[], condicion?: string): string {
    let peticion: string = "SELECT ";
    let columna: string | string[] = !columnas? "*" : columnas;
    columna = !columnas || !columnas.length? "*" : crearColumnas(columnas); 
    peticion += columna + " FROM " + tabla;
    if (!condicion) return peticion;
    peticion += " WHERE " + condicion + " = ?";
    return peticion;
}

//"SELECT suscripcion.* , beneficio.descripcion FROM suscripcion LEFT JOIN beneficio ON titulo = titulo_suscripcion";
export function selectTables(tablas: TablasElegidas): string {
    const tabla1Columnas = crearColumnas(tablas.tabla1.columnas, tablas.tabla1.nombre);
    const tabla2Columnas = crearColumnas(tablas.tabla2.columnas, tablas.tabla2.nombre);
    return "SELECT " + tabla1Columnas + ", " + tabla2Columnas + " FROM "+ tablas.tabla1.nombre + 
            " LEFT JOIN "+ tablas.tabla2.nombre +" ON "+ tablas.tabla1.condicion +" = " + tablas.tabla2.condicion;
}

/**
 * @description arma una peticion del estilo insert
 * @used en metodos del tipo query
 * @param tabla 
 * @returns un string con el formato de peticion insert
 * @example insert("usuario") => "INSERT INTO usuario SET ?".
 */

export function insert(tabla: string) {
    return "INSERT INTO " + tabla + " SET ?";
}

export function update(tabla: string, condicion?: string): string {
    if (!condicion) 
        return "UPDATE " + tabla + "SET ?";
    return "UPDATE " + tabla +" SET ? WHERE " + condicion + " = ?";
}