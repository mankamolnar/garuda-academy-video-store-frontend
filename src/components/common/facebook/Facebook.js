import React from 'react';
import facebook from '../../common/menu/facebook-big.png';
import messenger from '../../common/menu/messenger-big.png';
import viber from '../../common/menu/viber-big.png';
import whatsapp from '../../common/menu/whatsapp-big.png';
import line from '../../common/menu/line-big.png';

export default class Facebook extends React.Component {
  render() {
    return (
      <div className={"row bg-dark"}>
        <div className={"col-1"}></div>
        <div className={"col-md-10 mt-3 mb-3 text-center"}>
          <h2 className="h2 text-uppercase mb-3"><span className="border-light border-bottom text-light">Vedd fel velünk a kapcsolatot!</span></h2>
          <div>
            <a href={"https://www.facebook.com/garudaacademy"} className={"contact_list_anchor"} target="_blank" rel="noopener noreferrer"><img src={facebook} className={"contact_list_icon"} alt={'Facebook oldal megtekintése!'} /></a>
            <a href={"https://m.me/garudaacademy"} className={"contact_list_anchor"} target="_blank" rel="noopener noreferrer"><img src={messenger} className={"contact_list_icon"} alt={'Kapcsolatfelvétel Messengerrel!'} /></a>
            <a href={"https://msng.link/o/?36309324604=vi"} className={"contact_list_anchor"} target="_blank" rel="noopener noreferrer"><img src={viber} className={"contact_list_icon"} alt={'Kapcsolatfelvétel Viberen!'} /></a>
            <a href={"https://wa.me/36309324604"} className={"contact_list_anchor"} target="_blank" rel="noopener noreferrer"><img src={whatsapp} className={"contact_list_icon"} alt={'Kapcsolatfelvétel WhatsAppon!'} /></a>
            <a href={"https://line.me/R/ti/p/~manovagyok"} className={"contact_list_anchor"} target="_blank" rel="noopener noreferrer"><img src={line} className={"contact_list_icon"} alt={'Kapcsolatfelvétel Lineon!'} /></a>
          </div>
        </div>
        <div className={"col-1"}></div>
      </div>
    );
  }
}
