(() => {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('aws-workshop-theme');
  if (savedTheme) root.dataset.theme = savedTheme;

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('aws-workshop-theme', root.dataset.theme);
  });

  const sidebar = document.getElementById('sidebar');
  document.getElementById('menu-toggle')?.addEventListener('click', () => sidebar?.classList.toggle('open'));

  const search = document.getElementById('site-search');
  search?.addEventListener('input', (event) => {
    const term = event.target.value.trim().toLowerCase();
    document.querySelectorAll('#sidebar-nav a').forEach((link) => {
      const match = !term || link.textContent.toLowerCase().includes(term);
      link.style.display = match ? '' : 'none';
      if (match && term) link.closest('details')?.setAttribute('open', '');
    });
  });
})();
