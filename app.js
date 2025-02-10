const express = require("express");
const app = express();
const port = 3000;
app.use(express.static('public'))
app.get(`/`, (req, res) => {
  res.send("Server del mio blog");

  
});

app.get(`/bacheca`, (req, res) => {
  res.send(`Bacheca `);

  const prodotti = [
    {
      title: "Cracker alla barbabietola",
      content: `I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. Queste sfogliette dal colore brillante non passeranno inosservate nel vostro cestino del pane e arricchiranno la tavola con il loro gusto unico e accattivante. I cracker fatti a mano sono anche un gustoso snack spezza fame, da portare in ufficio o a scuola. Venite a scoprire il nostro mix di semi e cereali per realizzare l'impasto e divertitevi a sperimentare nuove ricette di cracker variando i semi, le farine e le spezie per gusti sempre nuovi, ecco qualche idea:
                Cracker di farro
                Cracker di lupini
                Cracker allo zafferano
                Cracker ai semi`,
      image: "cracker_barbabietola.avif",
      tags: ["Antipasti", "Ricette vegetariane", "Ricette al forno"],
    },

]
  
});

app.listen(port, () => {
  console.log(`App in esecuzione alla porta ${port}`);
});
