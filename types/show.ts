import type { Country } from "./common";

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: ShowSchedule;
  rating: ShowRating;
  weight: number;
  network: ShowNetwork;
  webChannel: null;
  dvdCountry: null;
  externals: ShowExternals;
  image: ShowImage;
  summary: string;
  updated: number;
  _links: ShowLinks;
}

export interface ShowSchedule {
  time: string;
  days: string[];
}

export interface ShowRating {
  average: number;
}
export interface ShowNetwork {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface ShowExternals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface ShowImage {
  medium: string;
  original: string;
}

export interface ShowLinks {
  self: {
    href: string;
  };
  previousepisode: {
    href: string;
    name: string;
  };
}
