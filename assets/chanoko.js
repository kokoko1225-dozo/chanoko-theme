// 茶の子:ラインナップの絞り込み(カフェインあり / ノンカフェイン)
(() => {
  document.querySelectorAll('[data-cnk-filter]').forEach((group) => {
    const section = group.closest('.cnk-lineup');
    if (!section) return;
    const cards = section.querySelectorAll('[data-cnk-items] .cnk-card');
    group.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      const value = button.dataset.filter;
      group.querySelectorAll('[data-filter]').forEach((b) => {
        const active = b === button;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      cards.forEach((card) => {
        card.hidden = value !== 'all' && card.dataset.caffeine !== value;
      });
    });
  });
})();
