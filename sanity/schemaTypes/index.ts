
import { type SchemaTypeDefinition } from "sanity";
import { foundationPricing } from "./foundationPricing";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foundationPricing],
};
