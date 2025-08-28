let loveValue = Number(document.getElementById("love__value").innerText);
const heartIcons = document.getElementsByClassName("heart__icon");
// console.log(loveValue);

for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    loveValue++;
    document.getElementById("love__value").innerText = loveValue;
  });
}
