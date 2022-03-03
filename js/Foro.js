const notas = document.querySelectorAll('.notas .contenedor-nota');
//para esto solo se hace a la nota que se selecciona 
notas.forEach((nota)=> {
    nota.addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('activa');

        const respuesta = nota.querySelector('.respuesta');
        const alturaRealRespuesta = respuesta.scrollHeight;
        
        if(!respuesta.style.maxHeight){
           //si esta vacio hace que tome el tamaño de la respuesta 
           respuesta.style.maxHeight = alturaRealRespuesta + 'px';
        }
        else{
            respuesta.style.maxHeight = null; 
        }
    });
});

