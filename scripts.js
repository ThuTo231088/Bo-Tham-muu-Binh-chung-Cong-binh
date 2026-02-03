let currentIndex = 0;
const images = document.querySelectorAll('.slide-img');

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Chuyển ảnh mỗi 3 giây
showSlide(currentIndex);
