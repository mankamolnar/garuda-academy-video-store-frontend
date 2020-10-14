import React from 'react';
import timer from '../common/timer.png';
import user from '../common/user.png';
import group from '../common/group.png';
import tools from '../common/tools.png';
import book from '../common/book.png';
import price from '../common/price.png';
import calendar from '../common/calendar.png';
import './courses.css';

export default class CoursesList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={"row mb-3"}>
          <div className={"col-md-12 text-center mt-3"} id="hot-clicks">
            <hr />
            <button className={"btn btn-info m-1"} onClick={() => document.getElementById("scratch-card").scrollIntoView()}>Scratch</button>
            <button className={"btn btn-info m-1"} onClick={() => document.getElementById("python-card").scrollIntoView()}>Python</button>
            <button className={"btn btn-info m-1"} onClick={() => document.getElementById("html-card").scrollIntoView()}>HTML</button>
            <button className={"btn btn-info m-1"} onClick={() => document.getElementById("javascript-card").scrollIntoView()}>JavaScript</button>
            <hr />
          </div>
        </div>
        <div className={"row"}>
          <div className={"col-1"}></div>
          <div className={"col-md-5"}>

            <div className={"card"} id={"scratch-card"}>
              <div className={"card-header h5"}>
                Scratch tanfolyam (kezdő)
              </div>
              <div className={"card-body"}>
                <iframe title={"Scratch tábor - 14. nap"} width="100%" height="200" src="https://www.youtube.com/embed/6fIkB2F8N38" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 2 hét, 10 alkalom, alkalmanként 4 óra
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Képzés időpontok:</span> Június 16, Június 30, Július 14, Július 28, Augusztus 11
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 9-14 éveseknek ajánlott
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 4 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs.
                </p>
                <p>
                  <img src={book} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span> A képzés során a "Scratch" nevű program használatát sajátítjuk el. Ennek alkalmazásával még konkrét programkód írása nélkül, "logikai legókockákból" tudunk összerakni saját programokat, játékokat. Ezek a legókockák teljes mértékben fedésben vannak a valós programozási nyelvekben használt parancsokkal, így fejlődik a tanulók logikai készsége, megtanulnak "számítógépként gondolkozni" és gyakorolják a csapatban való munkát. A képzés végére a tanulók képessé vállnak saját játékok / programok elkészítésére.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 35 000 Ft (Június 30-i képzésünkre csak 25 000 Ft)
                </p>
                <p className={"sign-up-button"}>
                  <a href="https://forms.gle/A21bucdshRNa8vz46" className={"btn btn-success "} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
                </p>
              </div>
            </div>

          </div>

          <div className={"col-md-5"}>

            <div className={"card"} id={"python-card"}>
              <div className={"card-header h5"}>
                Python alapképzés (kezdő)
              </div>
              <div className={"card-body"}>
                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 4 hét, heti 1 alkalom, alkalmanént 4 óra.
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Képzés időpontok:</span> Július 1
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 14- éves kortól
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 4 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs.
                </p>
                <p>
                  <img src={book} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span> A képzés során a tanulók a Python programozási nyelvvel ismerkednek meg. A képzés célja, hogy egy olyan alapot kapjanak a diákok amivel a későbbiekben már el tudnak kezdeni specializálódni webfejlesztés vagy asztali alkalmazások irányba. A képzés végére a diákok képessé vállnak terminálban/konzolban futó szöveges alkalmazások készítésére.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 19 000 Ft
                </p>
                <p className={"sign-up-button"}>
                  <a className={"btn btn-success"} href={"https://forms.gle/2nCGuz3v1SPDsRXF9"} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
                </p>
              </div>
            </div>

          </div>
          <div className={"col-1"}></div>
        </div>

        <div className={"row mb-3"}>
          <div className={"col-1"}></div>
          <div className={"col-md-5 mt-3"}>

            <div className={"card"}>
              <div className={"card-header h5"}>
                Python PRO képzés (haladó)
              </div>
              <div className={"card-body"}>
                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 4 hét, heti 1 alkalom, alkalmanént 4 óra.
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Képzés időpontok:</span> Augusztus 14
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 14- éves kortól ajánlott
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 4 fő, 2 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> A képzés elvégzéséhez szükséges a Python alapképzés elvégzése (vagy releváns Python tapasztalat), valamint a HTML kurzus elvégzése (vagy releváns HTML tapasztalat), továbbá számítógép és stabil internet kapcsolat.
                </p>
                <p>
                  <img src={book} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span> A képzés során a tanulók a Django keretrendszerrel ismerkednek meg. Ennek segítségével képessé vállnak adatbázissal rendelkező komplex webalkalmazások (pl.: webshop, neveldék stb.) létrehozására.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 19 000 Ft
                </p>
                <p className={"sign-up-button"}>
                  <a href="https://forms.gle/g9JfZU46cjWmRTWQ8" className={"btn btn-success"} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
                </p>
              </div>
            </div>

          </div>

          <div className={"col-md-5 mt-3"}>
            <div className={"card"}>
              <div className={"card-header h5"}>
                Python + Python PRO + HTML kombinált csomag
              </div>
              <div className={"card-body"}>
                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 10 hét, 12 alkalom, alkalmanként 4 óra
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Képzés időpontok:</span> Python: Július 1, HTML: Július 23, Python PRO: Augusztus 14
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 14- éves kortól ajánlott
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 4 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 45 000 Ft
                </p>
                <p className={"sign-up-button"}>
                  <a href="https://forms.gle/G5KXUqYtnY95asSa8" className={"btn btn-success"} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
                </p>
              </div>
            </div>
          </div>
          <div className={"col-1"}></div>
        </div>

        <div className={"row mb-3"}>
          <div className={"col-1"}></div>
          <div className={"col-md-5 mt-3"}>

            <div className={"card"} id="html-card">
              <div className={"card-header h5"}>
                HTML Képzés - Webfejlesztés
              </div>
              <div className={"card-body"}>
                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 4 hét, 4 alkalom, alkalmanként 4 óra
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Képzés időpontok:</span> Július 23
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 14- éves kortól ajánlott
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 4 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs.
                </p>
                <p>
                  <img src={book} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span> A képzés során a HTML és CSS programozási nyelvet valamint a Bootstrap keretrendszert sajátítjuk el. A kurzus végére a diákok képessé vállnak saját reszponzív (mobilon és asztali eszközön is megjelenő) weboldalak létrehozására.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 19 000 Ft
                </p>
                <p className={"sign-up-button"}>
                  <a href="https://forms.gle/YNELQpZrWohVLUZKA" className={"btn btn-success"} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
                </p>
              </div>
            </div>

          </div>

          <div className={"col-md-5 mt-3"}>

          <div className={"card"} id="javascript-card">
              <div className={"card-header h5"}>
                Javascript alapképzés (Kezdő)
              </div>
              <div className={"card-body"}>
                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 4 hét, 4 alkalom, alkalmanként 4 óra
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Képzés időpontok:</span> Július 6
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 14- éves kortól ajánlott
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 4 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> Releváns HTML tudás szükséges, valamint számítógép és stabil internet kapcsolat.
                </p>
                <p>
                  <img src={book} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span> A képzés során a JavaScript programozási nyelvet tanuljuk meg amellyel képessé válunk böngészőben futó interaktív programok / játékok létrehozására. Megtanulunk adatokat lekérni külső szerverekből (API-kból) és azokat megjeleníteni a képernyőn. A tanuló a képzés során képessé válik a React tanfolyam elvégzésére.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 19 000 Ft
                </p>
                <p className={"sign-up-button"}>
                  <a href="https://forms.gle/Ysv6K7CMeZXDedBDA" className={"btn btn-success"} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
                </p>
              </div>
            </div>

          </div>
          <div className={"col-1"}></div>
        </div>

        
      </React.Fragment>
    );
  }
}