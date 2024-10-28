//for pagination
document.addEventListener("DOMContentLoaded", function () {
    const dataList = document.querySelector(".blog-list__container");
    const pagination = document.getElementById("pagination");

    const itemsPerPage = 1;
    const dataItems = document.querySelectorAll(".blog-list__card");
    const data = Array.from(dataItems).map(item => item.outerHTML);

    let currentPage = 1;

    function displayData(page) {
        dataList.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = data.slice(start, end);

        pageData.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = item;
            dataList.appendChild(li);
        });
    }

    function createPaginationButtons() {
        const totalPages = Math.ceil(data.length / itemsPerPage);

        const prevButton = document.createElement("a");
        prevButton.href = "#blog-list-sec01";
        prevButton.textContent = "<";
        prevButton.classList.add("page-link");
        prevButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                displayData(currentPage);
            }
        });
        pagination.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("a");
            button.href = "#blog-list-sec01";
            button.textContent = i;
            button.classList.add("page-link");
            button.addEventListener("click", function () {
                currentPage = i;
                displayData(currentPage);
            });
            pagination.appendChild(button);
        }

        const nextButton = document.createElement("a");
        nextButton.href = "#blog-list-sec01";
        nextButton.textContent = ">";
        nextButton.classList.add("page-link");
        nextButton.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                displayData(currentPage);
            }
        });
        pagination.appendChild(nextButton);
    }

    createPaginationButtons();
    displayData(currentPage);
});

