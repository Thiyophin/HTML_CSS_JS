const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  const isAlreadyOpen = this.classList.contains('open');

  // Close all panels first
  panels.forEach(panel => panel.classList.remove('open', 'open-active'));

  // If the clicked one wasn’t already open, open it
  if (!isAlreadyOpen) {
    this.classList.add('open');
  }
}

function toggleActive(e) {
  if (e.propertyName === 'flex-grow') {
    // Only add open-active if panel is still "open"
    if (this.classList.contains('open')) {
      this.classList.add('open-active');
    }
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
