import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CampeonesService } from '../../app/campeones.service';
import { CampeonDetallePage } from '../campeon-detalle/campeon-detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {

  private campeones: any[];
  private mostrarFooter: boolean = false;

  constructor(public navCtrl: NavController, public CampeonesSvc: CampeonesService,
  private alertCtrl: AlertController) {
    //this.campeones = CampeonesSvc.obtenerListasCampeones();
    this.CampeonesSvc.obtenerListaCampeones_Firebase( (campeones ) => {
      this.campeones = campeones;
    });
  }

  irADetalleCampeon(campeon: any) {
    this.navCtrl.push(CampeonDetallePage, { 'campeon': campeon })
  }

  nuevoCampeon() {
    const prompt = this.alertCtrl.create({
      title: 'Nuevo Campeon',
      message: "Introduce los datos del nuevo campeon",
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        },
        {
          name: 'descripcion_corta',
          placeholder: 'Descripcion_corta'
        },
        {
          name: 'descripcion_larga',
          placeholder: 'Descripcion_larga'
        },
        {
          name: 'url_imagen',
          placeholder: 'URL imagen'
        },
        {
          name: 'id',
          placeholder: 'ID'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log(data.nombre);
            console.log(data.descripcion_corta);
            console.log(data.descripcion_larga);
            console.log(data.url_imagen);
            /*this.CampeonesSvc.anyadirNuevoCampeon(data.nombre, data.Descripcion_corta, data.Descripcion_larga, data.url_imagen);
            this.campeones = this.CampeonesSvc.obtenerListasCampeones();*/
            this.CampeonesSvc.anyadirNuevoCampeon_Firebase(data.nombre, data.descripcion_corta, data.descripcion_larga, data.url_imagen, data.id );
          }
        }
      ]
    });
    prompt.present();
  }

  toggleMostrarFooter() {
    if (this.mostrarFooter == false) {
      this.mostrarFooter = true;
    } else {
      this.mostrarFooter = false;
    }
  }

  eliminarTodosLosCampeones() {
    const alert = this.alertCtrl.create({
      message: 'Se borrarán todos los campeones. ¿Estás seguro?',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            console.log('Acept clicked');
            for(let campeon of this.campeones) {
              console.log(campeon);
              this.CampeonesSvc.eliminarCampeon_Firebase( campeon );
            }
          }
        }
      ]
    });
    alert.present();
  }

  eliminarCampeon( campeon:any ) {
    /*this.CampeonesSvc.eliminarCampeon( campeon );
    this.campeones = this.CampeonesSvc.obtenerListasCampeones();*/
      this.CampeonesSvc.eliminarCampeon_Firebase( campeon );
  }

  aynadirTodosLosCampeones() {
    const alert = this.alertCtrl.create({
      message: 'Se añadirán todos los campeones. ¿Estás seguro?',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            console.log('Acept clicked');
            this.CampeonesSvc.anyadirTodosCampeones_Firebase();
          }
        }
      ]
    });
    alert.present();
  }
}