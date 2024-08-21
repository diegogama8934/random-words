import { WordDescription } from "@/components/WordDescription";
import { WordResponse } from "@/interfaces";
import Link from "next/link";

interface Props {
  params: { word: string }
}

// Getting description of the word
async function getWordInformation(word: string): Promise<WordResponse | null> {
  const resBody = await fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
    method: "GET",
    headers: {
      'x-rapidapi-key': `${process.env.RAPID_API_KEY}`,
      'x-rapidapi-host': `${process.env.RAPID_API_HOST}`
    }
  })
    .then(res => res.json())
    .catch(err => console.error(err));
  console.log(resBody);
  if (resBody.word) return resBody;
  return null;
}


// When the word doesn´t exist. For example: "XD"
function NoWord({ word }: { word: string }) {
  return (
    <div className="flex flex-col gap-12 justify-center items-center h-screen">
      <h1 className="bg-gradient-to-r from-slate-900 to-slate-700 gradient-text text-4xl font-bold">
        The word you search
        <span className="bg-gradient-to-r from-red-500 to-red-700 gradient-text"> do not </span>
        exits
      </h1>
      <span className="text-zinc-400">You searched: {word}</span>
      <Link href="/" className="flex gap-4 py-4 px-8 bg-gradient-to-r from-red-500 to-red-700 rounded-md text-white hover:scale-105 transition-all">
        <span className="material-symbols-rounded !text-base !text-white">arrow_back</span>
        Return to main page
      </Link>
    </div>
  );
}


// Final UI
export default async function SingleWordPage({ params }: Props) {
  const wordInformation = await getWordInformation(params.word);
  return wordInformation ?
    <WordDescription wordInformation={wordInformation}/> :
    <NoWord word={params.word}/>
}