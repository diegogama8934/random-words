import { WordDescription } from "@/components/WordDescription";

interface Props {
  params: { word: string }
}

export default function SingleWordPage({ params }: Props) {
  return (
    <>
      <WordDescription />
    </>
  );
}