import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { CampeonDetallePage } from '../pages/campeon-detalle/campeon-detalle';
import { CampeonesService } from './campeones.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXdJmlC52hXyFkqPN6u0x9tOmty5wBK1A",
    authDomain: "app-lol-acd6c.firebaseapp.com",
    databaseURL: "https://app-lol-acd6c.firebaseio.com",
    projectId: "app-lol-acd6c",
    storageBucket: "app-lol-acd6c.appspot.com",
    messagingSenderId: "165155678546"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CampeonDetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CampeonDetallePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CampeonesService,
    AngularFirestore
  ]
})
export class AppModule {}