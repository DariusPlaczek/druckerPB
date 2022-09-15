const url = "http://localhost:4040/printer/add_new_printer"
   
let addNewPrinter = data.map(id => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
  })
    .then((response) => response.json())
    .then((data) => {
    console.log('Success:', data);
    setantwort("Lieferant angelegt");
    })
    .catch((error) => {
    console.error('Error:', error);
    });

})


Promise.all([addNewPrinter]);



const data = [
  {
    "printer_name": "Canon-dolore-309",
    "filling_level": 38,
    "author": "Jan",
    "last_fill": "2021/02/11T06:31:20"
  },
  {
    "printer_name": "Canon-ipsum-820",
    "filling_level": 78,
    "author": "Katia",
    "last_fill": "2022/08/01T06:37:18"
  },
  {
    "printer_name": "Konami-cupidatat-188",
    "filling_level": 55,
    "author": "Julia",
    "last_fill": "2022/01/18T11:12:48"
  },
  {
    "printer_name": "Canon-ad-700",
    "filling_level": 33,
    "author": "Katia",
    "last_fill": "2021/02/14T03:38:00"
  },
  {
    "printer_name": "Konami-amet-810",
    "filling_level": 8,
    "author": "Sofia",
    "last_fill": "2021/09/18T01:40:38"
  },
  {
    "printer_name": "Konami-incididunt-996",
    "filling_level": 54,
    "author": "Ben",
    "last_fill": "2021/05/27T12:39:48"
  },
  {
    "printer_name": "Konami-ut-587",
    "filling_level": 37,
    "author": "Sofia",
    "last_fill": "2021/11/08T12:05:33"
  },
  {
    "printer_name": "Epson-veniam-400",
    "filling_level": 21,
    "author": "Sofia",
    "last_fill": "2022/02/04T04:06:31"
  },
  {
    "printer_name": "Canon-ipsum-415",
    "filling_level": 63,
    "author": "Sofia",
    "last_fill": "2021/09/12T06:35:00"
  },
  {
    "printer_name": "Canon-incididunt-800",
    "filling_level": 98,
    "author": "Ben",
    "last_fill": "2022/03/02T09:38:07"
  },
  {
    "printer_name": "Epson-nostrud-730",
    "filling_level": 52,
    "author": "Jan",
    "last_fill": "2021/05/14T05:15:31"
  },
  {
    "printer_name": "Epson-qui-364",
    "filling_level": 63,
    "author": "Jan",
    "last_fill": "2021/12/03T02:50:53"
  },
  {
    "printer_name": "Epson-quis-832",
    "filling_level": 25,
    "author": "Jan",
    "last_fill": "2022/02/14T07:28:23"
  },
  {
    "printer_name": "Canon-duis-478",
    "filling_level": 69,
    "author": "Peter",
    "last_fill": "2022/08/20T06:22:39"
  }
]