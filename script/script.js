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

    function resetScrolling() {
        stopScrolling();
        scrollAmount = 0;
        container.scrollLeft = 0;
        startScrolling();
    }

    container.addEventListener('mouseover', stopScrolling);
    container.addEventListener('mouseout', startScrolling);
    window.addEventListener('resize', resetScrolling);

    startScrolling();
});


document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50 && window.innerWidth > 900) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    function observeElements(selectors) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                observer.observe(element);
            });
        });
    }

    observeElements(['#anka_michal', '.opinia']);
});