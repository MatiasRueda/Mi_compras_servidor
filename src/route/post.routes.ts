import { Router } from "express";
import { agregarUsuario , ingresarUsuario } from "../controller/post.controllers";
import { PATH } from "../../../auxiliar/path";

const router = Router();

router.route(PATH.INGRESAR)
    .post((req, res) => { ingresarUsuario(req, res)})

router.route(PATH.REGISTRAR)
    .post((req, res) => { agregarUsuario(req, res)})

export default router;
