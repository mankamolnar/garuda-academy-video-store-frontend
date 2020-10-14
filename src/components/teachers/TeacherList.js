import React from 'react';
import mano from './mano.jpg';
import ge from './ge.png';
import ifrc from './ifrc.png';
import capgemini from './capgemini.png';
import './teachers.css';

export default class TeacherList extends React.Component {
  render() {
    return (
      <div className="row mt-3">
        <div className={"col-1"}></div>
        <div className={'col-10'}>
          <div className={"card"}>
            <div className={"card-header h5"}>
              Molnár Márk Manó
            </div>
            <div className={"card-body"}>
              <img src={mano} alt="Molnár Márk Manó" className={"teacher_pic float-left mr-3"} />
              Üdvözlöm! Molnár Márk Manó vagyok! Kiskorom óta szerelmes vagyok az informatikába. Tisztán emlékszem mikor 8 éves koromban (édesapám legnagyobb örömére) darabjaira szedtem a családi számítógépet, hogy megnézzem mi minden van benne. 14 éves korom óta aktívan foglalkozom programozással. A gimnázium elvégzése után egy állami képzésben próbáltam szoftverfejlesztést tanulni de sajnos ez után nem tudtam elhelyezkedni. 5 év kínkeserves munkája és egy privát iskola megjelenése kellett ahhoz, hogy magamra szedjem azt a tudás mennyiséget amivel már a szakma legnagyobb cégei is felfigyeltek rám. Az elvem és motivációm, hogy az én diákjaimnak ne kelljen ezt a szenvedést végigcsinálni és célirányosan azt tanítsam nekik amire az életben szükségük lesz.

              <h5 className={"h5 mt-3"}>Korábbi munkahelyeim:</h5>
              <img src={ge} alt='General Electric' className={'workplace_icons mr-3 mb-3'} />
              <img src={ifrc} alt="International Federation of Red Cross" className={'workplace_icons mr-3 mb-3'} />
              <img src={capgemini} alt="Capgemini" className={'workplace_icons_horizontal mr-3 mb-3'} />
            </div>
          </div>
        </div>
        <div className={'col-1'}></div>
      </div>
    );
  }
}
