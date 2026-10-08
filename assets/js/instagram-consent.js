(function () {
  var box = document.querySelector('.insta');
  if (!box) return;
  var consent = box.querySelector('.insta__consent');
  var feed = box.querySelector('.insta__feed');
  var btn = box.querySelector('.insta__btn');

  function loadFeed() {
    var frame = document.createElement('iframe');
    frame.src = box.dataset.src;
    frame.title = 'Instagram-Feed';
    frame.loading = 'lazy';
    frame.setAttribute('scrolling', 'no');
    frame.style.cssText = 'width:100%;min-height:600px;border:0;';
    feed.appendChild(frame);
    consent.hidden = true;
    feed.hidden = false;
    try { sessionStorage.setItem('insta-ok', '1'); } catch (e) {}
  }

  btn.addEventListener('click', loadFeed);
  try { if (sessionStorage.getItem('insta-ok') === '1') loadFeed(); } catch (e) {}
})();