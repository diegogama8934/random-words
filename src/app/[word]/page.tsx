import { NoWordContent } from "@/components/NoWordContent";
import { SingleWordPanel } from "@/components/WordContent";
import { getWordInformation } from "@/queries/getWordInformation";

interface Props {
    params: {
        word: string
    }
}

export default async function SingleWordPage({ params }: Props) {

    // Ask API for information about the word
    const wordInformation = await getWordInformation(params.word);

    return wordInformation
        ? <SingleWordPanel wordInformation={wordInformation} />
        : <NoWordContent word={params.word} />
}