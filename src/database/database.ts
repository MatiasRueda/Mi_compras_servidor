import { Pool, createPool } from "mysql2/promise";
import { config } from "dotenv";
import { insert, select, selectTables, update } from "./peticion";
import { compareSync, hashSync } from "bcrypt";
import { Condicion, TablasElegidas } from "../auxiliar/type";
import { TABLA } from "../auxiliar/tabla";

config();
const saltOrRounds: number = 10;

/**
 * @description se conecta a la base de datos.
 * @returns la conexion a la base de datos.
 */
async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DB,
        connectionLimit: 3
    })
    return connection;
}

/**
 * @description obtiene la informacion de las columnas y la regresa
 * @used para obtener informacion de usuarios 
 * @param conn 
 * @param tabla 
 * @param columnaElegida 
 * @param condicion  
 * @returns la informacion que se buscaba en caso de no encontrarla regresa un array vacio.
 * @example obtener(conn, "usuario") => [{"Matias", "12345" ,"matias@gmail.com"}, {"Lucas", "6789" , "lucas@gmail.com"}] //regresa toda la informacion de la tabla usuario.
 * @example obtener(conn, "usuario", "nombre") => [{"Matias"}, {"Lucas"}] //Solo regresa la columna nombre.
 * @example obtener(conn, "usuario", ["nombre , "DNI"]) => [{"Matias", "12345"}, {"Lucas", "6789"}] //Solo regresa nombre y DNI.
 * @example obtener(conn, "usuario", "nombre", {"nombre", "Matias"}) => [{"Matias"}] //Es el unico usario que cumple la condicion.
 */

export async function obtener(tabla: TABLA, columnas?: string[], condicion?: Condicion): Promise<any[]> {
    const conn: Pool = await connect();
    const peticion: string = select(tabla, columnas, condicion?.columna);
    const [resultado]: any = await conn.query(peticion, condicion?.valor);
    await conn.end();
    return resultado;
}

export async function obtenerTablas(tablas: TablasElegidas): Promise<any[]> {
    const conn: Pool = await connect();
    const peticion: string = selectTables(tablas);
    const [resultado]: any = await conn.query(peticion);
    await conn.end();
    return resultado;
}


/**
 * @description agrega a la tabla algun dato.
 * @used para agregar a los usarios a la tabla.
 * @param conn 
 * @param tabla 
 * @param dato 
 */
export async function agregar(tabla: TABLA , dato: any): Promise<void> {
    const conn: Pool = await connect();
    const agregarDatos: any = JSON.parse(JSON.stringify(dato));
    agregarDatos.contrasenia = ("contrasenia" in agregarDatos)? 
        hashSync(agregarDatos.contrasenia, saltOrRounds): 
        agregarDatos.contrasenia;
    const peticion: string = insert(tabla);
    await conn.query(peticion, agregarDatos);
    await conn.end();
}

export async function actualizar(tabla: TABLA, dato: any, condicion?: string): Promise<void> {
    const conn: Pool = await connect();
    const peticion: string = update(tabla, condicion);
    await conn.query(peticion, [dato, dato.id]);
    await conn.end();
}

export function comparar(cadena: string, cadenaEncryptada: string): boolean {
    return compareSync(cadena, cadenaEncryptada);
}

export async function encryptar(contrasenia: string): Promise<string> {
    return hashSync(contrasenia, saltOrRounds);
}