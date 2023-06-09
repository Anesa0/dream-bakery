export const rawMaterials = [
  {
    Id: "3e15b3ba-8606-4bff-aca8-18a3c4923ff6",
    Name: "Flour Diet",
    Price: "0,479",
  },
  {
    Id: "748ed510-2917-4cd0-b73e-dc185c8ff136",
    Name: "Flour T500",
    Price: "0,573",
  },
  {
    Id: "850b3ba1-9072-435f-bc4b-e31df626a3f9",
    Name: "Eggs",
    Price: "0,14",
  },
  {
    Id: "57a998e9-b953-4fde-bc79-111b334f37c0",
    Name: "Olive oil",
    Price: "3,333",
  },
  {
    Id: "d3e56e90-ca6f-4a01-9415-ff13401ba217",
    Name: "Salt",
    Price: "0,376",
  },
  {
    Id: "79788e15-78b9-44c4-92b3-b2992edefl5f",
    Name: "Sugar",
    Price: "0,923",
  },
  {
    Id: "21869fce-443f-4699-a5b4-e652ab7d9682",
    Name: "Fresh yeast",
    Price: "1,425",
  },
];

export const recipeIngredients = [
  {
    id: "1",
    rawMaterialId: "21869fce-443f-4699-a5b4-e652ab7d9682",
    quantity: 500,
    unit: "Gram",
  },
  {
    id: "2",
    rawMaterialId: "57a998e9-b953-4fde-bc79-111b334f37c0",
    quantity: 250,
    unit: "Gram",
  },
  {
    id: "3",
    rawMaterialId: "748ed510-2917-4cd0-b73e-dc185c8ff136",
    quantity: 750,
    unit: "Gram",
  },
  {
    id: "4",
    rawMaterialId: "850b3ba1-9072-435f-bc4b-e31df626a3f9",
    quantity: 300,
    unit: "Gram",
  },
];

export const recipes = [
  {
    id: "1",
    name: "Cornbread",
    ingredients: recipeIngredients,
  },
  {
    id: "2",
    name: "Bread Roll",
    ingredients: recipeIngredients,
  },
  {
    id: "3",
    name: "Baguette",
    ingredients: recipeIngredients,
  },
  {
    id: "4",
    name: "Muffins",
    ingredients: recipeIngredients,
  },
  {
    id: "5",
    name: "Brownies",
    ingredients: recipeIngredients,
  },
  {
    id: "6",
    name: "Bread",
    ingredients: recipeIngredients,
  },
];
