// Mapeo de prácticas
const practicas = {
    1: {
        teoria: "teoria/teoria_conjuntos.pdf",
        enunciado: "practicas/practica1_enunciado.pdf",
        resolucion: "practicas/practica1_resuelta.pdf",
        explicacion: "practicas/explicacion_practica_1.html"
    },
    2: {
        teoria: "teoria/teoria_combinatoria.pdf",
        enunciado: "practicas/practica2_enunciado.pdf",
        resolucion: "practicas/practica2_resuelta.pdf",
        explicacion: "practicas/explicacion_practica_2.html"
    },
    3: {
        teoria: "teoria/teoria_geometria.pdf",
        enunciado: "practicas/practica3_enunciado.pdf",
        resolucion: "practicas/practica3_resuelta.pdf",
        explicacion: "practicas/explicacion_practica_3.html"
    },
    4: {
        teoria: "teoria/teoria_geometria.pdf",
        enunciado: "practicas/practica4_enunciado.pdf",
        resolucion: "practicas/practica4_resuelta.pdf",
        explicacion: "practicas/explicacion_practica_4.html"
    },
    5: {
        teoria: "teoria/teoria_geometria.pdf",
        enunciado: "practicas/practica5_enunciado.pdf",
        resolucion: "practicas/practica5_resuelta.pdf",
        explicacion: "practicas/explicacion_practica_5.html"
    }
};

function cambiarPractica() {
    const selector = document.getElementById('practicaSelector');
    const idPractica = selector.value;

    if (!idPractica) {
        document.getElementById('iframeTeoria').src = '';
        document.getElementById('iframeEnunciado').src = '';
        document.getElementById('iframeResolucion').src = '';
        document.getElementById('divExplicacion').innerHTML = '<p>Selecciona una práctica para ver su explicación detallada.</p>';
        return;
    }

    const practica = practicas[idPractica];

    // Cargar PDFs
    document.getElementById('iframeTeoria').src = practica.teoria;
    document.getElementById('iframeEnunciado').src = practica.enunciado;
    document.getElementById('iframeResolucion').src = practica.resolucion;

    // Cargar explicación HTML
    fetch(practica.explicacion)
        .then(response => {
            if (!response.ok) {
                throw new Error('Archivo no encontrado: ' + practica.explicacion);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('divExplicacion').innerHTML = html;
        })
        .catch(error => {
            console.error('Error al cargar la explicación:', error);
            document.getElementById('divExplicacion').innerHTML = `
                <p style="color: red; font-weight: bold;">Error al cargar la explicación.</p>
                <p>Detalles: ${error.message}</p>
            `;
        });
}

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
