import {  Suscripcion, Usuario } from "../../../../auxiliar/type"; 
import { FilaSuscripcion, UsuarioLogin, UsuarioRegister } from "../../auxiliar/type";

// Aca va el codigo que sera utilizado en gran parte de los test.
// y de esta forma evitar tener que reescribir el codigo


export const usuarioLogin1Test: UsuarioLogin = {
    nombre: "Matias",
    contrasenia: "123",
};

export const usuarioRegister1Test: UsuarioRegister = {
    nombre: "Matias",
    DNI: "12345",
    contrasenia: "123",
    email: "123@gmail.com",
};

export const usuario1Test: Usuario = {
    id: 1,
    nombre: "Matias",
    puntos: 1000,
    email: "123@gmail.com",
    DNI: "12345",
    canjeTitulo: "ninguno",
    canjeDescuento: 0,
    canjeRestantes: 0,
    suscripcionTitulo: "ninguno",
    suscripcionDescuento: 0,
    suscripcionRestantes: 0,
}

export const usuario2Test: Usuario = {
    id: 2,
    nombre: "Lucas",
    puntos: 550,
    email: "123@gmail.com",
    DNI: "12315",
    canjeTitulo: "ninguno",
    canjeDescuento: 0,
    canjeRestantes: 0,
    suscripcionTitulo: "ninguno",
    suscripcionDescuento: 0,
    suscripcionRestantes: 0,
}

export const usuario3Test: Usuario = {
    id: 3,
    nombre: "Esteban",
    puntos: 1300,
    email: "5031@gmail.com",
    DNI: "30131",
    canjeTitulo: "ninguno",
    canjeDescuento: 0,
    canjeRestantes: 0,
    suscripcionTitulo: "ninguno",
    suscripcionDescuento: 0,
    suscripcionRestantes: 0,
}

export const filaSuscripcion1Test: FilaSuscripcion = {
    titulo: "Normal",
    tipo: "mensual",
    precio: 10,
    descuento: 10,
    restantes: 1,
    descripcion: "10% de descuento",
}

export const filaSuscripcion2Test: FilaSuscripcion = {
    titulo: "Normal",
    tipo: "mensual",
    precio: 100,
    descuento: 15,
    restantes: -1,
    descripcion: "Participacion en eventos",
}

export const filaSuscripcion3Test: FilaSuscripcion = {
    titulo: "Premium",
    tipo: "anual",
    precio: 130,
    descuento: 15,
    restantes: -1,
    descripcion: "20% de descuento",
}

export const suscripcion1Test: Suscripcion = {
    titulo: 'Normal',
    tipo: 'mensual',
    precio: 10,
    descuento: 10,
    restantes: 1,
    beneficios: [ '10% de descuento', 'Participacion en eventos' ]
}

export const suscripcion2Test: Suscripcion = {
    titulo: 'Premium',
    tipo: 'anual',
    precio: 130,
    descuento: 15,
    restantes: -1,
    beneficios: [ '20% de descuento' ]
}