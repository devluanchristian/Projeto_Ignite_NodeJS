import { SpeficationsRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationsController } from "../createSpecification/CreateSpecificationsController";
import { CreateSpecificationsUseCase } from "../createSpecification/CreateSpecificationsUseCase";

const specificationsRepository = new SpeficationsRepository();
const createSpecificationUseCase = new CreateSpecificationsUseCase(
  specificationsRepository
);
const createSpecificationsController = new CreateSpecificationsController(
  createSpecificationUseCase
);

export { createSpecificationsController };
