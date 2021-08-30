/**
 * Update Progress Bar
 * @param {number} value
 */
function updateProgressBar(value) {
  const progressBar = document.getElementById('progress-bar');
  progressBar.value += value;
}

updateProgressBar(10);
