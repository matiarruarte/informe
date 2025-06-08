document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('[data-province]');

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const provinceId = link.getAttribute('data-province');
      
      if (window.simplemaps_countrymap && typeof simplemaps_countrymap.state_zoom === 'function') {
        simplemaps_countrymap.state_zoom(provinceId);
      } else {
        console.warn("El mapa no está listo o no tiene la función state_zoom.");
      }
    });
  });
  

  // Opcional: si tenés un botón "volver" en el mapa, podés resetear el navbar o menú aquí
  simplemaps_countrymap.hooks.back = () => {
    navLinks.forEach(link => link.classList.remove('active')); // o cualquier reset que necesites
  };
});

// Definimos la información por provincia
const infoProvincias = {
  'ARB': 'Buenos Aires: La provincia más poblada y con la capital federal.',
  'ARC': 'CABA: Ciudad Autónoma de Buenos Aires, capital del país.',
  'ARK': 'Catamarca: Provincia con hermosos paisajes montañosos.',
  // ... más provincias
};

// Mostramos la info en el div correspondiente
function mostrarInfoProvincia(id) {
  const infoDiv = document.getElementById('info-province');
  if (infoProvincias[id]) {
    infoDiv.innerHTML = `<h3>${infoProvincias[id]}</h3>`;
  } else {
    infoDiv.innerHTML = '<p>Información no disponible.</p>';
  }
}

// Cuando se hace click desde el navbar
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('[data-province]');
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const provinceId = this.dataset.province;
      mostrarInfoProvincia(provinceId);

      if (typeof simplemaps_countrymap !== "undefined" && simplemaps_countrymap.state_click) {
        simplemaps_countrymap.state_click(provinceId);
      }
    });
  });
});

// Cuando se hace click desde el mapa
simplemaps_countrymap.hooks.click_state = function(id) {
  mostrarInfoProvincia(id);
};

// Esto es para que me detecte los clicks del mapa y muestre info en el div
simplemaps_countrymap.hooks.state_click = function(stateId) {
  // Hacemos zoom manual
  simplemaps_countrymap.state_zoom(stateId);

  // Mostramos la info
  const info = infoProvincias[stateId] || "Información no disponible para esta provincia.";
  const infoDiv = document.getElementById("info-province");
  if (infoDiv) {
    infoDiv.innerHTML = `<div class="card"><div class="card-body"><h5 class="card-title">${stateId}</h5><p class="card-text">${info}</p></div></div>`;
  }

  return false; // Cancelamos la acción por defecto (zoom automático del primer clic)
};

// Objeto con información por provincia
const infoProvincias = {
  ARB: "Buenos Aires: Provincia con la capital nacional.",
  ARC: "Catamarca: Región montañosa al noroeste del país.",
  ARS: "Santa Fe: Gran polo agroindustrial.",
  // ... Agregá el resto
};

// Hook personalizado: clic en una provincia del mapa
simplemaps_countrymap.hooks.state_click = function(stateId) {
  // Hacemos zoom
  simplemaps_countrymap.state_zoom(stateId);

  // Mostramos la información en el div
  const info = infoProvincias[stateId] || "Información no disponible.";
  const infoDiv = document.querySelector(".col-md-6.themed-grid-col");

  if (infoDiv) {
    infoDiv.innerHTML = `
      <div class="card mt-3">
        <div class="card-body">
          <h5 class="card-title">${stateId}</h5>
          <p class="card-text">${info}</p>
        </div>
      </div>
    `;
  }
};
