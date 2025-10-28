// La función setup() se ejecuta UNA sola vez al iniciar el programa.
// Aquí preparamos el lienzo y dibujamos una imagen estática.
function setup() {
  createCanvas(700, 700); // Crea un lienzo de 400x400 píxeles
  background(233, 150, 122);        // Fondo blanco

  // Lado superior: azul opaco, grosor 3
  stroke(0, 255, 255);      // Color azul agua
  strokeWeight(5);        // Grosor de línea 5
  line(300, 300, 600, 300);

  // Lado derecho: morado semitransparente, grosor 9
  stroke(147, 112 ,219 ,100); // Morado con transparencia
  strokeWeight(9);        // Grosor de línea 9
  line(600, 300, 600, 600);

  // Lado inferior: verde opaco, grosor 7
  stroke(0, 250, 154);      // Verde
  strokeWeight(7);        // Grosor de línea 7
  line(600, 600, 300, 600);

  // Lado izquierdo: naranja, grosor 12
  stroke(255, 165,0);            // Naranja
  strokeWeight(12);        // Grosor de línea 12
  line(300,600, 300, 300);
}