import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: false,

  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss',
})
export class TemplateDrivenComponent {
  loginFormModel = {
    email: '',
    password: '',
    rememberMe: false,
  };

  onSubmit(ev: NgForm) {
    if (ev.invalid) {
      alert('El formulario es invalido!');
    } else {
      // logica de enviar datos al servidor... blabblabla
      console.log(ev.value);
      alert('Datos enviados!');
      ev.reset();
    }
  }
}
