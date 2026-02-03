// Image Slider Functionality
class ImageSlider {
    constructor() {
        this.currentIndex = 0;
        this.images = document.querySelectorAll('.image-slider img');
        this.indicatorsContainer = document.getElementById('sliderIndicators');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.slideInterval = null;
        this.init();
    }

    init() {
        // Create indicators
        this.createIndicators();
        
        // Add event listeners to buttons
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Initialize
        this.showSlide(this.currentIndex);
        this.startAutoSlide();
        
        // Pause auto-slide on hover
        const slider = document.querySelector('.image-slider');
        slider.addEventListener('mouseenter', () => this.stopAutoSlide());
        slider.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    createIndicators() {
        this.images.forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.addEventListener('click', () => {
                this.currentIndex = index;
                this.showSlide(this.currentIndex);
                this.updateIndicators();
            });
            this.indicatorsContainer.appendChild(indicator);
        });
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.slider-indicators span');
        indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    showSlide(index) {
        this.images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
        this.updateIndicators();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showSlide(this.currentIndex);
    }

    startAutoSlide() {
        this.stopAutoSlide(); // Clear any existing interval
        this.slideInterval = setInterval(() => this.nextSlide(), 5000); // Change slide every 5 seconds
    }

    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
            this.slideInterval = null;
        }
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#section2') {
            alert('Mini Game sẽ được cập nhật trong thời gian tới!');
            return;
        }
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const slider = new ImageSlider();
    
    // Add animation to header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.padding = '25px 0';
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const yearSpan = document.createElement('span');
    yearSpan.textContent = currentYear;
    document.querySelector('footer p').innerHTML = `&copy; ${currentYear} Bộ Tham mưu Binh chủng Công binh. Tất cả các quyền được bảo lưu.`;
});



