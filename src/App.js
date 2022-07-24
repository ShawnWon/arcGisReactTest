
import './App.css';
import esriConfig from "@arcgis/core/config.js";
import { useEffect, useRef } from "react";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";

function App() {
  const mapRef = useRef(null);
  useEffect(() => {
    let stages = [{cent:[105.5658,30.5257],zoom: 12},{cent:[105.0629,31.9689],zoom:12},{cent:[106.4567,29.5716],zoom:12},{cent:[116.6455,39.9471],zoom:12},{cent:[103.7828,1.3132],zoom:12}];
    
    if (mapRef.current) {
      esriConfig.apiKey = "AAPK9f4997dd12e04ca19428cea69b81af6fUemNMSsFcH2rxXO4B7R30y7oTiSqw18gWV-0Cw2O2ZrJ6lkNH-RFAsutPYM8GERg";
      const map = new Map ({
        basemap: "arcgis-topographic"
      });


      const view = new SceneView({
          map: map,
          center: stages[0].cent, // Longitude, latitude
          zoom: stages[0].zoom, // Zoom level
          container: mapRef.current // Div element
        });



        /*const Marker1 = {
          type: "simple-marker",
          color: [226, 119, 40],
          outline: {
            color: [226, 119, 40],
            width: 10
          }
        }*/
        const Marker1 = {
          type: "picture-marker",
          url: "https://i.gifer.com/6pkB.gif",
          width:"128px",
          height:"128px"
        }

        const markerLayer = new GraphicsLayer();
        map.add(markerLayer);

        stages.forEach( s =>{
          const point = {
            type:"point",
            longitude:s.cent[0],
            latitude:s.cent[1]
          };
          const pointGraphic = new Graphic({
            geometry: point,
            symbol: Marker1
          })
          markerLayer.add(pointGraphic);
        });
        
        const elems = document.getElementsByClassName('desBtn');
        
        for(let i=0; i< elems.length; i++){
          elems[i].addEventListener("click", () => {
            view.goTo({
              center:stages[i].cent,
              zoom:stages[i].zoom

            },{
              duration: 5000
            });
  
          });

        }
        


    }

  }, []);

  return (
    <div className="App">
      <h1>My Journey</h1>
      <div className="btnContainer">
      <button className="desBtn">1979-1985</button><button className="desBtn">1985-1997</button><button className="desBtn">1997-2001</button><button className="desBtn">2001-2019</button><button className="desBtn">2019- Present</button>
      </div>
      <div ref={mapRef} style={{ width: "100%", height: "80vh", margin: "20px" }}></div>
    </div>
    
  );
}

export default App;
