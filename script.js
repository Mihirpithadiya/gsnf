
      window.addEventListener("scroll", function () {
        let navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("shrink");
        } else {
          navbar.classList.remove("shrink");
        }
      });
      document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links ul li');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const linkText = this.textContent.toLowerCase();

      switch (linkText) {
        case 'home':
          const homeSection = document.querySelector('.video-background');
          if (homeSection) {
            homeSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'about us':
          const aboutSection = document.querySelector('.content');
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'sectors':
          const sectorsSection = document.querySelector('.sectors');
          if (sectorsSection) {
            sectorsSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        case 'contact us':
          const contactSection = document.querySelector('.container-4');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
          break;
        default:
          break;
      }
    });
  });
});
    