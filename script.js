function openInvitation() {
    document.getElementById("opening").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("opening").style.display = "none";
        document.getElementById("content").style.display = "flex";
    }, 500);

    const music = document.getElementById("bg-music");
    music.play().catch(error => console.log("Autoplay dicegah browser"));
}

function flipPage(element) {
    // Jika halaman diklik, tambahkan class flipped
    if (!element.classList.contains('flipped')) {
        element.classList.add('flipped');
        
        // Mengatur z-index setelah animasi selesai agar tidak menutupi halaman berikutnya
        setTimeout(() => {
            element.style.zIndex = "0";
        }, 400);
    } else {
        // Opsional: Klik lagi untuk menutup kembali (kembali ke halaman sebelumnya)
        element.classList.remove('flipped');
        // Kembalikan z-index berdasarkan posisi (logika sederhana)
        element.style.zIndex = ""; 
    }
}
// function openInvitation() {
//     document.getElementById("opening").style.display = "none";
//     document.getElementById("content").style.display = "block";

//     const music = document.getElementById("bg-music");
//     music.play();
// }