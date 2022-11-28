import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import createMissionDetails from "../dataLoaders/createMissionDetails";

class SpaceXDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.spacexdata.com/v4/";
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Content-Type", "application/json");
  }

  async getAllLaunches(offset: number, limit: number) {
    const params = {
      options: {
        limit,
        offset,
      },
    };

    const response = await this.post(`launches/query`, params);
    return response;
  }

  async getLaunchDetails(id: string) {
    const response = await this.get(`launches/${encodeURIComponent(id)}`);
    return createMissionDetails(response);
  }
}

export default SpaceXDataSource;
