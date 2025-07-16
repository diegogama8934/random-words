"use server"
import { redirect } from "next/navigation";

export async function FormSearchWord() {

    return (
        <form
            className="flex gap-2 items-center bg-gray-100 absolute -bottom-8 rounded-lg w-[600px] py-2 px-4 hover:scale-105 transition-all"
            action={async (formData) => {
                "use server"
                const word = formData.get("word") as string;
                redirect(`/${word}`);
            }}
        >
            <span
                className="material-symbols-rounded !text-2xl"
            >
                search
            </span>

            <input
                type="text"
                className="p-2 w-full bg-transparent focus-visible:outline-none"
                placeholder="Search a word"
                name="word"
            />
        </form>
    );
}