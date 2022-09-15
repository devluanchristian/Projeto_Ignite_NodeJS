import { randomUUID } from "crypto";

export class Specification {
  id?: string;
  name: string;
  description: string;
  create_at: Date;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
