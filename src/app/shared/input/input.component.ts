import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  //Entrada de Dados
  @Input() public contador: number = 0;
}
