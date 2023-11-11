import { Router } from "express";
import { PATH } from "../../../auxiliar/path";
import { novedades, canjes, suscripciones, usuarios } from "../controller/get.controllers";

const router = Router();

router.route(PATH.USUARIOS)
    .get((req, res) => { usuarios( req, res ) });

router.route(PATH.CANJES)
    .get((req, res) => { canjes( req, res ) });

router.route(PATH.NOVEDADES)
    .get((req, res) => { novedades( req, res ) });

router.route(PATH.SUSCRIPCIONES)
    .get((req, res) => { suscripciones( req, res ) });

export default router;