// La función setup() se ejecuta UNA sola vez al iniciar el programa.
// Aquí preparamos el lienzo y dibujamos una imagen estática.
function setup() {
  createCanvas(1000, 1000); // Crea un lienzo de 1000x1000 píxeles
  background(230, 230, 250);        // Fondo gris

  // Lado superior: amarillo transparente , grosor 1
  stroke(255, 255, 0, 100);      // Color amarillo tranparente
  strokeWeight(1);        // Grosor de línea 1
  line(300, 300, 900, 300);

  // Lado derecho: azul mar, grosor 3
  stroke(32, 178, 170); // Azul mar
  strokeWeight(3);        // Grosor de línea 3
  line(900, 300, 900, 900);

  // Lado inferior: verde agua tranparente , grosor 7
  stroke(0, 250, 154, 120);      // verde agua tranparente
  strokeWeight(7);        // Grosor de línea 7
  line(900, 900, 300, 900);

  // Lado izquierdo: coral, grosor 8
  stroke(240, 128, 128);            // Coral
  strokeWeight(8);        // Grosor de línea 8
  line(300, 900, 300, 300);
}