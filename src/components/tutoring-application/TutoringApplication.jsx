import React from 'react';
import { connect } from "react-redux";
import Menu from '../common/menu/Menu';
import SideBar from '../common/sidebar/SideBar';
import Facebook from '../common/facebook/Facebook';
import Footer from '../common/footer/Footer';
import sexyBoy from "./mr.m.webp";
import ge from "./ge.webp";
import ifrc from "./ifrc.webp";
import capgemini from "./capgemini.webp";
import "./TutoringApplication.css"


function TutoringApplication() {
    return <>
        <Menu />
        <div className="row fill-container">
        <div className="col-md-2 p-0 bg-deep-dark">
            <SideBar />
        </div>
        <div className="col-md-10 text-light">
            <img src={sexyBoy} className='mt-3 mr-3 float-left description-avatar' />
            <h2 className='mt-3'>Kiknek segítettem már?</h2>
            Informatika érettségizőknek, Egyetemistáknak (Magyar és külföldi egyetemekről is), Munkakeresőknek, 
            Alternatív képzésben tanulóknak (Codecool, Green Fox, A&K Akadémia stb.), OKJ-n tanulóknak

            <h2 className='mt-3'>Technológiák amikben segíteni tudok</h2>
            HTML5, Bootstrap 5, CSS, JavaScript, React, React native, Java, (Java) Spring Boot, 
            SQL (Microsoft, Postgresql, MySql), PHP, BaaS, FaaS, Python, Django, C#, Next.js

            <h2 className='mt-3'>Üdvözöllek!</h2>

            <p>
                Mr. M. vagyok! Kiskorom óta szerelmes vagyok az informatikába. Tisztán emlékszem mikor 8 éves 
                koromban (édesapám legnagyobb örömére) darabjaira szedtem a családi számítógépet, hogy 
                megnézzem mi minden van benne.
            </p>

            <p>
                14 éves korom óta aktívan foglalkozom programozással. A gimnázium elvégzése után egy állami 
                képzésben próbáltam szoftverfejlesztést tanulni, és bár kiemelkedő eredményekkel végeztem de 
                ez után nem tudtam elhelyezkedni.
            </p>

            <p>
                8 év kemény munkája és egy privát iskola (Codecool) megjelenése kellett ahhoz, hogy magamra 
                szedjem azt a tudás mennyiséget amivel már a szakma legnagyobb cégei is felfigyeltek rám. 
                Dolgoztam a GE Healthcare-nél, a Vöröskereszt nemzetközi szervezeténél (IFRC) és a Capgemininél!
            </p>

            <p>
                Az elvem és motivációm, hogy az én diákjaimnak ne kelljen ezt a küzdelmet végigcsinálni 
                és célirányosan azt tanítsam nekik amire az életben szükségük lesz.
            </p>

            <div className='employer-logo-container'>
                <div className='m-3'>
                    <img src={ge} alt='GE Healthcare - General Electric' />
                </div>

                <div className='m-3'>
                    <img src={capgemini} alt='GE Healthcare - General Electric' />
                </div>

                <div className='m-3'>
                    <img src={ifrc} alt='GE Healthcare - General Electric' />
                </div>
            </div>
        </div>
        </div>
        
        <Facebook />
        <Footer />
    </>
}

const selector = (store) => {
    return {};
}

const dispatcher = (dispatch) => ({});
  
export default connect(selector, dispatcher)(TutoringApplication);