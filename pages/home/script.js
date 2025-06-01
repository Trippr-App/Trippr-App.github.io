// Simple tab-switching logic
const tabs = document.querySelectorAll('.tab-bar button');
tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // here you could swap visible sections, e.g.:
//  document.querySelectorAll('.content section')
//    .forEach(sec => sec.style.display = sec.id.includes(btn.ariaLabel.toLowerCase()) ? 'block' : 'none');
  });
});
