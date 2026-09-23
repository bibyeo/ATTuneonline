/* ATTune website — nav state, reveal on scroll, year */
(function () {
  var nav = document.getElementById('nav');
  if (nav && !nav.classList.contains('is-stuck')) {
    var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 24); };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  var yr = document.querySelectorAll('#yr');
  for (var i = 0; i < yr.length; i++) yr[i].textContent = new Date().getFullYear();

  var items = document.querySelectorAll('.rv');
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) {
    for (var j = 0; j < items.length; j++) items[j].classList.add('in');
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  for (var k = 0; k < items.length; k++) io.observe(items[k]);
})();
