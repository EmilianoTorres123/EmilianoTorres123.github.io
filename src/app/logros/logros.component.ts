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
    let certi6 = {
      certificado: "into to maching learning",
      link: "https://github.com/EmilianoTorres123/into-marching/blob/master/into-machine-learning/chamis%20Torres%20Nu%C3%B1es%20-%20Intro%20to%20Machine%20Learning.png",
      logros:[
        {descripcion: "kaggle"},
      
      ]
      
    };
    let certi7 = {
      certificado: "intermedio maching learning",
      link: "https://github.com/EmilianoTorres123/into-marching/blob/master/intermedio%20maching%20learning/chamis%20Torres%20Nu%C3%B1es%20-%20Intermediate%20Machine%20Learning.png",
      logros:[
        {descripcion: "kaggle"},
      
      ]
      
    };
    this.logros.push(certi4);
    this.logros.push(certi5);
    this.logros.push(certi6);
    this.logros.push(certi7);


  }

}
