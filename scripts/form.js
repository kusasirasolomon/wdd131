document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: "prod1", name: "Treadmill X100" },
    { id: "prod2", name: "Dumbbell Set 20kg" },
    { id: "prod3", name: "Yoga Mat Pro" },
    { id: "prod4", name: "Pull-up Bar Pro" }
  ];

  const select = document.querySelector("#productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
