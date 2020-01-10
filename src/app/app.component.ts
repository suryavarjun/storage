import { Component } from '@angular/core';
//import { AuthenticationService } from './services/authentication.service';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  authService: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService : AuthService,
    private router : Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.authService.authState.subscribe(state =>{
      //   if(state) {
      //     this.router.navigate(['members', 'dashboard']);
      //   } else {
      //     this.router.navigate(['home'])
      //   }
      // });
    });
  }
}
