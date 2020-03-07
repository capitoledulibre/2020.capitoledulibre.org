import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>

    <section className="bg-primary" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">C'est pour vous!</h2>
            <hr className="light" />
            <p className="text-faded">Que vous ne connaissiez rien au logiciel libre, que vous soyez un⋅e geek averti⋅e, le Capitole du Libre vous propose un programme adapté.</p>
            <a href="#event" className="page-scroll btn btn-default btn-xl sr-button" data-sr-id="21" >Découvrez les détails de l'événement</a>
          </div>
        </div>
      </div>
    </section>

    <section id="event">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">L'événement en détails</h2>
            <hr className="primary" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-paper-plane text-primary sr-icons" data-sr-id="2" ></i>
              <h3>Keynotes</h3>
              <p className="text-muted">Plusieurs keynotes et tables rondes avec des intervenant⋅e⋅s prestigieux⋅ses sont organisées tout le week-end</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-bullhorn text-primary sr-icons" data-sr-id="3" ></i>
              <h3>Conférences</h3>
              <p className="text-muted">Autour de thématiques techniques: C++, développement Web, embarqué, DevOps; de logiciels libres de création graphique et multimédia; de jeux libres; d'enjeux du logiciel libre dans la société et des communautés.<br /><a href="https://2018.capitoledulibre.org/programme/#schedule">Retrouvez les conférences de l'édition 2018</a></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-university text-primary sr-icons" data-sr-id="4" ></i>
              <h3>Ateliers</h3>
              <p className="text-muted">Venez découvrir le logiciel libre lors d'ateliers avec des expert⋅e⋅s pour vous assister.<br /><a href="https://2018.capitoledulibre.org/programme/#schedule">Retrouvez les ateliers de l'édition 2018</a></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-life-ring text-primary sr-icons" data-sr-id="5" ></i>
              <h3>Adoptez le logiciel libre</h3>
              <p className="text-muted">Venez-vous faire aider pour installer Linux, pour corriger les problèmes avec votre Linux ou pour toutes les questions autour du logiciel libre. Un atelier permanent est là pour ça tout le week-end.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-heart text-primary sr-icons" data-sr-id="6" ></i>
              <h3>Village associatif</h3>
              <p className="text-muted">Retrouvez les associations qui œuvrent pour le logiciel libre: Framasoft, April, Mozilla, Debian, Toulibre,.. <br /><a href="/village-associatif/#village-associatif">Retrouvez la liste des associations présente au village associatif</a>.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-child text-primary sr-icons" data-sr-id="7" ></i>
              <h3>Ateliers pour les enfants</h3>
              <p className="text-muted">Les logiciels libres ludiques pour les plus jeunes à partir de 8 ans de 14h à 18h le samedi et de 14h à 16h le dimanche.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-cutlery text-primary sr-icons" data-sr-id="8" ></i>
              <h3>Cocktail</h3>
              <p className="text-muted">Un moment de convivialité le samedi soir avec intervenant⋅e⋅s, organisateur⋅trice⋅s et public</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-money text-primary sr-icons" data-sr-id="9" ></i>
              <h3>Entrée</h3>
              <p className="text-muted">L'entrée à l'événement est libre et gratuite!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-gamepad text-primary sr-icons" data-sr-id="10" ></i>
              <h3>LAN Party</h3>
              <p className="text-muted">Venez jouer avec vos ami(e)s à des jeux <a href="jeux.pdf">libres</a></p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-truck text-primary sr-icons" data-sr-id="11" ></i>
              <h3>Food Truck</h3>
              <p className="text-muted">Pour vous restaurer, des food truck sont à votre disposition les midis sur le site.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-shopping-cart text-primary sr-icons" data-sr-id="12" ></i>
              <h3>Boutique de Goodies!</h3>
              <p className="text-muted">Repartez avec un t-shirt, un hoodie aux couleurs de votre projet libre préféré. Les ventes permettent de financer le Capitole du Libre et de financer les projets libres correspondants.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="no-padding" id="portfolio">
      <div className="container-fluid">
        <div className="row no-gutter popup-gallery">
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/1.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/1.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Keynotes
                          </div>
                  <div className="project-name">
                    Capitole du Libre 2016
                          </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/2.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/2.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Ateliers
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2016
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/3.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/3.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Atelier installation Linux
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2017
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/4.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/4.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Conférences Framasoft
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2017
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/5.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/5.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Mozilla au village associatif
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2017
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/6.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/6.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Keynote du samedi soir avec FDN, la Quadrature et Framasoft
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2016
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/7.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/7.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Amphithéâtre plein pour la keynote du samedi soir!
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2016
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/8.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/8.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Conférences
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2016
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/9.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/9.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Keynote du samedi soir autour du logiciel libre
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2017
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/10.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/10.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Stands du village associatif
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2017
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/11.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/11.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    Conférences (Docker!)
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2016
                            </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a href="portfolio/fullsize/12.jpg" className="portfolio-box">
              <Image src="portfolio/thumbnails/12.jpg" className="img-responsive" alt="" />
              <div className="portfolio-box-caption">
                <div className="portfolio-box-caption-content">
                  <div className="project-category text-faded">
                    L'équipe d'organisation et les bénévoles
                            </div>
                  <div className="project-name">
                    Capitole du Libre 2017
                            </div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>

    <section className="bg-dark">
      <div className="container text-center" id="sponsor">
        <div className="call-to-action">
          <h2>Soutenez le Capitole du Libre en devenant sponsor!</h2>
          <a href="/Capitole-du-Libre-2019-Plaquette-Sponsors.pdf" className="btn btn-default btn-xl sr-button" data-sr-id="22" >Téléchargez notre dossier de sponsoring</a>
        </div>
      </div>
    </section>

    <section id="partners">
      <div className="container">

        <h2>Nos partenaires</h2>
        <div className="row text-center">
          <div className="col-xs-12 col-sm-12">
            <h3>Sponsors Platine</h3>
            <a href="http://www.c-s.fr/" target="_blank">
              <Image src="logo_cs_fond_transparent.png" alt="CS" className="logo-200px" title="CS" />
            </a>
            &nbsp;
                <a href="https://www.sigfox.com" target="_blank">
              <Image src="Sigfox_BB_Logo_RGB.png" alt="Sigfox" className="logo-200px" title="Sigfox" />
            </a>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-xs-12 col-sm-12">
            <h3>Sponsors Or</h3>
            <a href="https://easymile.com/" target="_blank">
              <Image src="logo_easymile.png" alt="Easymile" className="logo-150px" title="Smile" />
            </a>
            &nbsp;
                <a href="https://www.jolibrain.com" target="_blank">
              <Image src="logo_jolibrain.png" alt="Jolibrain" className="logo-150px" title="Smile" />
            </a>
            &nbsp;
                <a href="https://www.logilab.fr/" target="_blank">
              <Image src="logo-logilab.svg" alt="Logilab" className="logo-150px" title="Logilab" />
            </a>
            &nbsp;
                <a href="http://makina-corpus.com/" target="_blank">
              <Image src="makina-corpus.png" alt="Makina Corpus" className="logo-100px" title="Makina Corpus" />
            </a>
            &nbsp;
                <a href="https://puri.sm" target="_blank">
              <Image src="purism.svg" alt="Purism" className="logo-100px" title="Purism" />
            </a>
            &nbsp;
                <a href="https://smile.eu/fr" target="_blank">
              <Image src="SMILE_icone-full-orange -baseline.png" alt="Smile" className="logo-150px" title="Smile" />
            </a>
            &nbsp;
                <a href="https://www.viveris.fr" target="_blank">
              <Image src="logo-viveris.svg" alt="Viveris" className="logo-150px" title="Viveris" />
            </a>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-xs-12 col-sm-12">
            <h3>Sponsors Argent</h3>
            <a href="https://www.collabora.com" target="_blank">
              <Image src="CollaboraLogo2017.png" alt="Collabora" className="logo-150px" title="Collabora" />
            </a>
            &nbsp;
                 <a href="http://www.objectif-libre.com" target="_blank">
              <Image src="objectif-libre-au-service-de-votre-cloud-long-fblanc.svg" alt="Objectif Libre" className="logo-100px" title="Objectif Libre" />
            </a>
            &nbsp;
            </div>
        </div>

        <div className="row text-center">
          <div className="col-xs-12 col-sm-12">
            <h3>Sponsors Bronze</h3>
            <p>
              <a href="https://bleemeo.com" target="_blank">
                <Image src="bleemeo_logo.svg" alt="Bleemeo" className="logo-100px" title="Bleemeo" />
              </a>
              &nbsp;
                <a href="https://www.bluemind.net/" target="_blank">
                <Image src="bluemind.jpg" alt="Bluemind" className="logo-100px" title="Bluemind" />
              </a>
              &nbsp;
                <a href="http://bootlin.com" target="_blank">
                <Image src="bootlin-logo-240.png" alt="Bootlin" className="logo-100px" title="Bootlin" />
              </a>
              &nbsp;
                <a href="http://evolix.com/" target="_blank">
                <Image src="logo_evolix_3.0.png" alt="Evolix" className="logo-100px" title="Evolix" />
              </a>
              &nbsp;
                <a href="https://oslandia.com" target="_blank">
                <Image src="logo-oslandia.jpeg" alt="Oslandia" className="logo-100px" title="Oslandia" />
              </a>
              &nbsp;
                </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-lg-4">
            <h3>Organisation</h3>
            <a href="http://toulibre.org/" target="_blank">
              <Image src="logo-toulibre.svg" alt="Toulibre" className="logo-150px" title="Toulibre" /></a>
          </div>
          <div className="col-lg-4">
            <h3>Partenaires</h3>
            <a href="http://enseeiht.fr/" target="_blank">
              <Image src="inpn7logo.svg" alt="ENSEEIHT" className="logo-150px" title="ENSEEIHT" />
            </a>
            &nbsp;
                <a href="http://www.frenchtechtoulouse.com" target="_blank">
              <Image src="logo-COULEURS-FrenchTechToulouse.png" alt="French Tech Toulouse" className="logo-150px" title="French Tech Toulouse" />
            </a>
            &nbsp;
                <a href="http://www.toulouse.fr" target="_blank">
              <Image src="Logo_mairie_de_Toulouse.svg" alt="Toulouse" className="logo-150px" title="Mairie de Toulouse" />
            </a>
            &nbsp;
                <a href="https://www.laregion.fr" target="_blank">
              <Image src="1200px-Logo_Occitanie_2017.svg.png" alt="La Region Occitanie" className="logo-100px" title="La Region Occitanie" />
            </a>
            &nbsp;
                <a href="http://www.solibre.fr" target="_blank">
              <Image src="logo-solibre.jpg" alt="Solibre" className="logo-150px" title="Solibre" />
            </a>
          </div>
          <div className="col-lg-4">
            <h3>Communication</h3>
            <div className="row">
              <a href="http://www.editions-diamond.fr/" target="_blank">
                <Image src="logo-edition-diamonds.png" alt="Éditions Diamonds" className="logo-100px" title="Éditions Diamonds" />
              </a>
              &nbsp;
                <a href="https://www.bibliotheque.toulouse.fr/" target="_blank">
                <Image src="logo-bibliotheque-toulouse.jpg" alt="Bibliothèque de Toulouse" className="logo-100px" title="Bibliothèque de Toulouse" />
              </a>
              &nbsp;
                <a href="https://tisseo-collectivites.fr/" target="_blank">
                <Image src="logo-tisseo-collectivites.png" alt="Tisséo Collectivités" className="logo-100px" title="Tisséo Collectivités" />
              </a>
              &nbsp;
                <a href="https://radio-fmr.net/" target="_blank">
                <Image src="logo-radio-fmr.jpg" alt="Radio FMR" className="logo-100px" title="Radio FMR" />
              </a>
              &nbsp;
                <a href="http://www.developpez.com" target="_blank">
                <Image src="logo-developpez.com.png" alt="Développez.com" className="logo-100px" title="Développez.com" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section id="come">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Comment vous rendre à Toulouse&nbsp;?</h2>
            <hr className="primary" />
            <p>Toulouse se trouve à 1h d'avion de Paris, et à 4h de Paris en TGV.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-car text-primary sr-icons" data-sr-id="13" ></i>
              <h3>En voiture</h3>
              <p className="text-muted">
                Si vous souhaitez venir en voiture, nous vous invitons à partager votre trajet
                avec d'autres personnes.
          Vous pouvez <a href="http://www.openstreetmap.org/directions#map=9/47.9531/-1.8196">calculer votre itinéraire avec Open Street Map</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-train text-primary sr-icons" data-sr-id="14" ></i>
              <h3>En train</h3>
              <p className="text-muted">Le TGV vous dépose à la gare de Toulouse en plein centre ville, marchez environ 10min le long du Canal du Midi.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-bus text-primary sr-icons" data-sr-id="15" ></i>
              <h3>En bus</h3>
              <p className="text-muted">Ouibus, par exemple, propose plusieurs liaisons quotidiennes Paris-Toulouse en 9 heures.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box">
              <i className="fa fa-4x fa-plane text-primary sr-icons" data-sr-id="16" ></i>
              <h3>En avion</h3>
              <p className="text-muted">Il y a un aéroport à Toulouse avec au moins un vol par jour au départ de :
          </p><ul className="list-unstyled">
                <li>Lille</li>
                <li>Londres</li>
                <li>Lyon</li>
                <li>Marseille</li>
                <li>Nantes</li>
                <li>Nice</li>
                <li>Paris (Orly &amp; Charles-de-Gaulle)</li>
                <li>Rennes</li>
                <li>Strasbourg</li>
              </ul>
              <p></p>
              <p className="text-muted">Plus d'informations disponibles sur le <a href="http://www.toulouse.aeroport.fr/">site de l'aéroport</a>.
                L'aéroport est proche de la ville, prenez le tramway jusqu'au Palais de justice où la navette Air France qui vous ramènera à la gare.
        </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Depuis Toulouse&nbsp;?</h2>
              <hr className="primary" />
              <p>Le Capitole du Libre sera hébergé à l'<a href="http://www.enseeiht.fr">INP-ENSEEIHT</a>, 2 rue Charles Camichel, 31000 Toulouse.</p>
              <p><b>Coordonnées GPS :</b>43.60215 - 1.45524</p>
              <iframe id="carte" src="https://umap.openstreetmap.fr/fr/map/cdl_2017_campus_173723?scaleControl=true&amp;miniMap=false&amp;scrollWheelZoom=true&amp;zoomControl=true&amp;allowEdit=false&amp;moreControl=false&amp;datalayersControl=false&amp;onLoadPanel=undefined&amp;captionBar=false&amp;datalayers=198023#17/43.60215/1.45524"></iframe>
              <p><a href="http://umap.openstreetmap.fr/en/map/cdl_2017_campus_173723#17/43.60215/1.45524">Voir en plein écran</a></p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-male text-primary sr-icons" data-sr-id="17" ></i>
                <h3>À pied</h3>
                <p className="text-muted">L'école est idéalement située en centre ville. Si vous êtes en ville, vous pouvez rejoindre l'école située sur les bords du canal à pied.
          Vous êtes situé⋅e⋅s à moins de 10min à pied de la fameuse place du Capitole.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-subway text-primary sr-icons" data-sr-id="18" ></i>
                <h3>En Métro</h3>
                <p className="text-muted">L'école est située à 5min à pied de l'arrêt François Verdier sur la ligne de métro B.
      Les métros circulent jusqu'à 0h00 du dimanche au jeudi et jusqu'à 3h les vendredis et samedis.
      Pour plus d'informations sur les horaires des bus et métros vous pouvez
          consulter <a href="http://www.tisseo.fr/se-deplacer/plans">le site du Réseau Métro/Bus/Tramway de Toulouse</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-bus text-primary sr-icons" data-sr-id="19" ></i>
                <h3>En Bus</h3>
                <p className="text-muted">L'école est située à proximité de nombreuses lignes de bus: 14, 22, 23, 27, 38
      Les bus et tramway circulent jusqu'à 0h30 du dimanche au jeudi et jusqu'à 1h00 les vendredis et samedi.
      Pour plus d'informations sur les horaires des bus et métros vous pouvez
          consulter <a href="http://www.tisseo.fr/se-deplacer/plans">le site du Réseau Métro/Bus/Tramway de Toulouse</a>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-bicycle text-primary sr-icons" data-sr-id="20" ></i>
                <h3>En vélo libre service</h3>
                <p className="text-muted">Toulouse dispose d'un système de vélos en libre service complémentaire des transports en commun : <a href="http://www.velo.toulouse.fr/">Vélô Toulouse</a>.
        </p>
              </div>
            </div>
          </div>
        </div>
      </div></section>

    <section id="accomodation">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Pour se loger</h2>
            <hr className="primary" />
            <p> L'INP-ENSEEIHT est idéalement située en centre ville de Toulouse. Une fois arrivé⋅e
    sur place, vous pourrez trouver un logement ou des points de restauration
    accessibles à pied. Un réseau de transports en communs est accessible si vous
    souhaitez rejoindre des ami⋅e⋅s ou vous extraire du centre ville.
        </p><ul className="list-unstyled">
              <li><a href="https://www.airbnb.fr/s/Rue-Camichel--Toulouse?checkin=16%2F11%2F2019&amp;checkout=18%2F11%2F2019">Rechercher un AirBNB</a></li>
              <li><a href="http://www.kyriad-toulouse-centre.fr/en">Hotel Kyriad</a>, situé de l'autre côté du canal par rapport au campus de l'ENSEEIHT</li>
              <li><a href="http://www.athome-ah.com/">At Home Appart Hotel</a>, situé à quelques centaines de mètres le long du Canal du Midi</li>
              <li><a href="http://www.mercure.com/fr/hotel-1260-hotel-mercure-toulouse-centre-wilson-capitole/index.shtml">Mercure Toulouse Centre Wilson Capitole</a>, proche de l'ENSEEIHT, en centre ville et proche des transports en commun</li>
              <li><a href="http://www.mercure.com/fr/hotel-0370-hotel-mercure-toulouse-centre-saint-georges/index.shtml">Mercure Toulouse Centre Saint Georges</a>, prôche de l'ENSEEIHT et situé en centre ville</li>
            </ul>
            <p></p>
            <p><b>At Home Appart Hotel propose un tarif préférentiel</b> pour votre séjour à Toulouse pour le Capitole du Libre. Indiquez leur simplement que vous venez pour l'événement Capitole du Libre qui se tient à l'ENSEEIHT.
      </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">Une idée&nbsp;? Une question&nbsp;? Contactez-nous&nbsp;!</h2>
            <hr className="primary" />
            <p>Si vous avez des questions, n'hésitez pas à nous contacter&nbsp;!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 text-center">
            <i className="fa fa-mastodon fa-3x"></i>
            <p><a href="https://framapiaf.org/@capitoledulibre">@capitoledulibre@framapiaf.org</a></p>
          </div>
          <div className="col-lg-3 text-center">
            <i className="fa fa-twitter fa-3x"></i>
            <p><a href="https://twitter.com/capitoledulibre">@capitoledulibre</a></p>
          </div>
          <div className="col-lg-3 text-center">
            <i className="fa fa-facebook fa-3x"></i>
            <p><a href="https://www.facebook.com/CapitoleDuLibre/">Capitole Du Libre</a></p>
          </div>
          <div className="col-lg-3 text-center">
            <i className="fa fa-envelope-o fa-3x sr-contact" data-sr-id="24" ></i>
            <p><a href="mailto:contact@capitoledulibre.org">contact@capitoledulibre.org</a></p>
          </div>
          <div className="col-lg-3 text-center">
            <i className="fa fa-github fa-3x"></i>
            <p><a href="https://github.com/capitoledulibre">capitoledulibre</a></p>
          </div>
        </div>
      </div>
    </section>

    <section id="contribuer">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            <h2 className="section-heading">Une erreur&nbsp;? Une faute d'orthographe&nbsp;?</h2>
            <hr className="primary" />
            <p>Vous pouver signaler les erreurs ou proposer vos corrections&nbsp;!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-lg-offset-3 text-center">
            <i className="fa fa-github fa-3x"></i>
            <p><a href="https://github.com/capitoledulibre/2019.capitoledulibre.org/issues">Issues<br /><em>Signaler une erreur</em></a></p>
          </div>
          <div className="col-lg-3 text-center">
            <i className="fa fa-github fa-3x"></i>
            <p><a href="https://github.com/capitoledulibre/2019.capitoledulibre.org/pulls">Pull request<br /><em>Proposer une modification</em></a></p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
