const selectorBar = document.getElementById("selector-bar");
const selectorBall = document.getElementById("selector-ball");
const monthlyPrices = document.querySelectorAll(".price.monthly");
const annuallyPrices = document.querySelectorAll(".price.annually");
const ribbons = document.querySelectorAll(".ribbon");

selectorBar.addEventListener("click", togglePlan);

function togglePlan() {
    if (selectorBall.style.transform === "translateX(0px)" || selectorBall.style.transform === "") {
        selectorBall.style.transform = "translateX(25px)";
        monthlyPrices.forEach(price => price.style.display = "none");
        annuallyPrices.forEach(price => price.style.display = "block");
        ribbons.forEach(ribbon => ribbon.style.display = "block");
    } else {
        selectorBall.style.transform = "translateX(0px)";
        monthlyPrices.forEach(price => price.style.display = "block");
        annuallyPrices.forEach(price => price.style.display = "none");
        ribbons.forEach(ribbon => ribbon.style.display = "none");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buy-now");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Thank you for choosing this plan!");
        });
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
    });
});