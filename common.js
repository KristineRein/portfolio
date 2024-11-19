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
                updateActiveLink();
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
                updateActiveLink();
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
                updateActiveLink();
            }
        });
        pagination.appendChild(nextButton);

        function updateActiveLink() {
            const links = pagination.querySelectorAll('.page-link');
            links.forEach(link => link.classList.remove('active'));
            const activeLink = Array.from(links).find(link => link.textContent == currentPage);
            if (activeLink) {
                activeLink.classList.add('active');
            }

            prevButton.style.display = (currentPage === 1) ? "none" : "inline-block";
            nextButton.style.display = (currentPage === totalPages) ? "none" : "inline-block";
        }

        updateActiveLink(); 
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
        prevButton.classList.add("page-link01");
        prevButton.addEventListener("click", function () {
            if (currentPage > 1) {
                currentPage--;
                displayData(currentPage);
                updateCurrentLink();
            }
        });
        pagination01.appendChild(prevButton);

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement("a");
            button.href = "#p-proj-des";
            button.textContent = i;
            button.classList.add("page-link01");
            button.addEventListener("click", function () {
                currentPage = i;
                displayData(currentPage);
                updateCurrentLink();
            });
            pagination01.appendChild(button);
        }

        const nextButton = document.createElement("a");
        nextButton.href = "#p-proj-des";
        nextButton.textContent = ">";
        nextButton.classList.add("page-link01");
        nextButton.addEventListener("click", function () {
            if (currentPage < totalPages) {
                currentPage++;
                displayData(currentPage);
                updateCurrentLink();
            }
        });
        pagination01.appendChild(nextButton);

        function updateCurrentLink() {
            const links = pagination01.querySelectorAll('.page-link01');
            links.forEach(link => link.classList.remove('current'));
            const activeLink = Array.from(links).find(link => link.textContent == currentPage);
            if (activeLink) {
                activeLink.classList.add('current');
            }

            prevButton.style.display = (currentPage === 1) ? "none" : "inline-block";
            nextButton.style.display = (currentPage === totalPages) ? "none" : "inline-block";
        }

        updateCurrentLink(); 
    }

    createPaginationButtons();
    displayData(currentPage);
});

