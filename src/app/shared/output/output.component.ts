import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public list: Array<{ nome: string; idade: number }> = [

    { nome: 'Edvaldo', idade: 29 },
    { nome: 'Nay', idade: 31 },
    { nome: 'José', idade: 58 },

  ];

@Output() public enviarDados = new EventEmitter();

  getDados(event : number){

    this.enviarDados.emit(this.list[event])
    
   // console.log(this.list[event])
  }
}
