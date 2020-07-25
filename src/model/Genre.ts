import { InvalidParameterError } from "../errors/InvalidParameterError";

export class Genre {
    constructor(
        private id: string,
        private name: GenreOption,
    ) { }

    public getId(): string {
        return this.id;
    }

    public getName(): GenreOption {
        return this.name;
    }
}

export enum GenreOption {
    AXE = "AXÉ",
    BLUES = "BLUES",
    COUNTRY = "COUNTRY",
    ELETRO = "ELETRÔNICA",
    FUNK = "FUNK",
    GOSPEL = "GOSPEL",
    CLASSIC = "MÚSICA CLÁSSICA",
    PAGODE = "PAGODE",
    POP = "POP",
    REGGAE = "REGGAE",
    ROCK = "ROCK",
    SAMBA = "SAMBA",
    SERTANEJO = "SERTANEJO"
}

export const stringToGenreOption = (input: string): GenreOption => {
  switch (input) {
      case "AXÉ":
          return GenreOption.AXE;
      case "BLUES":
          return GenreOption.BLUES;
      case "COUNTRY":
          return GenreOption.COUNTRY;
      case "ELETRÔNICA":
          return GenreOption.ELETRO;
      case "FUNK":
          return GenreOption.FUNK;
      case "GOSPEL":
          return GenreOption.GOSPEL;
      case "MÚSICA CLÁSSICA":
          return GenreOption.CLASSIC;
      case "PAGODE":
          return GenreOption.PAGODE;
      case "POP":
          return GenreOption.POP;
      case "REGGAE":
          return GenreOption.REGGAE;
      case "ROCK":
          return GenreOption.ROCK;
      case "SAMBA":
          return GenreOption.SAMBA;
      case "SERTANEJO":
          return GenreOption.SERTANEJO;
      default:
          throw new InvalidParameterError("Invalid music genre");
  }
}; 
