import React from 'react';
import routes from '../Routes';
import { Link } from 'react-router-dom';
import './main-page.css';

export default class Boxes extends React.Component {
  render() {
    return (
      <div className={""}>
        <div className="row pt-3">
          <div className="col-md-12 text-center">
            <h2 className={"h2 text-uppercase"}>
              <span className={"border-dark border-bottom text-dark"}>Mit kínálunk?</span>
            </h2>
          </div>
        </div>
        <div className="row mt-3">
          <div className={"col-md-4 mb-3"}>

            <div className={"card card-main-page"}>
              <div className={"card-header h5"}>
                Érdeklődés alapú tanrend
              </div>
              <div className={"card-body"}>
                Hisszük, hogy saját érdeklődés alapján lehet a legeredményesebben tanulni, ezért a feladatok (a technikai követelményeket leszámítva) szabadon formálhatóak a tanulók ízlései szerint.
              </div>
            </div>

          </div>
          <div className={"col-md-4 mb-3"}>
            
            <div className={"card card-main-page"}>
              <div className={"card-header h5"}>
                Gondolkodásmód
              </div>
              <div className={"card-body"}>
                A közhiedelemmel ellentétben a programozás általában nem igényel matematika tudást, viszont szükséges hozzá az erős logikai készség és egyfajta absztrakt gondolkodás. Ennek a fejlesztésében is segítenek képzéseink.
              </div>
            </div>

          </div>
          <div className={"col-md-4 mb-3"}>
            
            <div className={"card card-main-page"}>
              <div className={"card-header h5"}>
                Csapatmunka
              </div>
              <div className={"card-body"}>
                A szoftverfejlésztésben a programozási tudás mellett a legfontosabb a csapatmunkára való képesség. Azonban ez a legtöbb képzésnek nem része, nálunk viszont a csapatmunka szerves része a táborainknak.
              </div>
            </div>

          </div>
        </div>

        <div className="row pb-3">
          <div className={"col-md-12 text-center"}>
            <Link to={routes.courses} className={"btn btn-info btn-lg"}>Több info >></Link>
          </div>
        </div>
      </div>
    );
  }
}