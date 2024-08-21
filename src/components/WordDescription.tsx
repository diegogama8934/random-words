"use client";

import { useContext } from "react";
import { WordContext } from "@/contexts/WordContext";

export function WordDescription(){
  const { word } = useContext(WordContext);

  return(
    <>
      {JSON.stringify(word)}
    </>
  );
}