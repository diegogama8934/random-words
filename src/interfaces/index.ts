export interface WordResponse {
    word: string;
    results: Result[];
    frequency: number;
}

interface Result {
    definition: string;
    partOfSpeech?: string;
    synonyms?: string[];
    typeOf?: string[];
}