import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export function validateSchema(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const errorMessage = error.details.map((e) => e.message);
      console.log(errorMessage);
      return res.status(422).send(errorMessage);
    }

    next();
  }
}