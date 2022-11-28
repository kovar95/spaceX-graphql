"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createMissionDetails = (missionDetails) => {
    const { flight_number, date_utc, success, name, details, links, id } = missionDetails;
    return {
        id,
        flightNumber: flight_number,
        launchDate: date_utc,
        launchSuccess: success,
        missionName: name,
        details,
        iconUrl: links?.patch?.small ??
            "https://zenit.org/wp-content/uploads/2018/05/no-image-icon.png",
        photosLinks: links?.flickr?.original?.map((l) => l) ?? [],
    };
};
exports.default = createMissionDetails;
//# sourceMappingURL=createMissionDetails.js.map