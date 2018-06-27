import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userData = {"_username": "","_password": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  connection() {

    if(this.userData._username != "" && this.userData._password != ""){
      this.restProvider.connectionApi()
          .then(data => {
            this.token = data;
            console.log(this.token);
          });
    }else {
      let alert = this.alertCtrl.create({
        title: 'Champs vides',
        subTitle: "MERCI de renseigner un nom d'utilisateur et un mot de passe",
        buttons: ['Fermer']
      });
      alert.present();
    }

  }





}
