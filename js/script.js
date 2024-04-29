const navScrolled = document.querySelector('.navbar');
const spinner = document.querySelector('.spinner-wrapper');
const textLogo = document.querySelector('.text-logo');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 61) {
        navScrolled.classList.add('bg-primary');
        textLogo.classList.remove('text-primary');
        textLogo.classList.add('text-secondary');
    } else {
        navScrolled.classList.remove('bg-primary');
        textLogo.classList.remove('text-secondary');
        textLogo.classList.add('text-primary');
    }
});

setTimeout(() => {
    spinner.style.opacity = '0';
    spinner.style.display = 'none';
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const bookmarks = document.querySelectorAll('.bi-bookmark-check');

    bookmarks.forEach(bookmark => {
        bookmark.addEventListener('mouseenter', function () {
            bookmark.classList.remove('bi-bookmark-check');
            bookmark.classList.add('bi-bookmark-check-fill');
        });

        bookmark.addEventListener('mouseleave', function () {
            bookmark.classList.remove('bi-bookmark-check-fill');
            bookmark.classList.add('bi-bookmark-check');
        });
    });
});
