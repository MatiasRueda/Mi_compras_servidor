import { TABLA } from "./tabla";

/* Archivo utilizado para tener los types mas utilizados a lo largo
de la seccion server y asi evitar repetir el codigo */

export type UsuarioLogin = {
    nombre: string,
    contrasenia: string,
}

export type UsuarioRegister = {
    nombre: string,
    DNI: string,
    contrasenia: string,
    email: string,
};

export type Usuario = {
    id: number;
    nombre: string;
    contrasenia?: string;
    email: string;
    DNI: string;
    puntos: number;
    suscripcionTitulo: string;
    suscripcionDescuento: number,
    suscripcionRestantes: number,
    canjeTitulo: string;
    canjeDescuento: number;
    canjeRestantes: number,
};

export type Canje = {
    titulo: string;
    puntos: number;
    descuento: number;
    restantes: number;
};

export type Novedad = {
    id: number;
    titulo: string;
    descripcion: string;
};

export type Suscripcion = {
    titulo: string;
    tipo: string;
    precio: number;
    descuento: number;
    restantes: number;
    beneficios: string[];
};

export type ActualizarDatos = {
    id: number;
    nombre?: string;
    contrasenia?: string;
    email?: string;
    puntos?: number;
    suscripcionTitulo?: string;
    canjeTitulo?: string;
} 

export type TablasElegidas = {
    tabla1: {
        nombre: TABLA;
        columnas: string[];
        condicion: string;
    };
    tabla2: {
        nombre: TABLA;
        columnas: string[];
        condicion: string;
    }
}

export type FilaSuscripcion = {
    titulo: string;
    tipo: string;
    precio: number;
    descuento: number;
    restantes: number;
    descripcion: string;
};

export type Condicion = {
    columna: string;
    valor: string;
};

export type Respuesta = {
    mensaje: string;
    exito: boolean;
    dato?: any;
};
