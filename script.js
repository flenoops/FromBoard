document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const body = document.body;

  burger.addEventListener('click', () => {
    const isActive = menu.classList.toggle('menu--active');
    burger.classList.toggle('burger--active');
    body.classList.toggle('no-scroll', isActive);
    burger.setAttribute('aria-expanded', isActive);
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('menu--active');
      burger.classList.remove('burger--active');
      body.classList.remove('no-scroll');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});