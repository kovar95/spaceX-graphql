export type ApiMissionDetails = {
  flight_number: number;
  id: string;
  date_utc: string;
  links?: {
    patch: {
      small: string;
      large: string;
    };
    flickr: {
      original: string[];
    };
  };
  name: string;
  success: boolean;
  details: string;
};
