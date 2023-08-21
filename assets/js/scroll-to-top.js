// scroll-to-top.js
window.addEventListener('scroll', function() {
    var moveToTopLink = document.getElementById('moveToTop');
    if (window.scrollY > 200) {
      moveToTopLink.classList.add('active');
    } else {
      moveToTopLink.classList.remove('active');
    }
  });
  
  document.getElementById('moveToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  