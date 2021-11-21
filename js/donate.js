const donate = document.querySelector("#donate");
const wrapper = donate.closest(".btn-wrapper");

donate.addEventListener("click", (e) => {
    wrapper.innerHTML = "<p>Сбер: 1234 1234 1234 1234</p>";
});