db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany(
  { tags: { $in: ["bovino", "pão"] } },
  { $set: { "vendasPorDia.6": 120 } },
);

db.produtos.find(
  {},
  { _id: 0, vendasPorDia: 1, nome: 1 },
);