// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    // Only handle internal anchor links
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const offset = 70; // offset for fixed navbar height
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
      // 如果在小窗對上開啟了導覽選單，點擊後自動收起
      const navToggle = document.getElementById('nav-toggle');
      if (navToggle && navToggle.checked) {
        navToggle.checked = false;
      }
    }
  });
});
