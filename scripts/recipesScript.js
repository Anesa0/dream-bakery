import { recipes, rawMaterials } from "./constants.js";

function createRecipeListItem(recipe) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td class="px-4 py-2 rounded-md border bg-white">${recipe.id}</td>
      <td class="px-4 py-2 rounded-md border bg-white">${recipe.name}</td>
      <td class="px-4 py-2 rounded-md border bg-white">
      <button class="edit-btn px-2 py-1 font-bold text-white bg-green-500 rounded-md edit-btn hover:bg-green-700 focus:outline-none focus:shadow-outline" data-recipe-id="${recipe.id}">Edit</button>
        <button class="delete-btn px-2 py-1 font-bold rounded-md text-white bg-red-500 delete-btn hover:bg-red-700 focus:outline-none focus:shadow-outline" data-recipe-id="${recipe.id}">Delete</button>
    `;
  return tr;
}

function populateRecipesTable() {
  recipes.forEach((recipe) => {
    const listItem = createRecipeListItem(recipe);
    document.getElementById("recipe-list").appendChild(listItem);
  });
}

// Raw material data for select
function createRawMaterialItem(material) {
  const option = document.createElement("option");
  option.innerHTML = `
        <option value="${material.Id}"">${material.Name}</td>
      `;
  return option;
}

function createRawMaterialItems() {
  rawMaterials.forEach((material) => {
    const listItem = createRawMaterialItem(material);
    document.getElementById("raw-material").appendChild(listItem);
  });
}

window.addEventListener("load", () => {
  populateRecipesTable();
  createRawMaterialItems();
});

// edit & delete buttons
document.addEventListener("click", async (event) => {
  const editButton = event.target.closest(".edit-btn");

  if (editButton) {
    const recipeId = editButton.dataset.recipeId;
    window.location.href = `/recipe.html?id=${recipeId}`;
  }

  const deleteButton = event.target.closest(".delete-btn");

  if (deleteButton) {
    const recipeId = deleteButton.dataset.recipeId;

    try {
      // fictional API
      const response = await fetch(`/api/recipes/${recipeId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log(`Recipe with ID ${recipeId} deleted.`);

        deleteButton.closest("tr").remove();
      } else {
        console.error(`Failed to delete recipe with ID ${recipeId}.`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
});

// functions for showing and hiding modal
function closeModal() {
  document.getElementById("recipe-modal").style.display = "none";
}

function openModal() {
  document.getElementById("recipe-modal").style.display = "block";

  var recipeForm = document.getElementById("recipe-form");

  var saveBtn = document.getElementById("save-btn");

  recipeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var recipeName = document.getElementById("recipe-name").value;

    if (recipeName) {
      addRecipe(recipeName);

      closeModal();
    }
  });

  saveBtn.addEventListener("click", function (event) {
    event.preventDefault();

    recipeForm.dispatchEvent(new Event("submit"));
  });
}

function addRecipe(recipeName) {
  const latestRecipe = recipes[recipes.length - 1];
  const latestRecipeId = parseInt(latestRecipe.id);
  const newRecipeId = (latestRecipeId + 1).toString();

  var newRecipe = {
    id: newRecipeId,
    name: recipeName,
    ingredients: [],
  };

  recipes.push(newRecipe);

  var listItem = createRecipeListItem(newRecipe);

  document.getElementById("recipe-list").appendChild(listItem);
}

const addRecipeBtn = document.getElementById("add-recipe-btn");
addRecipeBtn.addEventListener("click", openModal);

const cancelModalBtn = document.getElementById("cancel-btn");
cancelModalBtn.addEventListener("click", closeModal);

const modal = document.getElementById("recipe-modal");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
