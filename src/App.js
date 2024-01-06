import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
    "planes": {
        "deporte": {
            "saltar en paracaidas": {
                "location": "valencia / requena",
                "url": "https://www.yumping.com/paracaidismo/valencia",
                "price": "300$"
            },
            "rutas de montaña": {
                "ruinas íberas": {
                    "location": "valencia / moncada",
                    "url": "https://es.wikiloc.com/rutas-senderismo/massarrojos-poblat-iber-del-tos-pelat-les-vinyetes-moncada-50481411"
                },
                "ruta al mirador en paterna": {
                    "location": "valencia / paterna",
                    "url": "https://es.wikiloc.com/rutas-senderismo/paterna-a-mirador-despenaperros-82922994"
                }
            },
            "rutas en bici": {
                "puertos albufera": {
                    "url": "https://es.wikiloc.com/rutas-mountain-bike/8-puertos-de-la-albufera-mirador-y-laguna-de-pujol-desde-pinedo-20231974"
                },
                "mirador de mireia": {
                    "url": "https://es.wikiloc.com/rutas-mountain-bike/al-mirador-de-mireia-rebalsadors-desde-valencia-21222230"
                },
                "clot de les tortugues": {
                    "url": "https://es.wikiloc.com/rutas-mountain-bike/clot-de-les-tortugues-desde-valencia-v2-7828386"
                },
                "fuente del jarro": {
                    "url": "https://es.wikiloc.com/rutas-mountain-bike/otra-de-vallesa-y-variantes-hasta-leliana-vualta-por-via-fluvial-y-fuente-del-jarro-con-final-km-0-5933682"
                }
            },
            "camino de santiago": {
                "camino del levante": {
                    "origen": "valencia",
                    "destino": "albacete",
                    "url": "https://es.wikiloc.com/rutas-senderismo/camino-de-santiago-de-levante-tramo-completo-valencia-albacete-58650103"
                },
                "camino del norte": {},
                "camino frances": {},
                "camino primitivo": {}
            },
            "crossfit": {}
        },
        "cultura": {
            "cursos de pintura": {
                "url": "https://www.pintartevalencia.com/"
            },
            "workshop cerámica": {
                "url": "https://maps.app.goo.gl/FEJSSecwRqPM5Gy89"
            },
            "cursos de interpretacion": {
                "url": "https://maps.app.goo.gl/tzNFRUL4HueADzov7"
            },
            "aprender un idioma": {
                "EOI": {
                    "url": "https://portal.edu.gva.es/eoivalencia/es/escuela/admision-y-matricula/"
                }
            },
            "conciertos / festivales": {
                "festival de les arts": {
                    "location": "valencia",
                    "url": "https://festivaldelesarts.com/abonos/",
                    "price": "60$"
                },
                "coldplay": {},
                "zahara": {},
                "the weekend": {},
                "sen senra": {},
                "love of lesbian": {},
                "leiva": {},
                "nathy peluso": {},
                "nicki nicole": {},
                "la la love you": {},
                "amaia": {}
            },
            "ir al teatro": {
                "teatro olympia": {
                    "url": "https://maps.app.goo.gl/sdQA2GuTbhNGEo4x8"
                },
                "teatre talia": {
                    "url": "https://maps.app.goo.gl/Ba5HbUB1qmBSxCCd7"
                },
                "teatro carolina": {
                    "url": "https://maps.app.goo.gl/tzNFRUL4HueADzov7"
                }
            },
            "exposiciones de arte": {
                "sala russafa": {
                    "url": "https://maps.app.goo.gl/6aPsfHbggRoy6mJh8"
                },
                "centro de cultura del carmen": {
                    "url": "https://maps.app.goo.gl/Vy7ZeLLK7rMvxPVg9"
                },
                "la lonja": {"url": "https://maps.app.goo.gl/vid6puv3Do4fn5mz5"},
                "museo nacional de ceramica": {"url": "https://maps.app.goo.gl/y1BJcUEJcpGstJq96"},
                "museo de la seda": {"url": "https://maps.app.goo.gl/gBf4kBQZe353dToh9"},
                "museo de la modernidad": {"url": "https://maps.app.goo.gl/NSExGB9SJbZHG4Ex9"},
                "bombas gens centro de arte": {"url": "https://maps.app.goo.gl/oB5hrPxdbzbMc8Cc7"}
            },
            "ir a la opera": {
                "rusaka": {"url": "https://www.lesarts.com/es/rusalka/"},
                "santero y los muchachos": {"url": "https://www.lesarts.com/es/santero-y-los-muchachos/"}
            }
        },
        "ocio": {
            "tardeo por ruzafa": {
                "mercabanyal": {
                    "url": "https://maps.app.goo.gl/2KBGod35npmTWaVz8"
                },
                "el hachazo": {
                    "url": "https://maps.app.goo.gl/8A9dKhKRsbjzn7WW7"
                },
                "cerveza artesanal": {
                    "url": ["https://maps.app.goo.gl/HKHGB2k8DVZYiH148", "https://maps.app.goo.gl/4sx8bf5ccuYRQDPMA"]
                },
                "cocteles con monologos": {
                    "url": "https://maps.app.goo.gl/TZf1W4QMLPsowLSn9"
                },
                "cocteles con musica en directo": {
                    "url": "https://maps.app.goo.gl/TWPPjHcSxAagp4Zt5"
                }
            },
            "escape rooms": {
                "the room scape": {"url": "https://www.tripadvisor.com/Attraction_Review-g187529-d11678016-Reviews-The_Room_Escape-Valencia_Province_of_Valencia_Valencian_Community.html"},
                "claustrophobia": {"url": "https://www.tripadvisor.com/Attraction_Review-g187529-d13796056-Reviews-Claustrophobia_Escape_Rooms-Valencia_Province_of_Valencia_Valencian_Community.html"},
                "coco": {"url": "https://www.tripadvisor.com/Attraction_Review-g187529-d12958101-Reviews-Coco_Room_Valencia_Room_Escape-Valencia_Province_of_Valencia_Valencian_Community.html"},
                "cronos": {"url": "https://www.tripadvisor.com/Attraction_Review-g187529-d8761515-Reviews-Cronos_Valencia-Valencia_Province_of_Valencia_Valencian_Community.html"}
            },
            "salir de fiesta": {
                "comitte": {
                    "url": "https://maps.app.goo.gl/UxEf6RjRoTqUiYRM9"
                },
                "mya": {
                    "url": "https://maps.app.goo.gl/698QeprE1EQaohVh6"
                },
                "spook": {
                    "url": "https://maps.app.goo.gl/36Nb53ycZ2YWuyed6"
                },
                "deseo": {
                    "url": "https://maps.app.goo.gl/NVuvKHybmkmsBYqH8"
                },
                "akuarela": {"url": ""}
            }
        },
        "citas": {
            "ir a calas": {},
            "tener citas románticas": {
                "museo de bellas artes": {
                    "url": "https://maps.app.goo.gl/ZWBcHXEJxmZYjYZu8"
                },
                "la albufera": {"url": "https://maps.app.goo.gl/7vk3Q9cft8YyZy6j6"},
                "jardin de las hesperides": {"url": "https://maps.app.goo.gl/pwsowHrhabtD8pJ26"}
            }
        },
        "viajar": {
            "ir a la nieve": {
                "formigal": {"url": ""},
                "jaca": {"url": ""},
                "grand valira": {"url": ""},
                "sierra nevada": {"url": ""}
            },
            "viaje improvisado": {}
        }
    }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;