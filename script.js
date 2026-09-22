(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const dialog = document.getElementById('lightbox');
  if (!dialog || !dialog.showModal) return;
  const largeImage = dialog.querySelector('figure img');
  const caption = dialog.querySelector('figcaption');
  const items = [...document.querySelectorAll('.gallery-item')];
  let current = 0;
  let trigger = null;

  function show(index) {
    current = (index + items.length) % items.length;
    const item = items[current];
    largeImage.src = item.dataset.full;
    largeImage.alt = item.dataset.alt;
    caption.textContent = item.dataset.alt;
  }
  items.forEach((item, index) => item.addEventListener('click', () => {
    trigger = item;
    show(index);
    dialog.showModal();
  }));
  dialog.querySelector('.lightbox-prev').addEventListener('click', () => show(current - 1));
  dialog.querySelector('.lightbox-next').addEventListener('click', () => show(current + 1));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); show(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); show(current + 1); }
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { largeImage.removeAttribute('src'); trigger?.focus(); });
})();
