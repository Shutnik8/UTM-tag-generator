document.getElementById('utm-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const baseUrl = document.getElementById('base-url').value;
  const campaign = document.getElementById('campaign').value;
  const source = document.getElementById('source').value;
  const content = document.getElementById('content').value;
  const medium = document.getElementById('medium').value;
  const term = document.getElementById('term').value;

  let url = new URL(baseUrl);
  if (source) url.searchParams.set('utm_source', source);
  if (campaign) url.searchParams.set('utm_campaign', campaign);  
  if (content) url.searchParams.set('utm_content', content);
  if (medium) url.searchParams.set('utm_medium', medium);
  if (term) url.searchParams.set('utm_term', term);

  document.getElementById('result-url').value = url.toString();
});

// Эффект печатающегося текста
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.getElementById("typing-text");
  const text = typingElement.getAttribute("data-text");
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeChar, 100); // скорость печати (мс)
    }
  }

  typeChar();
});



document.getElementById('copy-button').addEventListener('click', function() {
  const textArea = document.getElementById('result-url');
  textArea.select();
  document.execCommand('copy');

  document.getElementById('reset-button').addEventListener('click', function() {
  document.getElementById('utm-form').reset();       // очистка формы
  document.getElementById('result-url').value = "";  // очистка результата
});


});
