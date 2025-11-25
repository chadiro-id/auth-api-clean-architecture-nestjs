import { IdGenerator } from 'src/application/services/id-generator';
import { nanoid } from 'nanoid';

export class NanoidGenerator implements IdGenerator {
  generate(): string {
    return nanoid();
  }
}
