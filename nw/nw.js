// The North Watch family: sections rise in as you scroll to them. Everything rests visible; what is already on
// screen when the page opens stays still, and only sections still below the fold animate, once, on arrival.
(function () {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var seen = new WeakSet();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var first = !seen.has(e.target);
      seen.add(e.target);
      if (!e.isIntersecting) return;
      if (!first) e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px 8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
})();
