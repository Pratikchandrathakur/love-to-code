// Check if the browser supports localStorage
function isLocalStorageSupported() {
  try {
    const testKey = '__test__';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
}
if (isLocalStorageSupported()) {
  console.log('localStorage is supported in this browser!');
} else {
  console.log('Sorry, localStorage is not supported in this browser.');
}
