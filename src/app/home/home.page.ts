import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { browser } from 'protractor';
import { AdMobFree, AdMobFreeBannerConfig, } from '@ionic-native/admob-free/ngx';






@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bannerConfig:AdMobFreeBannerConfig;
 
  personajes: any = [
    {
      imagen: 'assets/imagenes/borrachoarbolada.jpg',
      nombre: 'El borracho de la arbolada',
      redirectTo: '/borrachoarbolada',
      url: 'https://www.youtube.com/watch?v=EcPcPuAjBPo'
    },
    {
      imagen: 'assets/imagenes/chukizieza.jpg',
      nombre: 'El chuki de Zieza',
      redirectTo: '/chukizieza',
      url: 'https://www.youtube.com/watch?v=SmSA-oEEL2A'
    },
    {
      imagen: 'assets/imagenes/contigonobicho.jpg',
      nombre: 'Contigo no, bicho',
      redirectTo: '/contigonobicho',
      url: 'https://www.youtube.com/watch?v=OmgYYTZzxbw'
    },
    {
      imagen: 'assets/imagenes/eltorrao.jpg',
      nombre: 'Manolo el torrao',
      redirectTo: '/eltorrao',
      url: 'https://www.youtube.com/watch?v=6KKY7Vsy8EI'
    },
    {
      imagen: 'assets/imagenes/elvanidoso.jpg',
      nombre: 'Ramón el vanidoso',
      redirectTo: '/elvanidoso',
      url: 'https://www.youtube.com/watch?v=wSsAB8IRsZw'
    },
    {
      imagen: 'assets/imagenes/guardiandelasestrellas.png',
      nombre: 'El guardian de las estrellas',
      redirectTo: '/guardiandelasestrellas',
      url: 'https://www.youtube.com/watch?v=QYffoaQsmVk'
    },
    {
      imagen: 'assets/imagenes/losdeleclipse.jpg',
      nombre: 'Los del eclipse',
      redirectTo: '/losdeleclipse',
      url: 'https://www.youtube.com/watch?v=sQjqZiHSX6Y'
    },
    {
      imagen: 'assets/imagenes/miguelelmaquina.jpg',
      nombre: 'Miguel el máquina',
      redirectTo: '/miguelelmaquina',
      url: 'https://www.youtube.com/watch?v=BEgEoMz6WVk'
    },
    {
      imagen: 'assets/imagenes/ogrodrogas.jpg',
      nombre: 'El ogro de las drogas',
      redirectTo: '/ogrodrogas',
      url: 'https://www.youtube.com/watch?v=zbAB1l2p3Lk'
    },
    {
      imagen: 'assets/imagenes/tomalacasitos.jpg',
      nombre: 'Pim pam toma Lacasitos',
      redirectTo: '/tomalacasitos',
      url: 'https://www.youtube.com/watch?v=J1LgWejP1CI'
    },
    {
      imagen: 'assets/imagenes/liadoparda.jpg',
      nombre: 'La he liado parda',
      redirectTo: '/liadoparda',
      url: 'https://www.youtube.com/watch?v=QNTZbJSQVis'
    },
    {
      imagen: 'assets/imagenes/matiaselhumilde.jpg',
      nombre: 'Matías el humilde',
      redirectTo: '/matiaselhumilde',
      url: 'https://www.youtube.com/watch?v=IFqEZRzFK9Y'
    },
    {
      imagen: 'assets/imagenes/elfua.jpg',
      nombre: 'El fuaaa',
      redirectTo: '/elfua',
      url: 'https://www.youtube.com/watch?v=SWOz-kIwDuU'
    },
    {
      imagen: 'assets/imagenes/baptisterio.jpg',
      nombre: 'Las hermanas del Baptisterio',
      redirectTo: '/baptisterio',
      url: 'https://www.youtube.com/watch?v=tkX3u-v_fB4'
    },
  ];


  constructor(private browser: InAppBrowser, public admobfree: AdMobFree){



    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-9757691776622668/6568493805',
      autoShow: true,
      isTesting: false,
      bannerAtTop: false,
      overlap: false,
      }

    this.admobfree.banner.config(bannerConfig);
    this.admobfree.banner.prepare()
      .then(() => {
        this.admobfree.banner.show();
    })

    }


abrirurl(url: string, target: string){
  const link = url;
  this.browser.create(link, );
}



ngOninit() {

}


}
