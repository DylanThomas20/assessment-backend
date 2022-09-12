const fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A friend asks only for your time not your money.",
  "A friend is a present you give yourself.",
];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },

  getFortune: (req, res) => {
    // let randomIndex = Math.floor(Math.random() * fortunes.length);
    // let randomFortune = fortunes[randomIndex];

    res.status(200).send(fortunes);
  },

  addFortune: (req, res) => {
    let { fortune } = req.body;
    fortunes.push(fortune);

    res.status(200).send(fortunes);
  },

  deleteFortune: (req, res) => {
    let index = req.params.id;

    fortunes.splice(index, 1);

    res.status(200).send(fortunes);
  },

  editFortune: (req, res) => {
    let index = req.params.id;
    let { item } = req.body;

    fortunes.splice(index, 1, item);

    res.status(200).send(fortunes);
  },
};
