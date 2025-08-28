// select elements
let loveValue = Number(document.getElementById("love__value").innerText);
const heartIcons = document.getElementsByClassName("heart__icon");
const btnsCall = document.getElementsByClassName("btn__call");
const copyCount = document.getElementById("copy__count");
const btnsCopyNumber = document.getElementsByClassName("btn__copy__number");

// when clicked heart icon
for (let heartIcon of heartIcons) {
  heartIcon.addEventListener("click", function () {
    loveValue++;
    document.getElementById("love__value").innerText = loveValue;
  });
}

// when clicked call button
for (let btnCall of btnsCall) {
  btnCall.addEventListener("click", function () {
    // variables
    let coinValue = Number(document.getElementById("coin__value").innerText);
    let getCoinValue = document.getElementById("coin__value");
    const serviceTitle =
      btnCall.parentNode.parentNode.childNodes[7].childNodes[1].innerText;
    const serviceNumber =
      btnCall.parentNode.parentNode.childNodes[11].childNodes[1].innerText;

    if (coinValue < 20) {
      alert(
        "❌ You don't have enough coins. You need at least 20 coins to make a call."
      );
    } else {
      alert(`📞 Calling ${serviceTitle} ${serviceNumber} ...`);
      let updateCoinValue = (coinValue -= 20);
      getCoinValue.innerText = updateCoinValue;
    }
  });
}

// copy functionality
for (let btnCopyNumber of btnsCopyNumber) {
  btnCopyNumber.addEventListener("click", function () {
    // getCardNumber
    let getCopyNumber =
      btnCopyNumber.parentNode.parentNode.childNodes[11].childNodes[1]
        .innerText;

    navigator.clipboard.writeText(getCopyNumber);
    alert(`The number has been copied: ${getCopyNumber}`);
    copyCount.innerText++;
  });
}
