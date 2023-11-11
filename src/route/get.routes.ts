import { Router } from "express";
import { novedades, canjes, suscripciones } from "../controller/get.controllers";
import { PATH } from "../auxiliar/path";

const router = Router();

router.route(PATH.CANJES)
    .get((req, res) => { canjes( req, res ) });

router.route(PATH.NOVEDADES)
    .get((req, res) => { novedades( req, res ) });

router.route(PATH.SUSCRIPCIONES)
    .get((req, res) => { suscripciones( req, res ) });

export default router;