document.addEventListener('DOMContentLoaded', function() {
    const projectContainers = document.querySelectorAll('.projectContainer');

    projectContainers.forEach(container => {
        container.addEventListener('click', function() {
            const url = container.getAttribute('data-url');
            if (url) {
                window.location.href = url;
            }
        });
    });
});