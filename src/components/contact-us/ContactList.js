import React from 'react';
import line from '../common/menu/line-big.png';
import whatsapp from '../common/menu/whatsapp-big.png';
import viber from '../common/menu/viber-big.png';
import messenger from '../common/menu/messenger-big.png';
import './contact.css';

export default class ContactList extends React.Component {
  render() {
    return (
      <div className="row mt-3">
        <div className={"col-1"}></div>
        <div className={'col-10'}>
          <div className={"card"}>
            <div className={"card-header h5"}>
              Elérhetőségeink
            </div>
            <div className={"card-body"}>
              <p>
                <span className={'description_title'}>Telefon:</span><br />
                +36 30 932 4604
              </p>
              <p>
                <span className={'description_title'}>Email:</span><br />
                info@garudaacademy.eu
              </p>
              <p>
                <span className={'description_title'}>Facebook:</span><br />
                <a href={"https://www.facebook.com/garudaacademy"} target="_blank" rel="noopener noreferrer">facebook.com/garudaacademy</a>
              </p>
              <p>
                <span className={'description_title'}>Csevegő appok:</span><br />
                <a href="https://m.me/garudaacademy" className="contact_list_anchor" target="_blank" rel="noopener noreferrer"><img src={messenger} alt='Kapcsolatfelvétel Messengerrel!' className={"contact_list_icon"} /></a>
                <a href="https://msng.link/o/?36309324604=vi" className="contact_list_anchor" target="_blank" rel="noopener noreferrer"><img src={viber} alt='Kapcsolatfelvétel Viberen!' className={"contact_list_icon"} /></a>
                <a href="https://wa.me/36309324604" className="contact_list_anchor" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt='Kapcsolatfelvétel WhatsAppon!' className={"contact_list_icon"} /></a>
                <a href="https://line.me/R/ti/p/~manovagyok" className="contact_list_anchor" target="_blank" rel="noopener noreferrer"><img src={line} alt='Kapcsolatfelvétel Line-on!' className={"contact_list_icon"} /></a>
              </p>
            </div>
          </div>
        </div>
        <div className={'col-1'}></div>
      </div>
    );
  }
}
