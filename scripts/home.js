document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-up');
    const speed = 2000; // Animation duration in milliseconds

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.match(/\d+/)[0];
            const increment = target / (speed / 10);

            if (count < target) {
                const newCount = Math.ceil(count + increment);
                counter.innerText = counter.innerText.replace(/\d+/, newCount);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = counter.innerText.replace(/\d+/, target);
            }
        };

        // Extract the numeric part and store it in data-target
        const textContent = counter.innerText;
        const numericPart = +textContent.match(/\d+/)[0];
        counter.setAttribute('data-target', numericPart);

        // Reset the counter to 0 but keep the non-numeric part
        counter.innerText = textContent.replace(/\d+/, '0');

        updateCount();
    });
});