// document.getElementById("boton_datos_personales").addEventListener("click", function(){
//     document.getElementById("panel_datos_personales").style.display = "block";
//     document.getElementById("panel_trayectoria").style.display = "none";
//     document.getElementById("panel_titulos").style.display = "none";
// });

// document.getElementById("boton_trayectoria").addEventListener("click", function(){
//     document.getElementById("panel_datos_personales").style.display = "none";
//     document.getElementById("panel_trayectoria").style.display = "block";
//     document.getElementById("panel_titulos").style.display = "none";
// });

// document.getElementById("boton_titulos").addEventListener("click", function(){
//     document.getElementById("panel_datos_personales").style.display = "none";
//     document.getElementById("panel_trayectoria").style.display = "none";
//     document.getElementById("panel_titulos").style.display = "block";
// });

const { createApp } = Vue
createApp({
    data() {
        return {
            vista: "datos_personales",
        }
    }
}).mount('#app')