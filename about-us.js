window.onload = function() {
    setTimeout(function() {
        const container = document.querySelector('.credits-container');
        const totalHeight = container.scrollHeight - container.clientHeight;
        const duration = 11000; // 10 seconds
        const startTime = performance.now();

        function scroll() {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            const progress = elapsedTime / duration;
            const currentScroll = Math.min(totalHeight * progress, totalHeight);

            container.scrollTo(0, currentScroll);

            if (currentScroll < totalHeight) {
                requestAnimationFrame(scroll);
            }
        }

        requestAnimationFrame(scroll);
    }, 2000);
};
