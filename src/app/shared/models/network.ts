import { Country } from '.';

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
}
