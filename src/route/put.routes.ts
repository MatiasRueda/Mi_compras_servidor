import { Router } from "express";
import { actualizarUsuario } from "../controller/put.controllers";
import { PATH } from "../auxiliar/path";

const router = Router();

router.route(PATH.ACTUALIZAR)
    .put(( req , res ) => { actualizarUsuario(req, res) });

export default router;