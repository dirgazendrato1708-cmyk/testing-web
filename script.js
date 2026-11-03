
/* =================================
   FITUR SAPA PENGUNJUNG
================================= */

// Ambil tombol dari HTML
const greetButton =
    document.getElementById("greet-button");

// Jalankan ketika tombol diklik
greetButton.addEventListener("click", function() {

    alert(
        "Terima kasih sudah mengunjungi website Dirga! 🚀"
    );

});


/* =================================
   FITUR DARK MODE & LIGHT MODE
================================= */

// Ambil tombol tema
const themeButton =
    document.getElementById("theme-button");


// Periksa tema yang tersimpan di browser
const savedTheme =
    localStorage.getItem("tema");


// Jika sebelumnya pengunjung memilih tema terang
if (savedTheme === "terang") {

    document.body.classList.add("light-mode");

    themeButton.textContent = "🌙 Dark Mode";

} else {

    themeButton.textContent = "☀️ Light Mode";

}


// Jalankan ketika tombol tema diklik
themeButton.addEventListener("click", function() {

    // Ganti tema
    document.body.classList.toggle("light-mode");


    // Periksa apakah sekarang tema terang
    if (document.body.classList.contains("light-mode")) {

        // Ubah tulisan tombol
        themeButton.textContent = "🌙 Dark Mode";

        // Simpan pilihan pengunjung
        localStorage.setItem("tema", "terang");

    } else {

        // Ubah tulisan tombol
        themeButton.textContent = "☀️ Light Mode";

        // Simpan pilihan pengunjung
        localStorage.setItem("tema", "gelap");

    }

});
