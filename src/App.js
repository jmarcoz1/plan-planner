import './App.css';
// react components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material'
// my components
import Plans from './components/Plans';
import DayPlanner from './pages/DayPlanner';
import AddPlans from './pages/AddPlans';
import ViewPlans from './pages/ViewPlans';
import ButtonAppBar from './navigation/ButtonAppBar';

const App = () => {
  const planes = [
    {
      "deporte": {
        "saltar en paracaidas": {
          "url": "https://www.yumping.com/paracaidismo/valencia",
          "time-of-day": ["morning"]
        },
        "rutas de montaña": {
          "ruinas íberas": {
            "url": "https://es.wikiloc.com/rutas-senderismo/massarrojos-poblat-iber-del-tos-pelat-les-vinyetes-moncada-50481411",
            "time-of-day": ["morning"]
          },
          "mirador en paterna": {
            "url": "https://es.wikiloc.com/rutas-senderismo/paterna-a-mirador-despenaperros-82922994",
            "time-of-day": ["morning", "afternoon"]
          }
        },
        "rutas en bici": {
          "puertos albufera": {
            "url": "https://es.wikiloc.com/rutas-mountain-bike/8-puertos-de-la-albufera-mirador-y-laguna-de-pujol-desde-pinedo-20231974",
            "time-of-day": ["morning"]
          },
          "mirador de mireia": {
            "url": "https://es.wikiloc.com/rutas-mountain-bike/al-mirador-de-mireia-rebalsadors-desde-valencia-21222230",
            "time-of-day": ["morning"]
          },
          "clot de les tortugues": {
            "url": "https://es.wikiloc.com/rutas-mountain-bike/clot-de-les-tortugues-desde-valencia-v2-7828386",
            "time-of-day": ["morning"]
          },
          "fuente del jarro": {
            "url": "https://es.wikiloc.com/rutas-mountain-bike/otra-de-vallesa-y-variantes-hasta-leliana-vualta-por-via-fluvial-y-fuente-del-jarro-con-final-km-0-5933682",
            "time-of-day": ["morning"]
          }
        },
        "camino de santiago": {
          "camino del levante": {
            "url": "https://es.wikiloc.com/rutas-senderismo/camino-de-santiago-de-levante-tramo-completo-valencia-albacete-58650103",
          },
          "camino del norte": {},
          "camino frances": {},
          "camino primitivo": {}
        },
        "crossfit": {}
      }
    },
    {
      "cultura": {
        "cursos de pintura": {
          "url": "https://www.pintartevalencia.com/",
          "time-of-day": ["morning", "afternoon"]
        },
        "workshop cerámica": {
          "url": "https://maps.app.goo.gl/FEJSSecwRqPM5Gy89",
          "time-of-day": ["morning", "afternoon"]
        },
        "cursos de interpretacion": {
          "url": "https://maps.app.goo.gl/tzNFRUL4HueADzov7",
          "time-of-day": ["morning", "afternoon"]
        },
        "aprender un idioma": {
          "EOI": {
            "url": "https://portal.edu.gva.es/eoivalencia/es/escuela/admision-y-matricula/",
            "time-of-day": ["afternoon"]
          }
        },
        "conciertos / festivales": {
          "festival de les arts": {
            "url": "https://festivaldelesarts.com/abonos/",
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
            "url": "https://maps.app.goo.gl/sdQA2GuTbhNGEo4x8",
            "time-of-day": ["afternoon", "night"]
          },
          "teatre talia": {
            "url": "https://maps.app.goo.gl/Ba5HbUB1qmBSxCCd7",
            "time-of-day": ["afternoon", "night"]
          },
          "teatro carolina": {
            "url": "https://maps.app.goo.gl/tzNFRUL4HueADzov7",
            "time-of-day": ["afternoon", "night"]
          }
        },
        "exposiciones de arte": {
          "sala russafa": {
            "url": "https://maps.app.goo.gl/6aPsfHbggRoy6mJh8",
            "time-of-day": ["morning", "afternoon", "night"]
          },
          "centro de cultura del carmen": {
            "url": "https://maps.app.goo.gl/Vy7ZeLLK7rMvxPVg9",
            "time-of-day": ["morning", "afternoon", "night"]
          },
          "la lonja": { "url": "https://maps.app.goo.gl/vid6puv3Do4fn5mz5", "time-of-day": ["morning", "afternoon", "night"] },
          "museo nacional de ceramica": { "url": "https://maps.app.goo.gl/y1BJcUEJcpGstJq96", "time-of-day": ["morning", "afternoon", "night"] },
          "museo de la seda": { "url": "https://maps.app.goo.gl/gBf4kBQZe353dToh9", "time-of-day": ["morning", "afternoon", "night"] },
          "museo de la modernidad": { "url": "https://maps.app.goo.gl/NSExGB9SJbZHG4Ex9", "time-of-day": ["morning", "afternoon", "night"] },
          "bombas gens centro de arte": { "url": "https://maps.app.goo.gl/oB5hrPxdbzbMc8Cc7", "time-of-day": ["morning", "afternoon", "night"] }
        },
        "ir a la opera": {
          "rusaka": { "url": "https://www.lesarts.com/es/rusalka/", "time-of-day": ["morning", "afternoon", "night"] },
          "santero y los muchachos": { "url": "https://www.lesarts.com/es/santero-y-los-muchachos/", "time-of-day": ["morning", "afternoon", "night"] }
        }
      }
    },
    {
      "ocio": {
        "tardeo": {
          "mercabanyal": {
            "url": "https://maps.app.goo.gl/2KBGod35npmTWaVz8",
            "time-of-day": ["afternoon"]
          },
          "el hachazo": {
            "url": "https://maps.app.goo.gl/8A9dKhKRsbjzn7WW7",
            "time-of-day": ["afternoon"]
          },
          "cerveza artesanal": {
            "url": "https://maps.app.goo.gl/HKHGB2k8DVZYiH148",
            "time-of-day": ["afternoon"]
          },
          "cocteles con monologos": {
            "url": "https://maps.app.goo.gl/TZf1W4QMLPsowLSn9",
            "time-of-day": ["afternoon"]
          },
          "cocteles con musica en directo": {
            "url": "https://maps.app.goo.gl/TWPPjHcSxAagp4Zt5",
            "time-of-day": ["afternoon"]
          }
        },
        "escape rooms": {
          "the room scape": { "url": "https://www.tripadvisor.com/Attraction_Review-g187529-d11678016-Reviews-The_Room_Escape-Valencia_Province_of_Valencia_Valencian_Community.html", "time-of-day": ["afternoon"] },
          "claustrophobia": { "url": "https://www.tripadvisor.com/Attraction_Review-g187529-d13796056-Reviews-Claustrophobia_Escape_Rooms-Valencia_Province_of_Valencia_Valencian_Community.html", "time-of-day": ["afternoon"] },
          "coco": { "url": "https://www.tripadvisor.com/Attraction_Review-g187529-d12958101-Reviews-Coco_Room_Valencia_Room_Escape-Valencia_Province_of_Valencia_Valencian_Community.html", "time-of-day": ["afternoon"] },
          "cronos": { "url": "https://www.tripadvisor.com/Attraction_Review-g187529-d8761515-Reviews-Cronos_Valencia-Valencia_Province_of_Valencia_Valencian_Community.html", "time-of-day": ["afternoon"] }
        },
        "salir de fiesta": {
          "comitte": {
            "url": "https://maps.app.goo.gl/UxEf6RjRoTqUiYRM9",
            "time-of-day": ["night"]
          },
          "mya": {
            "url": "https://maps.app.goo.gl/698QeprE1EQaohVh6",
            "time-of-day": ["night"]
          },
          "spook": {
            "url": "https://maps.app.goo.gl/36Nb53ycZ2YWuyed6",
            "time-of-day": ["night"]
          },
          "deseo": {
            "url": "https://maps.app.goo.gl/NVuvKHybmkmsBYqH8",
            "time-of-day": ["night"]
          },
          "akuarela": {
            "url": "https://maps.app.goo.gl/9h2o6CZsUmDVeKkf8",
            "time-of-day": ["night"]
          }
        }
      }
    },
    {
      "citas": {
        "ir a calas": {},
        "tener citas románticas": {
          "museo de bellas artes": {
            "url": "https://maps.app.goo.gl/ZWBcHXEJxmZYjYZu8",
            "time-of-day": ["afternoon"]
          },
          "la albufera": { "url": "https://maps.app.goo.gl/7vk3Q9cft8YyZy6j6", "time-of-day": ["afternoon"] },
          "jardin de las hesperides": { "url": "https://maps.app.goo.gl/pwsowHrhabtD8pJ26", "time-of-day": ["afternoon"] }
        }
      }
    },
    {
      "viajar": {
        "ir a la nieve": {
          "formigal": { "url": "" },
          "jaca": { "url": "" },
          "grand valira": { "url": "" },
          "sierra nevada": { "url": "" }
        },
        "viaje improvisado": {}
      }
    }
  ]

  const mainTheme = createTheme({
    palette: {
      blues: {
        main: '#5B9A8B',
        light: '#9EC8B9',
        dark: '#1B4242',
        contrastText: '#F7E987'
      },
    },
    typography: {
      // fontFamily: 'Fjalla One',
      // fontFamily: 'Space Grotesk',
      // fontFamily: 'Work+Sans',
      // fontFamily: 'Syne',
      fontFamily: 'DM+Sans',
    }
  })

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<DayPlanner planes={planes} />} />
          <Route path="/add-plan" element={<AddPlans />} />
          <Route path="/view-plans" element={<ViewPlans planes={planes} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
