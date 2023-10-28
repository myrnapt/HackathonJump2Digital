import { Character } from "./character.interface";

export interface CharacterList {
    [x: string]: any;
    count: number;
    next: string;
    previous: null;
    results: Character[]
}