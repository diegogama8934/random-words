export async function getWordInformation(word: string) {

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