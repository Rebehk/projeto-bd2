const Dispositivo = require("../model/dispositivo");

const listarDispositivos = async (request, response) => {
  try {
    const dispositivosList = await Dispositivo.find(
      {},
      { _id: false}
    );
    return res.render("index", dispositivosList);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const adicionarDispositivo = async (request, response) => {
  const dispositivo = new Dispositivo(request.body);
  dispositivo
    .save()
    .then(() => {
      response.status(200).send("Salvo com sucesso");
    })
    .catch((err) => {
      response.status(400).send("Erro a salvar.");
    });
};

module.exports = {
    listarDispositivos,
    adicionarDispositivo
}
