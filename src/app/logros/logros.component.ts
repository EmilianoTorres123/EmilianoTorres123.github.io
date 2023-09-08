import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  logros : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let certi = {
      certificado: "Certificado Tecnico en mecatronica",
      logros:[
        {descripcion: "Sali com primedio 9.0 en especiliadades"},
      ]
    };

    let certi2 = {
      certificado: "Diploma por el desarrollo de un elevador con arduino",
      logros:[
        {descripcion: "Aprendi a programar en arduino"},
      ]
    };
    let certi3 = {
      certificado: "Diploma por el desarrollo de una banda transportadora",
      logros:[
        {descripcion: "Aprendi a programar en PLC"},
      ]
      
    };
    let certi4 = {
      certificado: "python",
      link: "https://github.com/EmilianoTorres123/kaggle/blob/master/python/chamis%20Torres%20Nu%C3%B1es%20-%20Python.png",
      logros:[
        {descripcion: "kaggle"},
      
      ]
      
    };
    let certi5 = {
      certificado: "pandas",
      link: "https://github.com/EmilianoTorres123/kaggle/blob/master/pandas/chamis%20Torres%20Nu%C3%B1es%20-%20Pandas.png",
      logros:[
        {descripcion: "kaggle"},
      
      ]
      
    };
    this.logros.push(certi);
    this.logros.push(certi2);
    this.logros.push(certi3);
    this.logros.push(certi4);
    this.logros.push(certi5);


  }

}
