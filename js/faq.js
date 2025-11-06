// faq.js
// Accessible accordion for FAQs: only one open at a time, keyboard support

export function initFAQ(selector = '.faq-accordion'){
  const containers = Array.from(document.querySelectorAll(selector));
  if (!containers.length) return;

  containers.forEach(container => {
    const items = Array.from(container.querySelectorAll('.faq-item'));
    items.forEach((item, idx) => {
      const btn = item.querySelector('.faq-question');
      const panel = item.querySelector('.faq-answer');
      const id = `faq-${idx}`;
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-controls', id);
      panel.id = id;
      panel.hidden = true;

      btn.addEventListener('click', () => toggle(item));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') { focusNext(idx); e.preventDefault(); }
        if (e.key === 'ArrowUp') { focusPrev(idx); e.preventDefault(); }
        if (e.key === 'Home') { focusFirst(); e.preventDefault(); }
        if (e.key === 'End') { focusLast(); e.preventDefault(); }
      });

      function toggle(targetItem){
        items.forEach(it => {
          const b = it.querySelector('.faq-question');
          const p = it.querySelector('.faq-answer');
          const open = it === targetItem && b.getAttribute('aria-expanded') === 'false';
          b.setAttribute('aria-expanded', open ? 'true' : 'false');
          p.hidden = !open;
        });
      }

      function focusNext(i){ const next = items[i+1]; if (next) next.querySelector('.faq-question').focus(); }
      function focusPrev(i){ const prev = items[i-1]; if (prev) prev.querySelector('.faq-question').focus(); }
      function focusFirst(){ if (items[0]) items[0].querySelector('.faq-question').focus(); }
      function focusLast(){ if (items[items.length-1]) items[items.length-1].querySelector('.faq-question').focus(); }
    });
  });
}
