const searchFood = () => {
    //input theke search item khuje ana
    const searchiteam = document.getElementById('search-item');
    const searchText = searchiteam.value;
    // console.log(searchText);
    searchiteam.value = '';

    //Api Call
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = meals => {
    console.log(meals);
    const searchResult = document.getElementById("search-result");
    for (const meal of meals) {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card card border-danger mb-4">
                <img src=${meal.strMealThumb} class="card-img-top" alt="">
                <div class="card-body card text-white bg-secondary">
                    <h5 class="card-title card text-white bg-dark p-2">${meal.strMeal}</h5>
                    <p class="card-text">
                    ${meal.strInstructions.slice(0, 250)}
                    </p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    }
}