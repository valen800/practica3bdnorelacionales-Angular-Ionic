import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { CampeonDetallePage } from '../pages/campeon-detalle/campeon-detalle';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Plataforma lista. Plugins disponibles.
    });
  }
}