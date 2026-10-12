// Adresses e-mail reconstituées à l'affichage : absentes du code de la page,
// elles échappent à la plupart des robots qui collectent des adresses.
document.querySelectorAll('[data-u][data-d]').forEach(function (el) {
  var address = el.getAttribute('data-u') + '@' + el.getAttribute('data-d');
  el.textContent = address;
  if (el.tagName === 'A') el.setAttribute('href', 'mailto:' + address);
});
