document.addEventListener("DOMContentLoaded", function () {

    // ANIMACIONES AL HACER SCROLL

    const elementos = document.querySelectorAll(
        ".servicio, .servicios h2, .contacto, .testimonio, .testimonios h2, .galeria-item, .galeria h2"
    );

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });


    // SISTEMA DE RESERVA

    const servicioSelect = document.getElementById("servicio-select");
    const precioReserva = document.getElementById("precio-reserva");
    const fechaReserva = document.getElementById("fecha-reserva");
    const btnReserva = document.getElementById("btn-reserva");
    const horaReserva = document.getElementById("hora-reserva");


    // Fecha mínima: hoy

    const hoy = new Date().toISOString().split("T")[0];

    fechaReserva.min = hoy;


    // Mostrar precio al seleccionar servicio

    servicioSelect.addEventListener("change", function () {

        const precio = this.value;

        if (precio === "") {

            precioReserva.textContent =
                "Selecciona un servicio para ver el precio";

        } else {

            precioReserva.textContent =
                "Precio: $" + Number(precio).toLocaleString("es-CL");

        }

    });


    // BOTÓN CONTINUAR

    btnReserva.addEventListener("click", function () {

        const servicio =
            servicioSelect.options[servicioSelect.selectedIndex].text;

        const precio = servicioSelect.value;
        const fecha = fechaReserva.value;
        const hora = horaReserva.value;


        if (precio === "") {

            alert("Por favor, selecciona un servicio.");
            return;

        }


        if (fecha === "") {

            alert("Por favor, selecciona una fecha.");
            return;

        }


        if (hora === "") {

            alert("Por favor, selecciona una hora.");
            return;

        }


        const mensaje =
            "Hola, quiero reservar una hora.%0A%0A" +
            "Servicio: " + servicio + "%0A" +
            "Fecha: " + fecha + "%0A" +
            "Hora: " + hora + "%0A" +
            "Precio: $" +
            Number(precio).toLocaleString("es-CL");


        const numeroWhatsApp = "56912345678";


        const url =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            mensaje;


        window.open(url, "_blank");

    });

});