// Increases currentTotal counter by 1 each time the tree is clicked
var apples = 0; // Total number of apples
function clicks(number) {
  apples = apples + number; // adds the 'apples' var to the onclick event in the HTML image input
  document.getElementById('currentTotal').innerHTML = apples; // Updates apple amount
};

// Let's you buy the Snake Upgrades and makes it work
var snakes = 0; // Total number of Snake Upgrades purchased
