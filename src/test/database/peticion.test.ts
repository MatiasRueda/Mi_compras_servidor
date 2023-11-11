import { select , insert } from "../../database/peticion";

describe("- Test Peticion -", () => {

    describe ("- Test select -", () => {
        it("Test 1 - select", () => {
            const resultado = "SELECT * FROM usuario";
            const peticion: string = select("usuario");
            expect(peticion).toStrictEqual(resultado);
        })

        it("Test 2 - select", () => {
            const resultado = "SELECT nombre FROM usuario";
            const peticion: string = select("usuario",["nombre"]);
            expect(peticion).toStrictEqual(resultado);
        })
        
        it("Test 3 - select", () => {
            const resultado = "SELECT nombre FROM usuario WHERE nombre = ?";
            const peticion: string = select("usuario",["nombre"], "nombre");
            expect(peticion).toStrictEqual(resultado);
        })

        it("Test 4 - select", () => {
            const resultado = "SELECT nombre,email,DNI,puntos,suscripcion FROM usuario WHERE nombre = ?";
            const peticion: string = select("usuario", ["nombre", "email", "DNI", "puntos", "suscripcion"], "nombre");
            expect(peticion).toStrictEqual(resultado);
        })

        it("Test 5 - select", () => {
            const resultado = "SELECT nombre,contrasenia,email FROM usuario WHERE nombre = ?";
            const peticion: string = select("usuario", ["nombre", "contrasenia", "email"] , "nombre");
            expect(peticion).toStrictEqual(resultado);
        })
    })
    
    describe("- Test insert -", () => {
        it("Test 1 - insert", () => {
            const resultado = "INSERT INTO usuario SET ?";
            const peticion: string = insert("usuario");
            expect(peticion).toStrictEqual(resultado);
        })
    })

})