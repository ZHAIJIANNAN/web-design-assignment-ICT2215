// The only JavaScript feature: preview a local message without submitting it.
const form = document.querySelector('#contact-form');
const preview = document.querySelector('#message-preview');
const details = document.querySelector('#preview-details');
const message = document.querySelector('#preview-message');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const values = new FormData(form);
  // textContent displays input as text rather than interpreting it as HTML.
  details.textContent = `${values.get('name').trim()} · ${values.get('email').trim()}\n${values.get('subject')}`;
  message.textContent = values.get('message').trim();
  preview.hidden = false;
});

form.addEventListener('reset', function () {
  preview.hidden = true;
  details.textContent = '';
  message.textContent = '';
});
