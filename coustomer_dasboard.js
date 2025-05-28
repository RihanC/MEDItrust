let currentIndex = 0;
  const images = document.querySelectorAll('#carouselImages img');
  const totalImages = images.length;

  function showSlide(index) {
    const carousel = document.getElementById('carouselImages');
    carousel.style.transform = `translateX(-${index * 600}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showSlide(currentIndex);
  }

  // Optional: Auto-slide every 4 seconds
  setInterval(nextSlide, 4000);