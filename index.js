let gridContainer = document.getElementById("gridContainer")

let shopItem1 = document.getElementById("shop1")
let shopItem2 = document.getElementById("shop2")
let shopItem3 = document.getElementById("shop3")

let shop1H2 = document.getElementById("shop1H2")
let shop2H2 = document.getElementById("shop2H2")
let shop3H2 = document.getElementById("shop3H2")

let shopBTN1 = document.getElementById("shop1BTN")
let shopBTN2 = document.getElementById("shop2BTN")
let shopBTN3 = document.getElementById("shop3BTN")

let shopImage1 = document.getElementById("shop1Image")
let shopImage2 = document.getElementById("shop2Image")
let shopImage3 = document.getElementById("shop3Image")

let checkout = document.getElementById("checkout")
let exitP = document.getElementById("exit")

exitP.addEventListener("click", () => {
    checkout.style.display = "none";
    gridContainer.style.filter = "none";
});

// Buy button applies blur and shows checkout
function buyBTN(bundleName, bundlePrice) {
    checkout.style.display = "block";
    gridContainer.style.filter = "blur(5px)";
    
    document.getElementById("purchaseDetailShopBudnle").innerText = bundleName;
    document.getElementById("purchaseDetailShopPrice").innerText = bundlePrice;
}

fetch('data.json')
  .then(response => response.json())
  .then(data => {

    let productName1 = data["Shop1-Data"][0].name
    let productName2 = data["Shop2-Data"][0].name
    let productName3 = data["Shop3-Data"][0].name

    let productPrice1 = data["Shop1-Data"][0].price
    let productPrice2 = data["Shop2-Data"][0].price
    let productPrice3 = data["Shop3-Data"][0].price
    
    let imageShop1 = data["Shop1-Data"][0].image
    let imageShop2 = data["Shop2-Data"][0].image
    let imageShop3 = data["Shop3-Data"][0].image

    shop1H2.textContent = productName1
    shop2H2.textContent = productName2
    shop3H2.textContent = productName3

    shopBTN1.textContent += " " + productPrice1
    shopBTN2.textContent += " " + productPrice2    
    shopBTN3.textContent += " " + productPrice3

    shopImage1.src = imageShop1;
    shopImage2.src = imageShop2;
    shopImage3.src = imageShop3;

   shopBTN1.addEventListener("click", () => {
      buyBTN(productName1, productPrice1);
    });

    shopBTN2.addEventListener("click", () => {
        buyBTN(productName2, productPrice2);
    });

    shopBTN3.addEventListener("click", () => {
        buyBTN(productName3, productPrice3);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error)
})

