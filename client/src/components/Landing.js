import React from 'react';

const Landing = () => {
    return (
        <div>
            <header>
                <div className='overlay'> </div>
                <video playsinline='playsinline' autoplay='autoplay' muted='muted' loop='loop'>
                    <source src={require('../img/tesla.webm')} type='video/mp4'></source>
                </video>
                <div className='container h-100'>
                    <div className='d-flex text-center h-100 animatedParent animateOnce'>
                        <div className='masthead-content my-auto w-100 text-white animated fadeInUp'>
                            <h1 className='display-3'>Avasta IQOS</h1>
                            <p className='alert-costum-text'>IQOS on tubakatööstuse suurim läbimurre viimastel aastatel. See pakub kõike seda, mida sa tubakast ootad, ja vähem seda, mida sa ei vaja. Tänaseks on rohkem kui 5 miljonit täiskasvanud suitsetajat läinud üle IQOSe kasutamisele.</p>
                            <p className='vplay-btn'><a data-toggle='modal' onclick='playVid()' data-target='#vModal'><i className='far fa-play-circle'> </i></a></p>
                        </div>
                    </div>
                    <div className='masthead-scroll'> <a href='#what-is' className='masthead-scroll-btn js-scroll-trigger'> <i className='fas fa-angle-down'> </i> </a> </div>
                </div>
            </header>
            <section className='what-is containers animatedParent animateOnce' id='what-is'>
                <div className='row'>
                    <div className='col-lg-6 empty-box'>
                    </div>
                    <div className='col-lg-6'>
                        <div className='text-about animated fadeInUp'>
                            <h2 className='text-left'>Mis on IQOS?</h2>
                            <div className='line text-left'> </div>
                            <p className='text-left'>IQOS on meie innovatiivne alternatiiv traditsioonilisele suitsetamisele. Selle kõige keskmes on kuumutamine. Valides tubaka kuumutamise, selle asemel et seda põlema süüdata, näed erinevust traditsioonilisest suitsetamisest. Tubakat kuumutades eraldab IQOS tubaka tõelist maitset.</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='smart-way row no-gutters'>
                <div className='col-lg-6 order-12 order-md-1'>
                    <div className='containers text-block'>
                        <h2 className='text-left'>Nutikas viis tubaka kasutamiseks.</h2>
                        <div className='line'> </div>
                        <p className='text-left'>Kui otsid suitsetamisele asendust, on IQOS parim lahendus.</p>
                        <p className='text-left'>IQOS eraldab 90% vähem kahjulikke kemikaale* võrreldes sigarettidega.  IQOSe kasutamisele täielik üleminek toob kaasa tõenäoliselt vähem tervisekahjusid kui suitsetamisega jätkamine.</p>
                        <p className='text-left'>Oluline: see ei tähenda, et IQOS oleks riskivaba.</p>
                        <p className='source'>Allikas: * Keskmine vähenemine kahjulike ja potentsiaalselt kahjulike keemiliste ühendites mõõdetud IQOSe aerosoolis võrreldes nendega, mida on mõõdetud rohkem kui 1,600 sigaretimargis rohkem kui 40 riigis aastatel 2008-2017. Aerosool ja suitsu mõõtmine toimus Health Canada intensiivse masinsuitsetamise režiimi alusel. Vähenemise arvutused ei arvesta nikotiini.</p>
                    </div>
                </div>
                <div className='col-lg-6 order-1 order-md-12 animatedParent animateOnce'> <img alt='' className='pav animated fadeInUp' src={require('../img/car.jpg')}></img> </div>
            </div>
            <div className='note d-sm-none d-lg-block hide-mobile'>
                <div className='note-box'> <img alt='' src={require('../img/car.jpg')}></img></div>
            </div>
            <div className='notes d-none d-sm-block d-lg-none'>
                <div className='note-box'> <img alt='' src={require('../img/car.jpg')}></img> </div>
            </div>
            <div className='animatedParent animateOnce container-fluid' id='features'>
                <section className='row animated nottice fadeInLeftShort'>
                    <div className='col-lg-2 noburn p-0'> </div>
                    <div className='col-lg-2 text-center no noburn'> <img alt='' src={require('../img/car.jpg')}></img> </div>
                    <div className='col-lg-5 noburn'>
                        <h2>Pole süütamist, pole põlemist.</h2>
                        <p className='text-left'>Erinevalt sigarettidest ei saa IQOS Sind ega ka teisi Sinu ümber kogemata põletada, ei lemmikloomi, riideid, mööblit, mitte midagi. Et tubakat ei põletata ja mingit tuld ei süüdata, pole ka hõõguvat sigaretiotsa, mis võiks kahjustada ümbritsevat, ega pudenevat tuhka, mis on ebameeldiv.</p>
                    </div>
                    <div className='col-lg-3'> </div>
                </section>
            </div>
            <div className='animatedParent animateOnce container-fluid'>
                <section className='row nottice animated fadeInUp'>
                    <div className='col-lg-2'> </div>
                    <div className='col-lg-2 no-smoke text-center'> <img alt='' src={require('../img/car.jpg')}></img> </div>
                    <div className='col-lg-5 no-smoke'>
                        <h2>Pole suitsu.</h2>
                        <p>Jäta suits minevikku. Kaugele minevikku. IQOSega tubakat ei põletata, seega ei teki mingit suitsu; tubaka kuumutamisel tekib aerosool, mis hajub kiiremini.</p>
                    </div>
                    <div className='col-lg-3 no-smoke p-0'> </div>
                </section>
            </div>
            <div className='animatedParent animateOnce container-fluid'>
                <section className='row nottice animated fadeInLeft'>
                    <div className='col-lg-2 noburn p-0'> </div>
                    <div className='col-lg-2 text-center no noburn'> <img alt='' src={require('../img/car.jpg')}></img> </div>
                    <div className='col-lg-5 noburn'>
                        <h2>Vähem lõhna.</h2>
                        <p className='text-left'>Pakub kõike, mida tubakalt ootad, ja vähem seda, mida Sa ei vaja.</p>
                    </div>
                    <div className='col-lg-3'> </div>
                </section>
            </div>
            <div className='animatedParent animateOnce' id='how-it-works'>
                <section className='row how-works'>
                    <div className='col-lg-5'> </div>
                    <div className='col-lg-7 zone animated fadeInUp'>
                        <h2>Kuidas IQOS töötab.</h2>
                        <p>IQOS põhineb maailmatasemel tehnoloogial ja teedrajaval teadusel. Me teame, et selleks on vaja ääretult suurt edasiminekut, et alustada tubaka tuleviku muutmist. IQOSega oleme just selle saavutanud. IQOS HeatControl(TM) tehnoloogia  võimaldab tubakat kuumutada kuni 350˚C ilma seda süütamata. Tulemus? Tubaka maitse - ilma põlemise, suitsu, tuhata, muretult.</p>
                    </div>
                </section>
            </div>
            <div className='animatedParent animateOnce'>
                <section className='desigining row no-gutters' id='more'>
                    <div className='col-lg-7 zona'>
                        <h1 className='text-left'>Loome suitsuvaba tuleviku.</h1>
                        <p>Põlemisest kuumutamiseni. Sigaretisuitsust tubakaauruni. Pärast tuhandeid aastaid tubaka põletamist oleme võtnud oma missiooniks võimaldada täiskasvanud suitsetajatele, kes muidu jätkaksid suitsetamist, paremaid lahendusi.</p>
                        <div className='row future-links text-center'> <a href='https://www.pmi.com' className='future-button col-md'>ROHKEM PMIST <span className='btn-icon'> <span className='icon-over-front-wrap'> <span className='icon-over-front'>
        </span> </span> </span> </a> <a href='https://www.pmiscience.com/' className='future-button col-md'>SUITSUVABA TULEVIK <span className='btn-icon'> <span className='icon-over-front-wrap'> <span className='icon-over-front'>
        </span> </span> </span> </a> </div>
                    </div>
                </section>
            </div>
            <footer>
                <section className='row containers'>
                    <div className='col-md-7'>
                        <div className='brand-black'>
                            Tesla rent2buy
                        </div>
                        <div className='text-left credits gray'>
                            <p>© 2018 Phillip Morris International.<br />
                                All rights reserved.</p>
                        </div>
                        <div className='cont text-left gray'>
                            <p>Philip Morris Eesti OÜ, Tartu mnt 43/F.R. Kreutzwaldi 24,<br />
                                10147 Tallinn, +372 60 50 400.</p>
                        </div>
                    </div>
                    <div className='col-md-3'> <strong>Kasulikud lingid</strong>
                        <br></br>
                            <a href='https://www.pmi.com' target='_blank'>Vaata PMI</a><br></br>
                            <a href='https://www.pmiscience.com' target='_blank'>Vaata PMI Science</a>
                    </div>
                    <div className='col-md-2'> <strong>Kasutamistingimused</strong>
                        <br></br>
                        <a href='' target='_blank'>Privaatsuspoliitika</a><br></br>
                        <a href='' target='_blank'>Küpsiste kasutamine</a>
                    </div>
                </section>
            </footer>
            <section className='disc text-center'>
                <p className='containers'>IQOS ei ole riskivaba ega mõeldud alaealistele. See on mõeldud ainult täiskasvanud suitsetajale, kes on otsustanud jätkata tubaka tarbimist. IQOS ei ole mõeldud neile, kes on suitsetamisest loobunud või pole kunagi suitsetanud; see pole ka suitsetamisest loobumise alternatiiv. Parim valik tarbijate tervise jaoks on lõpetada tubaka tarvitamine täielikult. IQOSe kasutamine sisaldab nikotiini, mis on sõltuvust tekitav. Rasedad, rinnalast toitvad, diabeedikud, südameprobleemide või kõrge vererõhuga inimesed ei peaks tarbima ühtegi tubaka- või nikotiinitoodet. Et kogeda IQOSe täielikku mõju peaks täiskasvanud suitsetajad sellele tootele üle minema täielikult. </p>
            </section>

            <div className='modal fade' id='vModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>
                <div className='modal-dialog vdialog' role='document'>
                    <div className='modal-content vmodal-bg'>
                        <button type='button' className='vplay-close' data-dismiss='modal' onclick='pauseVid()'><i className='fas fa-times'></i></button>
                        <div className='embed-responsive embed-responsive-16by9'>
                            <video id='gossVideo' className='embed-responsive-item' controls='controls'>
                                <source src={require('../img/red.webm')} type='video/mp4'></source>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;