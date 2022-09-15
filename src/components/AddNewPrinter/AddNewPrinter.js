import { useState } from "react";
import Input from "../Input";

export default function AddNewPrinter() {
  const [printerName, setPrinterName] = useState("");
  const [fillingLevel, setFillingLevel] = useState("");
  const [author, setAuthor] = useState("");
  const [lastFill, setLastFill] = useState("2022-09-13");
  const [antwort, setantwort] = useState("");

  const addToLieferanten = () => {
    if ( printerName === "" || fillingLevel === "" || author === "" || lastFill === "" ) {
      setantwort("Es müssen alle Felder ausgefüllt werden");
      return;
    }

    setPrinterName("");
    setFillingLevel("");
    setAuthor("");
    setLastFill("2022-09-13");

    setTimeout(() => {
      setantwort("");
    }, 3500);
  };

  return (
    <section className="addNewProduct">
      <h2>Neuen Drucker anlegen</h2>
      <Input
        label="Drucker Name"
        value={printerName}
        type="text"
        setValue={setPrinterName}
      />
      <Input
        label="Füllstand"
        value={fillingLevel}
        type="number"
        setValue={setFillingLevel}
      />
      <Input
        label="Bearbeiter"
        value={author}
        type="text"
        setValue={setAuthor}
      />
      <Input
        label="Änderungsdatum"
        value={lastFill}
        type="date"
        setValue={setLastFill}
      />
      <p>{antwort}</p>
      <button onClick={() => addToLieferanten()}>Anlegen</button>
    </section>
  );
}
