document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-up');
    const speed = 2000;

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

        const textContent = counter.innerText;
        const numericPart = +textContent.match(/\d+/)[0];
        counter.setAttribute('data-target', numericPart);

        counter.innerText = textContent.replace(/\d+/, '0');

        updateCount();
    });
});