import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ebook';
  desenvolvimento: string [] = ['Angular 2', 'Javascript', 'TypeScript', 'HTML', 'CSS'];
  valor: string;

  valorPassado(valorPassado) {
    this.valor = valorPassado;
  }
}
