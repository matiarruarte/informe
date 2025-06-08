var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0000",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 8,
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    ARA: {
      name: "Salta",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARB: {
      name: "Buenos Aires",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARC: {
      name: "Ciudad de Buenos Aires",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARD: {
      name: "San Luis",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARE: {
      name: "Entre Ríos",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARF: {
      name: "La Rioja",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARG: {
      name: "Santiago del Estero",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARH: {
      name: "Chaco",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARJ: {
      name: "San Juan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARK: {
      name: "Catamarca",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARL: {
      name: "La Pampa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARM: {
      name: "Mendoza",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARN: {
      name: "Misiones",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARP: {
      name: "Formosa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARQ: {
      name: "Neuquén",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARR: {
      name: "Río Negro",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARS: {
      name: "Santa Fe",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ART: {
      name: "Tucumán",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARU: {
      name: "Chubut",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARV: {
      name: "Tierra del Fuego",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARW: {
      name: "Corrientes",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARX: {
      name: "Córdoba",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARY: {
      name: "Jujuy",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    ARZ: {
      name: "Santa Cruz",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Buenos Aires",
      lat: "-34.606389",
      lng: "-58.435278"
    }
  },
  labels: {
    ARA: {
      name: "Salta",
      parent_id: "ARA"
    },
    ARB: {
      name: "Buenos Aires",
      parent_id: "ARB"
    },
    ARC: {
      name: "Ciudad de Buenos Aires",
      parent_id: "ARC"
    },
    ARD: {
      name: "San Luis",
      parent_id: "ARD"
    },
    ARE: {
      name: "Entre Ríos",
      parent_id: "ARE"
    },
    ARF: {
      name: "La Rioja",
      parent_id: "ARF"
    },
    ARG: {
      name: "Santiago del Estero",
      parent_id: "ARG"
    },
    ARH: {
      name: "Chaco",
      parent_id: "ARH"
    },
    ARJ: {
      name: "San Juan",
      parent_id: "ARJ"
    },
    ARK: {
      name: "Catamarca",
      parent_id: "ARK"
    },
    ARL: {
      name: "La Pampa",
      parent_id: "ARL"
    },
    ARM: {
      name: "Mendoza",
      parent_id: "ARM"
    },
    ARN: {
      name: "Misiones",
      parent_id: "ARN"
    },
    ARP: {
      name: "Formosa",
      parent_id: "ARP"
    },
    ARQ: {
      name: "Neuquén",
      parent_id: "ARQ"
    },
    ARR: {
      name: "Río Negro",
      parent_id: "ARR"
    },
    ARS: {
      name: "Santa Fe",
      parent_id: "ARS"
    },
    ART: {
      name: "Tucumán",
      parent_id: "ART"
    },
    ARU: {
      name: "Chubut",
      parent_id: "ARU"
    },
    ARV: {
      name: "Tierra del Fuego",
      parent_id: "ARV"
    },
    ARW: {
      name: "Corrientes",
      parent_id: "ARW"
    },
    ARX: {
      name: "Córdoba",
      parent_id: "ARX"
    },
    ARY: {
      name: "Jujuy",
      parent_id: "ARY"
    },
    ARZ: {
      name: "Santa Cruz",
      parent_id: "ARZ"
    }
  }
};