
/* ================================= */
/* 1. TOMBOL SAPA */
/* ================================= */

const greetButton = document.getElementById("greet-button");

greetButton.addEventListener("click", function() {

    alert("Halo! Terima kasih sudah mengunjungi website Dirga! 🚀");

});


/* ================================= */
/* 2. DARK MODE & LIGHT MODE */
/* ================================= */

const themeButton = document.getElementById("theme-button");

// Membaca tema yang pernah disimpan
const savedTheme = localStorage.getItem("tema");

// Mengatur tema saat website dibuka
if (savedTheme === "gelap") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️ Light Mode";

} else {

    document.body.classList.remove("dark-mode");

    themeButton.textContent = "🌙 Dark Mode";

}

// Mengganti tema saat tombol diklik
themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    // Jika Dark Mode aktif
    if (document.body.classList.contains("dark-mode")) {

        themeButton.textContent = "☀️ Light Mode";

        localStorage.setItem("tema", "gelap");

    } else {

        themeButton.textContent = "🌙 Dark Mode";

        localStorage.setItem("tema", "terang");

    }

});


/* ================================= */
/* 3. ANIMASI TYPING */
/* ================================= */

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

    // Jika sedang mengetik
    if (isDeleting === false) {

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

    // Kecepatan mengetik
    const speed = isDeleting ? 50 : 100;

    setTimeout(typingAnimation, speed);

}


// Menjalankan animasi typing
typingAnimation();
