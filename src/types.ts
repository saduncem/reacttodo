// export interface Action<T = any> {
//     type: T
//   }

// export interface AnyAction extends Action {
//     // Allows any extra properties to be defined in an action.
//     [extraProps: string]: any
//   }
    
    
export interface User {
    userId: number;
    username: string;
    displayName: string;
    email: string;
    createdAt: Date;
    role: string;
    token: string;
}
export interface UserResponse {
    data: User;
    status: boolean;
    message: string;
}

    export interface Flags {
        svg: string;
        png: string;
    }

    export interface Currency {
        code: string;
        name: string;
        symbol: string;
    }

    export interface Language {
        iso639_1: string;
        iso639_2: string;
        name: string;
        nativeName: string;
    }

    export interface Translations {
        br: string;
        pt: string;
        nl: string;
        hr: string;
        fa: string;
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        hu: string;
    }

    export interface RegionalBloc {
        acronym: string;
        name: string;
        otherNames: string[];
        otherAcronyms: string[];
    }

    export interface CountryType {
        name: string;
        topLevelDomain: string[];
        alpha2Code: string;
        alpha3Code: string;
        callingCodes: string[];
        capital: string;
        altSpellings: string[];
        subregion: string;
        region: string;
        population: number;
        latlng: number[];
        demonym: string;
        area: number;
        gini: number;
        timezones: string[];
        borders: string[];
        nativeName: string;
        numericCode: string;
        flags: Flags;
        currencies: Currency[];
        languages: Language[];
        translations: Translations;
        flag: string;
        regionalBlocs: RegionalBloc[];
        cioc: string;
        independent: boolean;
    }

