function classToggle() {
  const nav = document.querySelector('.items'),
  lang = document.querySelector('.lang-buttons');

  nav.classList.toggle('items__mobile');
  lang.classList.toggle('lang-buttons__mobile');
}

document.querySelector('.toggles__burger')
  .addEventListener('click', classToggle);
