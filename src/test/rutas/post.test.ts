import app from "../../express"
import request from "supertest";
import { Response } from "supertest";
import { usuario1Test, usuarioLogin1Test, usuarioRegister1Test } from "../auxiliar/ejemplos";
import { mensaje } from "../../auxiliar/mensaje";
import { comparar , obtener , agregar } from "../../database/database";
import { PATH } from "../../auxiliar/path";

jest.mock("../../database/database");

describe("- Test Post -", () => {
    
    it("Status 200 cuando visito /login", async () => {
        const response: Response = await request(app).post(PATH.INGRESAR).send();
        expect(response.status).toBe(200);
    })

    it("Status 200 cuando visito /register", async () => {
        const response: Response = await request(app).post(PATH.REGISTRAR).send();
        expect(response.status).toBe(200);
    })

    describe("Se obtiene el mensaje correcto", () => {

        describe("En /login", () => {

            it("No enviar datos", async () => {
                const response: Response = await request(app).post(PATH.INGRESAR).send();
                expect(response.body.mensaje).toStrictEqual(mensaje.ERROR_NO_DATOS);
            })

            it("Error en el Login", async () => {
                (obtener as jest.Mock).mockReturnValue([]);
                const response: Response = await request(app).post(PATH.INGRESAR).send(usuarioLogin1Test);
                expect(response.body.mensaje).toStrictEqual(mensaje.ERROR_LOGIN);
            })

            it("Login exitoso", async () => {
                (obtener as jest.Mock).mockReturnValue([]);
                (agregar as jest.Mock).mockReturnValue(true);
                await request(app).post("/register").send(usuarioRegister1Test);
                (obtener as jest.Mock).mockReturnValue([usuario1Test]);
                (comparar as jest.Mock).mockReturnValue(true);
                const response: Response = await request(app).post(PATH.INGRESAR).send(usuarioLogin1Test);
                expect(response.body.mensaje).toStrictEqual(mensaje.SUCCESS_LOGIN);
            })
        })

        describe("En /register", () => {

            it("No enviar datos", async () => {
                const response: Response = await request(app).post(PATH.REGISTRAR).send();
                expect(response.body.mensaje).toStrictEqual(mensaje.ERROR_NO_DATOS);
            })

            it("Error en el register", async () => {
                (obtener as jest.Mock).mockReturnValue([usuario1Test]);
                await request(app).post(PATH.REGISTRAR).send(usuarioRegister1Test)
                const response: Response = await request(app).post(PATH.REGISTRAR).send(usuarioRegister1Test);
                expect(response.body.mensaje).toStrictEqual(mensaje.ERROR_REGISTER);
            })
            
            it("Register exitoso", async () => {
                (obtener as jest.Mock).mockReturnValue([]);
                (agregar as jest.Mock).mockReturnValue(true);
                const response: Response = await request(app).post(PATH.REGISTRAR).send(usuarioRegister1Test);
                expect(response.body.mensaje).toStrictEqual(mensaje.SUCCESS_REGISTER);
            })
            
        })
    })

    describe("El exito es el correcto", () => {

        describe("En /login", () => {

            it("No enviar datos", async () => {
                const response: Response = await request(app).post(PATH.INGRESAR).send();
                expect(response.body.exito).toBeFalsy();
            })

            it("Error en el Login", async () => {
                (obtener as jest.Mock).mockReturnValue([]);
                const response: Response = await request(app).post(PATH.INGRESAR).send(usuarioLogin1Test);
                expect(response.body.exito).toBeFalsy();
            })

            it("Login exitoso", async () => {
                (obtener as jest.Mock).mockReturnValue([]);
                (agregar as jest.Mock).mockReturnValue(true);
                await request(app).post(PATH.REGISTRAR).send(usuarioRegister1Test);
                (obtener as jest.Mock).mockReturnValue([usuario1Test]);
                (comparar as jest.Mock).mockReturnValue(true);
                const response: Response = await request(app).post(PATH.INGRESAR).send(usuarioLogin1Test);
                expect(response.body.exito).toBeTruthy();
            })
        })

        describe("En /register", () => {

            it("No enviar datos", async () => {
                const response: Response = await request(app).post(PATH.REGISTRAR).send();
                expect(response.body.exito).toBeFalsy();
            })

            it("Error en el register", async () => {
                (obtener as jest.Mock).mockReturnValue([usuario1Test]);
                await request(app).post(PATH.REGISTRAR).send(usuarioRegister1Test)
                const response: Response = await request(app).post(PATH.REGISTRAR).send(usuarioRegister1Test);
                expect(response.body.exito).toBeFalsy();
            })
            
            it("Register exitoso", async () => {
                (obtener as jest.Mock).mockReturnValue([]);
                (agregar as jest.Mock).mockReturnValue(true);
                const response: Response = await request(app).post(PATH.REGISTRAR).send(usuarioRegister1Test);
                expect(response.body.exito).toBeTruthy();
            })
            
        })
    })
})