module.exports = function (currentSlug, activeSlug) {
  if (
    currentSlug && typeof currentSlug === "string" 
    && activeSlug && typeof activeSlug === "string"
  ) {
    return (currentSlug === activeSlug) ? 'true' : 'false';
  }
}