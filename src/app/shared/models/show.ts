export interface ShowInfo {
    score: number;
    show:  Show;
}

export interface Show {
    id:             number;
    url:            string;
    name:           string;
    type:           string;
    language:       string;
    genres:         string[];
    status:         string;
    runtime:        number;
    averageRuntime: null;
    premiered:      null;
    ended:          null;
    officialSite:   string | null;
    schedule:       Schedule;
    rating:         Rating;
    weight:         number;
    network:        Network;
    webChannel:     null;
    dvdCountry:     null;
    externals:      Externals;
    image:          Image;
    summary:        string | null;
    updated:        number;
    _links:         Links;
}

export interface Links {
    self: Self;
}

export interface Self {
    href: string;
}

export interface Externals {
    tvrage:  null;
    thetvdb: null;
    imdb:    string;
}

export interface Image {
    medium:   string;
    original: string;
}

export interface Network {
    id:           number;
    name:         string;
    country:      Country;
    officialSite: null;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: null;
}

export interface Schedule {
    time: string;
    days: string[];
}