//for pagination
document.addEventListener("DOMContentLoaded", function () {
    const dataList = document.querySelector(".project-info");
    const pagination = document.getElementById("pagination");

    const itemsPerPage = 1;
    const dataItems = document.querySelectorAll(".proj-cont");
    const data = Array.from(dataItems).map(item => item.outerHTML);

    let currentPage = 1;

    function displayData(page) {
        dataList.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = data.slice(start, end);

        pageData.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = item;
            dataList.appendChild(div);
        });
    }

    function createPaginationButtons() {
        const totalPages = Math.ceil(data.length / itemsPerPage);

        const prevButton = document.createElement("a");
        prevButton.href = "#proj-des";
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
            button.href = "#proj-des";
            button.textContent = i;
            button.classList.add("page-link");
            button.addEventListener("click", function () {
                currentPage = i;
                displayData(currentPage);
            });
            pagination.appendChild(button);
        }

        const nextButton = document.createElement("a");
        nextButton.href = "#proj-des";
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

//for pagination
document.addEventListener("DOMContentLoaded", function () {
    const dataList = document.querySelector(".p-project-info");
    const pagination01 = document.getElementById("pagination01");

    const itemsPerPage = 1;
    const dataItems = document.querySelectorAll(".p-proj-cont");
    const data = Array.from(dataItems).map(item => item.outerHTML);

    let currentPage = 1;

    function displayData(page) {
        dataList.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageData = data.slice(start, end);

        pageData.forEach(item => {
            const div = document.createElement("div");
            div.innerHTML = item;
            dataList.appendChild(div);
        });
    }

    function createPaginationButtons() {
        const totalPages = Math.ceil(data.length / itemsPerPage);

        const prevButton = document.createElement("a");
        prevButton.href = "#p-proj-des";
        prevButton.textContent = "<";
        prevButton.classList.add("page-link");
        prevButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                displayData(currentPage);
            }
        });
        pagination01.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("a");
            button.href = "#p-proj-des";
            button.textContent = i;
            button.classList.add("page-link");
            button.addEventListener("click", function () {
                currentPage = i;
                displayData(currentPage);
            });
            pagination01.appendChild(button);
        }

        const nextButton = document.createElement("a");
        nextButton.href = "#p-proj-des";
        nextButton.textContent = ">";
        nextButton.classList.add("page-link");
        nextButton.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                displayData(currentPage);
            }
        });
        pagination01.appendChild(nextButton);
    }

    createPaginationButtons();
    displayData(currentPage);
});

