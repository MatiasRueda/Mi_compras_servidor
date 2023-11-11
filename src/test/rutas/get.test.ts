import app from "../../express";
import request from "supertest";
import { Response } from "supertest";
import { obtener, obtenerTablas } from "../../database/database";
import { filaSuscripcion1Test, filaSuscripcion2Test, filaSuscripcion3Test, suscripcion1Test, suscripcion2Test, usuario1Test, usuario2Test, usuario3Test } from "../auxiliar/ejemplos";
import { Suscripcion, Usuario } from "../../../../auxiliar/type";
import { PATH } from "../../../../auxiliar/path";
import { FilaSuscripcion } from "../../auxiliar/type";

jest.mock("../../database/database");

describe("- Test get -", () => {

    it("Status 200 cuando visito /usuarios", async() => {
        const response: Response = await request(app).get(PATH.USUARIOS).send();
        expect(response.status).toBe(200);
    })

    describe("usuarios", () => {

        it("Obtener los usuarios NO es undefined", async() => {
            const usuarios: Usuario[] = [usuario1Test, usuario2Test, usuario3Test];
            (obtener as jest.Mock).mockReturnValue(usuarios);
            const response: Response = await request(app).get(PATH.USUARIOS).send();
            expect(response.body).not.toBeUndefined();
        })

        it("Se obtiene los usuarios correctos", async() => {
            const usuarios: Usuario[] = [usuario1Test, usuario2Test, usuario3Test];
            (obtener as jest.Mock).mockReturnValue(usuarios);
            const response: Response = await request(app).get(PATH.USUARIOS).send();
            expect(response.body).toStrictEqual(usuarios);
        })
    })

    describe("suscripciones", () => {

        it("Obtener las suscripcones NO es undefined", async() => {
            const filasSuscripciones: FilaSuscripcion[] = [filaSuscripcion1Test, filaSuscripcion2Test, filaSuscripcion3Test];
            (obtenerTablas as jest.Mock).mockReturnValue(filasSuscripciones);
            const response: Response = await request(app).get(PATH.SUSCRIPCIONES).send();
            expect(response.body).not.toBeUndefined();
        })

        it("Se obtiene las suscripciones correctas", async () => {
            const filasSuscripciones: FilaSuscripcion[] = [filaSuscripcion1Test, filaSuscripcion2Test, filaSuscripcion3Test];
            const suscripciones:  Suscripcion[] = [suscripcion1Test, suscripcion2Test];
            (obtenerTablas as jest.Mock).mockReturnValue(filasSuscripciones);
            const response: Response = await request(app).get(PATH.SUSCRIPCIONES).send();
            expect(response.body).toStrictEqual(suscripciones);
        })
    })
})