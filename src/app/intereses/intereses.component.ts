import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {
  intereses : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let inte = {
      interese: "videojuegos", 
  };
    let inte1 = {
      interese: "animales reptiles", 
  };
    let inte2 = {
      interese: "animes", 
  };
    let inte3 = {
      interese: "musica", 
  };
    let inte4 = {
      interese: "psicología", 
};
this.intereses.push(inte);
this.intereses.push(inte1);
this.intereses.push(inte2);
this.intereses.push(inte3);
this.intereses.push(inte4);
  }

}
