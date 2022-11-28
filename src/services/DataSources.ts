import SpaceXDataSource from "./spaceX/dataSources/SpaceXDataSource";

export const dataSources = () => {
  const spaceX = new SpaceXDataSource();

  return {
    spaceX,
  };
};

export type DataSourcesType = ReturnType<typeof dataSources>;

export type GraphqlContextType = {
  dataSources: DataSourcesType;
};
