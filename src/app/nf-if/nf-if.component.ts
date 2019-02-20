import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nf-if',
  templateUrl: './nf-if.component.html',
})
export class NfIfComponent implements OnInit {

  mostraNome: boolean;
  cursos: string [] = [];

  constructor() { }

  ngOnInit() {
  }

  mostrar(): void {
    this.mostraNome = !this.mostraNome;
  }

  getValor(): boolean {
    return this.mostraNome;
  }

  addCurso() {
    this.cursos.push('Angular 2');
  }

}
