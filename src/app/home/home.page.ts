import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { browser } from 'protractor';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { Platform } from '@ionic/angular';





@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bannerConfig:AdMobFreeBannerConfig;

 
  personajes: any = [
    {
      imagen:'assets/imagenes/borrachoarbolada.jpg',
      nombre:'El borracho de la arbolada',
      redirectTo:'/borrachoarbolada',
      url:'https://www.youtube-nocookie.com/embed/EcPcPuAjBPo'
    },
    {
      imagen:'assets/imagenes/chukizieza.jpg',
      nombre:'El chuki de Zieza',
      redirectTo:'/chukizieza',
      url:'https://www.youtube-nocookie.com/embed/SmSA-oEEL2A'
    },
    {
      imagen:'assets/imagenes/contigonobicho.jpg',
      nombre:'Contigo no, bicho',
      redirectTo:'/contigonobicho',
      url:'https://www.youtube-nocookie.com/embed/Ngfw_qg6UUU'
    },
    {
      imagen:'assets/imagenes/eltorrao.jpg',
      nombre:'Manolo el torrao',
      redirectTo:'/eltorrao',
      url:'https://www.youtube-nocookie.com/embed/6KKY7Vsy8EI'
    },
    {
      imagen:'assets/imagenes/elvanidoso.jpg',
      nombre:'Ramón el vanidoso',
      redirectTo:'/elvanidoso',
      url:'https://www.youtube-nocookie.com/embed/wSsAB8IRsZw'
    },
    {
      imagen:'assets/imagenes/guardiandelasestrellas.png',
      nombre:'El guardian de las estrellas',
      redirectTo:'/guardiandelasestrellas',
      url:'https://www.youtube-nocookie.com/embed/QYffoaQsmVk'
    },
    {
      imagen:'assets/imagenes/losdeleclipse.jpg',
      nombre:'Los del eclipse',
      redirectTo:'/losdeleclipse',
      url:'https://www.youtube-nocookie.com/embed/sQjqZiHSX6Y'
    },
    {
      imagen:'assets/imagenes/miguelelmaquina.jpg',
      nombre:'Miguel el máquina',
      redirectTo:'/miguelelmaquina',
      url:'https://www.youtube-nocookie.com/embed/BEgEoMz6WVk'
    },
    {
      imagen:'assets/imagenes/ogrodrogas.jpg',
      nombre:'El ogro de las drogas',
      redirectTo:'/ogrodrogas',
      url:'https://www.youtube-nocookie.com/embed/zbAB1l2p3Lk'
    },
    {
      imagen:'assets/imagenes/tomalacasitos.jpg',
      nombre:'Pim pam toma Lacasitos',
      redirectTo:'/tomalacasitos',
      url:'https://www.youtube.com/watch?v=J1LgWejP1CI&t'
    },
    {
      imagen:'assets/imagenes/liadoparda.jpg',
      nombre:'La he liado parda',
      redirectTo:'/liadoparda',
      url:'https://www.youtube-nocookie.com/embed/QNTZbJSQVis'
    },
    {
      imagen:'assets/imagenes/matiaselhumilde.jpg',
      nombre:'Matías el humilde',
      redirectTo:'/matiaselhumilde',
      url:'https://www.youtube-nocookie.com/embed/IFqEZRzFK9Y'
    },


  ];




  
  constructor(private browser: InAppBrowser, public admobfree: AdMobFree, public platform: Platform){
    

    
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-9757691776622668/6568493805',
      isTesting: true,
      autoShow: true,
      bannerAtTop: false,
      overlap: true,

      

     }
     this.platform.ready().then(()=>{

      this.admobfree.banner.config(this.bannerConfig);
      this.admobfree.banner.prepare()
      .then(() => {
        this.admobfree.banner.show();
      })
      .catch(e => console.log(e));

     })
     


    }


abrirurl(url: string, target:string){
  const link = url
  this.browser.create(link, )



}



ngOninit(){

}


}
