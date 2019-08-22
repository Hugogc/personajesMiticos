import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private admobFree: AdMobFree,
    
  )

      




   {

    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-9757691776622668~2727088191',

      isTesting: true,
      autoShow: true
     };

     this.admobFree.banner.config(bannerConfig);
     this.admobFree.banner.prepare()
     .then(() => {
      
    })
    .catch(e => console.log(e));










    this.initializeApp();
  }
  
   
  



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
