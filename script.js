const get_meal_btn = document.getElementById("activate");
const meal_container = document.getElementById("meal");
get_meal_btn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then((data) => {
    //   createMeal(res.meals[0]);
	//   console.log(data);
	let html=`
	<div class="row">
			<div class="columns five">
				<img src="${data.meals[0].strMealThumb}" class="mealImg"  alt="Meal Image">
				<p><strong>Category:</strong> ${data.meals[0].strCategory}</p>
				<p><strong>Area:</strong> ${data.meals[0].strArea}</p>
				<p><strong>Tags:</strong> ${data.meals[0].strTags}</p>`

  meal_container.innerHTML = html;
    });
});
// const createMeal = (meal) => {
//   const ingredients = [];
//   // Get all ingredients from the object. Up to 20
//   for (let i = 1; i <= 20; i++) {
//     if (meal[`strIngredient${i}`]) {
//       ingredients.push(
//         `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
//       );
//     } else {
//       // Stop if no more ingredients
//       break;
//     }
//   }
//   const newInnerHTML = `
// 		<div class="row">
// 			<div class="columns five">
// 				<img src="${meal.strMealThumb}" class="mealImg"  alt="Meal Image">
// 				${
//           meal.strCategory
//             ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
//             : ""
//         }
// 				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ""}
// 				${
//           meal.strTags
//             ? `<p><strong>Tags:</strong> ${meal.strTags
//                 .split(",")
//                 .join(", ")}</p>`
//             : ""
//         }`;

//   meal_container.innerHTML = newInnerHTML;
// };
