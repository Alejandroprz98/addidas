
import './App.css';
import addidas from './assets/img/ad negro.jpg';
import tenis from './assets/img/tenis.avif';
import tenis2 from './assets/img/tenis2.avif';
import tenis3 from './assets/img/tenis3.avif';
import tenis4 from './assets/img/tenis4.avif';
function App() {
  return (
  
    <div class="body"> 
    <header>
    <a href="https://www.adidas.mx/">
    < img class= "logo" src={addidas} />  
    </a>
</header>
<div class="pagina">
    <div class="producto-img">
        <div class="imagen"><img src={tenis} alt=""height="500px"  width="500px"/></div>
        <div class="imagen"><img src={tenis2} alt="" height="500px"  width="500px"/></div>
        <div class="imagen"><img src={tenis3} alt="" height="500px"  width="500px"/></div>
        <div class="imagen"><img src={tenis4} alt="" height="500px"  width="500px"/></div>
    </div>
    <div class="producto">
        <h2 class="producto-nombre">
            TENIS COURTBLOCK
        </h2>
        <h4 class="producto-precio">
            $1,199
        </h4>
        <div class="producto-detalle">
            <h3>
                TENIS PARA USO DIARIO QUE LLEVAN CUALQUIER LOOK A OTRO NIVEL
            </h3>
            <p>
                Enfréntate a tu día a día con estos tenis adidas.
            </p>
        </div>
        <div class="producto-compra">
            <a href="https://www.adidas.mx/tenis-courtblock/IF6466.html?cm_mmc=AdieSEM_Google_PLA-_-Shopping-_-IF6466-0004-_-dv%3AeCom-_-cn%3AAlways_On-_-pc%3AOriginals&cm_mmc=AdieSEM_Google_PLA-_-PMax-Originals-M-_--_--_-dv%3AeCom&cm_mmc1=MX&cm_mmc2=PLA-MultipleOriginals-Other-None-MX-LATAM-eCom-Paid_Search&cm_mmca1=MX&cm_mmca2=&gad_source=1&gclid=CjwKCAjw_e2wBhAEEiwAyFFFoy7yGZNrlIPThu1TLeKoSKgeHcR7RackeJae08Z8hRMtRAfwPTbxbRoCKjQQAvD_BwE&gclsrc=aw.ds">Comprar</a>
        </div>
    </div>
</div>
<footer>
        <nav class="lista">
            <ul class="lista-contenido">
                <li class="contenido">Configuración de las cookies</li>
                <li class="contenido">Nuestros Datos</li>
                <li class="contenido">Términos y Condiciones</li>
                <li class="contenido">Uso del Sitio</li>
                <li class="contenido">Términos y Condiciones Promociones</li>
                <li class="contenido">Privacidad de Videovigilancia</li>
            </ul>
        </nav>
    </footer>
    </div > 
    

  );
}


export default App;

