import app from "../../express";
import request from "supertest";
import { Response } from "supertest";
import { usuario1Test } from "../auxiliar/ejemplos";
import { mensaje } from "../../auxiliar/mensaje";
import { ActualizarDatos } from "../../auxiliar/type";
import { actualizar } from "../../database/database";
import { PATH } from "../../auxiliar/path";

jest.mock("../../database/database");

describe("- Test Put -", () => {
    
    const puntosNuevo: number = 150;
    const emailNuevo: string = "holaaa@gmail.com";

    it("Status 200 cuando visito /actualizar", async () => {
        const response: Response =  await request(app).put(PATH.ACTUALIZAR).send();
        expect(response.status).toBe(200);
    })

    describe("Se obtiene el mensaje correcto", () => {

        it("No enviar datos", async () => {
            const response: Response = await request(app).put(PATH.ACTUALIZAR).send();
            expect(response.body.mensaje).toStrictEqual(mensaje.ERROR_NO_DATOS);
        })

        it("Actualizar los puntos", async () => {
            const datos: ActualizarDatos = { ...usuario1Test, puntos: puntosNuevo};
            (actualizar as jest.Mock).mockReturnValue(true);
            const response: Response = await request(app).put(PATH.ACTUALIZAR).send(datos);
            expect(response.body.mensaje).toStrictEqual(mensaje.SUCCESS_PUT_DATO);
        })
    })

    describe("Se obtiene el exito correcto tras", () => {

        it("No enviar datos", async () => {
            const response: Response = await request(app).put(PATH.ACTUALIZAR).send();
            expect(response.body.mensaje).toStrictEqual(mensaje.ERROR_NO_DATOS);
        })

        it("Actualizar los puntos", async () => {
            const datos: ActualizarDatos = { ...usuario1Test, puntos: puntosNuevo};
            (actualizar as jest.Mock).mockReturnValue(true);
            const response: Response = await request(app).put(PATH.ACTUALIZAR).send(datos);
            expect(response.body.exito).toBeTruthy();
        })
    })

})