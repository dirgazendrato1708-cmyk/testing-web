
/* ========================= */
/* 1. TOMBOL SAPA */
/* ========================= */

const greetButton = document.getElementById("greet-button");

greetButton.addEventListener("click", function() {

    alert("Halo! Terima kasih sudah mengunjungi website Dirga! 🚀");

});


/* ========================= */
/* 2. DARK MODE */
/* ========================= */

const themeButton = document.getElementById("theme-button");

// Membaca tema yang tersimpan
const savedTheme = localStorage.getItem("tema");

// Mengatur tema saat halaman dibuka
if (savedTheme === "gelap") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️ Light Mode";

} else {

    document.body.classList.remove("dark-mode");

    themeButton.textContent = "🌙 Dark Mode";

}

// Mengganti tema ketika tombol diklik
themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("tema", "gelap");

    } else {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("tema", "terang");

    }

});


/* ========================= */
/* 3. ANIMASI TYPING */
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

// Fungsi animasi mengetik
function typingAnimation() {

    const currentText = textList[textIndex];

    // Ketika sedang mengetik
    if (isDeleting === false) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        // Tunggu jika tulisan sudah lengkap
        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typingAnimation, 1500);

            return;
        }

    } else {

        // Ketika sedang menghapus tulisan
        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        // Jika tulisan sudah habis dihapus
        if (charIndex === 0) {

            isDeleting = false;

            textIndex++;

            // Kembali ke tulisan pertama
            if (textIndex === textList.length) {

                textIndex = 0;

            }

        }

    }

    // Kecepatan mengetik dan menghapus
    const speed = isDeleting ? 50 : 100;

    setTimeout(typingAnimation, speed);

}

// Menjalankan animasi
typingAnimation();
