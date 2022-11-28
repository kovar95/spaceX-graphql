import { nodeDefinitions } from "graphql-relay";
import { fromGlobalId } from "graphql-relay";
import { GraphqlContextType } from "../services/DataSources";
import { Mission } from "src/services/spaceX/types/Mission";

const nodeTypes = ["optionDescriptor", "financialImpact", "booking"];

export const idFetcher = async (
  id: string,
  { dataSources }: GraphqlContextType
): Promise<unknown> => {
  return {
    id,
  };
};

export const typeResolver = ({ id }: { id: string }): string => {
  return fromGlobalId(id).type;
};

const { nodeInterface, nodeField } = nodeDefinitions(idFetcher, typeResolver);

export { nodeInterface, nodeField };
