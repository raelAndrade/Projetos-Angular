import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
})
export class TwoWayBindingComponent implements OnInit {

  nome: string = "Thiago";

  constructor() { }

  ngOnInit() {
  }

  changes(valor) {
    this.nome = valor + '-';
  }

}
