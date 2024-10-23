// JavaScript for smooth scrolling (optional)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded!');
  
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        window.scrollTo({
          top: target.offsetTop - 20,
          behavior: 'smooth'
        });
      });
    });
  });
  