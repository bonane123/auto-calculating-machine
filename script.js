let SelOption = document.querySelector("#selOption");
let Result = document.querySelector("#result");
SelOption.addEventListener("change", () => {
  Result.value = SelOption.value * 100;
});
