import { Specification } from "../model/Specification";
import { ICreateSpeficationDTO, ISpecificationsRepository} from "./ISpecificationRepository";

export class SpeficationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]; //array

  constructor() {
    this.specifications = []; //iniciar nosso array 
  }
  findByName(name: string): Specification {
    const spec = this.specifications.find((spec) => spec.name === name);
    return spec;
  }
  list(): Specification[] {
    return this.specifications;
  }
  create({ name, description }: ICreateSpeficationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
}
