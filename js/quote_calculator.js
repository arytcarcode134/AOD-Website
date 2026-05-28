const form = document.getElementById("quote-calculator-form");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const FormData = {
      vehicleType: document.getElementById("vehicle-type").value,
      petHair: document.getElementById("pet-hair").checked ? true : false,
      sand: document.getElementById("sand").checked ? true : false,
      carpetsCleaned: document.getElementById("carpets").checked ? true : false,
      seatsCleaned: document.getElementById("seats").checked ? true : false,
      waxProtection: document.querySelector('input[name="wax"]:checked')
        ? document.querySelector('input[name="wax"]:checked').value
        : false,
    };
    calculatePackage(FormData);
  });
});

function calculatePackage(data) {
  const scrollElement = document.getElementById("estimate-container");
  scrollElement.scrollIntoView({ behavior: "smooth", block: "start" });

  let totalEstimate = 0;
  let totalAddOns = 0;
  let pacakgeSuggestion = "";
  let addOnsList = [];

  let addOnsPrices = {

    sealant: 50


  }

  let packages = {
    
    deluxeDetail: {
      name: "Deluxe Detail",
      sedanPrice: 240,
      smallSUVPrice: 275,
      largeSUVPrice: 300,
    },
  };

  // Logic for Packages

  // For Sedan

  if (data.vehicleType == "sedan") {
    if (data.seatsCleaned && data.carpetsCleaned == true) {

      totalEstimate += packages.deluxeDetail.sedanPrice;
      if (data.waxProtection == "sealant") {
        // Deluxe Detail with sealant upgrade
        addOnsList.push("Sealant");
        totalAddOns += addOnsPrices.sealant;
      }
     
    } else {
      // Basic Detail, everything else is an add-on
    }
  }

  if (data.petHair) {
    totalEstimate += 20;
  }
  if (data.sand) {
    totalEstimate += 20;
  }

  console.log(data);

  // Package item name

  document.getElementById("package-item-name").textContent =
    "Deluxe Detail Package";

  document.getElementById("package-price").textContent =
    "$" + totalEstimate;
  document.getElementById("addon-price").textContent =
    "$" + totalAddOns;



    // Add Ons Display

    const ul = document.getElementById("add-on-list");
    const li = document.createElement("li");

    for (const i of addOnsList)
    {
        li.textContent = i;
        ul.appendChild(li);
        console.log(totalAddOns);
    }

}
