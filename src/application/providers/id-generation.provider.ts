export interface IdGenerationProvider {
  generate(size: number): string;
}
