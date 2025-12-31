document.addEventListener('DOMContentLoaded', () => {
  // Auto year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Hide any gallery images that fail to load (if you later add a gallery)
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('error', () => {
      const fig = img.closest('figure');
      if (fig) fig.style.display = 'none';
    });
  });
});
