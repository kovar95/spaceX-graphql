import { ApiMissionDetails } from "../apiTypes/ApiMissionDetails";
import { MissionDetails } from "../types/MissionDetails";

const createMissionDetails = (
  missionDetails: ApiMissionDetails
): MissionDetails => {
  const { flight_number, date_utc, success, name, details, links, id } =
    missionDetails;

  return {
    id,
    flightNumber: flight_number,
    launchDate: date_utc,
    launchSuccess: success,
    missionName: name,
    details,
    iconUrl:
      links?.patch?.small ??
      "https://zenit.org/wp-content/uploads/2018/05/no-image-icon.png",
    photosLinks: links?.flickr?.original?.map((l) => l) ?? [],
  };
};

export default createMissionDetails;
