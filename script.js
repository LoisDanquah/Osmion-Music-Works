const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
toggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelector('#year').textContent = new Date().getFullYear();
