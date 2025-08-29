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

    let historyParent = document.getElementById("history__parent");

    const curentTime = new Date().toLocaleTimeString();

    if (coinValue < 20) {
      alert(
        "❌ You don't have enough coins. You need at least 20 coins to make a call."
      );
    } else {
      alert(`📞 Calling ${serviceTitle} ${serviceNumber} ...`);
      let updateCoinValue = (coinValue -= 20);
      getCoinValue.innerText = updateCoinValue;

      // add history
      let newElm = document.createElement("div");
      newElm.innerHTML = `<div class="p-4 bg-neutral-50 rounded-lg sm:flex items-center justify-between gap-4">
                        <!-- service name and number -->
                        <div class="">
                            <strong class="text-neutral-900 text-lg font-semibold">${serviceTitle}</strong>
                            <p class="text-zinc-600 text-lg font-normal">${serviceNumber}</p>
                        </div>

                        <!-- time -->
                        <div class="">
                            <p class="text-neutral-900 text-lg font-normal">${curentTime}</p>
                        </div>
                    </div>`;

      historyParent.appendChild(newElm);
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
