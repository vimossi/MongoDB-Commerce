db.produtos.updateMany(
  { nome: { $nin: ["McChicken"] } },
  { $addToSet: { ingredientes: "ketchup" } },
);

db.produtos.find(
  {},
  { _id: 0, ingredientes: 1, nome: 1 },
);