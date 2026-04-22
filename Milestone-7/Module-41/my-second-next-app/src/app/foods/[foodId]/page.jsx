import Image from "next/image";
import React from "react";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`,
  );
  const data = await res.json();
  const {
    id,
    dish_name,
    image_link,
    main_ingredients,
    approximate_nutrition_per_serving,
  } = data.data;

  //   console.log("Food in food Page", food);

  return (
    <div>
      <h2>Sowing details of food: {foodId}</h2>
      <h3 className="text-3xl">{dish_name}</h3>
      <Image
        className="mx-auto"
        src={image_link}
        alt={dish_name}
        width={300}
        height={300}
      ></Image>
      <h2 className="text-2xl">Ingredients:</h2>
      <ul className="list-disc">
        {main_ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <br />

      <h2 className="text-2xl">Approximate Nutrition per Serving:</h2>
      <ul className="list-disc">
        {Object.entries(approximate_nutrition_per_serving).map(
          ([key, value]) => (
            <li className="capitalize" key={key}>
              {key} : {value}
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

export default FoodDetailPage;
