// Animasi saat scroll untuk ikon sosial media
const socialIcons = document.querySelectorAll('.social-icons i');

function showSocialIconsOnScroll() {
    const scrollY = window.scrollY;
    socialIcons.forEach(icon => {
        const iconPosition = icon.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (iconPosition < windowHeight) {
            icon.classList.add('visible');
        } else {
            icon.classList.remove('visible');
        }
    });
}

// Memanggil fungsi setiap kali pengguna menggulir
window.addEventListener('scroll', showSocialIconsOnScroll);

// Mengatur agar ikon sosial media terlihat saat halaman digulir ke bawah
showSocialIconsOnScroll();










