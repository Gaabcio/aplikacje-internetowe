document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.dostawcy_logo');
    const logos = container.innerHTML;
    container.innerHTML += logos; // Skopiuj zawartość kontenera

    let scrollAmount = 0;
    let scrollInterval;

    function startScrolling() {
        scrollInterval = setInterval(() => {
            scrollAmount += 1;
            container.scrollLeft = scrollAmount;
            if (scrollAmount >= container.scrollWidth / 2) {
                scrollAmount = 0;
            }
        }, 20);
    }

    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    container.addEventListener('mouseover', stopScrolling);
    container.addEventListener('mouseout', startScrolling);

    startScrolling();
});