const menuIcon = document.querySelector('.dropdown-icon');
const hambuggerMenu = document.querySelector('.hambugger');
const closeMenu = document.querySelector('.close-menu');
const links = document.querySelectorAll('.links');

menuIcon.addEventListener('click', () => {
  hambuggerMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  hambuggerMenu.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    hambuggerMenu.style.display = 'none';
  });
});
