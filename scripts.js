document.addEventListener('DOMContentLoaded', function() {
    
    let currentIndex = 0;
    const images = document.querySelectorAll('.slide-img');
    const totalImages = images.length;

    // Hàm hiển thị slide
    function showSlide(index) {
        // Ẩn tất cả ảnh
        images.forEach((img) => {
            img.classList.remove('active');
        });
        
        // Hiện ảnh hiện tại
        if (images[index]) {
            images[index].classList.add('active');
        }
    }

    // Chuyển slide tiếp theo
    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % totalImages;
        showSlide(currentIndex);
    }

    // Quay lại slide trước
    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showSlide(currentIndex);
    }

    // Khởi tạo slide đầu tiên
    showSlide(currentIndex);

    // Tự động chuyển ảnh sau mỗi 5 giây (Tuỳ chọn)
    setInterval(() => {
        nextSlide();
    }, 5000);
});
