document.addEventListener('DOMContentLoaded', () => {
  // Auto year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Hide gallery figures for any missing images (keeps page clean)
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('error', () => {
      const fig = img.closest('.ph');
      if (fig) fig.style.display = 'none';
    });
  });
});
