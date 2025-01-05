document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".menu button");
    const tabs = document.querySelectorAll("[class^='pestaña-']");
  
    // Función para reiniciar todos los botones y pestañas
    function resetActiveElements() {
      buttons.forEach((button) => button.classList.remove("active"));
      tabs.forEach((tab) => tab.style.display = "none");
    }
    console.log("PAGINA CARGADA CON EXITO");
  
    // Función para activar una pestaña y botón
    function activateTab(buttonClass, tabClass) {
      resetActiveElements();
      document.querySelector(`.${buttonClass}`).classList.add("active");
      document.querySelector(`.${tabClass}`).style.display = "flex";
    }
  
    // Configurar botón "Inicio" como activo por defecto
    activateTab("inicio", "pestaña-inicio");
  
    // Asignar eventos a los botones
    document.querySelector(".inicio").addEventListener("click", () => {
      activateTab("inicio", "pestaña-inicio");
      console.log("pagina inicio cargada con exito");
    });
    document.querySelector(".programas").addEventListener("click", () => {
      activateTab("programas", "pestaña-programas");
      console.log("pagina programas cargada con exito");
    });
    document.querySelector(".juegos").addEventListener("click", () => {
      activateTab("juegos", "pestaña-juegos");
      console.log("pagina juegos cargada con exito");
    });
    document.querySelector(".androit").addEventListener("click", () => {
      activateTab("androit", "pestaña-androit");
      console.log("pagina androit cargada con exito");
    });
  });
  