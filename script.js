const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = '#FF85C6';
  });
  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = '';
  });
});
