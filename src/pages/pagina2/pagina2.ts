import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ir_pagina3(){
    this.navCtrl.push("mi-pagina3");
  }

  ionViewDidLoad(){
  	console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
  	console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
  	console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
  	console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
  	console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
  	console.log("ionViewWillUnload");
  }

  ionViewCanEnter(){
  	console.log("ionViewCanEnter");
  	/*let numero = Math.round( Math.random() * 10);

  	if(numero >= 3){
  		return true;
  	} else{
  		return false;
  	}*/
    let promesa = new Promise((resolve, reject)=>{
      let confirm = this.alertCtrl.create({
        title: '¿Seguro?',
        message: '¿Esta seguro que desea entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => resolve(false)
          },
          {
            text: 'Aceptar',
            handler: () => resolve(true)
          }
        ]
      });
      confirm.present();
    });

    return promesa;

  }

  ionViewCanLeave(){
  	console.log("ionViewCanLeave");

  	console.log("Espre 2 segundos para salir");

    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    });

    loading.present();

  	let promesa = new Promise((resolve, reject) => {
  		setTimeout(()=>{
        loading.dismiss();
  			resolve(true);
  		}, 2000);
  	});

  	return promesa;
  }


}
