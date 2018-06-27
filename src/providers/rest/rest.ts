import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://www.espacece.fr';
  isLoggedIn = false;
  AuthToken: string;

  constructor(public http: HttpClient) {
      this.isLoggedIn = false;
      this.AuthToken = null;
  }

  connectionApi() {

    return new Promise(resolve => {

        let _model: any = {};
        _model._username = "nicolas";
        _model._password = "nicolas";


        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      this.http.post(this.apiUrl+'/api/login_check',  _model, { headers: headers }).subscribe(data => {
            console.log(data.token);
              this.AuthToken = data.token;
              this.isLoggedIn = true;
            },
          err => {
            console.log(err);
          });
    });
  }

  listClients() {
//console.log(this.isLoggedIn)
       /* if(this.isLoggedIn){
            return new Promise(resolve => {

                let _model: any = {};
                let headers2 = new Headers();
                headers2.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
                headers2.append('Accept', 'application/json');
                headers2.append('Authorization', 'Token '+this.AuthToken);
              this.http.post(this.apiUrl+'/api/yozucrm/adminclient/list.json',  _model, { headers: headers2 }).subscribe(data => {
                    console.log(data);
                    },
                  err => {
                    console.log(err);
                  });
            });
        }*/
  }

  deConnectionApi() {
        this.AuthToken = null;
        this.isLoggedIn = false;
  }




}
