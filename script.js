
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



/* ========================= */
/* ANIMASI TEKS MENGETIK */
/* ========================= */

const typingText = document.getElementById("typing-text");

const textList = [
    "Future Web Developer 🚀",
    "Beginner Programmer 💻",
    "Creative Developer 🎨",
    "Never Stop Learning 📚"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingAnimation() {

    const currentText = textList[textIndex];

    // Jika sedang mengetik
    if (!isDeleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        // Jika tulisan sudah lengkap
        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typingAnimation, 1500);
            return;
        }

    } else {

        // Jika sedang menghapus tulisan
        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        // Jika tulisan sudah terhapus
        if (charIndex === 0) {

            isDeleting = false;

            textIndex++;

            // Kembali ke tulisan pertama
            if (textIndex === textList.length) {
                textIndex = 0;
            }

        }
    }

    // Kecepatan animasi
    const speed = isDeleting ? 50 : 100;

    setTimeout(typingAnimation, speed);
}

// Jalankan animasi
typingAnimation();
