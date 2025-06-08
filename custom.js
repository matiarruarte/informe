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
      
      mostrarInfoProvincia(provinceId);
    });
  });
  
  // Opcional: reset de estados activos si tienes clases 'active'
  simplemaps_countrymap.hooks.back = () => {
    navLinks.forEach(link => link.classList.remove('active'));
    const infoDiv = document.getElementById("info-province");
    if (infoDiv) infoDiv.innerHTML = "";
  };
});

// Diccionario con código de provincia y nombre oficial
const nombreProvincias = {
  'ARA': 'Salta',
  'ARB': 'Buenos Aires',
  'ARC': 'Ciudad de Buenos Aires',
  'ARD': 'San Luis',
  'ARE': 'Entre Ríos',
  'ARF': 'La Rioja',
  'ARG': 'Santiago del Estero',
  'ARH': 'Chaco',
  'ARJ': 'San Juan',
  'ARK': 'Catamarca',
  'ARL': 'La Pampa',
  'ARM': 'Mendoza',
  'ARN': 'Misiones',
  'ARP': 'Formosa',
  'ARQ': 'Neuquén',
  'ARR': 'Río Negro',
  'ARS': 'Santa Fe',
  'ART': 'Tucumán',
  'ARU': 'Chubut',
  'ARV': 'Tierra del Fuego',
  'ARW': 'Corrientes',
  'ARX': 'Córdoba',
  'ARY': 'Jujuy',
  'ARZ': 'Santa Cruz'
};


