let lastKey = '';
document.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();
  if (key === 'p' && lastKey === 'p') {
    chrome.runtime.sendMessage({ action: 'triggerApnUpdate' }); //it doesnt metter what even you use to send this to the background.js
    lastKey = ''; // reset
  } else {
    lastKey = key;
  }
});