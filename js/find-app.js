const findField = document.querySelector("#find-field"); 
const findBtn = document.querySelector("#find-btn");
const findWrapper = findBtn.closest(".header-menu__find");
const findBlock = document.querySelector("#find-block");
const articlesHeaders = [...document.querySelectorAll("#articles h3")];
const nothingFound = document.querySelector("#nothingFound");

function deleteInner() {
    [...findBlock.children].forEach((item) => {
        if (item.id == "nothingFound") return;
        item.remove();
    });
}

function checkInner(text) {
    articlesHeaders.forEach((item, index) => {
        const itemText = item.textContent.toLowerCase();
        const h3Index = index + 1;

        if (!itemText.includes(text)) return;
        nothingFound.style.display = "none";

        findBlock.insertAdjacentHTML("beforeEnd", `<a href="articles/${h3Index}.html">${itemText}</a>`);
    });

    if (findBlock.children.length == 1) {
        nothingFound.style.display = "block";
    }
}

findField.addEventListener("focus", (e) => {
    const text = findField.value.toLowerCase();

    findBlock.classList.remove("find-block-hide");

    checkInner(text);
});

findField.addEventListener("blur", (e) => {
    setTimeout(() => {
        findCheck = true;
        findBlock.classList.add("find-block-hide");
        deleteInner();
        nothingFound.style.display = "block";
    }, 300);
});

findField.addEventListener("input", function(e) {
    const text = this.value.toLowerCase();

    deleteInner();

    checkInner(text);
});


