"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createMission = (mission, isFavourite) => {
    if (!mission) {
        return null;
    }
    const { flight_number, date_utc, name, links, id } = mission;
    return {
        id,
        flightNumber: flight_number,
        launchDate: date_utc,
        missionName: name,
        iconUrl: links?.patch?.small ??
            "https://zenit.org/wp-content/uploads/2018/05/no-image-icon.png",
        isFavourite,
        previewImageUrl: links?.flickr?.original?.[0] ??
            "https://i.natgeofe.com/n/88420695-3555-4f84-90be-8f7903a1a57e/01_58_51a_remotesite-2-frame-8_square.jpg",
        webcastLink: links?.webcast ?? null,
    };
};
exports.default = createMission;
//# sourceMappingURL=createMission.js.map