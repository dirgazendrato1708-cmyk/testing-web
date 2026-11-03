
const tombol = document.getElementById("greet-button");

tombol.addEventListener("click", function() {
    alert("Terima kasih sudah mengunjungi website Dirga! 🚀");
});

const themeButton = document.getElementById("theme-button");

// Periksa tema yang tersimpan
const temaTersimpan = localStorage.getItem("tema");

if (temaTersimpan === "terang") {
    document.body.classList.add("light-mode");
    themeButton.textContent = "🌙 Dark Mode";
}

// Ketika tombol tema diklik
themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("tema", "terang");

    } else {

        themeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("tema", "gelap");

    }

});
