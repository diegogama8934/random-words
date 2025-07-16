import { FormSearchWord, UserFavoriteWords } from "@/components";

export default function Home() {

    return (
        <>
            <div className="hero">

                <h1 className="hero-title">Search a WORD</h1>

                <p className="hero-description">
                    Search a word and learn something about it
                </p>

                <FormSearchWord />

            </div>

            <UserFavoriteWords />

        </>
    );
}