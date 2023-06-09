import { rawMaterials, recipeIngredients } from "./constants.js";

function getRawMaterialName(rawMaterialId) {
  const rawMaterial = rawMaterials.find(
    (material) => material.Id === rawMaterialId
  );
  return rawMaterial ? rawMaterial.Name : "";
}

function createRecipeListItem(ingredient) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td class="px-4 py-2 rounded-md border bg-white">${ingredient.id}</td>
      <td class="px-4 py-2 rounded-md border bg-white">${getRawMaterialName(
        ingredient?.rawMaterialId
      )}</td>
      <td class="px-4 py-2 rounded-md border bg-white">${
        ingredient.quantity
      }</td>
      <td class="px-4 py-2 rounded-md border bg-white">${ingredient.unit}</td>
    `;
  return tr;
}

function populateIngredientsTable() {
  recipeIngredients.forEach((ingredient) => {
    const listItem = createRecipeListItem(ingredient);
    document.getElementById("recipe-list").appendChild(listItem);
  });
}

window.addEventListener("load", () => {
  populateIngredientsTable();
});
