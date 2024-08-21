import { WordDescription } from "@/components/WordDescription";

interface Props {
  params: { word: string }
}

export default function SingleWordPage({ params }: Props) {
  

  
  return (
    <>
      Aqui va una descripción más completa de palabras

      <WordDescription />
    </>
  );
}