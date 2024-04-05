const curved = document.getElementById("curved");
const colors = document.querySelectorAll(".color");

colors.forEach((ochko) => {
    ochko.addEventListener('click', () => {
        curved.style.background = ochko.style.getPropertyValue("--clr");
    });
});