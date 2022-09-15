import { useEffect, useState } from "react";

export default function AllPrinter() {
  const [printer, setPrinter] = useState(null);

  useEffect(() => {
    const url = "http://localhost:4040/printer/druckerauflisten";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setPrinter(data.data));
  }, []);

  return (
    <section className="printerContainer">
      <table>
        <thead>
          <tr>
            <th className="col uppercase">ID</th>
            <th className="col uppercase">Name</th>
            <th className="col uppercase">Füllstand</th>
            <th className="col uppercase">Bearbeiter</th>
            <th className="col uppercase">Datum</th>
          </tr>
        </thead>
        <tbody>
          {printer?.map((value, key) => (
            <tr className="font-light" key={key}>
              <th scope="col">{key + 1}</th>
              <th scope="col">{value.printer_name}</th>
              <th scope="col">{value.filling_level}</th>
              <th scope="col">{value.author}</th>
              <th scope="col">
                {value.last_fill.replaceAll("/", ".").substring(0, 10)}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
