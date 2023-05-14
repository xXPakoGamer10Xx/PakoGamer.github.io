const links = document.querySelectorAll('#indice a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
