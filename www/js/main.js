document.addEventListener('DOMContentLoaded', () => {
    // Simple marquee enhancement if needed
    const marquees = document.querySelectorAll('.marquee-content');
    marquees.forEach(marquee => {
        // Clone content to ensure seamless loop if it's too short
        const span = marquee.querySelector('span');
        for (let i = 0; i < 5; i++) {
            marquee.appendChild(span.cloneNode(true));
        }
    });
});