// Información extendida para mostrar en el div
const infoProvincias = {
  'ARA': `
    <div class="accordion" id="accordionProvinciasARA">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingARA">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseARA">
            Salta
          </button>
        </h2>
        <div id="collapseARA" class="accordion-collapse collapse show" data-bs-parent="#accordionProvinciasARA">
          <div class="accordion-body">
            Información principal de Salta.
            <div class="accordion mt-3" id="subAccordionARA">
              <div class="accordion-item">
                <h2 class="accordion-header" id="subHeadingARA1">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subCollapseARA1">
                    Historia
                  </button>
                </h2>
                <div id="subCollapseARA1" class="accordion-collapse collapse" data-bs-parent="#subAccordionARA">
                  <div class="accordion-body">
                    Detalles históricos de Salta.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  'ARB': `
    <div class="accordion" id="accordionProvinciasARB">
    <!-- Acordeón 1 -->


<div class="accordion-item">
  <h2 class="accordion-header" id="headingARB3">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseARB3" aria-expanded="false" aria-controls="collapseARB3">
      Efectores
    </button>
  </h2>
  <div id="collapseARB3" class="accordion-collapse collapse">
    <div class="accordion-body">
      Haga click en uno de ellos para desplegar la información.
      <div class="accordion mt-3" id="subAccordionARB3">
        <div class="accordion-item">
          <h2 class="accordion-header" id="subHeadingARB3-1">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subCollapseARB3-1" aria-expanded="false" aria-controls="subCollapseARB3-1">
              Hospital Interzonal de Agudos y Crónicos Dr. Alejandro Kron La Plata 
            </button>
          </h2>
          <div id="subCollapseARB3-1" class="accordion-collapse collapse">
            <div class="accordion-body">
              Producción agroindustrial y gran actividad portuaria.
            </div>
          </div>
        </div>
      </div>

  <!-- NUEVO HOSPITAL -->

              <div class="accordion-item">
          <h2 class="accordion-header" id="subHeadingARB3-1">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subCollapseARB3-1" aria-expanded="false" aria-controls="subCollapseARB3-1">
              Clínica 25 de Mayo 
            </button>
          </h2>
          <div id="subCollapseARB3-1" class="accordion-collapse collapse">
            <div class="accordion-body">
              Producción agroindustrial y gran actividad portuaria.
            </div>
          </div>
        </div>
          <!-- NUEVO HOSPITAL -->

              <div class="accordion-item">
          <h2 class="accordion-header" id="subHeadingARB3-1">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subCollapseARB3-1" aria-expanded="false" aria-controls="subCollapseARB3-1">
              Hospital San Martín 
            </button>
          </h2>
          <div id="subCollapseARB3-1" class="accordion-collapse collapse">
            <div class="accordion-body">
              Producción agroindustrial y gran actividad portuaria.
            </div>
          </div>
        </div>

  <!-- FIN HOSPITALES HOSPITAL -->

      </div>
      </div>
    </div>
  </div>
</div>



    </div>
  `,









  'ARC': `
    <div class="accordion" id="accordionProvinciasARC">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingARC">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseARC">
            Efectores
          </button>
        </h2>
        <div id="collapseARC" class="accordion-collapse collapse" data-bs-parent="#accordionProvinciasARC">
          <div class="accordion-body">
            Capital del país y centro político, financiero y cultural.
            <div class="accordion mt-3" id="subAccordionARC">
              <div class="accordion-item">
                <h2 class="accordion-header" id="subHeadingARC1">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#subCollapseARC1">
                    Cultura
                  </button>
                </h2>
                <div id="subCollapseARC1" class="accordion-collapse collapse" data-bs-parent="#subAccordionARC">
                  <div class="accordion-body">
                    Museos, teatros, librerías y oferta cultural vibrante.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  'ARD': 'San Luis: Paisajes serranos y atractivos turísticos.',
  'ARE': 'Entre Ríos: Provincia de lagunas, ríos y termas.',
  'ARF': 'La Rioja: Conocida por sus vinos y sitios arqueológicos.',
  'ARG': 'Santiago del Estero: Cuna del folclore argentino.',
  'ARH': 'Chaco: Región con gran diversidad natural y cultural.',
  'ARJ': 'San Juan: Región árida famosa por su producción de vinos.',
  'ARK': 'Catamarca: Provincia con hermosos paisajes montañosos y rica cultura.',
  'ARL': 'La Pampa: Extensas llanuras y fuerte producción agrícola.',
  'ARM': 'Mendoza: Centro vitivinícola y puerta a la cordillera de los Andes.',
  'ARN': 'Misiones: Hogar de las Cataratas del Iguazú y selvas subtropicales.',
  'ARP': 'Formosa: Ubicada en el norte, con importante diversidad natural.',
  'ARQ': 'Neuquén: Zona patagónica con lagos y montañas.',
  'ARR': 'Río Negro: Patagonia con gran diversidad natural y playas.',
  'ARS': 'Santa Cruz: Patagonia con glaciares y grandes estancias.',
  'ART': 'Tucumán: La provincia más pequeña, conocida por su historia y caña de azúcar.',
  'ARU': 'Chubut: Tierra de bosques, glaciares y la costa atlántica.',
  'ARV': 'Santa Fe: Región productiva y con importantes centros urbanos.',
  'ARW': 'Corrientes: Región de grandes ríos y tradiciones folklóricas.',
  'ARX': 'Córdoba: Conocida por su arquitectura colonial y vida universitaria.',
  'ARY': 'Jujuy: Región andina con riqueza arqueológica y paisajes únicos.',
  'ARZ': 'Tierra del Fuego: El punto más austral de Argentina, con naturaleza única.'
};



// Función para mostrar info en el div con id 'info-province'
function mostrarInfoProvincia(id) {
  const infoDiv = document.getElementById('info-province');
  if (!infoDiv) return;

  if (infoProvincias[id]) {
    infoDiv.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${nombreProvincias[id]}</h5>
          <p class="card-text">${infoProvincias[id]}</p>
        </div>
      </div>`;
  } else {
    infoDiv.innerHTML = '<p>Información no disponible para esta provincia.</p>';
  }
}

// Hook para que al hacer click en el mapa haga zoom y muestre info
if (window.simplemaps_countrymap && simplemaps_countrymap.hooks) {
  simplemaps_countrymap.hooks.click_state = function(stateId) {
    if (typeof simplemaps_countrymap.state_zoom === 'function') {
      simplemaps_countrymap.state_zoom(stateId);
    }
    mostrarInfoProvincia(stateId);
  };
}

