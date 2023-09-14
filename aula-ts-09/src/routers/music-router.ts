import { Router } from "express";
import musicController from "../controllers/music-controller";
import { validateSchema } from "middlewares/validation-schema";
import { schemaMusic } from "schemas/music.schema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post("/musics", validateSchema(schemaMusic), musicController.createMusic);

export default musicRouter;