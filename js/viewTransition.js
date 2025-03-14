/**
 * Smoothly transition between pages by fading out the current page before navigating to the new one.
 *
 * This script is intended to be used in a browser context, and listens for clicks on links. When a link is clicked, it
 * prevents the default behavior, fades out the current page, and then navigates to the new page after a short delay.
 *
 */



function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

}

