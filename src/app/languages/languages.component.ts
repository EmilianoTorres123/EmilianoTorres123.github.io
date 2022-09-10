import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  languages : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let lan = {
      lenguage: "español", 
  };
  let lan1 = {
    lenguage: "ingles", 
};
this.languages.push(lan);
this.languages.push(lan1);

  }

}
