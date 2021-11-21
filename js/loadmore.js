const articlesRows = [...document.querySelectorAll("#articles .articles__row")];
const loadmoreBtn = document.querySelector("#load-more");
const btnWrapper = loadmoreBtn.closest(".btn-wrapper");

loadmoreBtn.addEventListener("click", (e) => {
    articlesRows.forEach((item) => {
        item.style.display = "flex";
    });

    btnWrapper.style.display = "none";
});