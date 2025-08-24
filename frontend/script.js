document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const mapContainer = document.querySelector('.map-container iframe');
    if (query.includes('kapu') || query.includes('temple')) {
        mapContainer.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63345.05415116393!2d74.69856651214596!3d13.20878430470905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4c9894a8533%3A0x92d97a87904117c0!2sKapu%20Shri%20Hale%20Mariamma%20Temple!5e0!3m2!1sen!2sin!4v1723902144961!5m2!1sen!2sin";
    } else {
        mapContainer.src = "";
    }
});

    const links = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
        }
      });