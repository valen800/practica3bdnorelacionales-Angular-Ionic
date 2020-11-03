import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'campeon-detalle',
  templateUrl: 'campeon-detalle.html',
  styleUrls: ['./campeon-detalle.scss' ]
})
export class CampeonDetallePage {

  private campeon: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.campeon = navParams.get('campeon');
  }

}