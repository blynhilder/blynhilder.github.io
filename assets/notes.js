/* 格物志 · 子页共享行为：阅读进度 + 房间之间的键盘导航 */
(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const readProgress = () => {
    const maxScroll = Math.max(1, root.scrollHeight - window.innerHeight);
    root.style.setProperty('--page-progress', Math.min(1, window.scrollY / maxScroll).toFixed(4));
  };
  window.addEventListener('scroll', readProgress, { passive: true });
  window.addEventListener('resize', readProgress);
  readProgress();

  // ← / → 在相邻房间之间移动；不打扰输入框
  const prev = document.querySelector('.room.prev');
  const next = document.querySelector('.room.next');
  window.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea, select')) return;
    if (e.key === 'ArrowLeft' && prev) location.href = prev.getAttribute('href');
    if (e.key === 'ArrowRight' && next) location.href = next.getAttribute('href');
  });

  void reducedMotion;
})();
