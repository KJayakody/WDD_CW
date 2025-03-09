document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('.info-box h3');
    headings.forEach(heading => {
        const id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
        heading.id = id;
    });
});