export type ApiMission = {
  flight_number: number;
  id: string;
  date_utc: string;
  links?: {
    patch: {
      small: string;
      large: string;
    };
    flickr: {
      small: string[];
      original: string[];
    };
    webcast?: string;
  };
  name: string;
};
