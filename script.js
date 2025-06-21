const display = document.getElementById('display');
const keys = document.querySelector('.keys');

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return;
  const val = e.target.value;
  const current = display.value;

  if (val === 'C') {
    display.value = '0';
    return;
  }

  if (val === '=') {
    try {
      display.value = String(eval(current.replace(/×/g, '*').replace(/÷/g, '/')));
    } catch {
      display.value = 'Error';
    }
    return;
  }

  if (current === '0' && val !== '.') {
    display.value = val;
  } else {
    display.value = current + val;
  }
});