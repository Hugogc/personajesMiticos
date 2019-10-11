import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar,
              private admodfree: AdMobFree, private alertCtrl: AlertController, private router: Router) {
    this.initializeApp();
    
    this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/home', true) && this.router.url === '/home') {
        const alert = await this.alertCtrl.create({
          header: '¿Salir de la App?',
          buttons: [
            {
              text: 'No',
              role: 'cancel'
            }, {
              text: 'Si',
              handler: () => {
                navigator['app'].exitApp();
              }
            }
          ]
        });

        await alert.present();
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
