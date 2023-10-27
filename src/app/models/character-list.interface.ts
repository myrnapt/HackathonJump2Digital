import { Character } from "./character.interface";

export interface CharacterList {
    count: number;
    next: string;
    previous: null;
    results: Character[]
}