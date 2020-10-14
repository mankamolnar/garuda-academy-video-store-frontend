import React from 'react';
import routes from '../Routes';
import { Link } from 'react-router-dom';
import timer from '../common/timer.png';
import user from '../common/user.png';
import group from '../common/group.png';
import tools from '../common/tools.png';
import book from '../common/book.png';
import price from '../common/price.png';
import calendar from '../common/calendar.png';
import './courses.css';

export default class CampList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={"row"}>
          <div className={"col-1"}></div>
          <div className={"col-md-5 mt-3 mb-3"}>

            <div className={"card"}>
              <div className={"card-header h5"}>
                Scratch tábor (kezdő)
              </div>
              <div className={"card-body"}>
                <iframe title={"Scratch tábor - 14. nap"} width="100%" height="200" src="https://www.youtube.com/embed/6fIkB2F8N38" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 2 hét, 10 alkalom, alkalmanként 4 óra
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tábor időpontok:</span> Június 16, Június 30, Július 14, Július 28, Augusztus 11
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 9-14 éveseknek ajánlott
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 8 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs.
                </p>
                <p>
                  <img src={book} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span> A tábor során a "Scratch" nevű program használatát sajátítjuk el. Ennek alkalmazásával még konkrét programkód írása nélkül, "logikai legókockákból" tudunk összerakni saját programokat, játékokat. Ezek a legókockák teljes mértékben fedésben vannak a valós programozási nyelvekben használt parancsokkal, így fejlődik a tanulók logikai készsége, megtanulnak "számítógépként gondolkozni" és gyakorolják a csapatban való munkát. A képzés végére a tanulók képessé vállnak saját játékok / programok elkészítésére.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 35 000 Ft
                </p>
                <p className={"sign-up-button"}>
                  <a href="https://forms.gle/A21bucdshRNa8vz46" className={"btn btn-success "} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
                </p>
              </div>
            </div>

          </div>

          <div className={"col-md-5 mt-3"}>
            
            <div className={"card"}>
              <div className={"card-header h5"}>
                Scratch tábor EXPRESSZ (kezdő)
              </div>
              <div className={"card-body"}>
                <iframe title={"Scratch tábor - 3. nap"} width="100%" height="200" src="https://www.youtube.com/embed/ucDT8c4MyB4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                {/*<iframe title="Way of the garuda game" allowTransparency="true" width="100%" height="300" src="https://scratch.mit.edu/projects/123963682/embed" frameBorder="0" scrolling="no" allowFullScreen></iframe>*/}

                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 1 hét, 5 alkalom, alkalmanként 4 óra
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tábor időpontok:</span> Június 22
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 9-14 éveseknek ajánlott
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 8 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> Számítógép és stabil internet kapcsolat. Tudásbeli előzetes követelmény nincs.
                </p>
                <p>
                  <img src={book} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span> A tábor során a "Scratch" nevű program használatát sajátítjuk el. Ennek alkalmazásával még konkrét programkód írása nélkül, "logikai legókockákból" tudunk összerakni saját programokat, játékokat. Ezek a legókockák teljes mértékben fedésben vannak a valós programozási nyelvekben használt parancsokkal, így fejlődik a tanulók logikai készsége, megtanulnak "számítógépként gondolkozni" és gyakorolják a csapatban való munkát. A képzés végére a tanulók képessé vállnak saját játékok / programok elkészítésére.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 19 000 Ft
                </p>
                <p className={"sign-up-button"}>
                  <a href="https://forms.gle/a9oKa7KQ1Pv4wzU87" className={"btn btn-success "} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
                </p>
              </div>
            </div>

          </div>
          <div className={"col-1"}></div>
        </div>

        <div className="row mt-3 mb-3">
          <div className={"col-md-12 text-center"}>
            <Link to={routes.courses} className={"btn btn-info btn-lg"}>Tovább a képzéseink oldalra >></Link>
          </div>
        </div>

        <div className={"row"}>
          <div className={"col-1"}></div>
          <div className={"col-md-5 mt-3"}>

            

          </div>

          <div className={"col-md-5 mt-3"}>

            <div className={"card"} id="react-card">
              <div className={"card-header h5"}>
                React képzés (Haladó)
              </div>
              <div className={"card-body"}>
                <p>
                  <img src={timer} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Időtartam:</span> 4 hét, 4 alkalom, alkalmanként 4 óra
                </p>
                <p>
                  <img src={calendar} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Képzés időpontok:</span> Július 28
                </p>
                <p>
                  <img src={user} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Korosztály:</span> 14- éves kortól ajánlott
                </p>
                <p>
                  <img src={group} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Csoport létszám:</span> Maximum 8 fő, 2-4 fős csapatokra osztva.
                </p>
                <p>
                  <img src={tools} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Követelmény:</span> Releváns HTML és JavaScript tudás. Számítógép és stabil internet kapcsolat.
                </p>
                <p>
                  <img src={book} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Tematika:</span> A képzés során a React keretrendszert sajátítjuk el, amellyel megtanulunk nagy teljesítményű kliens oldali alkalmazásokat és weboldalakat írni.
                </p>
                <p>
                  <img src={price} alt="Napi óraszám" className={'box_icon'} />
                  <span className={'description_title'}>Ár:</span> 19 000 Ft
                </p>
                <p className={"sign-up-button"}>
                  <a href="https://forms.gle/KE3xcH8Y6VKugXo99" className={"btn btn-success"} target="_blank" rel="noopener noreferrer">Jelentkezési lap</a>
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