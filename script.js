// The booking link is set once, in the booking-url meta tag at the top of index.html.
(function () {
  var meta = document.querySelector('meta[name="booking-url"]');
  var bookingUrl = meta ? meta.getAttribute('content') : '';

  // Load the Calendly calendar into the booking section.
  // Until the real link is set, show a short note instead of someone else's Calendly page.
  var embed = document.querySelector('[data-calendly-inline]');
  if (embed && bookingUrl.indexOf('PLACEHOLDER') !== -1) {
    var note = document.createElement('p');
    note.className = 'booking-soon';
    note.textContent = 'Online booking is coming soon.';
    embed.replaceWith(note);
  } else if (embed && bookingUrl) {
    embed.classList.add('calendly-inline-widget');
    embed.setAttribute('data-url', bookingUrl);
    var widget = document.createElement('script');
    widget.src = 'https://assets.calendly.com/assets/external/widget.js';
    widget.async = true;
    document.body.appendChild(widget);
  }

  // Keep the copyright year current.
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
