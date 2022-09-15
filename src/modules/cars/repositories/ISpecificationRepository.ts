import { Specification } from "../model/Specification";

export interface ICreateSpeficationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create({name, description}: ICreateSpeficationDTO): void;
}
