import { Request, Response } from "express";
import { CreateSpecificationsUseCase } from "./CreateSpecificationsUseCase";

export class CreateSpecificationsController {
  constructor(private createSpecificationUseCase: CreateSpecificationsUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
