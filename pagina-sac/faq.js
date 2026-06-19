const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", () => {

        // Fecha todos os outros itens
        faqItems.forEach(faq => {
            if (faq !== item) {
                faq.classList.remove("active");
                faq.querySelector(".icon").textContent = "+";
            }
        });

        // Alterna o item clicado
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            icon.textContent = "×";
        } else {
            icon.textContent = "+";
        }
    });
});