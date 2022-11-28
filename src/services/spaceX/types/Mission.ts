export type Mission = {
  id: string;
  flightNumber: number;
  missionName: string;
  launchDate: string;
  iconUrl: string;
  isFavourite: boolean;
  previewImageUrl: string;
  webcastLink: string | null;
};
