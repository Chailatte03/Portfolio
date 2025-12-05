var slideIndex = 1;
showSlides(slideIndex);

// Funktion, die aufgerufen wird, wenn auf die Pfeile geklickt wird
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hauptfunktion zum Anzeigen der Slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("inhalt-slide");

  // Springe zum ersten Bild, wenn das Ende erreicht ist
  if (n > slides.length) {slideIndex = 1}    
  // Springe zum letzten Bild, wenn der Anfang erreicht ist
  if (n < 1) {slideIndex = slides.length}

  // Entferne die 'active'-Klasse von allen Slides
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }

  // Füge die 'active'-Klasse zur aktuellen Slide hinzu, um sie anzuzeigen
  slides[slideIndex-1].className += " active";
}