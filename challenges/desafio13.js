db.produtos.updateMany(
  { "valoresNutricionais.2.percentual": { $gte: 40 } },
  {
    $push: 
      { tags: "muito sódio" },
           
  },
);

db.produtos.find(
  {},
  { _id: 0, tags: 1, nome: 1 },
);