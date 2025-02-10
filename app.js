const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'))


app.get(`/`, (req, res) => {
  res.send("Server del mio blog");

  
});

app.get(`/bacheca`, (req, res) => {
  
  const posts = [
 
    {
      title: "Ciambellone",
      content: `Il ciambellone è un classico della cucina italiana, perfetto per la colazione o la merenda. Soffice e profumato, è ideale da gustare semplice o accompagnato da marmellata, nutella o panna montata. La sua preparazione è semplice e alla portata di tutti.`,
      image: "images/ciambellone.jpeg",
      tags: ["Dolci", "Ricette facili", "Ricette al forno"],
    },
    {
      title: "Pane fritto dolce",
      content: `Il pane fritto dolce è una golosità irresistibile, tipica di alcune regioni italiane. Si tratta di fette di pane raffermo immerse in un impasto a base di uova, latte e zucchero, fritte e poi spolverate con zucchero a velo. Un modo sfizioso per riciclare il pane e preparare un dessert goloso in pochi minuti.`,
      image: "images/pane_fritto_dolce.jpeg", 
      tags: ["Dolci", "Ricette economiche", "Ricette fritte"],
    },
    {
      title: "Pasta alla barbabietola",
      content: `La pasta alla barbabietola è un primo piatto colorato e gustoso, perfetto per chi ama i sapori delicati e originali. La barbabietola, con il suo colore intenso e il sapore dolce, si sposa perfettamente con la pasta, creando un piatto unico e invitante.`,
      image: "images/pasta_barbabietola.jpeg", 
      tags: ["Primi piatti", "Ricette vegetariane", "Ricette colorate"],
    },
    {
      title: "Torta paesana",
      content: `La torta paesana è un dolce rustico e genuino, tipico della tradizione contadina. A base di pane raffermo, latte, uova e zucchero, è un modo gustoso per recuperare il pane avanzato e preparare un dessert ricco e sostanzioso. Perfetta per la colazione o la merenda, la torta paesana è un concentrato di sapori semplici e autentici.`,
      image: "images/torta_paesana.jpeg",
      tags: ["Dolci", "Ricette della nonna", "Ricette con pane raffermo"],
    },
  ]

  // res.type('json').send(posts);
  res.json(posts);
  
});

app.listen(port, () => {
  console.log(`App in esecuzione alla porta ${port}!`);
});
