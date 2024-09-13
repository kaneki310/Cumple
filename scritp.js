// Selecciona el botón
const celebrateButton = document.getElementById('celebrateButton');

// Función que lanza el confetti cuando se hace clic y redirige a la nueva página
celebrateButton.addEventListener('click', () => {
    // Configuración del confetti
    const duration = 3 * 1000; // Duración de 3 segundos
    const end = Date.now() + duration;

    // Función para lanzar confetti repetidamente
    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        // Continúa lanzando confetti hasta que el tiempo se agote
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();

    // Redirige a la nueva página después del confetti
    setTimeout(() => {
        window.location.href = "fotos.html"; // Asegúrate de que esta ruta sea correcta
    }, 3500); // Redirige después de 3.5 segundos
});
