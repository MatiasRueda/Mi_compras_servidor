import app from "../../express";
import request from "supertest";
import { Response } from "supertest";
import { obtener, obtenerTablas } from "../../database/database";
import { filaSuscripcion1Test, filaSuscripcion2Test, filaSuscripcion3Test, suscripcion1Test, suscripcion2Test, usuario1Test, usuario2Test, usuario3Test } from "../auxiliar/ejemplos";

import { FilaSuscripcion, Suscripcion, Usuario } from "../../auxiliar/type";
import { PATH } from "../../auxiliar/path";

jest.mock("../../database/database");

describe("- Test get -", () => {

    describe("suscripciones", () => {

        it("Obtener las suscripcones NO es undefined", async() => {
            const filasSuscripciones: FilaSuscripcion[] = [filaSuscripcion1Test, filaSuscripcion2Test, filaSuscripcion3Test];
            (obtenerTablas as jest.Mock).mockReturnValue(filasSuscripciones);
            const response: Response = await request(app).get(PATH.SUSCRIPCIONES).send();
            expect(response.body.dato).not.toBeUndefined();
        })

        it("Se obtiene las suscripciones correctas", async () => {
            const filasSuscripciones: FilaSuscripcion[] = [filaSuscripcion1Test, filaSuscripcion2Test, filaSuscripcion3Test];
            const suscripciones:  Suscripcion[] = [suscripcion1Test, suscripcion2Test];
            (obtenerTablas as jest.Mock).mockReturnValue(filasSuscripciones);
            const response: Response = await request(app).get(PATH.SUSCRIPCIONES).send();
            expect(response.body.dato).toStrictEqual(suscripciones);
        })
    })
})