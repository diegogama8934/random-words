export interface WordResponse {
  word: string
  results: {
    definition: string
    partOfSpeech: string
    synonyms: string[]
    typeOf: string[]
  }[]
  frequency: number
}