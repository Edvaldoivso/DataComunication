import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public addValue: number = 0;

  Add() {
    this.addValue++;
  }

  Rem() {
    if (this.addValue > 0) this.addValue--;
  }

  public getDados: { nome: string; idade: number } | undefined;

  public setDados(event : { nome: string, idade: number }) {
    this.getDados = event;
  }
}
