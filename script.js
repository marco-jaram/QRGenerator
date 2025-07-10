// Obtener referencias a los elementos del HTML
const generateBtn = document.getElementById('generateBtn');
const urlInput = document.getElementById('urlInput');
const qrCodeContainer = document.getElementById('qrCodeContainer');

// Variable para almacenar el objeto QR y poder limpiarlo después
let qrCode = null;

// Función para generar el código QR
const generateQRCode = () => {
    // Obtener el valor del input y quitar espacios en blanco
    const url = urlInput.value.trim();

    // Si el input está vacío, no hacer nada
    if (!url) {
        alert("Por favor, ingresa una URL o un texto.");
        return;
    }

    // Limpiar el contenedor de cualquier QR anterior
    qrCodeContainer.innerHTML = "";

    // Crear el nuevo código QR usando la librería
    // Le pasamos el contenedor y un objeto con las opciones
    qrCode = new QRCode(qrCodeContainer, {
        text: url,
        width: 300, // Ancho solicitado
        height: 300, // Alto solicitado
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H // Nivel de corrección de errores (H = High)
    });
    
    // Opcional: limpiar el campo de texto después de generar el QR
    // urlInput.value = "";
};

// Añadir el "escuchador de eventos" al botón
generateBtn.addEventListener('click', generateQRCode);

// Opcional: permitir generar el QR al presionar "Enter" en el campo de texto
urlInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generateQRCode();
    }
});