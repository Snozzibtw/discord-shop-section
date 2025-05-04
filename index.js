let gridContainer = document.getElementById("gridContainer")


let shop1H2 = document.getElementById("itemShopFirstColHeading2")
let shop2H2 = document.getElementById("itemShopSecondColHeading2")
let shop3H2 = document.getElementById("itemShopThirdColHeading2")

let shopBTN1 = document.getElementById("itemShopFirstColButton")
let shopBTN2 = document.getElementById("itemShopSecondColButton")
let shopBTN3 = document.getElementById("itemShopThirdColButton")

let shopImage1 = document.getElementById("itemShopFirstColImage")
let shopImage2 = document.getElementById("itemShopSecondColImage")
let shopImage3 = document.getElementById("itemShopThirdColImage")

let checkout = document.getElementById("checkout")
let exitP = document.getElementById("exit")
let checkoutConfirm = document.getElementById("checkoutConfirmButton")
let thankYouPopUp = document.getElementById("thankyouPurchase")
let exitButton = document.getElementById("exitButton");

exitP.addEventListener("click", () => {
    checkout.style.display = "none";
    gridContainer.style.filter = "none";
});


function buyBTN(bundleName, bundlePrice) {
  checkout.style.display = "block";
  gridContainer.style.filter = "blur(5px)";
  
  document.getElementById("purchaseDetailShopBudnle").innerText = bundleName;
  document.getElementById("purchaseDetailShopPrice").innerText = bundlePrice;
}

fetch('data.json')
.then(response => response.json())
.then(data => {
  
  let starWarsBundleName = data["StarWars-Bundle-Shop"][0].name
  let starWarsHyperSpaceName = data["StarWars-HyperSpace-Shop"][0].name
  let starWarsR2D2Name = data["StarWars-R2D2-Shop"][0].name
  
  let starWarsBundlePrice = data["StarWars-Bundle-Shop"][0].price
  let starWarsHyperSpacePrice = data["StarWars-HyperSpace-Shop"][0].price
  let starWarsR2D2Price = data["StarWars-R2D2-Shop"][0].price
  
  let starWarsBundleImage = data["StarWars-Bundle-Shop"][0].image
  let starWarsHyperSpaceImage = data["StarWars-HyperSpace-Shop"][0].image
  let starWarsR2D2Image = data["StarWars-R2D2-Shop"][0].image
  
  shop1H2.textContent = starWarsBundleName
  shop2H2.textContent = starWarsHyperSpaceName
  shop3H2.textContent = starWarsR2D2Name
  
  shopBTN1.textContent += " " + starWarsBundlePrice
  shopBTN2.textContent += " " + starWarsHyperSpacePrice
  shopBTN3.textContent += " " + starWarsR2D2Price
  
  shopImage1.src = starWarsBundleImage;
  shopImage2.src = starWarsHyperSpaceImage;
  shopImage3.src = starWarsR2D2Image;
  
  shopBTN1.addEventListener("click", () => {
    buyBTN(starWarsBundleName, starWarsBundlePrice);
  })
  shopBTN2.addEventListener("click", () => {
    buyBTN(starWarsHyperSpaceName, starWarsHyperSpacePrice);
  })
  shopBTN3.addEventListener("click", () => {
    buyBTN(starWarsR2D2Name, starWarsR2D2Price);
  })
  
})
.catch(error => {
  console.error('Error loading JSON:', error)
})

checkoutConfirm.addEventListener("click", () => {
  if (checkout.style.display === "block") {
      checkout.style.display = "none"
      thankYouPopUp.style.display = "block"
  }
})

function showThankYouMessage() {
  thankyouPurchase.style.display = "block";
}

exitButton.addEventListener("click", () => {
  thankyouPurchase.style.display = "none";
  gridContainer.style.filter = "none";
});