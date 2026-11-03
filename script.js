
/* ========================= */
/* TOMBOL SAPA */
/* ========================= */

const greetButton = document.getElementById("greet-button");

greetButton.addEventListener("click", function() {

    alert("Halo! Terima kasih sudah mengunjungi website Dirga! 🚀");

});


/* ========================= */
/* DARK MODE & LIGHT MODE */
/* ========================= */

const themeButton = document.getElementById("theme-button");

// Mengambil tema yang pernah disimpan
const savedTheme = localStorage.getItem("tema");

// Jika sebelumnya menggunakan dark mode
if (savedTheme === "gelap") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️ Light Mode";

} else {

    themeButton.textContent = "🌙 Dark Mode";

}


// Ketika tombol tema diklik
themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    // Jika sekarang dark mode
    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("tema", "gelap");

    } else {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("tema", "terang");

    }

});
