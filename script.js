// function openInvitation() {
//     const opening = document.getElementById("opening");
//     const content = document.getElementById("content");
//     const music = document.getElementById("bg-music");

//     opening.style.transition = "opacity 0.8s ease";
//     opening.style.opacity = "0";

//     setTimeout(() => {
//         opening.style.display = "none";
//         content.style.display = "flex";
//         music.play().catch(e => console.log("Audio play deferred"));
//     }, 800);
// }

let startX = 0;
const pages = document.querySelectorAll('.page');
let currentPage = 0;

function openInvitation() {
    document.getElementById("opening").style.display = "none";
    document.getElementById("content").style.display = "flex";
    document.getElementById("bg-music").play();
}

// Deteksi Sentuhan untuk HP
document.getElementById('book').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.getElementById('book').addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if (diff > 50) { 
        // Swipe Kiri -> Buka Halaman Baru
        nextPage();
    } else if (diff < -50) {
        // Swipe Kanan -> Kembali ke Halaman Sebelumnya
        prevPage();
    }
});

function nextPage() {
    if (currentPage < pages.length) {
        pages[currentPage].classList.add('flipped');
        currentPage++;
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove('flipped');
    }
}

// Tetap bisa diklik juga
pages.forEach((page, index) => {
    page.onclick = () => {
        if (!page.classList.contains('flipped')) {
            nextPage();
        } else {
            // Jika ingin klik sisi kiri untuk balik ke halaman sebelumnya
            prevPage();
        }
    };
});

function flipPage(element) {
    if (!element.classList.contains('flipped')) {
        element.classList.add('flipped');
        
        // Menurunkan z-index setelah animasi agar tidak menutupi halaman bawahnya
        setTimeout(() => {
            element.style.zIndex = "0";
        }, 700);
    }
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
