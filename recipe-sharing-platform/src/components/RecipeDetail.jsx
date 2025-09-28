import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-600">
          {recipe.ingredients?.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal pl-6 text-gray-600 space-y-2">
          {recipe.instructions?.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
