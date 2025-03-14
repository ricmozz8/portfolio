/**
 * Smoothly transition between pages by fading out the current page before navigating to the new one.
 *
 * This script is intended to be used in a browser context, and listens for clicks on links. When a link is clicked, it
 * prevents the default behavior, fades out the current page, and then navigates to the new page after a short delay.
 *
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href]').forEach(a => {
    a.addEventListener('click', e => {
      if (a.getAttribute('href') !== '#' && a.getAttribute('href') !== window.location.href && !a.getAttribute('href').startsWith('http')) {
        e.preventDefault();
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = 0;
        setTimeout(() => {
          window.location.href = a.href;
        }, 500);
      }
    });
  });
});


function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

}

