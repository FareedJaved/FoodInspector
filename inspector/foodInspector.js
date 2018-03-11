

console.log("We live baby");
document.body.style.border = "10px solid red";

// Step 1: Find which restaurants are on the page
let list = document.getElementByClassName("biz-name js-analytics-click");

let index = 0;
let restaurants = [];
while (index < list.length) {
  restaurants.push(list[index].innerText);
  index++;
}

// Step 2: Get the Scores
let url = "https://data.austintexas.gov/resource/nguv-n54k.json";
let scores = [];
for (let value of restaurants) {
  const urlWithRestaurant = url + "?restaurant_name=" + value;

  const apiResponse = fetch(urlWithRestaurant)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
    });
}
