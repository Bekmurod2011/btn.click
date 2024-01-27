let btn = document.querySelector(".btn"),
    conatiner = document.querySelector(".container");

conatiner.style.display = "none"

btn.addEventListener("click", () => {
    conatiner.classList.toggle("d-block")
})