const input = document.getElementById('url');
const button = document.getElementById('generate');
const qrcode = document.getElementById('qr-code');

const generateQr = (url) => {
  new QRCode(qrcode, {
    text: url,
    width: 128,
    height: 128,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
  });
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  qrcode.innerHTML = '';
  generateQr(input.value);
  input.value = '';
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault(); // Prevent form submission
    button.click();
  }
});


document.addEventListener('DOMContentLoaded', () => {
    input.focus();
})