function navigateToUnit(page, unitName) {
  window.location.href = `${page}?unitName=${encodeURIComponent(unitName)}`;
}
function back(){
  window.location.href = 'index.html';
}