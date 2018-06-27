import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  token: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.connection();
   // this.listClients();
  }

  connection() {
    this.restProvider.connectionApi()
        .then(data => {
          this.token = data;
          console.log(this.token);
        });
  }
  listClients() {
    this.restProvider.listClients()
        .then(data => {
          console.log(data);
        });
  }

}
