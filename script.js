document.addEventListener("DOMContentLoaded", function () {
    function goBack() {
        window.history.back();
    }

    document.querySelector("nav button").addEventListener("click", goBack);

    // Expandable sections functionality
    document.querySelectorAll(".expandable").forEach(section => {
        section.addEventListener("click", function () {
            let content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
