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
    
    this.logros.push(certi);
    this.logros.push(certi2);
    this.logros.push(certi3);


  }

}
