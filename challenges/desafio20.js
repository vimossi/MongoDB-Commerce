db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $unset: { 
      curtidas: "",
    },
  },
);

