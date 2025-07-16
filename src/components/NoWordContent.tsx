import Link from "next/link";

export function NoWordContent({ word }: { word: string }) {



    return (
        <div className="no-word-container">
            <h1 className="no-word-title">
                The word you search
                <span className="no-word-emphasis"> do not </span>
                exits
            </h1>
            <span className="text-zinc-400">You searched: {word}</span>
            <Link href="/" className="no-word-link-to-home">
                <span className="material-symbols-rounded !text-base !text-white">arrow_back</span>
                Return to main page
            </Link>
        </div>
    );
}