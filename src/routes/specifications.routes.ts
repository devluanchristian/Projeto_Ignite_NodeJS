import { Router } from "express";
import { SpeficationsRepository } from "../modules/cars/repositories/SpecificationRepository";
import {CreateSpecificationsUseCase} from "../modules/cars/useCases/createSpecification/CreateSpecificationsUseCase";

const specificationRouter = Router();
const specificationsRepository = new SpeficationsRepository();

specificationRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationsUseCase = new CreateSpecificationsUseCase(specificationsRepository)
  createSpecificationsUseCase.execute({ name, description });

  return response.status(200).send();
});

export { specificationRouter };
