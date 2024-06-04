import { Externals, Links, Image, Rating, Schedule, Network } from '.';

export interface ShowInfo {
  score: number;
  show: Show;
}

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
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: string | null;
  dvdCountry: string | null;
  externals: Externals;
  image: Image;
  summary: string | null;
  updated: number;
  _links: Links;
}
